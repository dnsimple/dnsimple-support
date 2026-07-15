---
title: Adding NS Records for a Subdomain
excerpt: Delegate a subdomain to another DNS provider by adding NS records in your DNSimple zone.
meta: Add NS records in DNSimple to delegate a subdomain to custom authoritative name servers, then verify the delegation with dig.
categories:
- Name Servers
---

# Adding NS Records for a Subdomain

### Table of Contents {#toc}

* TOC
{:toc}

---

Use this guide when DNSimple hosts DNS for your domain and you want a **subdomain** (for example `blog.example.com`) to be answered by **different** authoritative name servers. You add [NS records](/articles/ns-record/) in the DNSimple record editor for that subdomain. For field names in the editor, see [How To Add Common DNS Records](/articles/how-to-add-dns-records/).

Subdomain delegation covers standard DNS resolution only. Publishing [DS records](/articles/what-are-ds-records/) for the delegated subdomain (a zone cut) is not supported, so the subdomain is not covered by a [DNSSEC chain of trust](/articles/dnssec-chain-of-trust/), even if the provider hosting the subdomain signs its zone. For feature compatibility details, see [DNSSEC Compatibility With Other DNSimple Features](/articles/dnssec-compatibility/).

## Confirm the domain uses DNSimple for DNS {#confirm-the-domain-uses-dnsimple-for-dns}

Before you add NS records, the parent domain must be delegated to DNSimple. If the domain is registered with DNSimple, follow [Delegating a Domain registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/). If the domain is registered elsewhere but uses DNSimple for DNS, follow [Delegating a Domain registered with another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/). If you are unsure which path applies, start from [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/).

## Add NS records in DNSimple {#add-ns-records-in-dnsimple}

![Add NS records for Subdomain](/files/dnsimple-add-ns-record.png)

<div class="section-steps" markdown="1">
##### Create NS records for the subdomain

1. Log in to DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domain Names</label> tab, locate the domain, and click its name to open the domain page.
1. Click the <label>DNS</label> tab on the left.
1. In the DNS records section, click <label>Add/Manage</label>.
1. Click <label>Add Record</label>.
1. Select **NS** as the record type.
1. In **Name**, enter the subdomain label (for example `blog` for `blog.example.com`). Use `@` only when the record belongs at the zone apex; most subdomain delegations use a single label here.
1. In **Content**, enter the authoritative name server hostname (for example `ns1.otherdns.com.`). Use a trailing dot (`.`) at the end of the hostname unless DNSimple already adds it for you.
1. Click <label>Add Record</label> to save the NS record.
1. Repeat steps 6 through 10 for each additional name server hostname your provider gave you (typically two or more NS records for the same subdomain name).
</div>

> [!TIP]
> If you are copying values from another DNS provider, see [How To Add Common DNS Records](/articles/how-to-add-dns-records/) for how **Name** and **Content** map to common labels such as Host and Value.

## Verify the delegation {#verify-the-delegation}

<div class="section-steps" markdown="1">
##### Check NS data and resolution

1. Query DNSimple for the NS set you published: `dig @ns1.dnsimple-edge.com NS blog.example.com` (replace `blog.example.com` with your subdomain).
1. Confirm the full resolution path: `dig +trace blog.example.com`
1. Query the **target** name servers your NS records point to (replace the server and name): `dig @ns1.otherdns.com blog.example.com`
</div>

> [!NOTE] Name server propagation
> NS and delegation changes can take up to 24 hours to propagate. A WHOIS lookup is often a good way to [determine if the changes have been submitted properly](/articles/domain-resolution-issues/).

## Have more questions?

If you have questions about NS records or subdomain delegation, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
