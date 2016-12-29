---
title: .IO Domains
excerpt: This article explains the requirements for .IO domain names.
categories:
- Domains
- Whois Privacy
---

# .IO Domain Names

* TOC
{:toc}

---

This article explains the requirements for .IO domain names.

## Whois Privacy

Per registry policy, `.IO` domains only supports registry-level WHOIS privacy.

In practice, it's not possible to use a proxy registration service (often referred as "WHOIS privacy service") to replace the public WHOIS data for an `.IO` domain. Instead, the `.IO` registry provides a form that you can use to modify the privacy settings for the domain to restrict the amount of private information disclosed.

There are currently 3 privacy levels:

- Display Address only
- No contact information
- All contact information

The _No contact information_ is the most restrictive level of privacy you can configure.

### Change Whois Privacy

To change the privacy level for your .IO domain you need the domain AuthCode. [Contact us](https://dnsimple.com/contact) from the email associated to your account to request the AuthCode for your domain.

<note>
The AuthCode will be sent to the email associated with the domain registration, **not** to the domain associated with your account. If you want to use a different email, you will have to [change the contact for the domain](/articles/changing-domain-contact/).
</note>

Once you receive the AuthCode, go to the [registry privacy setting](https://www.nic.io/privacy.xzx) page. Enter the domain name, the AuthCode you received via email, select the privacy level and confirm.

The changes will be reflected immediately. You can check which information are disclosed by using our [WHOIS tool](https://dnsimple.com/whois).


## Renewing a .IO domain

`.IO` domains are **auto-renewal only** and cannot be renewed manually at this time. The [auto-renewal feature](/articles/domain-auto-renewal) must be set 1 month before the domain will expire as explained in the ["auto-renew only" article](/articles/auto-renew-only-domains).

**The best solution is to always have auto-renewal enabled**.

<warning>
When new `.IO` domains are registered with DNSimple we default to auto-renewing the domain in order to avoid issues. **Please do not disable auto-renewal on `.IO` domains unless you are absolutely sure you do not want the domain renewed**.
</warning>

<note>
You may receive one or more emails from the `.IO` registry *after* your .IO domain has been submitted for auto-renewal but before the domain is renewed by the `.IO` registry. As long as you have received notification from us indicating your domain has been renewed, you do not need to worry about this email.
</note>
