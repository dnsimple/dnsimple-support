---
title: Zone Verification 
excerpt: Zone Verification ensures that only the current owner of a domain can add and manage its DNS zone in DNSimple.
categories: 
- DNS
---

# Zone Verification

### Table of Contents {#toc}


* TOC
{:toc}
---

## What is Zone Verification?

Zone Verification is a security measure designed to ensure that only the current owner of a domain can add and manage its DNS zone in DNSimple, especially when the domain was previously associated with another DNSimple account.

This added security layer helps protect your domain and online presence.

## Why was this introduced?

Zone Verification protects against DNS takeover attacks to prohibit a malicious actor from taking control of DNS records by re-adding a domain that still points to DNSimple after being removed from another account. These attacks can lead to website hijacking, phishing, and service disruption.

## When does Zone Verification occur?

You will be asked to verify ownership when both of the following are true:

- The domain or zone was previously managed in a different DNSimple account, or it's unknown who managed it.
- The domain is still delegated to any DNSimple name server (including custom vanity name servers).

If the domain is being added back to the **same** account it was last managed in, no verification is required.

## How does verification work?

1. Add your zone following [these steps](/articles/adding-domain/).
1. We check which name servers your domain is currently using.
1. If verification is needed, we generate two randomized verification name servers (e.g. `ns-random123.dnsimple-verify.com`) pointing to one of our IPs.
1. You'll be asked to add these verification name servers at your domain registrar (where you purchased your domain name).
1. Once DNSimple detects the changes, you'll be notified by email and can proceed with adding the zone.
1. After you have added the zone to your DNSimple account, remember to remove the verification name server from the delegation at your domain registrar.
1. **Verifications expire after 48 hours**, but you can retry by re-initiating the add zone operation.
   
<note>
Each verification is unique. If you let one verification expire and start a new one, you will be provided two new verification servers to use. You will not be able to verify using the servers of the previous verification.
</note>

## Important

The verification runs automatically, whether you're using the UI or the API. We regularly check if the domain is pointing to the verification name servers, but you can also trigger the check manually by clicking **Verify now** in the UI or resending the request through the API.

Once the verification is successful, you will still need to complete the original step to add the [DNS zone](/articles/adding-domain/).

If verification doesn't pass, the zone won't be added to your account.

## Need more help?

If you have more questions or need assistance with zone verification, [contact support](https://dnsimple.com/contact), and we'll be happy to help.
