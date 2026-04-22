---
title: Set Up DMARC
excerpt: How to set up DMARC in your DNSimple account.
meta: Set up a DMARC record in DNSimple by adding a TXT record with your policy, then verify and monitor aggregate email reports.
categories:
- DNS
- Emails
---

# Set Up DMARC
[DMARC](/articles/dmarc-record/) is a policy you publish as a [TXT record](/articles/txt-record/) in your DNS zone. It tells receiving mail servers how to handle messages that fail [SPF](/articles/spf-record/) or [DKIM](/articles/dkim-record/) checks, and where to send aggregate reports. Your email provider may supply a recommended DMARC value, or you can create one based on the [DMARC Record Reference](/articles/dmarc-record-reference/).

## Steps to set up DMARC {#steps-to-set-up-dmarc}

<div class="section-steps" markdown="1">
##### Set up DMARC

1. Use the **account switcher** at the top right corner of the page to select the appropriate account.
1. From the **Domain Names** list, click the domain where you want to set up DMARC.
1. On the domain page, click **Edit DNS** at the top-right to open the **Record Editor**.
1. In the **Record Editor**, click **Add record**, and select **TXT** as the record type.
1. In the **Name** field, enter `_dmarc`.
1. In the **Content** field, enter your DMARC policy. A common starting policy looks like this:

    ```
    v=DMARC1;p=none;rua=mailto:postmaster@yourdomain.com
    ```

1. Save the record.
</div>

> [!TIP]
> The subdomain must be `_dmarc`. The leading underscore is required. If your provider gives a full hostname like `_dmarc.yourdomain.com`, only enter `_dmarc` in the **Name** field.

## Quotes and slashes {#quotes-and-slashes}
If your provider gave you the DMARC record, and it included double quotes around the record, or backslashes before semi-colons in the record, you can safely remove them. The quotes are handled automatically by our name servers, and the semicolons will automatically be escaped if necessary.

Sometimes there will be forward slashes or other unusual characters in the DMARC record. Do not modify those. If you have any questions, [contact support](https://dnsimple.com/feedback).

## Managing DMARC records {#managing-dmarc-records}
DMARC records are added as TXT records. To update or remove them, follow the instructions in the [Record Editor](/articles/record-editor/) guide.

## Next steps {#next-steps}

After publishing your DMARC record:

1. [Verify your DMARC record](/articles/verifying-dmarc/) is published correctly.
1. Monitor the aggregate reports sent to the address in your `rua` tag. A tool like [Postmark's DMARC reporting](https://dmarc.postmarkapp.com/) provides human-readable weekly digests.
1. Once you are confident legitimate mail is passing, consider [implementing a gradual DMARC policy](/articles/implementing-a-gradual-dmarc-policy/) to move from `p=none` to `p=quarantine` or `p=reject`.

## Have more questions?

If you have additional questions or need assistance with your DMARC records, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
