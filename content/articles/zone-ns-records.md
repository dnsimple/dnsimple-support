---
title: Zone NS Records
excerpt: How to update zone NS records for a hosted domain.
meta: Learn how to efficiently update Name Server records for your hosted domain in DNSimple, ensuring seamless domain management and optimal performance for your website.
categories:
- DNS
---

# Updating Zone NS Records for a Hosted Domain

You can configure [NS records](/articles/ns-record/) at the apex of a zone of a hosted domain using the [Record Editor](/articles/record-editor/). If you want to configure NS records for a subdomain, click [here](/articles/add-ns-records-for-subdomain/) instead. For information about DNSimple's name servers, see [DNSimple Name Servers](/articles/dnsimple-nameservers/).

<div class="section-steps" markdown="1">
##### Updating NS records for a zone

1. If you have multiple accounts, select your account in the navigation bar.
1. Click the **Domain Names** tab, then locate and click the relevant domain to access the domain page.
1. Click the **DNS** tab on the left side.
1. Scroll down to locate the Zone NS records section.
1. Click **Edit zone NS records**.
    ![screenshot: Edit Zone Records](/files/zone-records-edit.png)

1. Enter the hostnames of the name servers you want to set for the NS records in the zone.
    ![Apply NS records](/files/zone-ns-records-update.png)

1. You can also add them from one or more [name server sets](/articles/name-server-sets/) instead of typing in name server hostnames.
    ![Apply NS records from name server sets](/files/zone-ns-records-name-server-set.png)

1. Click **Apply NS records** to apply the changes.
</div>

> [!INFO]
> #### Hosted domain must be delegated to DNSimple
> The zone NS record changes will only take effect if the domain is [delegated to DNSimple](/articles/delegating-dnsimple-hosted/) at the domain's registrar and has [DNS hosting](/articles/dns-hosting/) active.

## Have more questions?

You can [contact our support team](https://dnsimple.com/feedback) with any additional questions about configuring or updating zone NS records. We'll be happy to help.
