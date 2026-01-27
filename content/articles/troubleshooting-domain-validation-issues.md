---
title: Troubleshooting Domain Validation Issues
excerpt: Solutions for domain validation problems, including missing verification emails, suspended domains, and email address issues.
meta: Troubleshoot domain validation issues with our comprehensive guide. Learn how to resolve verification email problems, domain suspensions, and contact information issues.
categories:
- Domains
---

# Troubleshooting Domain Validation Issues

Domain validation is required by ICANN to ensure the accuracy of contact information in the domain registration database. If you're experiencing problems with domain validation, this guide will help you identify and resolve common issues. For general information about domain validation, see [Domain Validation Requirements](/articles/icann-domain-validation/).

### Table of Contents {#toc}

* TOC
{:toc}

---

## Verification email not received

**Symptom**: You haven't received the domain validation email after registering a new domain or changing your registrant contact information.

**Why it happens**: The verification email is sent to the registrant email address on file. Common reasons for not receiving it include:

- The email is in your spam folder
- The email address is incorrect or outdated
- Email forwarding is not working
- The email address doesn't exist or can't receive mail

**Resolution steps**:

1. **Check your spam folder**: The verification email may have been filtered. Look for messages from:
   - `noreply@emailverification.info`
   - `DNSimple donotreply@name-services.com`

2. **Verify the registrant email address**: [Check the public whois](https://dnsimple.com/whois) to see what email address is on file for your domain.

3. **Resend the verification email**: [Resend the verification email](/articles/resending-domain-validation-email/) from your domain page in DNSimple:
   - Navigate to your domain page in DNSimple
   - Locate the pending verification warning at the top of the page
   - Click **Send registrant verification email**

   ![Resend email verification](/files/resend-domain-verification-email.png)

4. **Wait a few minutes**: After clicking to resend, wait a few minutes for the email to arrive before requesting another resend.

5. **Update the registrant email**: If the email address is incorrect or cannot receive email, [update the registrant contact information](/articles/changing-domain-contact/) to an active email address you can access. For detailed instructions, see [Changing Domain Contacts](/articles/changing-domain-contact/).

## Domain suspended due to validation failure

**Symptom**: Your domain has been suspended and displays a message indicating it's suspended due to validation failure.

**Why it happens**: If your domain's registrant email address is not verified within 15 days, ICANN requires that the domain be suspended. This is part of the [RDDS Accuracy program](https://www.icann.org/resources/pages/rdds-2013-02-28-en).

**What happens when suspended**:

- The domain's name servers are changed to:
  - `ns1.emailverification.info`
  - `ns2.emailverification.info`
- A suspension message appears on your website
- Your email and website services stop working

**Resolution steps**:

1. **Check the suspension page**: Visit your domain in a browser. The suspension page will display instructions on how to verify your registrant information.

2. **Update the registrant email address**: If you cannot receive email at the current registrant address (which may be why the domain was suspended), you must [update the registrant contact information](/articles/changing-domain-contact/) to an active email address you can access. See [Changing Domain Contacts](/articles/changing-domain-contact/) for step-by-step instructions.

3. **Verify the new email address**: After updating the contact information, a new verification email will be automatically sent to the new email address. Click the link in that email to complete the validation process.

4. **Wait for suspension to be lifted**: After verifying the email, the domain suspension will be lifted. This may take between 24 and 48 hours due to DNS caching.

> [!WARNING]
> If your domain is suspended, you may not be able to receive email at addresses associated with the domain because the email services have stopped working. This is why you may need to update the registrant email to an address that's not associated with the suspended domain.

## Email address cannot receive email

**Symptom**: The registrant email address exists but cannot receive email, or you set up the email address after registration.

**Resolution**: 

1. **Set up the email address**: If you created the email address after registration, ensure it's fully set up and can receive email.

2. **Contact support to resend**: Once the email address is ready, contact [support@dnsimple.com](mailto:support@dnsimple.com) to request that the verification email be resent. Be sure to include the domain name that needs to be verified in your email.

3. **Update to a working email**: If the email address cannot be set up or is not working, [update the registrant contact information](/articles/changing-domain-contact/) to an email address that can receive mail. For instructions, see [Changing Domain Contacts](/articles/changing-domain-contact/).

## Verification link expired or not working

**Symptom**: You received the verification email but the link doesn't work or says it has expired.

**Resolution**: 

1. **Request a new verification email**: The verification links can expire. [Resend the verification email](/articles/resending-domain-validation-email/) from your domain page in DNSimple.

2. **Use the latest email**: Always use the link from the most recent verification email you received. Older links may have expired.

3. **Check the URL**: The verification link should go to `https://www.emailverification.info/`. If you're being redirected elsewhere or seeing an error, try copying and pasting the link directly into your browser's address bar.

## Domain locked for transfer due to contact change

**Symptom**: You see a message that your domain is locked for transfer after changing the registrant contact information.

**Why it happens**: When you change the registrant email address or name, ICANN requires a 60-day transfer lock to prevent unauthorized domain transfers. This is a security measure. For more information, see [ICANN 60-Day Lock for Registrant Changes](/articles/icann-60-day-lock-registrant-change/).

**Resolution**: This is expected behavior and cannot be bypassed. The 60-day transfer lock will automatically expire after 60 days. During this time, you can still manage your domain normally; you just cannot transfer it to another registrar.

> [!NOTE]
> The transfer lock only applies to transferring the domain to another registrar. You can still make other changes to your domain, such as updating DNS records or name servers.

## Multiple domains need validation

**Symptom**: You have multiple domains that all need validation, and you're receiving many verification emails.

**Resolution**: 

1. **Verify each domain individually**: Each domain requires its own verification. You must click the verification link in each email you receive.

2. **Use the same email address**: If all domains use the same registrant email address, you'll receive one verification email per domain. Make sure to verify each one.

3. **Bulk verification**: There's no bulk verification option. Each domain must be verified separately by clicking the link in its respective verification email.

## Verification status not updating

**Symptom**: You've verified the email, but the warning message is still showing in your DNSimple account.

**Resolution**: 

1. **Click Refresh**: The system may not have updated yet. On your domain page, click **Refresh** to manually force a refresh of the validation status.

2. **Wait a few minutes**: Sometimes there's a delay between verification and status updates. Wait a few minutes and refresh the page.

3. **Check verification was successful**: Visit `https://www.emailverification.info/` and verify that your domain shows as verified there.

4. **Contact support**: If the status still doesn't update after refreshing, [contact support](https://dnsimple.com/feedback) with your domain name and the date/time you completed verification.

## Have more questions?

If you've tried these troubleshooting steps and are still experiencing issues with domain validation, [contact our support team](https://dnsimple.com/feedback). Please include:

- Your domain name
- The registrant email address on file (you can find this in the [public whois](https://dnsimple.com/whois))
- Whether you've received any verification emails
- Any error messages you've encountered
- Steps you've already taken to resolve the issue

We'll be happy to help you complete the validation process and get your domain back online if it's been suspended.
