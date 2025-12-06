---
title: IPv6 Domain Resolution Reference
excerpt: Learn about DNSimple's IPv6 support. Understand how to configure AAAA records for IPv6 resolution and ensure your domain is accessible over IPv6 networks.
categories:
- DNS
---

# IPv6 Support

All [DNSimple name servers](/articles/dnsimple-nameservers/) have IPv6 addresses and are configured to respond to queries over the IPv6 protocol. This means a client's DNS query can be resolved natively over IPv6, helping ensure your domain is accessible to users on IPv6-only networks.

## IPv6 Records
For your domain to be resolved over IPv6, you will need to add an [AAAA record](https://support.dnsimple.com/articles/aaaa-record/). An AAAA record is the IPv6 counterpart to the IPv4 A record and maps a domain name to an IPv6 address.

DNSimple fully supports AAAA records. You can [add them](/categories/dns/) to your domain's zone like any other record type.

## Have more questions?

If you have additional questions or need assistance, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
