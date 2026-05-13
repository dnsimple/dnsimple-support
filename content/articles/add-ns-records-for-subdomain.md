---
title: Adding NS Records for a Subdomain
excerpt: How to delegate a subdomain from a domain registered to custom name servers.
meta: Add NS records for a subdomain in DNSimple to delegate DNS resolution to custom name servers, with verification steps using dig.
categories:
- Name Servers
---

# Adding NS Records for a Subdomain

Adding [NS records](/articles/ns-record/) for a subdomain delegates DNS authority for that subdomain to a separate set of name servers. Queries for the subdomain will be directed to those name servers instead of resolving from the zone's apex.

## Add NS records for a subdomain {#add}

<div class="section-steps" markdown="1">
##### To add an NS record for a subdomain

1. Log into DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domain Names</label> tab, then click the relevant domain to open the domain page.
1. Click the <label>DNS</label> tab on the left side.
1. Scroll to the DNS records section and click <label>Add record</label>.
1. Select <label>NS</label> from the record type list.
1. Enter the subdomain name in the <label>Name</label> field (for example, `sub` for `sub.example.com`).
1. Enter the name server hostname in the <label>Name Server</label> field (for example, `ns1.anotherdns.com`).
1. Repeat to add each additional name server for the subdomain.
1. Click <label>Add Record</label> to save.
</div>

## Verify the NS records are set up correctly {#verify}

<div class="section-steps" markdown="1">
##### To verify subdomain delegation

1. [Verify that your domain is delegated to DNSimple](/articles/delegating-dnsimple-registered/).
1. Confirm DNSimple resolves the NS records: `dig @ns1.dnsimple-edge.com NS subdomain.example.com`
1. Verify the delegation trace reaches the subdomain: `dig +trace subdomain.example.com`
1. Verify the target name servers respond correctly: `dig @ns1.anotherdns.com subdomain.example.com`
</div>

> [!NOTE]
> It may take up to 24 hours for a name server change to propagate. The WHOIS response is a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues/).

## Have more questions?

If you have any questions about adding NS records for a subdomain, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
