---
title: Setting up DMARC
excerpt: How to set up DMARC in your DNSimple account.
meta: Learn how to set up DMARC and what to expect from your email provider.
categories:
- DNS
- Emails
---

# Setting up DMARC

[DMARC](/articles/dmarc-record/) (Domain-based Message Authentication, Reporting & Conformance) is configured by adding a policy record to your DNS zone as a [TXT record](/articles/txt-record/). The DMARC policy tells receiving mail servers how to handle messages that fail [SPF](/articles/spf-record/) or [DKIM](/articles/dkim-record/) authentication checks. You can define your own DMARC policy, or your email service provider (e.g., [Google Workspace](https://support.google.com/a/answer/2466563), [Postmark](https://postmarkapp.com/guides/dmarc), or [SendGrid](https://sendgrid.com/en-us/blog/what-is-dmarc)) may recommend specific policy values.

## Steps to set up DMARC {#steps-to-set-up-dmarc}

<div class="section-steps" markdown="1">
##### Add a DMARC TXT record

1. If you have more than one account, select the relevant one from the account switcher.
1. On the header, click the <label>Domain Names</label> tab, then click the domain where you want to set up DMARC.
1. On the domain page, click <label>DNS</label> at the top-right to open the <label>Record Editor</label>.
1. Click <label>Add record</label>, and select **TXT** as the record type.
1. In the <label>Name</label> field, enter `_dmarc`.
1. In the <label>Content</label> field, enter your DMARC policy string. A typical DMARC policy looks like this:
   ```
   v=DMARC1;p=reject;pct=100;rua=mailto:postmaster@yourdomain.com
   ```
1. Click <label>Add record</label> to save.
</div>

> [!TIP]
> Your subdomain should be `_dmarc`. The leading underscore character is required

## Quotes and slashes {#quotes-and-slashes}
If your provider gave you the DMARC record, and it included double quotes around the record, or backslashes before semi-colons in the record, you can safely remove them. The quotes are handled automatically by our name servers, and the semicolons will automatically be escaped if necessary.

Sometimes there will be forward slashes or other unusual characters in the DMARC record. Do not modify those. If you have any questions, [contact support](https://dnsimple.com/feedback).

## Managing DMARC records {#managing-dmarc-records}
DMARC records are added as TXT records. To update or remove them, follow the instructions in the [Record Editor](/articles/record-editor/) guide.

For a comprehensive reference on DMARC record tags and their values, see the [DMARC Record Reference](/articles/dmarc-record-reference/).

## Next steps {#next-steps}

After adding your DMARC record:

- [Verify your DMARC record](/articles/verifying-dmarc/) is correctly published and returning the expected values.
- Consider [implementing a gradual DMARC policy](/articles/implementing-a-gradual-dmarc-policy/), starting with monitoring (`p=none`) before moving to `quarantine` and `reject`.

## Have more questions? {#have-more-questions}
If you have additional questions or need any assistance with your DMARC records, just [contact support](https://dnsimple.com/feedback), and we will be happy to help.
