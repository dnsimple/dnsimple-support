---
title: Name Servers at DNSimple
excerpt: Everything you need to know about name servers and domain delegation at DNSimple.
meta: Overview of name server management at DNSimple, including delegation, vanity name servers, name server sets, and troubleshooting.
categories:
- Name Servers
---

# Name Servers at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Name servers translate human-readable domain names into IP addresses and direct internet traffic to the correct destinations. DNSimple provides name server infrastructure and management tools, including vanity name servers, name server sets, and domain delegation.

## What are name servers? {#what-are-name-servers}

- [What Is a Name Server?](/articles/what-is-a-nameserver/): What name servers are and why they matter for DNS resolution.
- [What Is an NS Record?](/articles/ns-record/): How NS records implement delegation in DNS.
- [What Are Glue Records?](/articles/what-are-glue-records/): How glue records solve the circular dependency problem when name servers are subdomains of the domain they serve.
- [What Are Vanity Name Servers?](/articles/what-are-vanity-name-servers/): How vanity name servers let you brand your DNS infrastructure with your own domain name.
- [How Name Server Delegation Works](/articles/how-name-server-delegation-works/): How delegation establishes authority in the DNS hierarchy.
- [Understanding Name Server Propagation](/articles/understanding-name-server-propagation/): How name server changes propagate through the DNS system and why updates can take time.
- [Name Server Redundancy and High Availability](/articles/name-server-redundancy/): How multiple name servers and Anycast routing protect your domain from DNS outages.

## How to manage name servers {#manage}

- [Pointing a Domain to DNSimple](/articles/pointing-domain-to-dnsimple/): How to point your domain to DNSimple's name servers.
- [Delegating a Domain Registered with DNSimple to DNSimple](/articles/delegating-dnsimple-registered/): Point your domain to DNSimple's name servers when your domain is registered with us.
- [Delegating a Domain Registered with Another Registrar to DNSimple](/articles/delegating-dnsimple-hosted/): Point your domain to DNSimple's name servers when your domain is registered elsewhere.
- [Setting the Name Servers for a Domain](/articles/setting-name-servers/): Change your domain's name servers to point to another DNS provider or back to DNSimple.
- [Migrating DNS to DNSimple](/articles/migrating-dns-to-dnsimple/): How to migrate your DNS hosting to DNSimple from another provider without downtime.
- [Managing Vanity Name Servers](/articles/vanity-nameservers/): Configure and manage vanity name servers for your domains.
- [Adding NS Records for a Subdomain](/articles/add-ns-records-for-subdomain/): Delegate a subdomain to different name servers.
- [Name Server Sets](/articles/name-server-sets/): Create and use name server sets to simplify name server configuration.

## Troubleshooting name server configurations {#troubleshooting}

- [Troubleshooting Name Server Issues](/articles/troubleshooting-name-servers/): Diagnose and resolve common name server problems.
- [Verifying Name Server Delegation](/articles/verifying-name-server-delegation/): Check that your domain is properly delegated to the correct name servers.
- [Impact of Name Server Changes on Email Delivery](/articles/impact-name-server-changes-email-delivery/): How changing name servers affects MX record resolution and email delivery.
- [Troubleshooting Email Issues Related to Name Servers](/articles/troubleshooting-email-issues-name-servers/): Diagnose and resolve email delivery problems caused by name server changes.

## Reference {#reference}

- [DNSimple Name Servers](/articles/dnsimple-nameservers/): DNSimple's name server hostnames and IP addresses.
- [Name Server Management in DNSimple](/articles/name-server-management-in-dnsimple/): The name server management interface in your DNSimple account, including available settings.
- [Name Servers Glossary](/articles/name-servers-glossary/): Terms and definitions related to name servers and domain delegation.
