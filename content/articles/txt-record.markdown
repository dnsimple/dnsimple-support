---
title: What's a TXT Record?
excerpt: What a TXT record is, how to create TXT records with DNSimple, and other details about how we manage them.
categories:
- DNS
---

# TXT Records

### Table of Contents {#toc}

* TOC
{:toc}  

---

## What's a TXT Record?

A TXT record is a resource record used to provide the ability to associate text with a zone. This record allows domain administrators to insert any text content into DNS records. These records are used for various purposes. One example is ownership validation: To prove you own the domain, a provider may require you to add a TXT record with a particular value to your domain.

Common uses for TXT records:

| Type                                    | Description                                                                                                                                                                |
|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DKIM` records](/articles/dkim-record) | This record stores important information used in the validation of email in transit.                                                                                       |
| DMARC records                           | Domain-based Message Authentication Reporting and Conformance records mitigate phishing and spoofing email attacks.                                                        |
| [`SPF` record](/articles/spf-record/)   | This record is used to indicate to mail exchanges which hosts are authorized to send mail for a domain. TXT records should be used instead of the special SPF record type. |
| Site Verification Records               | This record proves ownership of a domain and can be used to associate services such as Microsoft 365 and G-Suite to a specific domain.                                     |

## Validation

We consider two different validation scenarios:

### When you provide an unquoted value (deserialized) {#deserialized_content}

This is the most common scenario.

In this scenario, there are few limitations on what you can do beyond a hard limit of 1000 characters for the serialized version of your content. See the next section to understand what we mean about the serialized version of the TXT record content.

### When you provide a value wrapped in double quotes (serialized) {#serialized_content}

In this scenario, we will validate the syntax of the content you provide according to the rules described in the [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035):
- A TXT is composed of one or more plain text values that meet the following criteria:
  - They must be wrapped in double quotes
  - Any double quote in them must be escaped with the sequence `\"`
  - They can't be longer than 255 characters, including the wrapping double quotes

<note>
These text values are defined in RFC 1035 as `<character-string>`s, which allow values that don't include whitespace to be left unwrapped, but **we're enforcing the double quote wrapper** to simplify handling of TXT records across our system.
</note>

On top of that, we will also check the content you provide is at most 1000 characters in size.

## Serialization

Our system stores the serialized version of TXT records (we do that for all the DNS record types, actually), but we don't expect you to provide serialized TXT records to create or update them in our system because it can get complicated and error-prone very easily.

Instead, you can provide values for your TXT records without wrapping them in double quotes, and we will take care of the rest. However, you will see that the value we create is slightly different than the one you provided:
- It will be wrapped in double quotes
- Any double quote character originally present will be escaped with the `\"` character sequence
- Long TXTs will be broken down into 255 characters-long chunks wrapped in double quotes

<note>
If you provide TXT record content wrapped in double quotes, our system won't make any change to it and it will stored verbatim
</note>

Let's imagine you want to create the following 2048 bit DKIM key:
```
v=DKIM1;t=s;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr1vE7K6XAXKtID2wSBKpHW1cBCghiYvmry5vhYLySPltIpvYvzl5WGAgFTCcOF2QO8BLYvoihjr0oC84LjVt7xO3ZUaG3my3wWQcF0WObJwADl/GawBuum/4lcbJmlLHnqetfGR37WUG+t0NKK+Cz4xRkdtgYPZMYpmNirlhIwHWSNftqD6XI5DEA0LtwCb4gMahkWIKhTuukrVoYh58x7vI7g22AHheo+eypvcjx0SrQn9JnoVuL4mEin9FaSaLOGUah842fy3e21LOdB++yDxER4pha2hbpJHU5imcltOlsILPL1bvRlDaL9ZeN/Yjjyf3ZLEE0hgo94rrnXzM/QIDAQAB
```

After creating a TXT record with that content, this is what our system will output when querying the record:

```
"v=DKIM1;t=s;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr1vE7K6XAXKtID2wSBKpHW1cBCghiYvmry5vhYLySPltIpvYvzl5WGAgFTCcOF2QO8BLYvoihjr0oC84LjVt7xO3ZUaG3my3wWQcF0WObJwADl/GawBuum/4lcbJmlLHnqetfGR37WUG+t0NKK+Cz4xRkdtgYPZMYpmNirlhIwHWSNftqD6XI5DEA0LtwCb4gMa""hkWIKhTuukrVoYh58x7vI7g22AHheo+eypvcjx0SrQn9JnoVuL4mEin9FaSaLOGUah842fy3e21LOdB++yDxER4pha2hbpJHU5imcltOlsILPL1bvRlDaL9ZeN/Yjjyf3ZLEE0hgo94rrnXzM/QIDAQAB"
```
(notice how the `""` sequence on the 4th line marks the end of the first 255 chars-long chunk and the start of the next chunk)