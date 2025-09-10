---
title: Common DNS Records
excerpt: Examples of the most common DNS records to configure for your domain.
meta: Discover essential DNS record types for your domain, including A, CNAME, MX, and TXT records. Learn how to configure them effectively for optimal performance.
categories:
- DNS
---

# Common DNS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

<div class="aspect-ratio aspect-ratio--16x9 z-0 mb4">
  <iframe loading="lazy" src="https://www.youtube.com/embed/bifh31N2hFQ?si=uM3Z1oS1SqzQNLT4" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The [Domain Name System (DNS)](/articles/what-is-dns/) is built on various record types, also known as resource records, each serving a specific function. While the DNS ecosystem includes many types, some are foundational for nearly every functional domain, while others are specialized, less common, or have been superseded.

This article will introduce you to the most common and essential DNS record types. We'll outline a basic set of DNS records that most domains need to function correctly for web browsing and email, along with simple ways to verify their presence.

## Understanding the most common DNS record types

Below is a summary of the most frequently used DNS record types. For a deeper dive into each, refer to their linked dedicated explanation articles.

### A record
**Description:** The most fundamental type. An A record maps a human-readable domain name (like `www.example.com`) directly to an IPv4 address (e.g., `192.0.2.1`). It's how your browser finds the specific server hosting a website.

**Learn more:** [What Is an A Record?](/articles/a-record/)

### AAAA record
**Description:** The IPv6 counterpart to the A record. An AAAA record maps a domain name to an IPv6 address (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`), which is increasingly essential for modern internet connectivity.

**Learn more:** [What Is an AAAA Record?](/articles/aaaa-record/)

### CNAME record
**Description:** Functions as an alias, mapping one hostname to another hostname (e.g., `blog.example.com` to `yourblog.wordpress.com`). It's commonly used to reduce duplication and simplify maintenance when multiple names point to the same service.

**Learn more:** [What Is a CNAME Record?](/articles/cname-record/)

### MX record
**Description:** Identifies the mail servers responsible for receiving email for a domain. If you want to receive emails at your domain (e.g., `you@example.com`), these records must be correctly configured.

**Learn more:** [What Is an MX Record?](/articles/mx-record/)

### NS record
**Description:** Delegates a domain or subdomain to a set of authoritative name servers. These records are critical for the DNS hierarchy, telling resolvers which servers are responsible for your domain's DNS information.

**Learn more:** [What Is an NS Record?](/articles/ns-record/)

### SRV record
**Description:** Helps clients locate specific services (like VoIP or instant messaging) by defining the hostname, port, priority, and weight of servers offering that service.

**Learn more:** [What Is an SRV Record?](/articles/srv-record/)

### SOA record
**Description:** The "Start of Authority" record stores vital administrative information about your DNS zone, including the primary name server, the domain administrator's email, and various timers for zone transfers and caching. Every zone must have an SOA record, and DNSimple automatically manages these for you.

**Learn more:** [What Is an SOA Record?](/articles/soa-record/)

### TXT record
**Description:** Used to associate arbitrary text content with a domain. TXT records are highly versatile and are essential for various purposes like email authentication (SPF, DKIM, DMARC) and domain ownership verification.

**Learn more:** [What Is a TXT Record?](/articles/txt-record/)

### CAA record
**Description:** A security record that allows you to specify which Certificate Authorities (CAs) are authorized to issue SSL/TLS certificates for your domain. This helps prevent unauthorized certificate issuance.

**Learn more:** [What Is a CAA Record?](/articles/caa-record/)

### ALIAS record (DNSimple proprietary)
**Description:** A DNSimple-specific record that provides CNAME-like functionality but can be used on the root domain (apex zone) and coexist with other records.

**Learn more:** [What Is an ALIAS Record?](/articles/alias-record/)

### URL record (DNSimple proprietary)
**Description:** A DNSimple-specific record that enables easy web (HTTP) redirects from one hostname to another URL, handled by DNSimple's redirector service.

**Learn more:** [What Is a URL Record?](/articles/url-record/)

## Example DNS records for a typical domain

While every domain's DNS configuration can be unique, a basic set of records is common to most domains for fundamental internet functionality (website and email). If you've just purchased a domain or are reviewing an existing setup, use this as a checklist.

_This article assumes `example.com` is your domain name._

### Root domain record (`example.com`) 
Every domain needs a record for its root (or apex) domain. Without it, your domain won't resolve, and web browsers will return an error.

- **Common configuration:**
    - An **A record** typically points to the IPv4 address where your website is hosted.
    - If you're using a cloud service (like Heroku, Netlify, GitHub Pages) that provides a hostname (not a static IP), and you need other records (like MX) on your root domain, an **ALIAS record** is the typical choice.
    - If the root domain needs to redirect to another URL (e.g.,`www.example.com`), you can use a **URL record**.

<note> 
**A CNAME record cannot be used for the root domain** (`example.com`) if you need any other records (like MX or NS) at that name. An invalid configuration with a CNAME at the root will break other services, like email. 
</note>

- **To verify (using `dig`):**
    - Open your terminal and type `dig example.com`. The `ANSWER SECTION` should return at least one **A record** (or ALIAS/URL records which synthesize as A records in the response).

Example A record output:

```
dig dnsimple.com

;; ANSWER SECTION:
dnsimple.com.		59	IN	A	104.245.210.170
```
    
### `www` Subdomain record (`www.example.com`)
It's common to configure the www subdomain in addition to the root domain.

- **Common configuration:**
    - An **A record** pointing to the same IP address as your root domain.
    - A **CNAME record** pointing to your root domain (`example.com`), which simplifies management if the root domain's IP changes.
    - A **URL record** to redirect `www.example.com` to `example.com` (or vice-versa).
    - An **ALIAS record** for the `www` subdomain is also technically correct, but generally unnecessary. A CNAME usually suffices for this specific subdomain and allows for aliasing.

- **To verify (using `dig`):**
    - Open your terminal and type dig www.example.com.
    - The `ANSWER SECTION` should return at least one A record or exactly one CNAME record.

Example A record output:

    ```
    ;; ANSWER SECTION:
    www.dnsimple.com.	59	IN	A	104.245.210.170
    ```
  
Example CNAME record output (showing the alias chain):

    ```
    ;; ANSWER SECTION:
    www.dnsimple.com.	3599	IN	CNAME	dnsimple.com.
    dnsimple.com.		59	IN	A	104.245.210.170
    ```
    
### MX email records
If you want to receive emails at your domain (e.g., `you@example.com`), you need at least one **MX record** pointing to your domain's mail server(s). For redundancy and reliability, it's common to have two or more MX records, each with different content and priority values.

- **To verify (using `dig`):**
    - Open your terminal and type `dig MX example.com`.
    - The `ANSWER SECTION` should return at least one MX record.

Example MX record output (showing multiple records with different priorities):

    ```
    ;; ANSWER SECTION:
    dnsimple.com.		3599	IN	MX	1 aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	5 alt1.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	5 alt2.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	10 alt3.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	10 alt4.aspmx.l.google.com.
    ```
    
### CAA record (recommended for certificate security)
Adding a **CAA record** to your root domain is strongly recommended. This security record specifies which Certificate Authorities (CAs) are authorized to issue SSL/TLS certificates for your domain, helping to prevent unauthorized certificate issuance.

- **To verify (using `dig`):**
    - Open your terminal and type `dig CAA example.com`.
    - The `ANSWER SECTION` should return at least one CAA record if configured.

Example CAA record output:

    ```
    ;; ANSWER SECTION:
    dnsimple.com.		3599	IN	CAA	0 iodef "mailto:ops@dnsimple.com"
    dnsimple.com.		3599	IN	CAA	0 issue "amazonaws.com"
    dnsimple.com.		3599	IN	CAA	0 issue "sectigo.com"
    dnsimple.com.		3599	IN	CAA	0 issue "letsencrypt.org"
    dnsimple.com.		3599	IN	CAA	0 issuewild "sectigo.com"
    ```
    
## Next steps: configuring your DNS records

Once you understand these common records, you'll be ready to configure them for your domain.

For step-by-step instructions on how to add, edit, or remove any of these DNS records within your DNSimple account, please refer to our dedicated [How-To Guides](/categories/dns/).

To learn how to use dig to verify your DNS records, consult [How to Use dig](/articles/how-dig/).

## Have more questions?

If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
