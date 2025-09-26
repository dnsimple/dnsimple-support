---
title: Verifying DMARC with dig and Online Tools
excerpt: How to verify your DMARC record is being returned correctly.
meta: Learn how to verify your DMARC record is working and find online tools to help monitor.
categories:
- DNS
- Emails
---

# Verifying DMARC with dig and Online Tools

## Verifying DMARC with dig

The `dig` tool is a good way to verify your DMARC record is being returned correctly by our DNS servers. To learn more about `dig`, see [How To Use dig](/articles/how-dig/).

To verify the DMARC record, query for the TXT record at the fully qualified domain name where the TXT record lives. For example, on the domain `hostname.com`, you can get the TXT record using the following query:

```
dig +short _dmarc.hostname.com TXT
```
This will return a result like:
```
"v=DMARC1; p=quarantine; pct=100; rua=mailto:aggrep@hostname.com; sp=reject; aspf=r;"
```
If no result is returned, verify that you added the TXT record with the correct subdomain. Remember, the **Name** field in DNSimple should not include your domain name, otherwise it would create a record at subdomain.yourdomain.com.yourdomain.com.

## Verifying your DMARC with an online tool
Verify your DMARC with an online tool like [this one from MX Toolbox](https://mxtoolbox.com/dmarc.aspxk). This tool verifies that you have set up a DMARC record, lets you know which tags and values your record contains, and will alert you to any problems with your record.

## Monitoring DMARC
DMARC will send daily reports to the email specified in the RUA tag to provide an overview of email traffic. These reports are sent in XML format, and can be difficult to read &mdash; we recommend using a free tool, like [Postmark's reporting](https://dmarc.postmarkapp.com/), to provide a weekly, human-readable report.

## Technical details
To read more about the technical details of DMARC, head over to [DMARC.org](https://dmarc.org).

## Have more questions?
If you have additional questions or need any assistance with your DNS records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
