---
title: What's a TXT Record?
excerpt: What a TXT record is, how to create TXT records with DNSimple, and other details about how we manage them.
categories:
- DNS
---

# What's a TXT Record?

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

### When you provide a deserialized TXT record content

We will consider this validation scenario when the TXT record content you provide is not wrapped between double quotes. This is probably the most common scenario we have too.

On this scenario, there aren't many limitations on what you can do beyond a hard limit of 1000 characters for the serialized version of the content you provide. See the next section to understand what we mean about the serialized version of the TXT record content.

Here's an example of this using our API:

```
curl  -H 'Authorization: Bearer <token>' \
      -H 'Accept: application/json' \
      -H 'Content-Type: application/json' \
      -X POST \
      -d '{"name": "foo", "type": "TXT", "content": "v=spf1 ~all"}' \
      https://api.dnsimple.com/v2/1010/zones/example.com/records
```

### When you provide a serialized TXT record RData

We will consider this validation scenario when the TXT record content you provide is wrapped in double quotes.

On this scenario, we will validate the syntax of the content you provide according to the rules described in the [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035):
- A TXT record's RData is composed of one or more `<character-string>` values that meet the following criteria:
  - They must be wrapped in double quotes
  - Any double quote in them must be escaped with the sequence `\"`
  - They can't be longer than 255 characters including the wrapping double quotes

<note>
The definition of `<character-string>` data type in the RFC 1035 allows values that don't include whitespace to be left unwrapped in double quotes, but **we're enforcing the double quote wrapper** to simplifly handling of TXT records across our system.
</note>

On top of that, we will also check the content you provide doesn't exceed 1000 characters in size.

## Normalization

Our system will store the serialized TXT record RData as the record's content. 

This means that the content you will get when querying our system will always be wrapped in double quotes, with any inner double quote escaped, and split into 255 character-long chunks regardless of how you created it.

Let's imagine you created the following 2048 bit DKIM key:
```
v=DKIM1;t=s;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr1vE7K6XAXKtID2wSBKpHW1cBCghiYvmry5vhYLySPltIpvYvzl5WGAgFTCcOF2QO8BLYvoihjr0oC84LjVt7xO3ZUaG3my3wWQcF0WObJwADl/GawBuum/4lcbJmlLHnqetfGR37WUG+t0NKK+Cz4xRkdtgYPZMYpmNirlhIwHWSNftqD6XI5DEA0LtwCb4gMahkWIKhTuukrVoYh58x7vI7g22AHheo+eypvcjx0SrQn9JnoVuL4mEin9FaSaLOGUah842fy3e21LOdB++yDxER4pha2hbpJHU5imcltOlsILPL1bvRlDaL9ZeN/Yjjyf3ZLEE0hgo94rrnXzM/QIDAQAB
```

After creating a TXT record with that content, this is what our system will output when querying the record:

```
"v=DKIM1;t=s;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr1vE7K6XAXKtID2wSBKpHW1cBCghiYvmry5vhYLySPltIpvYvzl5WGAgFTCcOF2QO8BLYvoihjr0oC84LjVt7xO3ZUaG3my3wWQcF0WObJwADl/GawBuum/4lcbJmlLHnqetfGR37WUG+t0NKK+Cz4xRkdtgYPZMYpmNirlhIwHWSNftqD6XI5DEA0LtwCb4gMa""hkWIKhTuukrVoYh58x7vI7g22AHheo+eypvcjx0SrQn9JnoVuL4mEin9FaSaLOGUah842fy3e21LOdB++yDxER4pha2hbpJHU5imcltOlsILPL1bvRlDaL9ZeN/Yjjyf3ZLEE0hgo94rrnXzM/QIDAQAB"
```
(notice how the `""` sequence on the 4th line marks the end of the first 255 chars-long chunk and the start of the next chunk)