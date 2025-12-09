---
title: IPv6 Domain Resolution Reference
excerpt: All DNSimple name servers have IPv6 addresses and respond to queries over IPv6.
meta: Learn about DNSimple's IPv6 support. Understand how to configure AAAA records and ensure your domain is accessible on IPv6-only networks.
categories:
- DNS
---

# IPv6 Support

All [DNSimple name servers](/articles/dnsimple-nameservers/) have IPv6 addresses and are configured to respond to queries over the IPv6 protocol. This means a client's DNS query can be resolved natively over IPv6, helping ensure your domain is accessible to users on IPv6-only networks.

## IPv6 Records
For your domain to be resolved over IPv6, you will need to add an [AAAA record](/articles/aaaa-record/). An AAAA record is the IPv6 counterpart to the IPv4 A record and maps a domain name to an IPv6 address.

DNSimple fully supports AAAA records. You can add them to your domain's zone using the [Record Editor](/articles/record-editor/). For step-by-step instructions, see [Managing AAAA Records](/articles/manage-aaaa-record/).

## Have more questions?

If you have additional questions or need assistance, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
