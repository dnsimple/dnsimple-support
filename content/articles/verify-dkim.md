---
title: Verifying DKIM with dig and Online Tools
excerpt: How to verify your DKIM record is being returned correctly.
meta: Learn how to verify your DKIM record is working and find online tools to help monitor.
categories:
- DNS
- Emails
---

# Verifying DKIM With dig and Online Tools
The `dig` tool is a good way to verify your [DKIM record](/articles/dkim-record/) is being returned correctly by our DNS servers.

To verify the DKIM record, query for the [TXT record](/articles/txt-record/)  at the fully qualified domain name where the TXT record lives. 

For example, on the domain example.com, you can get the TXT record using the following query:

```
dig +short google._domainkey.example.com TXT
```
This will return a result like this:
```
"v=DKIM1\; k=rsa\; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3QEKyU1fSma0axspqYK5iAj+54lsAg4qRRCnpKK68hawSd8zpsDz77ntGCR0X2mHVvkf0WEOIqaspaG/A5IGxieiWer+wBX8lW2tE4NHTE0PLhHqL0uD2sif2pKoPR3Wr6n/rbiihGYCIzvuY4/U5GigNUGls/QUbCPRyzho30wIDAQAB"
```
If no result is returned, verify the TXT record was added with the correct subdomain. 

> [!INFO]
> The **Name** field in DNSimple should not include your domain name, otherwise you will create a record at `subdomain.yourdomain.com.yourdomain.com`.

## Verifying your DKIM with an online tool
Verify your DKIM with an online tool like [this one from Treehouse](https://www.mail-tester.com/spf-dkim-check). This tool verifies that you have [SPF](/articles/spf-record/) and DKIM records. In the DKIM selector field, add the first part of the subdomain your DKIM is under. For example, if your DKIM is at `google._domainkey.example.com`, then the DKIM selector is `google`.

## Technical details
For more information about the technical details of DKIM, head over to [DKIM.org](http://dkim.org).

If you want more details on DKIM record formats, view our [DKIM Record Reference](/articles/dkim-record-reference/).

## Have more questions?
If you have additional questions or need any assistance with your DKIM records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
