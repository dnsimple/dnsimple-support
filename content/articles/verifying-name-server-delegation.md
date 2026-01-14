---
title: Verifying Name Server Delegation
excerpt: Learn how to check that your domain is properly delegated to the correct name servers.
meta: Discover how to verify name server delegation for your domain using various tools and methods to ensure proper DNS resolution.
categories:
- Name Servers
---

# Verifying Name Server Delegation

### Table of Contents {#toc}

* TOC
{:toc}

---

Verifying name server delegation is crucial to ensure your domain is properly configured and will resolve correctly. This guide will show you how to check that your domain is delegated to the correct name servers using various tools and methods.

## Why verify delegation?

Before your domain can resolve correctly, it must be properly delegated to authoritative name servers. If delegation is incorrect or incomplete, DNS queries for your domain will fail, preventing websites from loading and email from working.

Verifying delegation helps you:
- Confirm that name server changes have propagated
- Troubleshoot DNS resolution issues
- Ensure your domain is pointing to the correct DNS provider
- Validate that glue records are configured correctly (for vanity name servers)

## Methods for verifying delegation

### Using dig

The `dig` command-line tool is one of the most reliable ways to check name server delegation.

**Check NS records from parent zone:**
```bash
dig NS example.com
```

This queries the parent zone (TLD) to see which name servers are delegated for your domain. Look for the `ANSWER SECTION` which should show NS records pointing to your authoritative name servers.

**Check authoritative name servers directly:**
```bash
dig @ns1.dnsimple.com example.com
```

Replace `ns1.dnsimple.com` with your actual name server. This verifies that the name server is authoritative and can answer queries for your domain.

**Trace the delegation chain:**
```bash
dig +trace example.com
```

This shows the complete delegation chain from root servers down to your domain's authoritative name servers.

### Using WHOIS

WHOIS queries show the name servers registered at the domain registrar level:

```bash
whois example.com
```

Look for the "Name Server" or "Name Servers" field in the output. This shows which name servers are configured at the registry level.

> [!NOTE]
> WHOIS information may take some time to update after making changes, and the format varies by registrar and TLD.

### Using online tools

Several online tools can help you verify name server delegation:

- **[zone.vision](https://zone.vision/#/)**: Comprehensive DNS lookup tool that shows delegation information
- **[DNS Checker](https://dnschecker.org/)**: Check DNS propagation and name server information globally
- **[MXToolbox](https://mxtoolbox.com/)**: DNS lookup and diagnostic tools

### Using nslookup

The `nslookup` command can also verify delegation:

```bash
nslookup -type=NS example.com
```

This queries for NS records and shows the name servers delegated for your domain.

## What to look for

When verifying delegation, check for:

1. **Correct name server hostnames**: Ensure the name servers listed match what you configured (e.g., `ns1.dnsimple.com`, `ns2.dnsimple-edge.net`, etc.).

2. **Multiple name servers**: Most domains should have at least two name servers for redundancy. DNSimple provides four name servers by default.

3. **Consistency**: The name servers should be consistent across different queries (dig, WHOIS, online tools).

4. **Glue records** (if using vanity name servers): If your name servers are subdomains of your domain, verify that glue records (A/AAAA records) are present in the parent zone.

## Common issues

### Name servers not updated

If you've changed name servers but they're not showing up in queries:

- Wait for propagation (can take up to 24-48 hours)
- Verify changes were saved at your domain registrar
- Check that you're querying the correct domain

### Incorrect name servers

If the wrong name servers are showing:

- Verify the name servers are correct at your domain registrar
- Check for typos in name server hostnames
- Ensure you're checking the right domain

### Missing glue records

If using vanity name servers and queries fail:

- Verify glue records are configured at your domain registrar
- Check that glue records point to correct IP addresses
- If registered with DNSimple, glue records are handled automatically

## Verifying after changes

After changing your domain's name servers:

1. **Immediate check**: Verify changes were saved at your registrar
2. **Short-term check** (15 minutes - 1 hour): Use dig to check if changes are visible
3. **Full verification** (24-48 hours): Confirm global propagation using multiple tools

## Next steps

Once you've verified delegation is correct:

- [Check that your DNS records are configured](/articles/record-editor/)
- [Verify domain resolution](/articles/troubleshooting-name-servers/)
- If issues persist, [contact support](https://dnsimple.com/feedback)

## Have more questions?

If you have additional questions about verifying name server delegation or need assistance with your domain configuration, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

