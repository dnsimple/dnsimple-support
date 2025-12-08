---
title: How to Fix Empty Responses from Empty Non-Terminals
excerpt: Step-by-step guide to resolving empty responses caused by Empty Non-Terminals in your DNS zone.
meta: Step-by-step guide to fix empty DNS responses caused by Empty Non-Terminals. Learn how to identify ENTs and add explicit records to resolve issues.
categories:
- DNS
---

# How to Fix Empty Responses from Empty Non-Terminals

### Table of Contents {#toc}

* TOC
{:toc}

---

If you're experiencing unexpected empty responses for certain domain names, they might be caused by [Empty Non-Terminals (ENTs)](/articles/empty-non-terminals/). This guide walks you through the steps to identify and fix these issues.

## Understanding the problem

An Empty Non-Terminal (ENT) is an intermediate domain name that exists only because it's a path to a deeper name, but has no records of its own. When you query an ENT, you get an empty response (NODATA) even if a wildcard record exists that would otherwise match.

For example, if you have:

```
*.prod.example.com.        IN  A   192.168.0.11
app.us.prod.example.com.   IN  A   192.168.0.41
```

The record `app.us.prod.example.com` creates an ENT at `us.prod.example.com`. Queries to `us.prod.example.com` will return empty, even though the wildcard `*.prod.example.com` would normally match.

## Step 1: Identify the ENT

First, check if there are any records beneath the name that's returning empty responses. Use [`dig`](/articles/how-dig/) to query your zone:

```
$ dig @ns1.dnsimple.com us.prod.example.com A +short
(empty)
```

If you get an empty response but the name exists (status: NOERROR), it's likely an ENT. To confirm, check if there are child records:

```
$ dig @ns1.dnsimple.com app.us.prod.example.com A +short
192.168.0.41
```

If child records exist, the parent name is an ENT.

You can also view your full zone to see the hierarchy:

```
$ dig @ns1.dnsimple.com example.com AXFR
```

Look for records that are deeper in the hierarchy than the name returning empty responses.

## Step 2: Create an explicit record

To fix the empty response, add an explicit record at the ENT name. You have two options:

### Option A: Add a specific value

If you want the name to return a specific value, add that record:

```
us.prod.example.com.   IN  A   192.168.0.50
```

### Option B: Match the wildcard value

If you want the name to behave like the wildcard, add the same record type and value as the wildcard:

```
us.prod.example.com.   IN  A   192.168.0.11
```

This ensures consistent behavior with other names that match the wildcard.

## Step 3: Verify the change

After adding the explicit record, verify that the name now returns the expected response:

```
$ dig @ns1.dnsimple.com us.prod.example.com A +short
192.168.0.11
```

The name is no longer an ENT—it now has its own record and will return that value when queried.

## Common scenarios

### Fixing ENT created by ACME challenge

If a Let's Encrypt certificate provision created an ENT (e.g., `_acme-challenge.app.us.prod.example.com`), you may need to add explicit records at the intermediate names:

```
us.prod.example.com.   IN  A   192.168.0.11
app.us.prod.example.com.   IN  A   192.168.0.11
```

### Fixing ENT created by DKIM records

DKIM records like `selector._domainkey.example.com` create an ENT at `_domainkey.example.com`. If you need that name to resolve, add an explicit record:

```
_domainkey.example.com.   IN  A   192.168.0.11
```

### Fixing ENT created by SRV records

SRV records following the pattern `_service._tcp.example.com` create ENTs at intermediate names. Add explicit records if needed:

```
_tcp.example.com.   IN  A   192.168.0.11
```

## Alternative: Remove the record creating the ENT

If the record creating the ENT is no longer needed (such as an old ACME challenge record), you can remove it instead of adding explicit records. This will eliminate the ENT and restore wildcard matching.

<warning>

Only remove records if you're certain they're no longer needed. ACME challenge records are typically removed automatically after certificate validation, but manual cleanup may be required in some cases.

</warning>

## Related articles

- [What Are Empty Non-Terminals (ENT)?](/articles/empty-non-terminals/) — Understand what ENTs are and how they work

- [Troubleshooting Empty Non-Terminal Issues](/articles/troubleshooting-empty-non-terminal-issues/) — Diagnose and resolve intermittent ENT-related problems

- [How to Use dig](/articles/how-dig/) — Learn how to use the dig command-line tool for DNS queries

## Have more questions?

If you have additional questions or need any assistance with fixing Empty Non-Terminal issues, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
