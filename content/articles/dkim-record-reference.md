---
title: DKIM Record Reference
excerpt: The formal structure, behavior, and key technical details of a DKIM record.
meta: Learn more about the structure, behavior, and technical details for DKIM records.
categories:
- DNS
---

# DKIM Record Reference
This article serves as a reference for the formal structure, restrictions, and key technical details of a [DKIM](/articles/dkim-record/) (DomainKeys Identified Mail) record.

## DKIM Record Format
A DKIM record is not a unique DNS record type with its own number. Instead, it is a specially formatted [TXT record](/articles/txt-record/)  published in DNS. The record's format and tags are specified in RFC 6376.

The DKIM record is always published on a specific subdomain known as the selector record. This is a combination of a selector, the literal `_domainkey`, and the domain name.

The format is: `<selector>._domainkey.<domain.name>`

The value of the TXT record contains a series of tags that define the public key and other policy information. Here are the most common tags:

| Tag | Description | Value |
|:---|:---|:---|
| `v` | **Version**: Indicates the version of DKIM in use. | Must be `DKIM1`. |
| `k` | **Key type**: Indicates the public key algorithm used. | Usually `RSA`. |
| `p` | **Public key**: Used to verify the email's signature. | A Base64-encoded string representing the public key. |
| `t` | **Flags**: A semicolon-separated list of flags. | Commonly `y` for a test mode. |

**Example of a DKIM TXT record:**
```
selector1._domainkey.example.com. IN TXT "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD..."
```

## DKIM record restrictions and notes
**Record type:** DKIM is typically configured using a TXT record, which has a type code of **16**. 

**Selector:** The selector is a name chosen by your email provider to create a unique DNS record. This allows multiple keys to exist under a single domain for different services or key rotation.

**Content:** The content of the TXT record, particularly the public key, is often a very long string of characters. DNS providers, including DNSimple, will handle the necessary splitting and formatting of long TXT records.

## DKIM record management
You can manage DKIM records in DNSimple by creating a TXT record with the `_domainkey` selector provided by your email service provider.

**Example DNSimple configuration:**
Name: `selector1._domainkey` (The domain is appended automatically).
Content: `"v=DKIM1; p=..."`

## Have more questions?
If you have additional questions or need any assistance with your DKIM records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
