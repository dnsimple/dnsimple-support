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

- [Change of Non-Compliant ENT Behavior](/articles/change-non-compliant-ent-behavior/) - Learn about changes to non-compliant enterprise behavior that may affect your DNS configuration.
- [Discontinuation of Legacy NS2 and NS4 IP Addresses](/articles/discontinuation-legacy-ns2-ns4-ip-addresses/) - Information about the discontinuation of legacy NS2 and NS4 IP addresses and how it affects your DNS setup.

<info>
These articles contain information that is only relevant to specific customers. If you're impacted, you will receive an email from DNSimple.
</info>

## What is DNS?

Learn about DNS fundamentals, DNS records, and DNS concepts:

- [What is DNS?](/articles/what-is-dns/) - Understand the fundamentals of the Domain Name System and how it translates domain names to IP addresses.
- [What is Time-to-Live?](/articles/what-is-time-to-live/) - Learn about TTL (Time-to-Live) and how it controls how long DNS records are cached.
- [What's the Minimum Time-To-Live Provided by DNSimple?](/articles/minimum-ttl-dnsimple/) - Discover the minimum TTL values that DNSimple provides for your DNS records.
- [How Long Does It Take for a New Record to Resolve for My Domain?](/articles/how-long-for-new-record-to-resolve/) - Understand the time it takes for new DNS records to become available after creation.
- [What Is Resolution Status?](/articles/what-is-resolution-status/) - Learn about resolution status and how to check if your DNS records are resolving correctly.
- [What Is dig?](/articles/what-is-dig/) - Introduction to the dig command-line tool for querying DNS servers.
- [What Is Dynamic DNS?](/articles/what-is-dynamic-dns/) - Understand Dynamic DNS and how it allows you to update DNS records automatically when your IP address changes.
- [What Is a Zone File?](/articles/what-is-zone-file/) - Learn about zone files and how they contain DNS record information for a domain.
- [Domain Zone Files](/articles/domain-zone-files/) - Comprehensive guide to domain zone files and their structure.
- [Common DNS Records](/articles/common-dns-records/) - Overview of the most frequently used DNS record types and their purposes.
- [What Is an A Record?](/articles/what-is-an-a-record/) - Learn about A records and how they map domain names to IPv4 addresses.
- [What Is an AAAA Record?](/articles/what-is-an-aaaa-record/) - Understand AAAA records and how they map domain names to IPv6 addresses.
- [What Is an ALIAS Record?](/articles/what-is-an-alias-record/) - Discover ALIAS records and how they provide CNAME-like functionality at the root domain.
- [What Is a CAA Record?](/articles/what-is-a-caa-record/) - Learn about CAA (Certificate Authority Authorization) records and how they specify which CAs can issue certificates.
- [What Is a CNAME Record?](/articles/what-is-a-cname-record/) - Understand CNAME records and how they create aliases for domain names.
- [What Is a DKIM Record?](/articles/what-is-a-dkim-record/) - Learn about DKIM (DomainKeys Identified Mail) records and email authentication.
- [What Is a DMARC Record?](/articles/what-is-a-dmarc-record/) - Understand DMARC (Domain-based Message Authentication) records and email security.
- [What Are DS Records?](/articles/what-are-ds-records/) - Learn about DS (Delegation Signer) records used for DNSSEC validation.
- [What Are Glue Records?](/articles/what-are-glue-records/) - Understand glue records and how they help resolve name servers for your domain.
- [What Are HINFO Records?](/articles/what-are-hinfo-records/) - Learn about HINFO records and how they describe host hardware and operating system information.
- [What Is an MX Record?](/articles/what-is-an-mx-record/) - Understand MX (Mail Exchange) records and how they direct email to mail servers.
- [What Is an NS Record?](/articles/what-is-an-ns-record/) - Learn about NS (Name Server) records and how they delegate DNS authority.
- [What Are NAPTR Records?](/articles/what-are-naptr-records/) - Understand NAPTR (Name Authority Pointer) records and their use in advanced DNS routing.
- [What Is a POOL Record?](/articles/what-is-a-pool-record/) - Learn about POOL records and how they enable load balancing across multiple IP addresses.
- [What Are Reverse DNS Lookups and PTR Records?](/articles/what-are-reverse-dns-lookups-ptr-records/) - Understand reverse DNS lookups and PTR records that map IP addresses to domain names.
- [What Is an SOA Record?](/articles/what-is-an-soa-record/) - Learn about SOA (Start of Authority) records and their role in DNS zone management.
- [What Is an SPF Record?](/articles/what-is-an-spf-record/) - Understand SPF (Sender Policy Framework) records and email authentication.
- [What Is an SRV Record?](/articles/what-is-an-srv-record/) - Learn about SRV (Service) records and how they specify service locations.
- [What Are SSHFP Records?](/articles/what-are-sshfp-records/) - Understand SSHFP records and how they store SSH public key fingerprints.
- [What Are System Records?](/articles/what-are-system-records/) - Learn about system records that DNSimple automatically manages for your domain.
- [What Is a TXT Record?](/articles/what-is-a-txt-record/) - Understand TXT records and how they store arbitrary text data for various purposes.
- [What Is a URL Record?](/articles/what-is-a-url-record/) - Learn about URL records and how they redirect domains to web addresses.
- [Differences Between A and CNAME Records](/articles/differences-between-a-and-cname-records/) - Understand the key differences between A and CNAME records and when to use each.
- [Differences Among A, CNAME, ALIAS, and URL Records](/articles/differences-among-a-cname-alias-url-records/) - Compare A, CNAME, ALIAS, and URL records to choose the right record type for your needs.
- [What Is Anycast DNS and Why Use It?](/articles/what-is-anycast-dns-why-use-it/) - Learn about Anycast DNS and the benefits it provides for DNS resolution speed and reliability.
- [Anycast DNS](/articles/anycast-dns/) - Comprehensive guide to Anycast DNS and how DNSimple implements it.
- [Protection Against DDoS Attacks](/articles/protection-against-ddos-attacks/) - Understand how DNSimple protects your DNS infrastructure against DDoS attacks.
- [What Is EDNS Client Subnet Support?](/articles/what-is-edns-client-subnet-support/) - Learn about EDNS Client Subnet (ECS) and how it improves DNS resolution accuracy.
- [Regional Records](/articles/regional-records/) - Understand regional records and how they enable location-based DNS responses.
- [Reverse DNS Zones](/articles/reverse-dns-zones/) - Learn about reverse DNS zones and how to configure PTR records.
- [Why DNSSEC and Secondary DNS may not work together](/articles/why-dnssec-secondary-dns-may-not-work-together/) - Understand compatibility considerations when using DNSSEC with secondary DNS.
- [How ALIAS Records Resolve with Secondary DNS](/articles/how-alias-records-resolve-with-secondary-dns/) - Learn how ALIAS records work when using secondary DNS providers.
- [What Are Integrated DNS Providers and Why Use Them?](/articles/what-are-integrated-dns-providers-why-use-them/) - Understand integrated DNS providers and the benefits of using them with DNSimple.
- [Integrated DNS Providers at DNSimple](/articles/integrated-dns-providers-at-dnsimple/) - Overview of integrated DNS providers available in DNSimple.
- [Integrated DNS Provider Amazon Route 53](/articles/integrated-dns-provider-amazon-route-53/) - Learn how to use Amazon Route 53 as an integrated DNS provider.
- [Integrated DNS Provider Azure DNS](/articles/integrated-dns-provider-azure-dns/) - Learn how to use Azure DNS as an integrated DNS provider.
- [Integrated DNS Provider CoreDNS](/articles/integrated-dns-provider-coredns/) - Learn how to use CoreDNS as an integrated DNS provider.
- [What Is Zone Verification and Why Does It Matter?](/articles/what-is-zone-verification-why-does-it-matter/) - Understand zone verification and why it's important for DNS management.
- [How Does Zone Verification Work?](/articles/how-does-zone-verification-work/) - Learn about the zone verification process and how DNSimple validates DNS zones.
- [Why You Should Auto-Import DNS Records](/articles/why-you-should-auto-import-dns-records/) - Discover the benefits of automatically importing DNS records when adding domains.
- [Why Should I Use DNSimple as a DNS Hosting Provider?](/articles/why-use-dnsimple-dns-hosting/) - Learn about the advantages of using DNSimple for DNS hosting.

## How to manage DNS

Step-by-step guides for managing DNS records, zones, and DNS configuration:

- [How to Use the Record Editor](/articles/how-to-use-record-editor/) - Step-by-step guide to using DNSimple's record editor to manage your DNS records.
- [Record Editor](/articles/record-editor/) - Comprehensive guide to the record editor interface and features.
- [How To Add Common DNS Records](/articles/how-to-add-common-dns-records/) - Learn how to add the most commonly used DNS record types.
- [Activating and Deactivating a DNS Zone](/articles/activating-deactivating-dns-zone/) - Instructions for activating or deactivating DNS zones in DNSimple.
- [Managing A Records](/articles/managing-a-records/) - Step-by-step guide to creating, editing, and deleting A records.
- [Managing AAAA Records](/articles/managing-aaaa-records/) - Learn how to manage AAAA records for IPv6 addresses.
- [Managing CAA Records](/articles/managing-caa-records/) - Instructions for managing CAA records to control certificate issuance.
- [Managing CNAME Records](/articles/managing-cname-records/) - Guide to creating and managing CNAME records.
- [Managing URL Records](/articles/managing-url-records/) - Learn how to set up and manage URL redirect records.
- [Adding an SRV Record](/articles/adding-srv-record/) - Step-by-step instructions for adding SRV records.
- [Adding and Removing DS Records](/articles/adding-removing-ds-records/) - Guide to managing DS records for DNSSEC.
- [Managing DS Records When Changing DNS](/articles/managing-ds-records-when-changing-dns/) - Learn how to handle DS records when switching DNS providers.
- [Export Zone File](/articles/export-zone-file/) - Instructions for exporting your DNS zone file from DNSimple.
- [Import Zone File](/articles/import-zone-file/) - Learn how to import a zone file into DNSimple.
- [Auto-Importing DNS Records](/articles/auto-importing-dns-records/) - Guide to automatically importing DNS records when adding a domain.
- [Zone NS Records](/articles/zone-ns-records/) - Learn how to manage name server (NS) records for your zone.
- [Setting up DKIM](/articles/setting-up-dkim/) - Step-by-step guide to configuring DKIM for email authentication.
- [Setting up DMARC](/articles/setting-up-dmarc/) - Instructions for setting up DMARC to protect your email domain.
- [Querying MX Records](/articles/querying-mx-records/) - Learn how to query and verify MX records using various tools.
- [Setting up Simple Dynamic DNS](/articles/setting-up-simple-dynamic-dns/) - Guide to configuring Dynamic DNS for automatic IP address updates.
- [Managing Integrated DNS Providers](/articles/managing-integrated-dns-providers/) - Learn how to manage integrated DNS providers in DNSimple.
- [How to Use Route 53 as an Integrated DNS Provider](/articles/how-to-use-route-53-integrated-dns-provider/) - Step-by-step guide to using Amazon Route 53 as an integrated provider.
- [How to Use Azure DNS as an Integrated DNS Provider](/articles/how-to-use-azure-dns-integrated-dns-provider/) - Step-by-step guide to using Azure DNS as an integrated provider.
- [How to Use CoreDNS as an Integrated DNS Provider](/articles/how-to-use-coredns-integrated-dns-provider/) - Instructions for using CoreDNS as an integrated DNS provider.
- [Managing Integrated Zones for Integrated DNS Providers](/articles/managing-integrated-zones-integrated-dns-providers/) - Guide to managing zones when using integrated DNS providers.
- [Managing Integrated Zone Records](/articles/managing-integrated-zone-records/) - Learn how to manage DNS records in integrated zones.
- [Importing Integrated Zone Records](/articles/importing-integrated-zone-records/) - Instructions for importing records into integrated DNS zones.
- [Refreshing and Importing Integrated Zones](/articles/refreshing-importing-integrated-zones/) - Learn how to refresh and import zones from integrated DNS providers.
- [Syncing Integrated Zone Records Between DNS Providers](/articles/syncing-integrated-zone-records-between-dns-providers/) - Guide to syncing records between DNS providers.
- [Creating a Record Note](/articles/creating-record-note/) - Learn how to add notes to DNS records for documentation purposes.
- [Record Notes](/articles/record-notes/) - Understand how to use record notes to document your DNS configuration.
- [How to Use dig](/articles/how-to-use-dig/) - Comprehensive guide to using the dig command-line tool for DNS queries.
- [Check DNS Cache](/articles/check-dns-cache/) - Learn how to check and clear DNS cache to verify record changes.
- [Check Resolution Status](/articles/check-resolution-status/) - Instructions for checking if your DNS records are resolving correctly.
- [Verifying DKIM with dig and Online Tools](/articles/verifying-dkim-dig-online-tools/) - Learn how to verify your DKIM configuration using dig and online verification tools.
- [Verifying DMARC with dig and Online Tools](/articles/verifying-dmarc-dig-online-tools/) - Guide to verifying DMARC records using dig and online tools.
- [Rotate DNSSEC Keys](/articles/rotate-dnssec-keys/) - Step-by-step instructions for rotating DNSSEC keys.

## Troubleshooting DNS issues

Resolve common DNS problems and configuration issues:

- [Troubleshooting DNSimple Name Servers](/articles/troubleshooting-dnsimple-name-servers/) - Solutions for common issues with DNSimple name servers.
- [Troubleshooting Domain Resolution Issues](/articles/troubleshooting-domain-resolution-issues/) - Guide to diagnosing and fixing domain resolution problems.
- [Troubleshooting Record Resolution Issues](/articles/troubleshooting-record-resolution-issues/) - Learn how to troubleshoot specific DNS record resolution problems.

## DNS reference

Technical specifications, formats, and reference documentation:

- [Supported DNS Records and DNS Record Types](/articles/supported-dns-records-dns-record-types/) - Complete list of DNS record types supported by DNSimple.
- [A Record Format](/articles/a-record-format/) - Technical reference for A record format and syntax.
- [AAAA Record Format](/articles/aaaa-record-format/) - Technical reference for AAAA record format and syntax.
- [ALIAS Record Reference](/articles/alias-record-reference/) - Complete reference guide for ALIAS records.
- [CAA Record Format and Policy Tags](/articles/caa-record-format-policy-tags/) - Technical reference for CAA record format and available policy tags.
- [CNAME Record Reference](/articles/cname-record-reference/) - Complete reference guide for CNAME records.
- [DKIM Record Reference](/articles/dkim-record-reference/) - Technical reference for DKIM record format and configuration.
- [DMARC Record Reference](/articles/dmarc-record-reference/) - Complete reference guide for DMARC record syntax and policies.
- [HINFO Record Reference](/articles/hinfo-record-reference/) - Technical reference for HINFO record format.
- [MX Record Reference](/articles/mx-record-reference/) - Complete reference guide for MX record format and priority values.
- [POOL Record Reference](/articles/pool-record-reference/) - Technical reference for POOL record format and load balancing configuration.
- [PTR Record Reference](/articles/ptr-record-reference/) - Complete reference guide for PTR records used in reverse DNS.
- [SOA Record Reference](/articles/soa-record-reference/) - Technical reference for SOA record format and all fields.
- [SPF Record Syntax and Validation Reference](/articles/spf-record-syntax-validation-reference/) - Complete reference for SPF record syntax and validation rules.
- [SRV Record Format and Components Reference](/articles/srv-record-format-components-reference/) - Technical reference for SRV record format and all components.
- [SSHFP Record Reference](/articles/sshfp-record-reference/) - Complete reference guide for SSHFP record format.
- [TXT Record Format and Long Record Handling](/articles/txt-record-format-long-record-handling/) - Technical reference for TXT record format and handling long records.
- [URL Record Format and Technical Details](/articles/url-record-format-technical-details/) - Complete reference guide for URL record format and technical specifications.
- [dig Reference Guide](/articles/dig-reference-guide/) - Comprehensive reference guide for the dig command-line tool.
- [DNSimple Interface Reference for DNS Management](/articles/dnsimple-interface-reference-dns-management/) - Complete reference for DNSimple's web interface and DNS management features.
- [Understanding DNSimple's Record Editors Simple vs. Field-Specific](/articles/understanding-dnsimple-record-editors-simple-vs-field-specific/) - Reference guide explaining the differences between simple and field-specific record editors.
- [IPv6 Domain Resolution Reference](/articles/ipv6-domain-resolution-reference/) - Technical reference for IPv6 domain resolution and AAAA records.
- [Resolving with DNSimple](/articles/resolving-with-dnsimple/) - Technical reference for how DNS resolution works with DNSimple.
