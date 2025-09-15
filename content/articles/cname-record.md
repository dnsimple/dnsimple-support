---
title: What Is a CNAME Record?
excerpt: CNAME records can be used to alias one name to another.
meta: CNAME records can be used to alias one name to another. Simplify DNS management, and enhance your website's accessibility with DNSimple.
categories:
- DNS
---

# CNAME Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is a CNAME record?
A CNAME record (record type 5), short for Canonical Name record, is a type of DNS record that allows you to alias one domain name to another. Instead of pointing directly to an IP address like an A record, a CNAME record points to another existing domain name. 

When a DNS resolver queries a domain with a CNAME record, it effectively follows the alias to the target domain, then looks up the final IP address.

## Common use case: managing subdomains
A very common use for CNAME records is simplifying managing subdomains that point to the same server or service as your main domain.

Let's look at a typical setup:

**`example.com` (apex domain) →** has an A record pointing directly to your server's IP address (e.g., `192.0.2.1`).

**`www.example.com` (subdomain) →** has a CNAME record pointing to `example.com`.

When someone visits `www.example.com`:

1. DNS looks up the CNAME record and sees that `www.example.com` points to `example.com`.
1. It checks the records for `example.com`. 
1. The A record for `example.com` provides the IP address of the server.
1. The user is connected to the same destination as if they had typed example.com.

In practice, this means `example.com` and `www.example.com` resolve to the same server, but you only had to configure the IP address once in the A record for the apex domain.

## The advantage of CNAMEs: simplified management
The main benefit of using a CNAME is not having to maintain duplicate records across multiple domains or subdomains.

If your server's IP address changes, you only need to update the A record for `example.com`. Because `www.example.com` is just a CNAME alias, it will automatically follow that update without requiring any further changes. This avoids the need to update multiple A records individually, reducing the chance of errors and streamlining your DNS management.

**Real-world example:** Imagine you're using a website hosting company or a SaaS platform. They might ask you to create a CNAME record that points your subdomain (for example, `store.example.com`) to their domain, such as `app.examplehost.com`.

**Why that helps:** if the provider ever changes their servers or IP addresses, you don't need to touch your DNS settings. Your CNAME record will keep following their domain automatically, so your subdomain always resolves correctly.

## Key characteristics and restrictions
Understanding the fundamental rules of CNAME records is important for correct DNS configuration:

**CNAMEs must point to a domain name, not an IP address:** A CNAME record can never directly point to an IP address. Its sole purpose is to create a pointer to another domain name. DNSimple's record editor will prevent you from attempting to point a CNAME to an IP address.

**CNAMEs cannot coexist with other records for the same name:** This is a fundamental and often misunderstood restriction. If a domain name has a CNAME record, it cannot have any other record types (e.g., [A](/articles/a-record/), [MX](/articles/mx-record/), [TXT](/articles/txt-record/), [NS](/articles/ns-record/), [SOA](/articles/soa-record/)) associated with it. 
- For example, you cannot have both a CNAME record and a TXT record for `blog.example.com`. This is why CNAMEs generally cannot be used for apex domains (like `example.com`). Apex domains require NS and SOA records and often MX records for email. DNSimple offers [ALIAS records](/articles/alias-record/) for aliasing apex domains.
  
**Chained CNAMEs (discouraged):** It's technically possible for a CNAME to point to another CNAME (e.g., `a.example.com` CNAME `b.example.com`, and `b.example.com` CNAME `c.example.com`), this configuration is **_not recommended_**. Each hop in the CNAME chain adds an extra DNS lookup, increasing resolution time, and potentially impacting performance. For optimal efficiency, a CNAME should point as directly as possible to its ultimate canonical name.

## Managing CNAME records in DNSimple
You can add, edit, or remove CNAME records easily in DNSimple's interface.

For step-by-step instructions, see our How-To Guide: [Managing CNAME Records](/articles/manage-cname-record/).

## Have more questions?
If you have additional questions or need any assistance with your CNAME records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
