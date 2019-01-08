---
title: What's a DKIM Record?
excerpt: What a DKIM record is, and how DKIM records work.
categories:
- DNS
- Emails
---

# DKIM Records

### Table of Contents {#toc}

* TOC
{:toc}

---

DKIM stands for DomainKeys Identified Email. It provides a way to validate that an organization delivering an email has the right to do so.


## Setting up DKIM

DKIM requires the addition of public keys into your DNS zone. The key is often provided to you by the organization that is sending your email, for example [SendGrid](https://sendgrid.com/docs/Glossary/dkim.html), [Postmark](http://support.postmarkapp.com/customer/portal/articles/64739-what-is-dkim-), or [Google Apps](https://support.google.com/a/answer/174124?hl=en). The key will either be inserted directly into your zone as a TXT record, or it will be a CNAME pointing to the key in your provider's DNS.

If you're given a string representing the DKIM, it will usually look something like this:

    k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGMjj8MVaESl30KSPYdLaEreSYzvOVh15u9YKAmTLgk1ecr4BCRq3Vkg3Xa2QrEQWbIvQj9FNqBYOr3XIczzU8gkK5Kh42P4C3DgNiBvlNNk2BlA5ITN/EvVAn/ImjoGq5IrcO+hAj2iSAozYTEpJAKe0NTrj49CIkj5JI6ibyJwIDAQAB

This should be inserted into a TXT record. You can do this by following the instructions for [creating a record](/articles/record-editor/#create-a-record), selecting TXT as the record type, and entering the string you were given in the Content field.

Your provider will also give you a specific subdomain to use, usually something like this:

    something._domainkey

You will enter this subdomain in the "Name" field.

If your provider gives you a fully-qualified name that ends with your domain name, you should NOT include your domain name in the "Name" field when you add the TXT record. For example, if you are given `pm._domainkey.yourdomain.com`, only enter `pm._domainkey` in the "Name" field.


## Quotes and slashes?

If your provider gave you the DKIM record and it included double quotes around the record, or backslashes before semi-colons in the record, you may safely remove them. The quotes are handled automatically by our name servers, and the semi-colons will automatically be escaped if necessary.

Note that sometimes there will be forward slashes, or other unusual characters, in the DKIM record. You should not modify those. If you have any questions or concerns, feel free to [contact support](https://dnsimple.com/contact).


## Verifying your DKIM with dig

The [dig](https://newsletter.dnsimple.com/how-to-dig/) tool is a good way to verify that your DKIM record is being returned correctly by our DNS servers.

To verify the DKIM record, you will need to query for the TXT record at the fully qualified domain name where the TXT record lives. For example, on the domain aetrion.com, I can get the TXT record using the following query:

    dig +short google._domainkey.aetrion.com TXT

This will return a result like this:

    "v=DKIM1\; k=rsa\; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3QEKyU1fSma0axspqYK5iAj+54lsAg4qRRCnpKK68hawSd8zpsDz77ntGCR0X2mHVvkf0WEOIqaspaG/A5IGxieiWer+wBX8lW2tE4NHTE0PLhHqL0uD2sif2pKoPR3Wr6n/rbiihGYCIzvuY4/U5GigNUGls/QUbCPRyzho30wIDAQAB"

If no result is returned, verify that you added the TXT record with the correct subdomain. Remember the "Name" field in DNSimple should not include your domain name, otherwise you'd create a record at `subdomain.yourdomain.com.yourdomain.com`.


## Verifying your DKIM with an online tool

You may also want to verify your DKIM with an online tool like [this one](https://www.mail-tester.com/spf-dkim-check) from Treehouse. This tool verifies that you have SPF and DKIM records. In the DKIM selector field, just add the first part from the subdomain your DKIM is under. For example, if my DKIM is at `google._domainkey.aetrion.com`, then the DKIM selector is "google".


## Technical details

If you want to read more about the technical details of DKIM, head over to [DKIM.org](http://www.dkim.org/).
