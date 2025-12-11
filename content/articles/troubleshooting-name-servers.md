---
title: Troubleshooting Name Server Issues
excerpt: A comprehensive guide to diagnosing and resolving common name server problems.
meta: Learn how to troubleshoot name server issues, verify delegation, and resolve DNS resolution problems with your domain.
categories:
- Name Servers
---

# Troubleshooting Name Server Issues

### Table of Contents {#toc}

* TOC
{:toc}

---

Name server issues can prevent your domain from resolving correctly, causing websites to be unreachable and email to fail. This guide will help you diagnose and resolve common name server problems.

## Common name server issues

### Domain not resolving

If your domain isn't resolving, the most common cause is incorrect name server delegation. Verify that your domain is properly delegated to the correct name servers.

**Symptoms:**
- Website doesn't load
- DNS queries return errors
- "Server not found" or similar browser errors

**Solutions:**
1. [Verify your name server delegation](/articles/verifying-name-server-delegation/) to ensure your domain is pointing to the correct name servers.
2. Check that the name servers you've configured are actually authoritative for your domain.
3. Ensure that DNS records exist in your DNS hosting provider's zone file.

### Name server changes not propagating

After changing your domain's name servers, it can take up to 24-48 hours for the changes to propagate globally. However, if changes aren't appearing after this period, there may be an issue.

**Symptoms:**
- Name server changes made but not visible in WHOIS or DNS queries
- Domain still resolving with old name servers

**Solutions:**
1. Verify the changes were saved correctly at your domain registrar.
2. Check WHOIS records to confirm the name servers are updated at the registry level.
3. Clear your local DNS cache or use a different DNS resolver to test.
4. Wait for full propagation (can take up to 48 hours).

### Incorrect name servers configured

If you've entered the wrong name server hostnames, your domain won't resolve correctly.

**Symptoms:**
- Domain resolves to wrong IP addresses
- DNS queries return unexpected results
- Website loads but shows wrong content

**Solutions:**
1. Double-check the name server hostnames for typos or incorrect entries.
2. Verify you're using the correct name servers for your DNS provider.
3. If using DNSimple, confirm you're using [DNSimple's name servers](/articles/dnsimple-nameservers/).

### Glue record issues

If you're using vanity name servers (name servers that are subdomains of your domain), missing or incorrect glue records can prevent resolution.

**Symptoms:**
- Domain with vanity name servers doesn't resolve
- DNS queries fail when querying vanity name servers
- Circular dependency errors

**Solutions:**
1. Verify that glue records (A and AAAA records) are configured at your domain registrar.
2. Ensure glue records point to the correct IP addresses for your name servers.
3. If your domain is registered with DNSimple, glue records are handled automatically when you [configure vanity name servers](/articles/vanity-nameservers/).

## Verification steps

### Check name server delegation

Use these methods to verify your domain's name server delegation:

**Using dig:**
```bash
dig NS example.com
```

This will show the NS records for your domain from the parent zone (TLD).

**Using WHOIS:**
Query WHOIS records to see which name servers are registered at the domain registrar level.

**Using online tools:**
- [zone.vision](https://zone.vision/#/) - Comprehensive DNS lookup tool
- [DNS Checker](https://dnschecker.org/) - Check DNS propagation globally

### Verify authoritative name servers

Confirm that the name servers listed in your domain's delegation are actually authoritative:

```bash
dig @ns1.dnsimple.com example.com
```

Replace `ns1.dnsimple.com` with your actual name server and `example.com` with your domain.

### Check DNS records

Verify that DNS records exist in your zone file:

```bash
dig example.com
dig www.example.com
dig MX example.com
```

## Common error messages

### "Server not found" or "NXDOMAIN"

This typically means the domain doesn't exist in DNS or isn't properly delegated.

**Solution:** Verify name server delegation and ensure DNS records exist in your zone file.

### "SERVFAIL"

This indicates a problem with the authoritative name servers or DNS resolution.

**Solution:** Check that your name servers are responding correctly and that DNS records are properly configured.

### "REFUSED"

The name server is refusing to answer queries, possibly due to configuration issues.

**Solution:** Verify name server configuration and ensure the name servers are properly set up to serve your domain.

## Propagation delays

After changing name servers, allow time for propagation:

- **Initial propagation**: 15 minutes to 1 hour
- **Full global propagation**: Up to 24-48 hours
- **TTL impact**: Lower TTL values can speed up propagation, but changes still need to propagate at the registry level

## Getting help

If you've tried these troubleshooting steps and your domain still isn't resolving correctly:

1. [Verify name server delegation](/articles/verifying-name-server-delegation/)
2. Check your DNS records in your DNSimple account
3. [Contact support](https://dnsimple.com/feedback) with details about the issue

## Have more questions?

If you have additional questions about troubleshooting name server issues, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.

