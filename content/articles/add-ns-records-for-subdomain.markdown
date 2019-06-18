---
title: Add NS records for Subdomain
excerpt: How to delegate a subdomain from a domain registered to custom name servers.
categories:
- Name Servers
---

# Add NS records for Subdomain

Adding [NS records](/articles/ns-record/) for a subdomain will cause the subdomain to resolve with the configured name servers instead of the NS records at the zone's apex.

![Add NS records for Subdomain](/files/dnsimple-add-ns-record.png)

<div class="section-steps" markdown="1">
##### Verify the NS records are set up correctly

1. [Verify that your domain is delegated to DNSimple](/articles/delegating-dnsimple-registered/)
1. Verify the NS records are set up and we resolve them `dig @ns1.dnsimple.com NS subdomain.example.com`
1. Verify the trace actually goes to the domain `dig +trace subdomain.example.com`
1. Verify the TARGET NS are set up correctly `dig @ns.anotherdns.com subdomain.example.com`
</div>

<note>
#### Name server propagation

Please note that it may take up to 24 hours for a name server change to propagate. The whois response is normally a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues).
</note>
