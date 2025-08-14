---
title: What Are Vanity Name Servers?
excerpt: Learn what vanity name servers are and why they're valuable for your business.
meta: Learn more about vanity name servers and how they enhance your brand's online presence and improve your domain management experience.
categories:
- Name Servers
- Domains
---

# What Are Vanity Name Servers?

Vanity name servers, sometimes called private name servers or custom name servers, are a feature that allows you to brand your domain's authoritative name servers with your own domain name. Instead of using generic name server hostnames provided by your DNS hosting provider (like `ns1.dnsimple.com`), you can configure them to appear as subdomains of your own domain (e.g., `ns1.yourcompany.com` and `ns2.yourcompany.com`).

This functionality is about rebranding your DNS services, allowing your infrastructure to present a more consistent and professional appearance to the public.

## Why use vanity name servers?

Vanity name servers offer several benefits for businesses and organizations who want to enhance their online presence:

- **Professional branding**: Using your own domain name for name servers (e.g.,`ns1.mybrand.com`) provides a more polished and consistent brand image, reinforcing professionalism and technical sophistication.
- **Provider abstraction**: It hides the identity of your underlying DNS hosting provider from public DNS queries. While DNSimple still manages your DNS behind the scenes, external lookups will show your custom branded name servers, giving the impression of full self-hosted DNS.
- **Increased trust and credibility**: For some clients or partners, seeing branded name servers can contribute to a perception of greater control, stability, and trust in your online services.
- **Vendor-neutral**: By using name servers that are under a domain name that you control, your infrastructure is set up to be vendor-neutral.

## How vanity name servers work (conceptually)

The concept of vanity name servers relies critically on glue records, which solve a fundamental "chicken and egg" problem in DNS.

1. **The circular dependency**: If your domain `yourcompany.com` is delegated to `ns1.yourcompany.com`, how can a DNS resolver find the IP address of `ns1.yourcompany.com` without first querying `ns1.yourcompany.com`?
1. **The solution — glue records**: To resolve this, the Internet's Top-Level Domain (TLD) registries (like .COM or .ORG) allow you to provide the IP addresses (A and AAAA records) for your vanity name server hostnames directly to them. These IP addresses are called glue records.
1. **Delegation in action**: When a DNS resolver queries the TLD for `yourcompany.com`, the TLD's name servers provide the NS records delegating `yourcompany.com` to `ns1.yourcompany.com` and the glue records (IP addresses) for `ns1.yourcompany.com` simultaneously. This allows the resolver to immediately know where to go next to find `yourcompany.com`'s DNS information.

## DNSimple's approach to vanity name servers: configure and delegate

DNSimple provides robust functionality to configure and manage vanity name servers for your domains. 

<info>
This feature is only available on the [Enterprise Plan](https://dnsimple.com/enterprises).
</info>

Using vanity name servers with DNSimple typically involves two distinct, but often sequential, actions:

1. **Configure (define your vanity name servers)**: The initial step where you define the specific vanity name server hostnames (e.g., `ns1.yourbrand.com`, `ns2.yourbrand.com`) and associate them with DNSimple's underlying IP addresses. This involves:
    - Creating A and AAAA records within the DNS zone of the domain that will host the vanity name server names (e.g., `yourbrand.com`). These records point your branded name   server hostnames to DNSimple's name server IPs.
    - If the domain hosting the vanity name servers (e.g., `yourbrand.com`) is registered with DNSimple, we will automatically handle the registration of the necessary glue records at the registry level. If that domain is registered elsewhere, you will need to manually provide these glue records to your external registrar. This "Configure"        action makes your branded name servers exist and be resolvable.
      
1. **Delegate (point your domains to vanity name servers)**: Once your vanity name servers are configured, and their glue records are set up, you can delegate any of your domains to use them. This tells the Internet your branded name servers are authoritative for a particular domain.
    - This delegation is done at the domain registrar level for each domain for which you want to use vanity name servers. You update the NS records for that domain to point to your newly configured vanity name server hostnames (e.g., `ns1.yourbrand.com`, `ns2.yourbrand.com`).
    - This applies whether you are pointing the same domain (e.g., `yourbrand.com`) to its newly configured vanity name servers or pointing other domains (e.g., `yourclientdomain.com`) to them.

Both configuration and delegation are necessary to fully utilize vanity name servers. You first define and make them resolvable, then point your domains to them.

## Setting up and managing vanity name servers

For step-by-step instructions on how to enable, configure, disable, and delegate to vanity name servers for your domains in DNSimple, please refer to our dedicated article [Managing Vanity Name Servers](/articles/vanity-nameservers/).

To understand more about the critical role of glue records in this process, see our [What Are Glue Records?](/articles/what-are-glue-records/) article.

You also need the IP addresses of DNSimple's name servers to configure your glue records (when using the "Configure" option and if DNSimple is not your registrar). These can be found in [DNSimple Name Servers](/articles/dnsimple-nameservers/).

## Have more questions?
If you have additional questions or need any assistance with your vanity name servers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
