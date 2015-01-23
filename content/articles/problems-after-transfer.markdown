---
title: Transfer Troubleshooting
excerpt: These are common issues that our customers face after transferring a domain to DNSimple.
categories:
- Domain Transfers
---

# Transfer Troubleshooting

### Domain still pointing to former registrar's name servers

**Sympthoms**:

- **Resolution issues:** the changes you are making to the domain on DNSimple don't work.
- **Wrong SOA value:** The SOA reflects data corresponding to your former registrar.
- **Wrong name servers:** checking the domain's name servers shows your former registrar's ones.

**Cause**:

When a domain is transferred to DNSimple we don't change the domain's delegation. This means your domain will still point to the same name servers it was pointing when you initiated the transfer.

The reason we don't change the delegation is that there is no way for us to know whether the zone has been completely transferred over to us. If we change the delegation and you haven't configured your domain yet on DNSimple it will likely end up causing downtime.

**Solution**:

Once you have verified that you have all the records you need for your domain on DNSimple you just need to [point it to our name servers](pointing-domain-to-dnsimple).

For future transfers please [move your DNS before transferring your domain](move-dns-before-transferring-to-avoid-downtime).

