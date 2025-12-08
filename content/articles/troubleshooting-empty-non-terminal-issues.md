---
title: Troubleshooting Empty Non-Terminal Issues
excerpt: Diagnose and resolve intermittent or unexpected empty responses caused by Empty Non-Terminals.
meta: Troubleshoot Empty Non-Terminal (ENT) issues in your DNS zone. Diagnose and resolve unexpected empty responses and wildcard matching problems.
categories:
- DNS
---

# Troubleshooting Empty Non-Terminal Issues

### Table of Contents {#toc}

* TOC
{:toc}

---

If you're experiencing intermittent or unexpected empty responses in your DNS zone, [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/) might be the cause. This guide helps you diagnose and resolve ENT-related issues.

## Understanding the symptoms

ENT-related issues typically manifest as:

- **Unexpected empty responses** for domain names that should return records
- **Inconsistent wildcard matching** where some subdomains match but others don't
- **Empty responses after adding records** deeper in the hierarchy
- **Different behavior after certificate provisioning** (Let's Encrypt/ACME challenges)

## Step 1: Identify Empty Non-Terminals

Use a script or manual inspection to identify ENTs in your zone. Start by querying the problematic name:

```
$ dig @ns1.dnsimple.com problematic-name.example.com A
```

Look for these indicators:

- **`status: NOERROR`** — The name exists in the zone
- **`ANSWER: 0`** — No records in the answer section
- **SOA record in authority section** — Confirms this is a NODATA response

If you see these indicators, the name is likely an ENT.

### Check for child records

Query names beneath the problematic name to see if they have records:

```
$ dig @ns1.dnsimple.com child.problematic-name.example.com A +short
```

If child records exist, the parent is an ENT.

### View your full zone

To see the complete hierarchy, export your zone:

```
$ dig @ns1.dnsimple.com example.com AXFR
```

This shows all records and helps identify where ENTs are created in the hierarchy.

## Step 2: Investigate common causes

When troubleshooting ENT-related issues, check for these common causes:

### Wildcard records with deeper children

Review your zone for wildcard patterns like `*.subdomain.example.com` that have child records beneath them. These create ENTs that block wildcard matching.

**Example:**

```
*.prod.example.com.        IN  A   192.168.0.11
app.us.prod.example.com.    IN  A   192.168.0.41
```

The `app.us.prod.example.com` record creates an ENT at `us.prod.example.com`, blocking the wildcard.

**Check for this:**

```
$ dig @ns1.dnsimple.com example.com AXFR | grep -E "^\*\.|^[^;].*\.prod\.example\.com"
```

### ACME challenge records

Check for leftover or active Let's Encrypt challenge records. These often create ENTs along their path.

**Check for this:**

```
$ dig @ns1.dnsimple.com _acme-challenge.subdomain.example.com TXT +short
```

ACME challenge records follow the pattern `_acme-challenge.<subdomain>.example.com` and create ENTs at each level in the path.

### DKIM records

DKIM records like `selector._domainkey.example.com` create ENTs at `_domainkey.example.com`.

**Check for this:**

```
$ dig @ns1.dnsimple.com _domainkey.example.com TXT +short
```

If you get an empty response but DKIM records exist beneath it, `_domainkey.example.com` is an ENT.

### Service records (SRV)

SRV records following the pattern `_service._protocol.example.com` create ENTs at intermediate names like `_tcp.example.com`.

**Check for this:**

```
$ dig @ns1.dnsimple.com _tcp.example.com SRV +short
```

If you get an empty response but SRV records exist beneath it, the intermediate name is an ENT.

## Step 3: Resolve ENT issues

Once you've identified an ENT causing problems, you have several options:

### Option A: Add an explicit record

Add the record type and value you expect at the ENT name:

```
us.prod.example.com.   IN  A   192.168.0.11
```

This makes the name no longer an ENT—it now has its own record.

### Option B: Remove the record creating the ENT

If the record creating the ENT is no longer needed (such as an old ACME challenge), remove it:

1. Identify the record creating the ENT
2. Verify it's safe to remove
3. Delete the record from your zone

This eliminates the ENT and restores wildcard matching.

<warning>

Only remove records if you're certain they're no longer needed. ACME challenge records are typically removed automatically after certificate validation, but manual cleanup may be required in some cases.

</warning>

### Option C: Restructure your zone

If ENTs are causing widespread issues, consider restructuring your zone to avoid deep nesting beneath wildcards. This might involve:

- Flattening your subdomain structure
- Moving records to avoid creating ENTs
- Using explicit records instead of relying on wildcards

## Step 4: Verify the fix

After making changes, verify that the issue is resolved:

```
$ dig @ns1.dnsimple.com problematic-name.example.com A +short
192.168.0.11
```

The name should now return the expected response instead of empty.

### Test wildcard matching

If you fixed a wildcard-related ENT issue, test that wildcard matching works as expected:

```
$ dig @ns1.dnsimple.com new-subdomain.prod.example.com A +short
192.168.0.11
```

New subdomains should match the wildcard.

## Common troubleshooting scenarios

### Scenario 1: Empty response after certificate provisioning

**Problem:** After provisioning a Let's Encrypt certificate, some subdomains return empty responses.

**Cause:** ACME challenge records create ENTs along their path.

**Solution:** Add explicit records at the ENT names, or wait for ACME challenge records to be automatically removed after validation.

### Scenario 2: Wildcard stops working after adding a record

**Problem:** After adding `app.us.prod.example.com`, queries to `us.prod.example.com` return empty instead of matching the wildcard.

**Cause:** The new record created an ENT at `us.prod.example.com`.

**Solution:** Add an explicit record at `us.prod.example.com` with the wildcard value, or restructure to avoid creating the ENT.

### Scenario 3: Inconsistent behavior between providers

**Problem:** Your zone behaves differently when using Secondary DNS or after migrating providers.

**Cause:** Different DNS providers may implement ENTs differently, especially regarding wildcard support.

**Solution:** Ensure both providers comply with RFC 4592. DNSimple follows RFC 4592 and industry-standard behaviors consistent with implementations like PowerDNS.

## Related articles

- [What Are Empty Non-Terminals (ENT)?](/articles/empty-non-terminals/) — Understand what ENTs are and how they work

- [How to Fix Empty Responses from Empty Non-Terminals](/articles/how-to-fix-empty-responses-from-empty-non-terminals/) — Step-by-step guide to resolving ENT issues

- [How to Use dig](/articles/how-dig/) — Learn how to use the dig command-line tool for DNS queries

- [Troubleshooting Record Resolution Issues](/articles/record-resolution-issues/) — General guide to troubleshooting DNS record resolution

## Have more questions?

If you have additional questions or need any assistance with troubleshooting Empty Non-Terminal issues, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
