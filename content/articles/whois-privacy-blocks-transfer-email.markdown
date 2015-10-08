---
title: Whois Privacy may cause transfer approval emails to not be delivered
excerpt: Whois Privacy services often do not properly deliver transfer approval emails, and thus should be disabled before requesting a transfer.
categories:
 - Whois Privacy
 - Domain Transfers
---

# Whois Privacy and Domain Transfers

When you transfer a domain name from another registrar into DNSimple, we are required by ICANN to send a transfer verification email to the current registrant email address. If you start a domain transfer while having whois privacy enabled at your current domain registrar, there is a high probability that the transfer verification email will not be delivered.

There are several reasons a whois privacy provider might not deliver domain transfer emails:

- The email address they provide is generic and will discard any inbound emails.
- The email address they provide is randomized but not correctly forwarded to your registrant email.
- The whois privacy provider is not properly forwarding emails due to technical reasons.

Additionally some whois privacy providers will not permit a domain transfer while whois privacy is enabled.

## Disable Whois Privacy

To improve the deliverability chance for your domain transfer verification email, you should disable whois privacy on your domain before requesting your transfer.

## Won't this expose my contact details in the public whois?

Unfortunately, yes, your contact information will be public after you disable whois privacy on your domain. You may be able to re-enable whois privacy after you receive the transfer verification email, which will limit the amount of time your contact information is exposed.
