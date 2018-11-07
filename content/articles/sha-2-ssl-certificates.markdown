---
title: SHA-2 SSL Certificates
excerpt: All certificates purchased with DNSimple are currently signed with the SHA-2 hash algorithm.
categories:
- SSL Certificates
---

# SHA-2 SSL Certificates

### Table of Contents {#toc}

* TOC
{:toc}

---

<info>
All certificates purchased with DNSimple are currently signed with the SHA-2 hash algorithm.
</info>

This article provides a simple overview of the SHA-1 to SHA-2 transition plans, as well additional informations on the SHA-2 hash algorithm and SSL certificates purchased with DNSimple previous than September 2014.

## Background

The SHA family of hashing algorithms were developed by the National Institute of Standards and Technology (NIST) and are used by certificate authorities (CAs) when digitally signing issued certificates.

The most popular of these hashing algorithms today is SHA-1. For some time, there have been plans [to deprecate the SHA-1 hashing algorithm in favor of SHA-256](https://casecurity.org/2013/12/16/sha-1-deprecation-on-to-sha-2/). The SHA-2 hashing algorithm, in fact, represents a huge advance in cryptographic security.

Microsoft announced that on January 1, 2016, they would stop trusting code signing certificates generated with a SHA-1 hashing algorithm, and on January 1, 2017, they would stop trusting SHA-1 generated SSL Certificates.

On September 5th, 2014, [Google announced plans for gradually sunsetting SHA-1](http://googleonlinesecurity.blogspot.it/2014/09/gradually-sunsetting-sha-1.html) and introduced visual messages in Google Chrome browser to highlight sites with end-entity certificates that expire between 1 January 2016 and 31 December 2016 and include a SHA-1 based signature as part of the certificate chain.

[This announcement has brought renewed attention](https://blog.dnsimple.com/2014/09/sha-2-and-dnsimple/) to the subject of SSL certificates and their security.

## How does this affect me?

We decided to provide this support page to educate our customers on the subject. However, you unlikely need to worry about the certificates purchased with DNSimple.

DNSimple traditionally offered [Comodo and RapidSSL](/articles/what-ssl-certificate-authorities) certificates. On September 11th, 2014, we switched our system to offer Comodo certificates only.

Comodo has been using SHA-2 hash algorithm by default since August 2014.

- Every wildcard certificate purchased from August/September 2014 and every certificate purchased from September 11th, 2014 is now hashed with SHA-2
- RapidSSL single-name certificates purchased before September 11th, 2014 are hashed with SHA-1. However, since we didn't offer multi-year certificates, all these certificates will expire within September 2015, way within the beginning of the sunsetting phase starting on January 2016.

## SHA-2 SSL certificate compatibility

Certificates issued with the SHA-256 hashing algorithm have support on most modern operating systems. There are some use cases where SHA-256 is not supported. [Read this article](https://support.globalsign.com/customer/portal/articles/1499561-sha-256-compatibility) for minimum version requirements as well as finer compatibility detail and exceptions.
