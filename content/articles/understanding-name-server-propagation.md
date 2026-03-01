---
title: Understanding Name Server Propagation
excerpt: Learn how name server changes propagate through the DNS system and why it can take time for updates to become visible globally.
meta: Understand name server propagation, including TTL impact, regional differences, and why changes can take up to 48 hours to fully propagate worldwide.
categories:
- Name Servers
---

# Understanding Name Server Propagation

### Table of Contents {#toc}

* TOC
{:toc}

---

When you change your domain's name servers, the updates don't appear instantly across the entire internet. Instead, they propagate gradually through the DNS system, a process that can take anywhere from a few minutes to 48 hours. Understanding how name server propagation works helps you set realistic expectations and troubleshoot issues during transitions.

## What is name server propagation?

Name server propagation is the process by which changes to your domain's name server delegation spread through the global DNS system. When you update your name servers at your domain registrar, the change must be communicated to multiple layers of the DNS hierarchy, from the Top-Level Domain (TLD) registry down to individual DNS resolvers and caches worldwide.

## How name server propagation works

The propagation process involves several steps:

1. **Registry update**: Your domain registrar submits the name server change to the TLD registry (e.g., Verisign for `.com` domains). This typically happens within minutes.

2. **TLD name server update**: The TLD registry updates its authoritative name servers with the new NS records. This update is usually visible within 15 minutes to 1 hour.

3. **Global DNS resolver updates**: DNS resolvers around the world query the TLD name servers and cache the NS records. This is where propagation delays occur, as different resolvers update at different times.

4. **Cache expiration**: Existing cached NS records must expire before resolvers query for the updated information. The time this takes depends on the Time-to-Live (TTL) values set for the NS records, as specified in [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035).

## Factors affecting propagation time

Several factors influence how quickly name server changes propagate:

### TTL (Time-to-Live) impact

TTL values determine how long DNS resolvers cache records before querying for fresh information, as defined in [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035). Lower TTL values can help changes propagate faster, but they don't eliminate propagation delays entirely. Name server delegation changes at the registry level still need time to propagate, regardless of TTL settings.

<note>
#### TTL and name server delegation

While TTL affects how quickly DNS resolvers refresh cached NS records, the initial propagation of name server changes at the registry level is independent of TTL values. Even with very low TTLs, registry-level changes can take time to propagate globally.
</note>

### Regional differences

Propagation times can vary by geographic region due to:

- **Different DNS resolver networks**: Internet service providers and DNS resolver services (like Google's 8.8.8.8 or Cloudflare's 1.1.1.1) update their caches independently.

- **Network infrastructure**: Some regions may have more aggressive caching policies or slower update cycles.

- **Peering relationships**: The network paths between different parts of the internet can affect how quickly updates reach certain regions.

### Registry processing time

Different TLD registries process name server changes at different speeds. While most registries update within minutes, some may take longer, especially during peak times or maintenance windows.

## Typical propagation timeline

While propagation times can vary based on TLD registry processing, DNS resolver caching policies, and network conditions, here's a general timeline based on industry experience:

- **0-15 minutes**: Changes are submitted to the registry and begin appearing in WHOIS queries.
- **15 minutes to 1 hour**: TLD name servers begin serving the updated NS records.
- **1-4 hours**: Major DNS resolvers and ISPs start seeing the changes.
- **4-24 hours**: Most of the internet has updated to the new name servers.
- **Up to 48 hours**: Full global propagation is typically complete, though some isolated resolvers may take longer.

<note>
#### Propagation timeline variability

The 48-hour maximum propagation time is a general guideline based on typical DNS resolver TTL values and caching behavior. Actual propagation times can vary significantly depending on specific TLD registry policies, DNS resolver configurations, and network conditions. Some changes may propagate faster, while others may take longer in certain regions.
</note>

<info>
#### WHOIS updates faster

WHOIS records typically update within minutes of a name server change, making WHOIS a reliable way to verify that changes were submitted correctly, even before DNS propagation is complete.
</info>

## Verifying propagation

You can check the status of name server propagation using several methods:

### Using dig

Query the NS records directly:

```bash
dig NS example.com
```

This shows the NS records returned by the TLD name servers. If you see your new name servers, the change has propagated to the TLD level.

### Using WHOIS

WHOIS queries show the name servers registered at the registry level:

```bash
whois example.com
```

Look for the "Name Server" section in the output. WHOIS typically updates within minutes, making it useful for early verification.

### Using online tools

Several online tools can check propagation from multiple locations:

- [zone.vision](https://zone.vision/#/) - Comprehensive DNS lookup tool
- [DNS Checker](https://dnschecker.org/) - Check DNS propagation globally
- [whatsmydns.net](https://www.whatsmydns.net/) - Propagation checker for various record types

### Checking from different locations

Since propagation varies by region, test from multiple locations or use tools that check from different geographic locations to get a complete picture of propagation status.

## What happens during propagation

During the propagation period, you may experience:

- **Mixed results**: Some users may see your domain resolving correctly while others don't, depending on which DNS resolver they're using.

- **Intermittent resolution**: Your domain may resolve correctly at some times and not others, as different resolvers update their caches.

- **Old name servers still visible**: Some DNS queries may still return your old name servers until their caches expire.

This is normal and expected during propagation. Full stability typically occurs within 24-48 hours.

## Minimizing propagation delays

While you can't eliminate propagation delays entirely, you can take steps to minimize their impact:

1. **Plan ahead**: Schedule name server changes during low-traffic periods when possible.

2. **Verify changes immediately**: Use WHOIS to confirm changes were submitted correctly at the registry level.

3. **Monitor propagation**: Use online tools to track propagation progress from multiple locations.

4. **Prepare DNS records**: Ensure all necessary DNS records are configured in your new DNS provider's zone file before changing name servers.

5. **Coordinate with your team**: Inform stakeholders about the expected propagation timeline to set appropriate expectations.

## Troubleshooting slow propagation

If name server changes aren't propagating after 48 hours:

1. **Verify registry submission**: Check WHOIS to confirm the name servers are correctly registered at the registry level.

2. **Check for typos**: Ensure name server hostnames are spelled correctly and don't contain errors.

3. **Contact your registrar**: If WHOIS shows incorrect name servers or no update, contact your registrar to verify the change was submitted.

4. **Check TLD-specific issues**: Some TLDs have specific requirements or processing times. Consult your registrar or TLD documentation.

5. **Clear local cache**: Clear your local DNS cache or use a different DNS resolver to test:

   ```bash
   # macOS/Linux
   sudo dscacheutil -flushcache
   # or
   sudo systemd-resolve --flush-caches
   
   # Windows
   ipconfig /flushdns
   ```

## Technical references

The DNS system and name server delegation are defined in several Internet Engineering Task Force (IETF) Request for Comments (RFC) documents:

- [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035): Domain Names - Implementation and Specification (defines DNS protocol, TTL, and caching behavior)
- [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034): Domain Names - Concepts and Facilities (defines DNS architecture and delegation)

## Related articles

- [How Name Server Delegation Works](/articles/how-name-server-delegation-works/): Understand the delegation mechanism that underlies propagation.
- [Verifying Name Server Delegation](/articles/verifying-name-server-delegation/): Learn how to verify that your domain is properly delegated.
- [Troubleshooting Name Server Issues](/articles/troubleshooting-name-servers/): Comprehensive guide to diagnosing name server problems.
- [Domain Resolution Issues](/articles/domain-resolution-issues/): Troubleshoot broader DNS resolution problems.

## Have more questions?

If you have additional questions about name server propagation or need assistance with name server changes, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
