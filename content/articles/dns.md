---
title: DNS at DNSimple
excerpt: Learn about DNS, manage your DNS records, and configure DNS hosting with DNSimple
meta: Comprehensive guide to DNS management at DNSimple, including DNS records, zone management, troubleshooting, and advanced DNS features like Anycast and secondary DNS.
categories:
- DNS
---

# DNS at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple provides powerful DNS hosting services to help you manage your domain's DNS records, configure name servers, and ensure reliable domain resolution. This guide organizes all DNS-related documentation to help you find exactly what you need.

## Announcements

Important updates and changes that may affect your DNS configuration:

- [Change of Non-Compliant ENT Behavior](/articles/announcement-change-ent-behavior/) - Learn about changes to non-compliant enterprise behavior that may affect your DNS configuration.
- [Discontinuation of Legacy NS2 and NS4 IP Addresses](/articles/announcement-ns2-ns4-ip-addresses/) - Information about the discontinuation of legacy NS2 and NS4 IP addresses and how it affects your DNS setup.

> [!NOTE]
> These articles contain information that is only relevant to specific customers. If you're impacted, you will receive an email from DNSimple.

## What is DNS?

Learn about DNS fundamentals, DNS records, and DNS concepts:

- [What is DNS?](/articles/what-is-dns/) - Understand the fundamentals of the Domain Name System and how it translates domain names to IP addresses.
- [What is Time-to-Live?](/articles/what-is-ttl/) - Learn about TTL (Time-to-Live) and how it controls how long DNS records are cached.
- [What's the Minimum Time-To-Live Provided by DNSimple?](/articles/what-is-ttl/#ttl-in-dnsimple) - Discover the minimum TTL values that DNSimple provides for your DNS records.
- [How Long Does It Take for a New Record to Resolve for My Domain?](/articles/how-long-does-it-take-for-a-new-record-to-resolve-for-my-domain/) - Understand the time it takes for new DNS records to become available after creation.
- [What Is Resolution Status?](/articles/resolution-status/) - Learn about resolution status and how to check if your DNS records are resolving correctly.
- [What Is dig?](/articles/what-is-dig/) - Introduction to the dig command-line tool for querying DNS servers.
- [What Is Dynamic DNS?](/articles/dynamic-dns/) - Understand Dynamic DNS and how it allows you to update DNS records automatically when your IP address changes.
- [What Is a Zone File?](/articles/what-is-zone-file/) - Learn about zone files and how they contain DNS record information for a domain.
- [Common DNS Records](/articles/common-dns-records/) - Overview of the most frequently used DNS record types and their purposes.
- [What Is an A Record?](/articles/a-record/) - Learn about A records and how they map domain names to IPv4 addresses.
- [What Is an AAAA Record?](/articles/aaaa-record/) - Understand AAAA records and how they map domain names to IPv6 addresses.
- [What Is an ALIAS Record?](/articles/alias-record/) - Discover ALIAS records and how they provide CNAME-like functionality at the root domain.
- [What Is a CAA Record?](/articles/caa-record/) - Learn about CAA (Certificate Authority Authorization) records and how they specify which CAs can issue certificates.
- [What Is a CNAME Record?](/articles/cname-record/) - Understand CNAME records and how they create aliases for domain names.
- [What Is a DKIM Record?](/articles/dkim-record/) - Learn about DKIM (DomainKeys Identified Mail) records and email authentication.
- [What Is a DMARC Record?](/articles/dmarc-record/) - Understand DMARC (Domain-based Message Authentication) records and email security.
- [What Are DS Records?](/articles/what-are-ds-records/) - Learn about DS (Delegation Signer) records used for DNSSEC validation.
- [What Are Glue Records?](/articles/what-are-glue-records/) - Understand glue records and how they help resolve name servers for your domain.
- [What Are HINFO Records?](/articles/hinfo-records/) - Learn about HINFO records and how they describe host hardware and operating system information.
- [What Is an MX Record?](/articles/mx-record/) - Understand MX (Mail Exchange) records and how they direct email to mail servers.
- [What Is an NS Record?](/articles/ns-record/) - Learn about NS (Name Server) records and how they delegate DNS authority.
- [What Are NAPTR Records?](/articles/naptr-records/) - Understand NAPTR (Name Authority Pointer) records and their use in advanced DNS routing.
- [What Is a POOL Record?](/articles/pool-record/) - Learn about POOL records and how they enable load balancing across multiple IP addresses.
- [What Are Reverse DNS Lookups and PTR Records?](/articles/reverse-dns-ptr-records/) - Understand reverse DNS lookups and PTR records that map IP addresses to domain names.
- [What Is an SOA Record?](/articles/soa-record/) - Learn about SOA (Start of Authority) records and their role in DNS zone management.
- [What Is an SPF Record?](/articles/spf-record/) - Understand SPF (Sender Policy Framework) records and email authentication.
- [What Is an SRV Record?](/articles/srv-record/) - Learn about SRV (Service) records and how they specify service locations.
- [What Are Service Binding Records (SVCB and HTTPS)?](/articles/service-binding-records/) - Understand SVCB and HTTPS records (RFC 9460) and how they provide service binding information for network services.
- [What Are SSHFP Records?](/articles/sshfp-records/) - Understand SSHFP records and how they store SSH public key fingerprints.
- [What Is a TLSA Record?](/articles/tlsa-record/) - Learn about TLSA (Transport Layer Security Authentication) records and how they enhance TLS security through DANE.
- [What Is DANE (DNS-based Authentication of Named Entities)?](/articles/what-is-dane/) - Learn about DANE and how it uses DNSSEC to authenticate TLS certificates through DNS records.
- [What Are System Records?](/articles/system-records/) - Learn about system records that DNSimple automatically manages for your domain.
- [What Is a TXT Record?](/articles/txt-record/) - Understand TXT records and how they store arbitrary text data for various purposes.
- [What Is a URL Record?](/articles/url-record/) - Learn about URL records and how they redirect domains to web addresses.
- [Differences Between A and CNAME Records](/articles/differences-a-cname-records/) - Understand the key differences between A and CNAME records and when to use each.
- [Differences Among A, CNAME, ALIAS, and URL Records](/articles/differences-between-a-cname-alias-url/) - Compare A, CNAME, ALIAS, and URL records to choose the right record type for your needs.
- [Differences Between HTTPS and ALIAS Records](/articles/differences-between-https-and-alias-records/) - Understand when to use HTTPS records versus ALIAS records for apex domain aliasing and service binding.
- [Differences Between HTTPS and URL Records](/articles/differences-between-https-and-url-records/) - Compare HTTPS records and URL records to understand service binding versus web redirects.
- [What Is Anycast DNS and Why Use It?](/articles/why-anycast-dns/) - Learn about Anycast DNS and the benefits it provides for DNS resolution speed and reliability.
- [Protection Against DDoS Attacks](/articles/protection-ddos/) - Understand how DNSimple protects your DNS infrastructure against DDoS attacks.
- [What Is EDNS Client Subnet Support?](/articles/edns-client-subnet/) - Learn about EDNS Client Subnet (ECS) and how it improves DNS resolution accuracy.
- [Regional Records](/articles/regional-records/) - Understand regional records and how they enable location-based DNS responses.
- [Reverse DNS Zones](/articles/reverse-dns/) - Learn about reverse DNS zones and how to configure PTR records.
- [Why DNSSEC and Secondary DNS may not work together](/articles/dnssec-and-secondary-dns/) - Understand compatibility considerations when using DNSSEC with secondary DNS.
- [How ALIAS Records Resolve with Secondary DNS](/articles/alias-and-secondary-dns/) - Learn how ALIAS records work when using secondary DNS providers.
- [What Are Integrated DNS Providers and Why Use Them?](/articles/what-are-integrated-providers/) - Understand integrated DNS providers and the benefits of using them with DNSimple.
- [Integrated DNS Provider Amazon Route 53](/articles/integrated-dns-provider-amazon-route53/) - Learn how to use Amazon Route 53 as an integrated DNS provider.
- [Integrated DNS Provider Azure DNS](/articles/integrated-dns-provider-azure-dns/) - Learn how to use Azure DNS as an integrated DNS provider.
- [Integrated DNS Provider CoreDNS](/articles/integrated-dns-provider-coredns/) - Learn how to use CoreDNS as an integrated DNS provider.
- [What Is Zone Verification and Why Does It Matter?](/articles/what-is-zone-verification/) - Understand zone verification and why it's important for DNS management.
- [How Does Zone Verification Work?](/articles/zone-verification/) - Learn about the zone verification process and how DNSimple validates DNS zones.
- [Why You Should Auto-Import DNS Records](/articles/why-auto-import/) - Discover the benefits of automatically importing DNS records when adding domains.
- [Why Should I Use DNSimple as a DNS Hosting Provider?](/articles/dns-hosting/) - Learn about the advantages of using DNSimple for DNS hosting.

## How to manage DNS

Step-by-step guides for managing DNS records, zones, and DNS configuration:

- [How to Use the Record Editor](/articles/record-editor/) - Step-by-step guide to using DNSimple's record editor to manage your DNS records.
- [How To Add Common DNS Records](/articles/how-to-add-dns-records/) - Learn how to add the most commonly used DNS record types.
- [Activating and Deactivating a DNS Zone](/articles/activate-deactivate-dns-zone/) - Instructions for activating or deactivating DNS zones in DNSimple.
- [Managing A Records](/articles/manage-a-record/) - Step-by-step guide to creating, editing, and deleting A records.
- [Managing AAAA Records](/articles/manage-aaaa-record/) - Learn how to manage AAAA records for IPv6 addresses.
- [Managing CAA Records](/articles/manage-caa-record/) - Instructions for managing CAA records to control certificate issuance.
- [Managing CNAME Records](/articles/manage-cname-record/) - Guide to creating and managing CNAME records.
- [Managing Service Binding Records (SVCB and HTTPS)](/articles/manage-service-binding-records/) - Step-by-step guide to creating and managing SVCB and HTTPS records for service binding.
- [Managing TLSA Records](/articles/manage-tlsa-record/) - Step-by-step guide to creating and managing TLSA records for DANE.
- [Managing URL Records](/articles/manage-url-record/) - Learn how to set up and manage URL redirect records.
- [Adding an SRV Record](/articles/add-srv-record/) - Step-by-step instructions for adding SRV records.
- [Adding and Removing DS Records](/articles/manage-ds-record/) - Guide to managing DS records for DNSSEC.
- [Managing DS Records When Changing DNS](/articles/ds-records-changing-dns/) - Learn how to handle DS records when switching DNS providers.
- [Export Zone File](/articles/export-records-zone-file/) - Instructions for exporting your DNS zone file from DNSimple.
- [Import Zone File](/articles/import-records-zone-file/) - Learn how to import a zone file into DNSimple.
- [Auto-Importing DNS Records](/articles/auto-import-dns/) - Guide to automatically importing DNS records when adding a domain.
- [Zone NS Records](/articles/zone-ns-records/) - Learn how to manage name server (NS) records for your zone.
- [Setting up DKIM](/articles/set-up-dkim/) - Step-by-step guide to configuring DKIM for email authentication.
- [Setting up DMARC](/articles/set-up-dmarc/) - Instructions for setting up DMARC to protect your email domain.
- [Querying MX Records](/articles/query-mx-records/) - Learn how to query and verify MX records using various tools.
- [Setting up Simple Dynamic DNS](/articles/set-up-simple-dynamic-dns/) - Guide to configuring Dynamic DNS for automatic IP address updates.
- [Managing Integrated DNS Providers](/articles/integrated-dns-providers/) - Learn how to manage integrated DNS providers in DNSimple.
- [How to Use Route 53 as an Integrated DNS Provider](/articles/amazon-route-53-integration-demo/) - Step-by-step guide to using Amazon Route 53 as an integrated provider.
- [How to Use CoreDNS as an Integrated DNS Provider](/articles/core-dns-tutorial/) - Instructions for using CoreDNS as an integrated DNS provider.
- [Managing Integrated Zones for Integrated DNS Providers](/articles/integrated-dns-provider-zones/) - Guide to managing zones when using integrated DNS providers.
- [Managing Integrated Zone Records](/articles/record-editor-integrated-zones/) - Learn how to manage DNS records in integrated zones.
- [Importing Integrated Zone Records](/articles/import-integrated-zone-records/) - Instructions for importing records into integrated DNS zones.
- [Refreshing and Importing Integrated Zones](/articles/managing-integrated-zones/) - Learn how to refresh and import zones from integrated DNS providers.
- [Syncing Integrated Zone Records Between DNS Providers](/articles/sync-integrated-zone-records/) - Guide to syncing records between DNS providers.
- [Creating a Record Note](/articles/create-record-note/) - Learn how to add notes to DNS records for documentation purposes.
- [Record Notes](/articles/record-notes/) - Understand how to use record notes to document your DNS configuration.
- [How to Use dig](/articles/how-dig/) - Comprehensive guide to using the dig command-line tool for DNS queries.
- [Check DNS Cache](/articles/check-dns-cache/) - Learn how to check and clear DNS cache to verify record changes.
- [Check Resolution Status](/articles/check-resolution-status/) - Instructions for checking if your DNS records are resolving correctly.
- [Verifying DKIM with dig and Online Tools](/articles/verify-dkim/) - Learn how to verify your DKIM configuration using dig and online verification tools.
- [Verifying DMARC with dig and Online Tools](/articles/verifying-dmarc/) - Guide to verifying DMARC records using dig and online tools.
- [Rotate DNSSEC Keys](/articles/rotate-dnssec-key/) - Step-by-step instructions for rotating DNSSEC keys.

## Troubleshooting DNS issues

Resolve common DNS problems and configuration issues:

- [Troubleshooting DNSimple Name Servers](/articles/troubleshoot-dnsimple-name-servers/) - Solutions for common issues with DNSimple name servers.
- [Troubleshooting Domain Resolution Issues](/articles/domain-resolution-issues/) - Guide to diagnosing and fixing domain resolution problems.
- [Troubleshooting Record Resolution Issues](/articles/record-resolution-issues/) - Learn how to troubleshoot specific DNS record resolution problems.

## DNS reference

Technical specifications, formats, and reference documentation:

- [Supported DNS Records and DNS Record Types](/articles/supported-dns-records/) - Complete list of DNS record types supported by DNSimple.
- [A Record Format](/articles/a-record-format/) - Technical reference for A record format and syntax.
- [AAAA Record Format](/articles/aaaa-record-format/) - Technical reference for AAAA record format and syntax.
- [ALIAS Record Reference](/articles/alias-record-reference/) - Complete reference guide for ALIAS records.
- [CAA Record Format and Policy Tags](/articles/caa-record-format/) - Technical reference for CAA record format and available policy tags.
- [CNAME Record Reference](/articles/cname-record-reference/) - Complete reference guide for CNAME records.
- [DKIM Record Reference](/articles/dkim-record-reference/) - Technical reference for DKIM record format and configuration.
- [DMARC Record Reference](/articles/dmarc-record-reference/) - Complete reference guide for DMARC record syntax and policies.
- [HINFO Record Reference](/articles/hinfo-record-reference/) - Technical reference for HINFO record format.
- [MX Record Reference](/articles/mx-record-reference/) - Complete reference guide for MX record format and priority values.
- [POOL Record Reference](/articles/pool-record-reference/) - Technical reference for POOL record format and load balancing configuration.
- [PTR Record Reference](/articles/ptr-record-reference/) - Complete reference guide for PTR records used in reverse DNS.
- [SOA Record Reference](/articles/soa-record-reference/) - Technical reference for SOA record format and all fields.
- [SPF Record Syntax and Validation Reference](/articles/spf-syntax-validation-reference/) - Complete reference for SPF record syntax and validation rules.
- [SRV Record Format and Components Reference](/articles/srv-record-format/) - Technical reference for SRV record format and all components.
- [SSHFP Record Reference](/articles/sshfp-record-reference/) - Complete reference guide for SSHFP record format.
- [TLSA Record Format and Components Reference](/articles/tlsa-record-format/) - Technical reference for TLSA record format and DANE configuration.
- [TXT Record Format and Long Record Handling](/articles/txt-record-format/) - Technical reference for TXT record format and handling long records.
- [URL Record Format and Technical Details](/articles/url-record-format-details/) - Complete reference guide for URL record format and technical specifications.
- [dig Reference Guide](/articles/dig-reference-guide/) - Comprehensive reference guide for the dig command-line tool.
- [DNSimple Interface Reference for DNS Management](/articles/interface-reference/) - Complete reference for DNSimple's web interface and DNS management features.
- [Understanding DNSimple's Record Editors Simple vs. Field-Specific](/articles/record-editor-simple-field/) - Reference guide explaining the differences between simple and field-specific record editors.
- [IPv6 Domain Resolution Reference](/articles/ipv6-support/) - Technical reference for IPv6 domain resolution and AAAA records.
- [Resolving with DNSimple](/articles/resolving-with-us/) - Technical reference for displaying and embedding a "Resolving with DNSimple" badge on websites.
