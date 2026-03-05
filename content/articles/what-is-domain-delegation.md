---
title: What Is Domain Delegation?
excerpt: Learn what domain delegation is, how it works, and how it connects domain registration to DNS hosting.
meta: Discover what domain delegation means, how name servers work, and how delegation connects your domain registration to your DNS hosting provider.
categories:
- Domains and Transfers
- DNS
---

# What Is Domain Delegation?

Domain delegation is the process of assigning authority for a domain's DNS to specific name servers. When you delegate a domain, you're telling the internet where to find the DNS records for your domain.

## What is delegation?

Delegation connects your [domain registration](/articles/what-is-a-domain/) to your DNS hosting. When you [register a domain](/articles/registering-domain/), you must specify which name servers are authoritative for your domain's DNS. This delegation tells DNS resolvers where to look when someone tries to access your domain. Think of delegation like a phone book entry: your domain registration is like having your name in the phone book, and delegation tells people which phone number (name server) to call to get your actual address (DNS records).

## How does delegation work?

The delegation process works through the DNS hierarchy. When you register a domain, you provide name server information to your registrar. Your registrar sends this name server information to the registry, which is the organization that manages your top-level domain, such as .com or .org. The registry creates NS (Name Server) records that point to your chosen name servers. These NS records are stored at the registry level.

When someone queries your domain, DNS resolvers follow this chain. They query the root name servers, then query the TLD name servers (e.g., .com name servers). The TLD name servers return the NS records pointing to your name servers. Finally, resolvers query your name servers for the actual DNS records.

## Name servers and delegation

Name servers are the DNS servers that are authoritative for your domain. When you delegate a domain, you're specifying which name servers should be queried for your domain's DNS records. Many registrars provide their own name servers that you can use for [DNS hosting](/articles/dns-hosting/). You can delegate to name servers provided by specialized DNS hosting services. Some organizations set up their own name servers (called [vanity name servers](/articles/what-are-vanity-name-servers/)) for branding or control.

## Delegation vs. registration

It's important to understand that delegation is separate from domain registration. Registration means owning the domain name and having the right to use it. Delegation means specifying which name servers handle the DNS for your domain. You can register a domain with one registrar and delegate it to name servers from a different DNS provider. This separation allows you to choose the best registrar for registration and the best DNS provider for hosting.

## Changing delegation

You can change your domain's delegation at any time by [updating the name servers](/articles/setting-name-servers/). You update the name server settings in your registrar account. Changes to delegation can take up to 24-48 hours to propagate globally. Your domain continues to resolve during the change, as long as both old and new name servers are configured correctly. Changing delegation does not affect your domain registration. You remain the owner of the domain, and the registration period is unchanged.

## Delegation and DNS hosting

Delegation is what connects your domain to your DNS hosting provider. If you [delegate to DNSimple's name servers](/articles/pointing-domain-to-dnsimple/), DNSimple becomes your DNS hosting provider. You can delegate to any DNS provider's name servers, regardless of where your domain is registered. Some setups use multiple DNS providers for redundancy or different purposes.

## Glue records

When your name servers are subdomains of your own domain (e.g., `ns1.yourdomain.com`), you need [glue records](/articles/what-are-glue-records/). Glue records are A or AAAA records stored at the registry level that provide the IP addresses of your name servers, solving a circular dependency problem in DNS resolution. For example, if `yourdomain.com` is delegated to `ns1.yourdomain.com`, the registry needs to know the IP address of `ns1.yourdomain.com` to complete the resolution. Glue records provide this information.

## Delegation and domain transfers

Delegation is independent of [domain transfers](/articles/what-is-domain-transfer/). You can transfer your domain registration to a different registrar without changing delegation. You can change your DNS hosting provider (delegation) without transferring the domain registration. You can transfer registration and change delegation at the same time, but they are separate processes.

## Have more questions?

If you have any questions about domain delegation or need help with your domains, just [contact our support team](https://dnsimple.com/feedback) — we're here to help.
