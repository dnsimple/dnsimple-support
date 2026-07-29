---
title: Whois Privacy and Transfer Approval Emails
excerpt: Whois Privacy services often do not properly deliver transfer approval emails, and thus should be disabled before requesting a transfer.
meta: WHOIS privacy can block domain transfer verification emails. Disable it at your current registrar before transferring to DNSimple to avoid failures.
categories:
 - Whois Privacy
 - Domains and Transfers
---

# Whois Privacy and Transfer Approval Emails

### Table of Contents {#toc}

* TOC
{:toc}

---

When you [transfer a domain name from another registrar into DNSimple](/articles/domain-transfer/), we are required by ICANN to send a transfer verification email to the current registrant email address. That address comes from your **current** registrar, so the privacy setting that matters here is the one on your existing account, not anything in DNSimple. If you start a domain transfer while having whois privacy enabled at your current domain registrar, there is a high probability that the transfer verification email will not be delivered.

There are several reasons a whois privacy provider might not deliver domain transfer emails:

- The email address they provide is generic and will discard any inbound emails.
- The email address they provide is randomized but not correctly forwarded to your registrant email.
- The whois privacy provider is not properly forwarding emails due to technical reasons.

Additionally some whois privacy providers will not permit a domain transfer while whois privacy is enabled.

## Disable privacy at your current registrar {#disable}

To improve the deliverability chance for your domain transfer verification email, you should disable whois privacy on your domain before requesting your transfer.

## Does this expose your contact details? {#exposure}

For most generic TLDs, very little becomes public. Registration data is redacted by default under ICANN policy whether or not privacy protection is enabled, so disabling privacy usually exposes far less than it once did. See [Domain privacy after GDPR](/articles/domain-privacy-after-gdpr/).

Where a TLD does publish contact data, you can re-enable privacy protection as soon as the transfer verification email arrives, which limits how long the information is exposed. Once the transfer completes, [enable WHOIS Privacy at DNSimple](/articles/whois-privacy/) at no cost.

## Have more questions?

If you have any questions about WHOIS privacy and domain transfers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
