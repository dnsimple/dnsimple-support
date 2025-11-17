---
title: How Does Zone Verification Work?
excerpt: Zone Verification ensures that only the current owner of a domain can add and manage its DNS zone in DNSimple.
categories: 
- DNS
---
# How Does Zone Verification Work?

When adding a zone to DNSimple, you may be asked to verify ownership. This process ensures that only the domain owner can add a zone that still points to DNSimple, helping protect your domain from unauthorized access.

## Steps to complete zone verification

1. Add your zone in DNSimple following the steps in this [article](https://support.dnsimple.com/articles/adding-domain/#creating-a-dns-zone).  
1. We'll check which name servers your domain is currently using.  
1. If verification is needed, we generate two randomized verification name servers (e.g. `ns-random123.dnsimple-verify.com`).  
1. We'll ask you to add these verification name servers at your domain registrar (where you purchased your domain name).  
1. Once DNSimple detects that your domain is pointing to the verification name servers, you'll be notified by email and can proceed with adding the zone. This could take anywhere from a few minutes to a few hours.  
1. After you have added the zone to your DNSimple account, remember to remove the verification name server from the delegation at your domain registrar.  
1. Verifications expire after 48 hours, but you can retry by re-initiating the add zone operation.

<info>  
Each verification is unique. If you let one verification expire and start a new one, we will provide two new verification servers to use. **You will not be able to verify using the servers from the previous verification.**  
</info>

## Important

The verification runs automatically whether you're using the app or the API. We regularly check if the domain is pointing to the verification name servers. You can also click **Verify now** on your DNSimple domain page to trigger the check manually, or resend the request through the API.

Once the verification is successful, you will still need to complete the original step to add the [DNS zone](https://support.dnsimple.com/articles/adding-domain/).

## Have more questions?

If you have more questions or need assistance with zone verification, [contact support](https:/dnsimple.com/contact), and we'll be happy to help.
