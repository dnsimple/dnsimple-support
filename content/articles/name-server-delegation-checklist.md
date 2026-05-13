---
title: Name Server Delegation Checklist
excerpt: Apex delegation checklist for DNSimple DNS hosting - verify registrar NS, match DNSimple hostnames, and confirm resolution after changes.
meta: Checklist for pointing a domain at DNSimple name servers at the registrar, validating all four NS, and confirming propagation with dig or WHOIS.
categories:
- Name Servers
---

# Name Server Delegation Checklist

Use this page as a compact reference when you need the DNSimple delegation targets and the order of checks. For narrative detail, see [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/) and [DNSimple Name Servers](/articles/dnsimple-nameservers/).

## Delegation targets {#delegation-targets}

Your registrar (or DNSimple **Edit delegation** for DNSimple-registered domains) must list exactly these authoritative hostnames for DNSimple DNS hosting:

- `ns1.dnsimple.com`
- `ns2.dnsimple-edge.net`
- `ns3.dnsimple.com`
- `ns4.dnsimple-edge.org`

All four should be present. Remove other providers' NS unless you intentionally run [Secondary DNS](/articles/secondary-dns/).

## Registrar versus DNSimple zone {#registrar-versus-zone}

- **Registrar delegation:** NS listing at the registry (what `dig NS example.com +short` shows).
- **DNS zone:** Records inside DNSimple for `example.com` after delegation points here.

Changing records in DNSimple alone does not update delegation at another registrar.

## Verification commands {#verification-commands}

```bash
dig NS yourdomain.com +short
dig @8.8.8.8 NS yourdomain.com +short
```

Compare results to the four DNSimple hostnames above. For delays, see [How DNS Caching and TTL Affect Delegation and Record Changes](/articles/how-dns-caching-and-ttl-affect-delegation-and-record-changes/).

## Related flows {#related-flows}

| Scenario | Article |
|----------|---------|
| Domain registered at DNSimple | [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/) |
| Domain registered elsewhere | [Delegating a Domain registered with another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/) |
| Mixed symptoms after a change | [Troubleshoot Email or Subdomains After Delegation Changes](/articles/troubleshoot-email-subdomains-after-delegation-changes/) |

## Have more questions?

If you have questions about delegation or this checklist, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
