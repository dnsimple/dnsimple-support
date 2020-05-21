---
title: What's a DMARC record?
excerpt: What a DMARC record is, and how DMARC records work.
categories:
- DNS
- Emails
---

# DMARC Records

### Table of Contents {#toc}

* TOC
{:toc}

---

DMARC stands for Domain-based Message Authentication, Reporting & Conformance. It's an email authentication, policy, and reporting protocol that builds upon SPF and DKIM protocols to help email receivers determine if the purported message aligns with what the receiver knows about the sender. This makes it easier to identify spam or phishing messages, and keep them out of inboxes.

<info>
It is important to note that DMARC works with [SPF](articles/spf-record) and [DKIM](articles/dkim-record) records. You <strong>must</strong> have at these records present for DMARC to work, since DMARC is built around them.
</info>


## Setting up DMARC

DMARC requires the addition of public keys into your DNS zone. The key is often provided to you by the organization that is sending your email, for example [SendGrid](https://sendgrid.com/docs/glossary/dmarc/), [Postmark](https://postmarkapp.com/guides/dmarc?utm_source=dmarc&utm_medium=web&utm_campaign=nav#how-do-i-implement-dmarc-on-my-domain), or [Google Apps](https://support.google.com/a/answer/2466563). The key will be inserted directly into your zone as a TXT record.

If you're given a string representing DMARC, it usually looks something like this:

```
"v=DMARC1;p=reject;pct=100;rua=mailto:postmaster@dmarcdomain.com"
```

Insert this into a TXT record. Do this by following the instructions for [creating a record](/articles/record-editor/#create-a-record), selecting TXT as the record type, and entering the string you were given into the Content field.

Your provider will also give you a specific subdomain to use, usually something like:

```
_dmarc.hostname.com
```

Enter this subdomain in the "Name" field.

<tip>
Your subdomain should be `_dmarc.` The leading underbar character is required.
</tip>


## Quotes and slashes?

If your provider gave you the DMARC record and it included double quotes around the record, or backslashes before semi-colons in the record, you may safely remove them. The quotes are handled automatically by our name servers, and the semi-colons will automatically be escaped if necessary.

Sometimes there will be forward slashes or other unusual characters in the DMARC record. Don't modify those. If you have any questions or concerns, [contact support](https://dnsimple.com/contact).


## Verifying your DMARC with dig

The [dig](/articles/how-dig/) tool is a good way to verify that your DMARC record is being returned correctly by our DNS servers.

To verify the DMARC record, query for the TXT record at the fully qualified domain name where the TXT record lives. For example, on the domain aetrion.com, you can get the TXT record using the following query:


```
dig +short _dmarc.hostname.com TXT
```

This will return a result like this:

```
"v=DMARC1; p=quarantine; pct=100; rua=mailto:aggrep@hostname.com; sp=reject; aspf=r;"
```

If no result is returned, verify that you added the TXT record with the correct subdomain. Remember the "Name" field in DNSimple should not include your domain name, otherwise you'd create a record at `subdomain.yourdomain.com.yourdomain.com`.


## Verifying your DMARC with an online tool

Verify your DMARC with an online tool like [this one](https://mxtoolbox.com/dmarc.aspxk) from MX Toolbox. This tool verifies that you have set up a DMARC record, lets you know which tags and values your record contains, and will alert you of any problems with your record.

## Monitoring DMARC

DMARC will send daily reports to the email specified in the RUA tag to provide an overview of email traffic. These reports are sent in XML format, and can be difficult to read - it's recommended you use a free tool like [Postmark's reporting](https://dmarc.postmarkapp.com/) to provide a weekly, human-readable report.


## Technical details

If you want to read more about the technical details of DMARC, head over to [DMARC.org](https://dmarc.org/).
