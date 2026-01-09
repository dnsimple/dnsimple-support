---
title: What Is an NS Record?
excerpt: What an NS record is, and how to create NS records with DNSimple.
meta: Learn what NS records are, their importance in DNS management, and how to easily create and manage them using DNSimple's user-friendly platform.
categories:
- DNS
---
# NS Records 

### Table of Contents {#toc}

* TOC
{:toc}

## What is an NS record?
An **NS record** (record type 2), short for **Name Server record**, is a fundamental type of DNS record that specifies the authoritative name servers for a domain. Its primary purpose is delegating DNS authority from one set of name servers to another, forming the backbone of how the internet's Domain Name System operates.

NS records tell recursive DNS resolvers where to find the authoritative source of information for a particular domain. They act as signposts in the DNS hierarchy, directing queries to the correct servers.

## How NS Records drive DNS resolution (delegation in action)
The internet's DNS functions like a distributed phone book, structured in a hierarchy. When you type a domain name into your browser, like `www.example.com`, the DNS resolution process is as follows:

1. Your resolver queries a root name server.
1. The root name server directs it to the Top-Level Domain (TLD) name servers (e.g., `.COM`, `.ORG`, etc.).
1. The TLD name servers provide the **NS records** for `example.com`. These NS records point to the authoritative name servers designated for example.com (possibly DNSimple's name servers). This step is called **delegation**.
1. Your resolver queries one of these authoritative name servers (e.g., DNSimple's).
1. DNSimple's authoritative name servers provide the specific [A](/articles/a-record/), [AAAA](/articles/aaaa-record/), [MX](/articles/mx-record/), or other records for `www.example.com`.

To learn more about how DNS works, take a look at our [How DNS Works web comics](https://howdns.works/) or [What Is DNS?](/articles/what-is-dns/) support article.

## DNSimple's role and your domain's NS records
When you delegate a domain to DNSimple, the TLD authorities (like the `.COM` registry) place NS records for your domain in their name servers that point directly to DNSimple's name servers. For example, for `dnsimple.com`, the `.COM` name servers contain entries similar to these, delegating authority to us:
```
dnsimple.com.   172800  IN  NS  ns1.dnsimple.com.
dnsimple.com.   172800  IN  NS  ns2.dnsimple-edge.net.
dnsimple.com.   172800  IN  NS  ns3.dnsimple.com.
dnsimple.com.   172800  IN  NS  ns4.dnsimple-edge.org.
```
These records indicate DNSimple is responsible for all DNS lookups for `dnsimple.com`.

In your DNSimple account, we automatically publish the necessary NS records within your zone file to indicate DNSimple is authoritative for your domain. These records typically appear in the {System Records](/articles/system-records/) section of your domain's management page and will reflect either our default name servers or your vanity name servers (if you have them configured).

### Important considerations and restrictions
**System-managed NS records (non-editable):** You cannot remove or change the NS records that DNSimple automatically publishes as authoritative for your hosted domain within the standard DNS record editor. These are **system records** that signify DNSimple is providing DNS services for your domain, and they are managed automatically by DNSimple.

**Changing domain delegation at the registrar level:** To change which DNS provider is authoritative for your entire registered domain (e.g., to stop using DNSimple for DNS and switch to another provider), this action is performed at your **domain registrar**.

The specification for the DNS NS record is formally defined in [RFC 1035, Section 3.3.11](https://datatracker.ietf.org/doc/html/rfc1035/).

## Managing NS records: directing your domain's authority

When it comes to managing the authoritative name servers for your domain, the process primarily involves updating the delegation at your domain registrar. DNSimple acts as both a domain registrar and a DNS hosting provider, which affects where you make these changes.

### To use DNSimple's name servers (delegate to DNSimple)
**If DNSimple is your domain registrar:** [Update your domain's name servers](/articles/delegating-dnsimple-registered/) directly within your DNSimple account. This points your domain to DNSimple's authoritative name servers.

**If another registrar holds your domain:** Log in to that registrar's control panel, and [update your domain's name servers](/articles/delegating-dnsimple-hosted/), pointing them to DNSimple's name servers (e.g., `ns1.dnsimple.com`, `ns2.dnsimple-edge.net`, etc.).

### To delegate to another DNS provider
**If DNSimple is your domain registrar:** Update your domain's name servers within your DNSimple account, and [enter the name servers of the other DNS provider](/articles/setting-name-servers/#pointing-the-name-servers-to-another-provider/).

> [!NOTE]
> The NS records DNSimple automatically publishes within your DNSimple-hosted zone (indicating DNSimple is the authoritative source for your domain) are system-managed. 
> While you cannot manually edit these specific records in the general record editor, DNSimple provides a dedicated section to configure or update the [Zone NS records](/articles/pointing-domain-to-dnsimple/) if you are setting up advanced configurations (like vanity name servers or transferring DNS authority for your zone).

## Have more questions?
If you have additional questions or need any assistance with your NS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
