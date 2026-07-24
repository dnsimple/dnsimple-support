---
title: WHOIS Privacy Protection
excerpt: How to enable and disable WHOIS Privacy for a domain.
meta: Enable and disable free WHOIS Privacy for your domain at DNSimple to protect your personal information from public view in domain registration lookups.
categories:
- Whois Privacy
---

# WHOIS Privacy Protection

### Table of Contents {#toc}

* TOC
{:toc}

---

The [WHOIS Privacy protection service](/articles/what-is-whois-privacy/) keeps your contact information private for a domain. This service replaces the public information you provide with an anonymous proxy identity in the public registration record.

WHOIS Privacy is included at no cost on every DNSimple plan. You can enable it for any of your domains at any time, as long as the domain is registered with us and the TLD supports the service.

> [!TIP]
> Not every TLD supports WHOIS Privacy. To check before you start, find the TLD on the [TLD pricing page](https://dnsimple.com/tlds) and look at the WHOIS privacy column.

## Enabling WHOIS Privacy {#enable}

The WHOIS Privacy control is in the contact card on the **Registration** tab of your domain page.

<div class="section-steps" markdown="1">
##### Enable WHOIS Privacy from the domain page {#enable-whois-domain-page}

1. Log in to DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domain Names</label> tab, locate the relevant domain, and click the name to access the domain page.
1. On the domain details page, click the <label>Registration</label> tab on the left side.
1. Find the contact card. It indicates whether the WHOIS Privacy service is enabled.

    ![WHOIS Privacy card](/files/whoisprivacy-domain-card-disabled.png)

1. Click the <label>Enable WHOIS Privacy</label> button.

</div>

Once the service is enabled, the card reads "WHOIS Privacy is enabled" and your contact information is private.

## Disabling WHOIS Privacy {#disable}

You can disable WHOIS Privacy protection from the same card, and enable it again later at any time at no cost.

> [!WARNING]
> Once you disable WHOIS Privacy protection, the contact details of your domain may become public.

<div class="section-steps" markdown="1">
##### Disable WHOIS Privacy from the domain page {#disable-whois-domain-page}

1. Log in to DNSimple with your user credentials.
1. If you have more than one account, select the relevant one.
1. On the header, click the <label>Domain Names</label> tab, locate the relevant domain, and click the name to access the domain page.
1. On the domain details page, click the <label>Registration</label> tab on the left side.
1. Find the contact card. It indicates whether the WHOIS Privacy service is enabled.

    ![WHOIS Privacy card](/files/whoisprivacy-domain-card-enabled.png)

1. Click the <label>Disable WHOIS privacy</label> button.

</div>

## When WHOIS Privacy is not available {#not-supported}

If the TLD does not support the service, the contact card reads "WHOIS Privacy is not supported" and no enable button appears. A request made through the API for an unsupported TLD returns the error "TLD .{tld} does not support WHOIS privacy".

This is a registry restriction rather than an account limitation, so it applies to every domain under that TLD. Check the [TLD pricing page](https://dnsimple.com/tlds) to confirm which TLDs support WHOIS Privacy.

## WHOIS Privacy and registration data redaction {#gdpr}

Registration data for most generic TLDs is already redacted under ICANN's Registration Data Policy, so enabling WHOIS Privacy may make little visible difference in a public lookup for a domain like `.com` or `.dev`. Country code TLDs set their own policies, and some publish more than generic TLDs do.

For what redaction covers, and where WHOIS Privacy still adds protection, see [Domain privacy after GDPR](/articles/domain-privacy-after-gdpr/).

## Have more questions?

If you have any questions about WHOIS Privacy, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
