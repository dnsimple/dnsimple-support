---
title: Set Up Null MX Records
excerpt: Step-by-step guide to configuring null MX records for domains that do not accept email.
meta: Learn how to set up null MX records to prevent email delivery attempts and improve security for domains that do not need email functionality.
categories:
- Emails
- DNS
---

# Set Up Null MX Records
### Table of Contents {#toc}

* TOC
{:toc}

---

Null MX records explicitly indicate that a domain does not accept email. Setting one up prevents mail servers from attempting delivery and helps protect against backscatter.

> [!WARNING]
> Only set up null MX records if you are certain your domain will never need to receive email. If you use email forwarding, email hosting, or might need email in the future, do not use null MX records.

## Prerequisites {#prerequisites}

Before setting up null MX records:

1. **Confirm you do not need email:** Ensure your domain will never need to receive email.
2. **Remove existing email services:** If you are currently using email forwarding or email hosting, you need to disable those services first.
3. **Remove existing MX records:** Any existing MX records must be removed before adding a null MX record.

## Step-by-step instructions {#instructions}

### Step 1: Remove existing email services {#remove-services}

If you are currently using email services, remove them first:

**If using email forwarding:**

<div class="section-steps" markdown="1">
##### Remove email forwarding

1. Navigate to your domain's <label>Email Forwarding</label> tab.
1. Delete all email forwards.
1. This will automatically remove the email forwarding MX records.
</div>

**If using email hosting:**

<div class="section-steps" markdown="1">
##### Remove email hosting records

1. Navigate to your domain's <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Find and delete all existing MX records.
1. If you used a one-click service, remove it from the <label>One-click services</label> section.
</div>

### Step 2: Remove existing MX records {#remove-mx}

Before adding a null MX record, ensure no MX records exist:

<div class="section-steps" markdown="1">
##### Verify and remove MX records

1. Navigate to your domain's <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Look for any existing MX records in the record list.
1. If any MX records exist, click the delete/trash icon next to each MX record and confirm the deletion.
</div>

### Step 3: Add the null MX record {#add-null-mx}

<div class="section-steps" markdown="1">
##### Add a null MX record

1. In the <label>Record Editor</label>, click <label>Add record</label>.
1. Select **MX** as the record type.
1. Configure the null MX record:
   - **Name field:** Leave blank or enter `@` to create the record at the root of your domain (e.g., `yourdomain.com`).
   - **Priority:** Enter `0`.
   - **Mail server:** Enter `.` (a single dot/period).
1. Click <label>Add record</label>.
</div>

> [!NOTE]
> The single dot (`.`) represents the root of the DNS hierarchy and is the standard way to represent "no mail server" in DNS, as specified in RFC 7505.

### Step 4: Verify the null MX record {#verify}

After adding the null MX record, verify it is configured correctly:

1. **Check in DNSimple:** In the Record Editor, verify the MX record shows priority 0 and mail server `.`.

2. **Use dig command:**
   ```
   dig +short yourdomain.com MX
   ```
   This should return: `0 .`

3. **Check DNS propagation:** Use online tools like [whatsmydns.net](https://www.whatsmydns.net/#MX) to verify your null MX record has propagated globally. The record should show priority 0 with mail server `.`.

## What happens after setup {#after-setup}

Once the null MX record is set up and propagated:

- Other mail servers will see the null MX record and know your domain does not accept email.
- Mail servers will not attempt to deliver email to your domain.
- Emails sent to your domain will be immediately rejected or returned to the sender.
- Your domain will not receive bounce messages or non-delivery reports.

## Testing null MX records {#testing}

To test that your null MX record is working:

1. **Send a test email:** Try sending an email to an address at your domain (e.g., `test@yourdomain.com`).
2. **Check for immediate rejection:** The email should be immediately rejected or returned to the sender.
3. **Verify no delivery attempts:** Check your domain's DNS logs (if available) to confirm no delivery attempts were made.

> [!TIP]
> You can also use online email testing tools to verify that mail servers recognize your null MX record and do not attempt delivery.

## Removing null MX records {#removing}

If you need to remove a null MX record (for example, to set up email forwarding or email hosting):

<div class="section-steps" markdown="1">
##### Remove the null MX record

1. Navigate to your domain's <label>DNS</label> tab.
1. Open the <label>Record Editor</label>.
1. Find the null MX record (priority 0, mail server `.`).
1. Click the delete/trash icon.
1. Confirm the deletion.
</div>

After removing the null MX record, you can set up email forwarding or email hosting as needed.

## Common issues and troubleshooting {#troubleshooting}

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

**Problem:** You are trying to use email forwarding but it is not working, and you have a null MX record.

**Solution:**
1. Remove the null MX record first.
2. Then set up email forwarding, which will automatically add the necessary MX records.

## Best practices {#best-practices}

**Use only when needed:** Only set up null MX records if you are certain your domain will never need email.

**Document your decision:** Consider documenting why you are using null MX records for future reference.

**Monitor for issues:** If you notice any unexpected behavior, verify your null MX record is configured correctly.

**Plan for future needs:** If there is any possibility you will need email in the future, do not use null MX records.

## Related topics

- [What Are Null MX Records?](/articles/what-are-null-mx-records/) - Explanation of null MX records and their purpose
- [What Is an MX Record?](/articles/mx-record/) - General information about MX records
- [Email Forwarding](/articles/email-forwarding/) - Information about DNSimple's email forwarding service
- [Set Up MX Records for Email Hosting](/articles/setting-up-mx-records-for-email-hosting/) - Guide to setting up MX records for email hosting

## Have more questions?

If you have additional questions or need any assistance with setting up null MX records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
