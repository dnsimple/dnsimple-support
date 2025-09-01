---
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

<info>
.BANK registrations are only available on Enterprise plans. See our [pricing page](https://dnsimple.com/pricing) for more details.
</info>

## Registering a .BANK domain {#registering}

### Eligibility

To register a .BANK domain, your organization must meet specific eligibility requirements, and the domain name(s) you select must correspond to your organization's legal name or branding.
To avoid any confusion, review the [Organization Eligibility and Domain Name Eligibility guidelines](https://register.bank/eligibility/) before proceeding.

### Security requirements

Once a .BANK is registered, you must adhere to the security policies outlined by the registry [Security Requirements](https://register.bank/implementation-guide/#security). The registry will monitor to ensure every .BANK meets these  requirements:
- Authoritative name servers must be correctly named and configured.
- .BANK domain names must be signed with DNSSEC with strong cryptographic algorithms.
- .BANK web sites must be secured with HTTPS.
- .BANK web servers must use TLS 1.2 or higher.
- .BANK domain names must include SPF and DKIM records if they are used to send email.
- All vendors providing web and mail hosting services must follow the same DNSSEC and TLS requirements.

### How DNSimple helps you

DNSimple implements the following security requirements:

- The vanity name servers feature enables the use of your own domain as the NS records for your zone. For example, domain.bank will have the ability to use ns1.domain.bank, ns2.domain.bank, ns3.domain.bank, and ns4.domain.bank, mapped to the DNSimple name servers. Learn more about [managing Vanity Name Servers](https://support.dnsimple.com/articles/vanity-nameservers/).
- DNSimple supports signing zones with DNSSEC using SHA-256. We automatically rotate signing keys every 90 days. The key rotation window lasts 7 days. At the beginning of the key rotation, an email is sent to your account email address with the information for the new DS record that must be configured at your domain registrar. If your registrar supports automatic configuration via these DNS record types, our system automatically publishes CDS/CDNSKEY records. Learn more about [managing DNSSEC](https://support.dnsimple.com/categories/dnssec/).
- Let's Encrypt certificates are available through DNSimple at no additional charge. These certificates are invalidated every 90 days, so you will need to ensure the latest certificate is installed in any of your web servers when new certificates are generated. If you use our HTTPS redirection service, Let's Encrypt certificates can be automatically generated and used for the redirection of your domain name. Learn more about [SSL certificates](https://support.dnsimple.com/articles/ssl-certificates/).
- TLS settings must be configured in your web server. If you use our HTTPS redirection service, HTTP requests will be automatically encrypted using TLS 1.2 or higher.
- SPF and DKIM records are implemented as TXT records in your zone, and DNSimple fully supports them. Learn more about [DNS records](https://support.dnsimple.com/categories/dns/).
- DNSimple's URL redirection service is compliant with the requirements set forth by the .BANK registry for handling HTTPS requests over TLS. Learn more about our [URL Redirector](https://support.dnsimple.com/articles/redirector/).

### Registration

Before initiating the domain registration through DNSimple, you must request a registration token from the registry:

1. Go to [https://register.bank/get-started/](https://register.bank/get-started/)
2. When completing this form, under Registrar of Choice:
  - Select: Key-Systems, LLC.
  ![screenshot: bank registrar](/files/domains-ftld-registrar.png)
3. Once completed, you'll receive a token. Keep this token;  you'll need it to complete the [registration in DNSimple](https://support.dnsimple.com/articles/registering-domain/).

### DNSimple requirements

To ensure compliance with fTLD registry policies and DNSimple's internal security requirements:

- MFA is required for all DNSimple accounts registering .BANK domains. Learn how to [enforce MFA on your account](https://support.dnsimple.com/articles/multi-factor-authentication-enforcement/).
- API access is disabled by default to prevent bypassing MFA via integrations. To enable API access, please reach out to [customer support](https://dnsimple.com/feedback).

## Renewal process and annual re-verification

All .BANK domain holders are subject to annual re-verification by the registry.

To ensure a smooth re-verification process:
1. Keep your DNSimple account information up to date, including:
  - Registrant contact and organization details
  - Telephone number and physical address
2. fTLD now requires additional contact details to support the annual re-verification process:
  - Government Regulatory Authority and ID
  - HR contact information
  - Manager contact information

These details help Symantec, the registry's verification partner, complete verification efficiently.

If you haven't previously provided this information, or if your details have changed, please contact us so we can update your re-verification records.

<warning>
To avoid delays or suspension, please inform your organization contacts to expect outreach from Symantec for employment and authority verification.
</warning>

## Have more questions?

If you have any questions or need assistance with registering domains with DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
