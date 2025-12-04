---
title: Setting Up Null MX Records
excerpt: Step-by-step guide to configuring null MX records for domains that don't accept email.
meta: Learn how to set up null MX records to prevent email delivery attempts and improve security for domains that don't need email functionality.
categories:
- Emails
- DNS
---

# Setting Up Null MX Records

### Table of Contents {#toc}

* TOC
{:toc}

---

Null MX records explicitly indicate that a domain does not accept email. This guide will walk you through setting up null MX records in DNSimple.

<warning>
**Important:** Only set up null MX records if you're certain your domain will never need to receive email. If you use email forwarding, email hosting, or might need email in the future, do not use null MX records.
</warning>

## Prerequisites

Before setting up null MX records:

1. **Confirm you don't need email:** Ensure your domain will never need to receive email.
2. **Remove existing email services:** If you're currently using email forwarding or email hosting, you'll need to disable those services first.
3. **Remove existing MX records:** Any existing MX records must be removed before adding a null MX record.

## Step-by-step instructions

### Step 1: Remove existing email services

If you're currently using email services, you need to remove them first:

**If using email forwarding:**
1. Navigate to your domain's **Email Forwarding** tab.
2. Delete all email forwards.
3. This will automatically remove the email forwarding MX records.

**If using email hosting:**
1. Navigate to your domain's **DNS** tab.
2. Open the **Record Editor**.
3. Find and delete all existing MX records.
4. If you used a one-click service, remove it from the **One-click services** section.

### Step 2: Remove existing MX records

Before adding a null MX record, ensure no MX records exist:

1. Navigate to your domain's **DNS** tab.
2. Open the **Record Editor**.
3. Look for any existing MX records in the record list.
4. If any MX records exist, delete them:
   - Click the delete/trash icon next to each MX record
   - Confirm the deletion

### Step 3: Add the null MX record

1. In the **Record Editor**, click **Add record**.
2. Select **MX** as the record type.
3. Configure the null MX record:
   - **Name field:** Leave blank or enter `@` to create the record at the root of your domain (e.g., `yourdomain.com`).
   - **Priority:** Enter `0`.
   - **Mail server:** Enter `.` (a single dot/period).
4. Click **Add record**.

<info>
The single dot (`.`) represents the root of the DNS hierarchy and is the standard way to represent "no mail server" in DNS, as specified in RFC 7505.
</info>

### Step 4: Verify the null MX record

After adding the null MX record, verify it's configured correctly:

1. **Check in DNSimple:**
   - In the Record Editor, verify the MX record shows:
     - Priority: 0
     - Mail server: `.`

2. **Use dig command:**
   ```
   dig +short yourdomain.com MX
   ```
   This should return: `0 .`

3. **Check DNS propagation:**
   - Use online tools like [whatsmydns.net](https://www.whatsmydns.net/#MX) to verify your null MX record has propagated globally.
   - The record should show priority 0 with mail server `.`

## What happens after setup

Once the null MX record is set up and propagated:

- **Mail servers will recognize:** Other mail servers will see the null MX record and know your domain doesn't accept email.
- **Delivery attempts prevented:** Mail servers will not attempt to deliver email to your domain.
- **Immediate rejection:** Emails sent to your domain will be immediately rejected or returned to the sender.
- **No bounce messages:** Your domain won't receive bounce messages or non-delivery reports.

## Testing null MX records

To test that your null MX record is working:

1. **Send a test email:** Try sending an email to an address at your domain (e.g., `test@yourdomain.com`).
2. **Check for immediate rejection:** The email should be immediately rejected or returned to the sender.
3. **Verify no delivery attempts:** Check your domain's DNS logs (if available) to confirm no delivery attempts were made.

<info>
You can also use online email testing tools to verify that mail servers recognize your null MX record and do not attempt delivery.
</info>

## Removing null MX records

If you need to remove a null MX record (for example, if you want to set up email forwarding or email hosting):

1. Navigate to your domain's **DNS** tab.
2. Open the **Record Editor**.
3. Find the null MX record (priority 0, mail server `.`).
4. Click the delete/trash icon.
5. Confirm the deletion.

After removing the null MX record, you can then set up email forwarding or email hosting as needed.

## Common issues and troubleshooting

### Null MX record not working

**Problem:** Mail servers are still attempting delivery after setting up a null MX record.

**Solutions:**
1. **Verify the record:** Use `dig +short yourdomain.com MX` to confirm the null MX record is published correctly.
2. **Check DNS propagation:** Allow time for DNS changes to propagate (typically a few minutes to a few hours).
3. **Verify format:** Ensure the mail server field is exactly `.` (a single dot), not `..` or anything else.
4. **Check priority:** Ensure the priority is exactly `0`.

### Want to use email after setting up null MX

**Problem:** You set up a null MX record but now need email functionality.

**Solution:**
1. Remove the null MX record (as described above).
2. Set up email forwarding or email hosting as needed.
3. Add the appropriate MX records for your email service.

### Email forwarding not working

**Problem:** You're trying to use email forwarding but it's not working, and you have a null MX record.

**Solution:**
1. Remove the null MX record first.
2. Then set up email forwarding, which will automatically add the necessary MX records.

## Best practices

**Use only when needed:** Only set up null MX records if you're certain your domain will never need email.

**Document your decision:** Consider documenting why you're using null MX records for future reference.

**Monitor for issues:** If you notice any unexpected behavior, verify your null MX record is configured correctly.

**Plan for future needs:** If there's any possibility you'll need email in the future, don't use null MX records.

## Related topics

- [What Are Null MX Records?](/articles/what-are-null-mx-records/) - Explanation of null MX records and their purpose
- [What Is an MX Record?](/articles/mx-record/) - General information about MX records
- [Email Forwarding](/articles/email-forwarding/) - Information about DNSimple's email forwarding service
- [Setting Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - Guide to setting up MX records for email hosting

## Have more questions?

If you have additional questions or need any assistance with setting up null MX records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
