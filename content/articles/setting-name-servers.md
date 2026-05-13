---
title: Change delegation to another DNS provider (DNSimple registration)
excerpt: Point DNS to another provider when DNSimple is your registrar. Covers Edit delegation, glue via name server sets, and reserved rows from Secondary DNS or vanity name servers.
meta: Change DNS delegation away from DNSimple when your domain is registered at DNSimple. Edit delegation to another DNS provider; glue may apply for in-zone NS names. Reserved name servers come from Secondary DNS or vanity name servers.
categories:
  - Name Servers
---

# Change delegation to another DNS provider (DNSimple registration)

### Table of Contents {#toc}

* TOC
{:toc}

---

Use this guide when **DNSimple is your registrar** and you want DNS hosted **somewhere other than DNSimple** (for example Cloudflare or another DNS provider). You change **delegation**: which name servers are authoritative for your domain.

If your domain is **not** registered at DNSimple, update name servers at your **current registrar**.

If you want DNS hosted **by DNSimple**, follow [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/) so you follow the right steps for your registration setup.

For vocabulary (delegation versus records in your zone), see [What Is Domain Delegation?](/articles/what-is-domain-delegation/). For what authoritative name servers do, see [What is a name server?](/articles/what-is-a-nameserver/). For an overview when you are moving **to** DNSimple DNS, see [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/).

## Change delegation to another DNS provider {#pointing-the-name-servers-to-another-provider}

After delegation points to another provider, the domain resolves using **that** provider's DNS. Records in your DNSimple account are **not** used for public DNS until delegation points back to DNSimple.

<div class="section-steps" markdown="1">
### To change delegation to another provider

1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domain Names</label> tab, locate the relevant domain, and click on the name to access the domain page.

    ![Domain Page link](/files/domains-domain-link.png)

1. Click <label>Registration</label> on the left sidebar.
1. On the Domain delegation card, click <label>Edit delegation</label>.

    ![Domain Delegation card](/files/domain-delegation-card.png)

1. Enter the hostnames of the name servers you want to use.

    ![Enter name servers](/files/complete-name-server-change.png)

1. Instead of entering hostnames manually, you can click <label>Add a name server set</label> to select a [name server set](/articles/name-server-sets/).

    ![Add a name server set](/files/domain-delegation-add-name-server-set.png)

1. Click <label>Change Name Servers</label> to apply the changes.

</div>

> [!NOTE]
> DNSimple's listing of NS records for the domain will be updated to match the name server changes.

> [!NOTE]
> If the name server hostname uses the same domain you are delegating, for example `ns1.example.com` for `example.com`, the registry needs glue records so resolvers can find the name server's IP address. DNSimple can create glue at the registry when the server is defined in a [name server set](/articles/name-server-sets/) that includes the glue IP addresses. For more detail, see [What Are Glue Records?](/articles/what-are-glue-records/). This situation also appears with [vanity name servers](/articles/what-are-vanity-name-servers/).

## Reserved name servers {#reserved-name-servers}

If you use [Secondary DNS](/articles/secondary-dns/) or [Vanity Name Servers](/articles/vanity-nameservers/), name servers from those configurations are **reserved**. You cannot edit or remove them through **Edit delegation** alone.

![Reserved name servers](/files/reserved-name-servers.png)

Click the configuration icon next to a reserved entry to open [Secondary DNS](/articles/secondary-dns/) or [Vanity Name Servers](/articles/vanity-nameservers/) and change the configuration there.

![Edit reserved name servers through configuration](/files/reserved-name-servers-edit-configuration.png)

## Have more questions?

If you have further questions or need help with delegation or name servers, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
