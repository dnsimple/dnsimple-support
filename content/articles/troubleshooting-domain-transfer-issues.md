---
title: Troubleshooting Domain Transfer Issues
excerpt: Solutions for common domain transfer problems, including denied transfers, missing authorization codes, and email delivery issues.
meta: Troubleshoot domain transfer issues with our comprehensive guide. Learn how to resolve common problems like denied transfers, missing authorization codes, and email delivery failures.
categories:
- Domains and Transfers
---

# Troubleshooting Domain Transfer Issues

If you're experiencing problems transferring a domain to or from DNSimple, this guide will help you identify and resolve common issues. For step-by-step instructions on transferring a domain, see [Transfer a Domain to DNSimple](/articles/domain-transfer/) or [Transferring a domain away from DNSimple](/articles/transferring-domain-away/).

### Table of Contents {#toc}

* TOC
{:toc}

---

## Transfer request denied

If your domain transfer request is denied, it's typically due to one of the following reasons:

### Domain is locked

**Symptom**: Transfer request is denied with a message indicating the domain is locked.

**Resolution**: Unlock the domain at your current registrar before initiating the transfer. The domain must remain unlocked throughout the transfer process.

1. Log in to your current registrar's account.
2. Navigate to your domain management page.
3. Look for a "Domain Lock" or "Registrar Lock" setting and disable it.
4. Wait a few minutes for the change to propagate, then retry the transfer.

### Domain registered within the last 60 days

**Symptom**: Transfer request is denied because the domain was registered too recently.

**Resolution**: ICANN regulations require that domains be registered for at least 60 days before they can be transferred. You must wait until 60 days have passed since the initial registration date before attempting the transfer again.

### Domain transferred within the last 60 days

**Symptom**: Transfer request is denied because the domain was recently transferred.

**Resolution**: Domains cannot be transferred again within 60 days of a previous transfer. You must wait until 60 days have passed since the last transfer before attempting a new transfer.

### Domain locked due to recent registrant contact change

**Symptom**: Transfer request is denied because the domain is locked for transfer after a recent change to the registrant contact information.

**Why it happens**: When you change the registrant email address or name, ICANN requires a 60-day transfer lock to prevent unauthorized domain transfers. This is a security measure. For more information, see [ICANN 60-Day Lock for Registrant Changes](/articles/icann-60-day-lock-registrant-change/).

**Resolution**: This is expected behavior and cannot be bypassed. The 60-day transfer lock will automatically expire after 60 days. During this time, you can still manage your domain normally; you just cannot transfer it to another registrar. You must wait until 60 days have passed since the registrant contact change before attempting the transfer again.

> [!NOTE]
> The transfer lock only applies to transferring the domain to another registrar. You can still make other changes to your domain, such as updating DNS records or name servers.

### How to issue a new transfer after denial

If your transfer was denied, you must wait until the current transfer request closes before submitting a new one. Most domain registries only allow one transfer request at a time. Once the current request closes, ensure the domain is unlocked and whois privacy is disabled, then [initiate a new transfer](/articles/how-to-issue-new-transfer-when-transfer-denied/).

## Missing or incorrect authorization code

**Symptom**: You don't have the authorization code (also called transfer code, auth code, or EPP code) needed to complete the transfer.

**Resolution**: 

1. **Contact your current registrar**: The authorization code is typically provided by your current registrar. Check your email for messages from your registrar that may contain the code.
2. **Check your registrar's control panel**: Many registrars provide the authorization code in their domain management interface. Look for options like "Get Authorization Code," "Transfer Code," or "EPP Code."
3. **Contact registrar support**: If you cannot find the code, contact your current registrar's support team and request the authorization code for your domain.

For more information about transfer codes, including their format and requirements, see [Domain Transfer Code Reference](/articles/domain-transfer-code-reference/).

> [!NOTE]
> Some registrars may require you to request the authorization code through their system, and it may take a few minutes to generate.

## Transfer approval email not received

**Symptom**: You haven't received the transfer approval email that's required to authorize the transfer.

**Why it happens**: The transfer approval email is sent to the registrant email address on file for the domain. Common reasons for not receiving it include:

- Whois privacy is enabled (see below)
- The email address is incorrect or outdated
- The email is in your spam folder
- Email forwarding is not working correctly

**Resolution steps**:

1. **Check your spam folder**: The email may have been filtered. Look for messages from `donotreply@name-services.com`.
2. **Verify the registrant email address**: [Check the public whois](https://dnsimple.com/whois) to see what email address is on file for your domain.
3. **Disable whois privacy**: If whois privacy is enabled, [disable it before starting the transfer](/articles/whois-privacy-blocks-transfer-email/). Whois privacy services often prevent transfer approval emails from being delivered.
4. **Update the registrant email**: If the email address is incorrect, update it at your current registrar before initiating the transfer.

## Transfer taking too long

**Symptom**: The transfer has been in progress for several days and hasn't completed.

**Why it happens**: Domain transfers can take up to seven (7) days to complete, depending on the domain's top-level domain (TLD) and how quickly the current registrar processes the transfer.

**Resolution steps**:

1. **Check transfer status**: In your DNSimple account, navigate to your domain list and look for domains with "transfer in process" status. Click on it to view detailed information about the transfer request.
2. **Verify approval**: Ensure you've approved the transfer by clicking the link in the approval email sent to the registrant email address.
3. **Contact current registrar**: If the transfer has been pending for more than 5 days, contact your current registrar to ensure they're not holding the transfer. Some registrars require you to approve the transfer on their end as well.
4. **Wait for completion**: Most transfers complete within 3-7 days. The registry processes transfers in batches, so delays are normal.

## Domain expired during transfer

**Symptom**: Your domain expired while a transfer is in progress.

**Resolution**: Expired domains can be transferred as long as the domain is still in its grace period and has not entered the redemption period. This applies to ICANN generic top-level domains (gTLDs); country code TLDs (ccTLDs) may have different rules. For more information, see [What Happens When a Domain Expires?](/articles/what-happens-when-domain-expires/).

If your domain has entered the redemption period, you must [restore the domain](/articles/restoring-domain/) at your current registrar before the transfer can proceed. Contact your current registrar for assistance with restoration.

## DNS downtime during transfer

**Symptom**: Your website or email stops working during or after the domain transfer.

**Why it happens**: Some DNS providers stop serving DNS for a domain as soon as the transfer completes, which can cause downtime if you haven't prepared your DNS configuration.

**Resolution**: To avoid downtime, [point your domain's name servers to DNSimple (or another provider) before you begin the transfer](/articles/before-transferring-domain/). This ensures your DNS continues to work throughout the transfer process.

If you're already experiencing downtime:

1. [Point your domain to DNSimple name servers](/articles/delegating-dnsimple-registered/) after the transfer completes, or [manually configure name servers](/articles/setting-name-servers/) to point to your DNS provider.
2. If you're using an external DNS provider, ensure your name servers are correctly configured to point to that provider.

## DNSSEC issues during transfer

**Symptom**: Your domain uses DNSSEC and you're experiencing DNS resolution issues during or after the transfer.

**Resolution**: If you're changing DNS providers during the transfer, you must [manage your DS records appropriately](/articles/ds-records-changing-dns/):

- **Moving to a provider that does not support DNSSEC**: Disable DNSSEC and remove DS records before switching. For instructions on removing DS records, see [Adding and Removing DS Records](/articles/manage-ds-record/).
- **Moving to a provider that supports DNSSEC**: Enable DNSSEC on the new provider and ensure the new provider's DS record is provisioned before switching. For instructions on adding DS records, see [Adding and Removing DS Records](/articles/manage-ds-record/).

## Transfer cancellation

**Symptom**: You need to cancel a transfer that's already in progress.

**Resolution**: If the domain is still in the transfer process, you can cancel it:

1. Navigate to your domain in your DNSimple account.
2. Under the "Transferring" card, click "View status".
3. Click "Cancel transfer".

The domain will remain with your current registrar, and any held funds will be released.

## Have more questions?

If you've tried these troubleshooting steps and are still experiencing issues with your domain transfer, [contact our support team](https://dnsimple.com/feedback). Please include:

- Your domain name
- The current status of the transfer (if visible in your account)
- Any error messages you've received
- Steps you've already taken to resolve the issue

We'll be happy to help you complete your domain transfer successfully.
