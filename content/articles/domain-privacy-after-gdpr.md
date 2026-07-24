---
title: Domain privacy after GDPR
excerpt: How registration data redaction works today, what it hides, and what it means for SSL certificate validation and domain transfers.
meta: Registration data for most gTLDs is redacted by default under ICANN policy. Learn what is hidden, how to disclose your data, and how it affects SSL validation.
categories:
- Whois Privacy
---

# Domain privacy after GDPR

### Table of Contents {#toc}

* TOC
{:toc}

---

Registration data for most generic top-level domains is redacted by default. A public lookup returns the domain, its dates, and its registrar, but not the registrant's name, address, phone number, or email address. This started as a response to the GDPR in May 2018 and is now permanent ICANN policy, so it applies whether or not you use [WHOIS Privacy](/articles/what-is-whois-privacy/).

## What replaced WHOIS {#rdap}

Registration data is now published through RDAP (Registration Data Access Protocol) rather than WHOIS.

As of 28 January 2025, ICANN removed the requirement for gTLD registrars, and most gTLD registries, to run a WHOIS service. RDAP is the definitive source for gTLD registration data. The registries for `.com`, `.name`, and `.post` are the remaining exceptions still required to provide WHOIS, and many other providers have shut their WHOIS services down.

In practice this means a WHOIS lookup that used to work may now return nothing at all. If you need to check registration data for a domain, use an RDAP client or a lookup service that queries RDAP.

Country code TLDs are outside ICANN's gTLD contracts and set their own policies. Some publish more registration data than gTLDs do, and some publish less.

## What redaction covers {#redaction}

Under ICANN's [Registration Data Policy](https://www.icann.org/en/contracted-parties/consensus-policies/registration-data-policy), which took effect on 21 August 2025 and replaced the GDPR-era Temporary Specification, registrars collect the same registration data as before but publish only a limited subset.

Redaction is applied by the registry or registrar as a matter of policy. It is not something you enable, and it is not something you can be charged for.

[WHOIS Privacy](/articles/whois-privacy/) still has a role. Redaction is applied to the published record, while WHOIS Privacy replaces your details with a proxy identity at the registrar. For TLDs that publish more data, privacy protection covers what redaction does not.

## Publishing your registration data on purpose {#disclosure}

Some registrants want their data public, for example to prove ownership or to be reachable about the domain. You can opt in to disclose it.

<div class="section-steps" markdown="1">
##### Request data disclosure

1. [Contact support](https://dnsimple.com/feedback) and ask to disclose the registration data for your domain.
1. You will receive an email containing a personalized link to `domain-contact.org`.
1. Follow the link and select which fields to disclose. You can choose among name, organization, address, phone number, fax number, and email address.
1. Save your selection.

</div>

A few things worth knowing about this process:

- The link stays valid for 30 days. Within that window you can use it more than once to change your selection or withdraw consent.
- Where registry policy allows, your choice applies to every domain linked to that contact as registrant, administrative, technical, or billing contact.
- Choosing to disclose does not guarantee publication. The registry controls the published output and may continue to redact fields regardless of your selection.

## SSL certificate validation {#certificate-validation}

Requesting an SSL certificate requires proving control of the domain. Certificate authorities historically emailed the address in the public registration record. Since that address is now redacted, that route is no longer available.

For Sectigo certificates ordered through DNSimple, validation is done by email to a constructed address on your domain. Sectigo accepts these five:

```
admin@your-domain
administrator@your-domain
hostmaster@your-domain
postmaster@your-domain
webmaster@your-domain
```

You need to be able to receive mail at one of them before the certificate can be issued.

> [!NOTE]
> Sectigo also supports DNS and file-based validation for certificates ordered directly through Sectigo. Certificates ordered through DNSimple use email validation, so one of the addresses above is required.

If your domain is not already set up to receive email, you can use [email forwarding](/articles/email-forwarding/) to route one of these addresses to an inbox you already read, then remove the forward once the certificate is issued. Some email providers let you add an alias instead, which avoids monitoring a separate mailbox.

While a certificate is being requested, the certificate page shows a <label>Manage email validation</label> link. Use it to switch to a different address or to resend the validation email.

## Domain transfer validation {#transfer-validation}

Some registrars send a transfer authorization email to the address in the registration record. When that address is redacted or replaced by a privacy proxy, the message may never arrive.

If you are transferring a domain away from another registrar, disable privacy protection there first so the verification email reaches you. See [Whois Privacy and Transfer Approval Emails](/articles/whois-privacy-blocks-transfer-email/) for the full explanation.

## Have more questions?

If you have any questions about registration data privacy, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
