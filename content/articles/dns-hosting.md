---
title: Why Should I Use DNSimple as a DNS Hosting Provider?
excerpt: DNSimple provides robust DNS hosting using a global Anycast network.
meta: DNSimple provides robust DNS hosting with fast, secure domain resolution and exceptional uptime using a global Anycast network.
categories:
- DNS
---

# Why Should I Use DNSimple as a DNS Hosting Provider?

### Table of Contents {#toc}

* TOC
{:toc}

---

## DNS hosting

DNSimple offers robust, reliable DNS hosting services, providing fast propagation and easy management for your domain's records. If you want to use DNSimple to manage your domain's DNS, you have a few options, depending on whether you already have a domain and where it's registered.

## Options for DNS hosting with DNSimple

There are three primary ways to leverage DNSimple as your DNS hosting provider:

### Keep your domain registration with your current registrar

If you have an existing domain registered with another provider, you can choose to manage only its DNS with DNSimple. This means your domain registration remains with your current registrar, but all your DNS records ([A](/articles/a-record/), [CNAME](/articles/cname-record/), [MX](/articles/mx-record/), etc.) will be configured and served by DNSimple's name servers.

**How to proceed**: To use DNSimple for DNS hosting while keeping your registrar separate, you will need to update your domain's name servers at your current registrar to point to DNSimple's name servers.

**Instructions**: For detailed steps, please refer to our instructions on [how to point your domain to our name servers](/articles/delegating-dnsimple-hosted/).

### Transfer your domain registration to DNSimple

For streamlined management, you can transfer both your domain's registration and DNS management to DNSimple. This consolidates your domain's registration and DNS records under one account and one interface, simplifying renewals and updates.

**How to proceed**: This process involves initiating a domain transfer to DNSimple. Once the transfer is complete, DNSimple will become both your domain registrar and your DNS hosting provider.

> [!NOTE]
> Important: DNSimple does not automatically change your domain's name servers when you transfer it, because doing so could cause downtime. If you want the domain to start using DNSimple's name servers immediately, you must select Switch name servers to DNSimple on the transfer page. If you don't select this option, your domain will continue using its current name servers after the transfer, and you'll need to update the delegation manually later if you want to host DNS with us.

**Instructions**: For detailed steps, please refer to our instructions on [how to transfer your domain to DNSimple](/articles/domain-transfer/) . To finish the setup, follow the steps to [change your name servers to DNSimple](/articles/delegating-dnsimple-registered/)

### Register a new domain with DNSimple
If you don't yet have a domain name, you can register a new domain directly through DNSimple. When you register a domain with us, you can manage your DNS by using DNSimple's name servers from day one, giving you immediate control over your DNS records.

**How to proceed**: [Sign up or log in](https://dnsimple.com/login) to your DNSimple account and proceed with the domain registration process.

**Instructions**: For detailed steps, please refer to [Registering a Domain](/articles/registering-domain/)

### Park a Domain for Future Use

If you are reserving a domain name for a project that isn't ready yet, you can register or transfer it to DNSimple simply to secure the name and park it. DNSimple provides the minimal DNS configuration needed to hold the domain for future use, ensuring it remains active until you are ready to build a site or set up email.

    **How to proceed**: Register or transfer the domain. If you do not create any custom records, the domain will remain parked, only serving the basic system records (SOA, NS).

    **Instructions**: Refer to the instructions for [registering](/articles/registering-domain/) or [transferring](/articles/domain-transfer/) a domain.

## Have more questions?
If you have additional questions or need any assistance setting up DNS hosting, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.


