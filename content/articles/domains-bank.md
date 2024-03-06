---
meta: This article explains the requirements and special procedures for .BANK domain names.
title: .BANK Domains
excerpt: This article explains the requirements and special procedures for .BANK domain names.
categories:
- Domains
---

# .BANK Domain Names

* TOC
{:toc}

---

This article explains the requirements and special procedures for .BANK domain names.

## Managing a .BANK domain {#managing}

### Security requirements

.BANK domains are a regulated domain with the following specific requirements:

1. All .BANK domain names must use name servers that are also in the .BANK name space.
2. All .BANK domain names must be signed with DNSSEC with strong cryptographic algorithms.
3. All .BANK web sites must be secured with HTTPS.
4. All .BANK web servers must use TLS 1.2 or higher.
5. All .BANK domain names must include SPF and DKIM records if they are used to send email.
6. All vendors that are providing web and mail hosting services must follow the same DNSSEC and TLS requirements.

### How DNSimple helps you

DNSimple implements the following security requirements:

1. To use .BANK domains with DNSimple, the managing account must be on the DNSimple Enterprise plan, which includes vanity name servers. The vanity name servers feature enables the use of your own domain as the NS records for your zone. For example, domain.bank will have the ability to use ns1.domain.bank, ns2.domain.bank, ns3.domain.bank, and ns4.domain.bank, mapped to the DNSimple name servers.
2. DNSimple supports signing zones with DNSSEC using SHA-256. We automatically rotate signing keys every 90 days. The key rotation window lasts 7 days. At the beginning of the key rotation, an email is sent to your account email address with the information for the new DS record that must be configured at your domain registrar. If your registrar supports automatic configuration via these DNS record types, our system automatically publishes CDS/CDNSKEY records.
3. You can acquire Let's Encrypt certificates through DNSimple at no additional charge. Let's Encrypt certificates are invalidated every 90 days, so you will need a process to ensure the latest certificate is installed in any of your web servers when new certificates are generated. If you use our HTTPS redirection service, Let's Encrypt certificates can be automatically generated and will be used for the redirection of your domain name.
4. TLS settings must be configured in your web server. If you use our HTTPS redirection service, HTTP requests will be automatically encrypted using TLS 1.2 or higher.
5. SPF and DKIM records are implemented as TXT records in your zone, and DNSimple fully supports them.
6. DNSimple's URL redirection service is compliant with the requirements set forth by the .BANK registry for handling HTTPS requests over TLS.

### Security reference

For further reading about .BANK security requirements, the .BANK registry provides a comprehensive [Technical Guide to Security Requirements](https://go.ftld.com/full-documentation).
