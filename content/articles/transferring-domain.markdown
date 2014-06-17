---
title: Transfer a Domain to DNSimple
excerpt: 
categories:
- Domain Transfers
---

# Transfer a Domain to DNSimple

If you simply want to use DNSimple to host your DNS for a domain, then [follow our instructions for switching to our name servers](http://support.dnsimple.com/articles/delegating-dnsimple-hosted/).

If you want DNSimple to act as your domain registrar then follow the following steps.

### Before You Start

- If you use your registrar's DNS services, set up your DNS with DNSimple (or another provider) and switch your name servers on the domain **before** you begin the transfer. This is very important to avoid downtime.
- A domain may only be transferred if it was registered more than 60 days ago and has not been transferred within the last 60 days.
- Most registrars will not allow an expired domain to be transferred. However, if the domain expires during the transfer the registrar may not block the transfer due to the expiration.

### At Your Current Registrar

- Unlock your domain.
- Turn off whois privacy.
- Get your domain authorization code. This code is often sent by your current registrant via email.
- Make sure you can receive emails at the email address specified for the current registrant of the domain. You may want to [check out how the domain looks in the public whois](https://dnsimple.com/whois) to verify.

### At DNSimple

- Log into DNSimple and click on "Add a Domain"
- Check the box that says "Register or transfer this domain"
- You may also enable "Whois Privacy Protection" so that it is enabled immediately upon completion of the transfer by checking the "Enable WHOIS Privacy Protection" check box.
- Press "Add Domain"
- Select a registrant, enter your authorization code if it is required, and fill in any extended attributes.
- Press "Transfer Domain"

### What's Next?

Your domain transfer request will now be issued if there are no missing fields. For most domain extensions, the current registrant will receive an email from info@transfer-approval.com to authorize the transfer. Follow the instructions in the email. We cannot issue the transfer request to the registry without approval of this email.

Once you've authorized the transfer, you may have to wait up to 7 days your domain transfer to complete.

We will only charge your credit card for the transfer once it has completed.

Transferred domains will be extended the minimum required extension period. For example, .com domains will always be extended 1 year when they are transferred. The price of this extension is included in the transfer fee.

You can go to your domain list at any time to check on the status of pending transfers. Click on "transfer in process" to view detailed information about the transfer request.
