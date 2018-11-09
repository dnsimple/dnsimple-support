---
title: Common DNS Records
excerpt: Examples of most common DNS records you may want to configure for your domain.
categories:
- DNS
---

# Common DNS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

The Domain Name System (DNS) is composed by more than 30 different record types (technically called resource records): `A`, `AAAA`, `CNAME`, `MX`, `CAA`, etc. Some record types are very common, others less relevant, and others deprecated or replaced.

[DNSimple supports the most common and traditional record types](/articles/supported-dns-records), as well some newer types introduced to provide innovative services. In this article we'll look at the most common record types and we'll explore the most common DNS records you are likely need for your domain to work properly.


## Common Record Types

The most common DNS record types are:

| Type | Description |
|------|-------------|
| [`A` record](/articles/a-record) | This record is by far the most popular and famous one. The A record is used to create a DNS record that points to an IPv4 address. It allows to use easily memonic names name such as `www.example.com` in place of IP addresses sich as `127.0.0.1`. |
| [`CNAME` record](/articles/a-record) | this record works as an alias and maps a particular name to another name. It's often used to reduce duplication in domain name configurations, or to simplify the maintenance of multiple records connected to the same IP address. In the last years its use has increased as it's one of the common mechanisms adopted by cloud services to provision customer-specific services. |
| [`MX` record](/articles/mx-record) | This record is used to identify mail servers to which mail should be delivered for a domain. You needs to have these records to your domain in order to receive emails. |
| [`TXT` record](/articles/txt-record) | This record allows a domain administrator to insert any text content into DNS records. These records are used for various purposes. One common example is for ownership validation: a provider may require to add to your domain a TXT record with a particular value, to prove you own the domain. |
| [`NS` record](/articles/ns-record) | This record is used to delegate a subzone to a set of name servers. It's very common because these are the type of records you need to modify when you want to delegate a domain to a DNS provider. Each domain must have a minimum of 1 NS record, the average number is 3-4. |
| [`SOA` record](/articles/soa-record) | This record stores important information about the DNS zone (your domain). It's very common because each zone must have an SOA record. However, it's unlikely that you'll have to create a SOA record directly. For instance, DNSimple automatically manages the SOA records for you for all your domains. |


## Common DNS Records

Although it's domain is unique and will likely have a very special DNS configuration, there is a basic set of DNS records that are quite common among the majority of the domains.

If you just purchased a domain or you are reviewing your domain DNS configuration, compare the DNS records in your domain with the following ones to determine if you are missing anything.

<info>
This article assumes `example.com` is your domain name.
</info>

### 1. Root domain (`example.com`)

Each domain needs to have a record for the root domain. Otherwise, your domain will simply not resolve and accessing the URL in the browser will return a resolution error.

In most cases, this configuration is an A record pointing to the IP where your site is hosted. However, it can also be an ALIAS if your site is hosted elsewhere (this is the common care when you want to point your root domain to a cloud service such as Heroku, Netlify, GitHub, etc.) or an URL record, if this domain needs to redirect elsewhere.

<div class="section-steps" markdown="1">
##### To verify

1. Use `dig example.com` to check the presence of a root record
1. The answer should return at least one A record as below:

    ```
    dig dnsimple.com

    ;; ANSWER SECTION:
    dnsimple.com.		59	IN	A	104.245.210.170
    ```

    <info>
    Both ALIAS and URL record are synthetized as A records.
    </info>

    <note>
    If you see a CNAME record, then your configuration is invalid. The CNAME cannot be used for the root domain.
    </note>
</div>

### 2. www subdomain: (`www.example.com`)

It's not required, but it's quite common to have the `www` subdomain configured as well in addition to the root domain. There are several different possibilities:

1. Using an A record to point to the same IP of the root domain
2. Using a CNAME record to point to the root domain
3. Using an URL record to redirect to the root domain

<tip>
Using an ALIAS record for the `www` subdomain is not incorrect, however it's generally unnecessary. In most cases, you can replace the ALIAS with the CNAME.
</tip>

<div class="section-steps" markdown="1">
##### To verify

1. Use `dig www.example.com` to check the presence of a www record
1. The answer should return at least one A records, or exactly one CNAME record as below:

    ```
    dig www.dnsimple.com

    ;; ANSWER SECTION:
    www.dnsimple.com.	59	IN	A	104.245.210.170
    ```

    ```
    dig www.dnsimple.com

    ;; ANSWER SECTION:
    www.dnsimple.com.	3599	IN	CNAME	dnsimple.com.
    dnsimple.com.		59	IN	A	104.245.210.170
    ```
</div>

### 3. MX email records

If you want to receive emails for your domain, you need to have at least one MX record pointing to your doamin mail server. For rendudancy, there are generally at least 2 or more MX records, each of them with a different content and priority.

<div class="section-steps" markdown="1">
##### To verify

1. Use `dig MX example.com` to check the presence of MX records on the root domain
1. The answer should return at least one MX record as below:

    ```
    dig MX www.dnsimple.com

    ;; ANSWER SECTION:
    dnsimple.com.		3599	IN	MX	1 aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	5 alt1.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	5 alt2.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	10 alt3.aspmx.l.google.com.
    dnsimple.com.		3599	IN	MX	10 alt4.aspmx.l.google.com.
    ```
</div>

### 4. CAA record

It's not required, but it's adviseable to [add a CAA record](/articles/caa-record) on the root domain to specify which certificate authorities can issue a certificate for your domain.

<div class="section-steps" markdown="1">
##### To verify

1. Use `dig CAA example.com` to check the presence of a CAA record on the root domain
1. The answer should return at least one CAA record as below:

    ```
    dig CAA www.dnsimple.com

    ;; ANSWER SECTION:
    dnsimple.com.		3599	IN	CAA	0 iodef "mailto:ops@dnsimple.com"
    dnsimple.com.		3599	IN	CAA	0 issue "amazonaws.com"
    dnsimple.com.		3599	IN	CAA	0 issue "comodoca.com"
    dnsimple.com.		3599	IN	CAA	0 issue "letsencrypt.org"
    dnsimple.com.		3599	IN	CAA	0 issuewild "comodoca.com"
    ```
</div>