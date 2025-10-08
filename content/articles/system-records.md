---
title: What Are System Records?
excerpt: What system records are, and how they work in DNSimple.
meta: Learn what system records are, their importance in DNS management, and why you cannot edit them.
categories:
- DNS
---

# What Are System Records?
System records are a specific set of DNS records that DNSimple automatically creates and manages for your domain when you add it to your account. Unlike other DNS records you configure yourself (like [A](/articles/a-record/), [CNAME](/articles/cname-record/), or [MX records](/articles/mx-record/), system records are fundamental to the proper functioning and resolution of your domain within the global Domain Name System.

These records are managed directly by the DNSimple system to ensure optimal performance, reliability, and adherence to DNS standards. Because of their critical nature, they cannot be directly edited or removed from the standard record editor within your DNSimple account.

## What system records include and why they are necessary
When your domain is actively resolving using DNSimple's name servers, the system records typically include:

### SOA (Start of Authority) records
- **Purpose:** The SOA record is the administrative blueprint for your DNS zone. It contains vital metadata about the zone, such as its primary name server, the email address of the person responsible for the zone, and crucial timers that govern how frequently other DNS servers should check for updates (refresh), retry failed attempts, and when cached data should expire.
- **Why it's necessary:** Without an SOA record, your DNS zone cannot be properly managed or synchronized across the internet, leading to resolution failures. DNSimple automatically optimizes these values for you.
- **Learn more:** [What Is an SOA Record?](/articles/soa-record/)

### Four NS (Name Server) records
- **Purpose:** These NS records explicitly identify DNSimple's authoritative name servers (e.g., `ns1.dnsimple.com`, `ns2.dnsimple-edge.net`, etc.) as the source of truth for your domain's DNS information. They are the records that the Top-Level Domain (TLD) registry points to, effectively delegating authority for your domain to DNSimple.
- **Why they're necessary:** These records are the backbone of DNS delegation. They tell the entire internet where to go to find all other records for your domain. If these were missing or incorrect, your domain would not resolve.
- **Learn more:** [What Is an NS Record?](/articles/ns-record/) 

You can typically view these system records in your domain's **Manage** page within your domain's zone.

## Why system records cannot be edited
System records are non-editable in the standard record editor for several key reasons:

- **Ensuring reliability:** They contain critical configuration details that, if misconfigured, could completely break your domain's resolution, making your website and email inaccessible. DNSimple manages them to guarantee continuous service.

- **Standard compliance:** The values and presence of these records must adhere to strict DNS protocols and best practices to ensure global interoperability. Automatic management prevents non-compliance.

- **Systemic management:** Many updates to your zone (e.g., [adding a new A record](/articles/manage-a-record/)) require an increment to the SOA serial number. DNSimple's system handles these behind-the-scenes updates automatically, ensuring your zone files remain consistent and synchronized with secondary DNS servers.

While you cannot manually modify these specific system records, any changes you make to your domain's other DNS records are correctly reflected and managed in accordance with the system records. If you use [vanity name servers](/articles/what-are-vanity-name-servers/), the external NS records would change, but DNSimple would still manage the underlying zone's SOA and NS records internally as it remains the DNS host.

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
