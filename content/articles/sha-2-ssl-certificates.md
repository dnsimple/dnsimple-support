---
title: SHA-2 SSL Certificates
excerpt: All DNSimple SSL certificates are signed with the SHA-256 hash algorithm.
meta: All SSL certificates issued through DNSimple use SHA-256 (SHA-2) signatures. SHA-1 certificates are no longer issued or trusted by modern browsers.
categories:
- SSL Certificates
---

# SHA-2 SSL Certificates

All SSL certificates issued through DNSimple are signed with the **SHA-256** hash algorithm (part of the SHA-2 family). No action is required on your part -- this has been the default for all DNSimple certificates since 2014.

## What Is SHA-2? {#what-is-sha2}

SHA-2 is a family of cryptographic hash algorithms developed by the National Institute of Standards and Technology (NIST). Certificate authorities use these algorithms when digitally signing certificates. SHA-256, the most widely used variant, replaced the older SHA-1 algorithm, which is no longer considered secure.

All major browsers and operating systems stopped trusting SHA-1 certificates by 2017. Every certificate issued through DNSimple uses SHA-256.

## Compatibility {#compatibility}

SHA-256 certificates are supported by all modern browsers, operating systems, and server platforms. Compatibility issues are limited to very old systems (pre-2006 era), such as:

- Windows XP SP2 and earlier
- Android 2.2 and earlier
- Java 1.4.2 and earlier

If you are serving modern client devices and browsers, SHA-256 compatibility is not a concern.

## Have More Questions?

If you have any questions about certificate signing algorithms, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
