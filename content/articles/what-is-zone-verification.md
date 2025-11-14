---
title: What Is Zone Verification and Why Does It Matter?
excerpt: What zone verification is and how it protects your domain and online presence from malicious actors taking control of DNS records.
categories:
- DNS
---

# What Is Zone Verification and Why Does It Matter?

Zone verification is a security measure designed to protect against DNS takeover attacks by ensuring a DNS zone can only be added to DNSimple with the domain owner's explicit permission. This added security layer helps protect your domain and online presence from malicious actors taking control of DNS records.

These types of attacks can lead to website hijacking, phishing, and service disruption. There is an elevated risk when a domain is removed from one DNSimple account but still points to DNSimple's name servers, leaving it vulnerable to being added to another account without the owner's consent.

## When does zone verification occur?

You will be asked to verify your ownership when both of the following conditions are true:

- The domain or zone was previously managed in a different DNSimple account, or its management history is unknown.
- The domain is still delegated to any DNSimple name server (including custom [vanity name servers](/articles/what-are-vanity-name-servers/)).

## How does verification work?

When you are prompted for verification, DNSimple's system generates two temporary, unique verification name servers. To prove you own the domain, you must temporarily update your domain's delegation at your registrar to these verification name servers.

Once DNSimple's system detects that your domain is pointing to these servers, it confirms your ownership and allows you to complete the process of adding the DNS zone to your account. After the zone has been successfully added, you will need to update your domain's delegation at your registrar again, this time to the permanent name servers you plan to use.

**Verifications are unique and expire after 48 hours.** If a verification expires, you will need to start the process over, which will generate a new set of verification name servers.

## Key considerations

- **Automatic checks:** The verification process runs automatically. You can also manually trigger a check from your DNSimple domain page.
- **Verification is a prerequisite:** Successfully completing the verification is required before you can finalize the process of adding the DNS zone.
- **Temporary state:** The verification name servers are a temporary step and must be removed after you have successfully added the zone to your DNSimple account.

## Have more questions? 

If you have additional questions about zone verification, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help. 
