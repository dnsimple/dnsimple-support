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

<note>
The RFC 1035 allows text that doesn't include whitespace to be left unwrapped, but **we're enforcing the double quote wrapper** to simplify handling of TXT records across our system.
</note>

On top of that, we will also check the content you provide is at most 1000 characters in size.

## Formatting

Our system stores the serialized version of TXT records (we do that for all the DNS record types, actually), but we don't expect you to provide serialized TXT records to create or update them in our system because it can get complicated and error-prone very easily.

Instead, you can provide values for your TXT records without wrapping them in double quotes, and we will take care of the rest. However, you will see that the value we create is slightly different than the one you provided:
- It will be wrapped in double quotes
- Any double quote character originally present will be escaped with the `\"` character sequence

<info>
If you provide TXT record wrapped in double quotes, our system won't make any change to it and it will store it verbatim
</info>

## Long TXT records

According to the RFC 1035, long TXT records must be split into 255 characters-long chunks, but our system will deal with the splitting of long TXT records transparently. 

<note>
We don't require you to split long TXT records, nor we will store them in a split format
</note>

If you provide a long TXT record content wrapped in double quotes and split into chunks, we will store it as is but the existing chunks could be split further into smaller ones if the original chunks are too big. We do this to maximize our interoperability within Internet's DNS infrastructure by enforcing industry-standard formats.

### Examples

**Content with double quotes**

I you provide us `some "quoted text" here`, we will store it as `"some \"quoted text\" here"`, and the DNS record will be resolved as:
```
example.com. 3600 IN TXT "some \"quoted text\" here"
```

**Long 2048-bit DKIM public key**

I you provide us:
```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxUDvrr1HvQ079r5vXSxesSjWuLETvRFT4fduNGuT+X/EoWsy/BcFGGlhLu3T21DJiniY0bAGlPHo7Z6Gv/z22fceR45Q9/9oQed9kQDaZhlcnCzYK/2VM3KY0Rkoet/76t1DYlvq60BzZEAC5u1iau3cezho5j1qU6tL1WgVtYDiC2IFrdLGwVm34k3E/bBy9HxiayI1LpWbDKNjnksEKsU85XOWYMj5EWqDR0wbiLGjdqyGbu7zD7NkiE8qWToLL83P1h8qatK8EIfmxbleFS1m5QSvWXIsDNDTA4u6fDG6/JkggbmY/toj8CPQ7Ze6SCoOFvoL4W+9wnBspC51qwIDAQAB
```

We will store it as:
```
"v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxUDvrr1HvQ079r5vXSxesSjWuLETvRFT4fduNGuT+X/EoWsy/BcFGGlhLu3T21DJiniY0bAGlPHo7Z6Gv/z22fceR45Q9/9oQed9kQDaZhlcnCzYK/2VM3KY0Rkoet/76t1DYlvq60BzZEAC5u1iau3cezho5j1qU6tL1WgVtYDiC2IFrdLGwVm34k3E/bBy9HxiayI1LpWbDKNjnksEKsU85XOWYMj5EWqDR0wbiLGjdqyGbu7zD7NkiE8qWToLL83P1h8qatK8EIfmxbleFS1m5QSvWXIsDNDTA4u6fDG6/JkggbmY/toj8CPQ7Ze6SCoOFvoL4W+9wnBspC51qwIDAQAB"
```

And the DNS record will be resolved as:
```
example.com. 3600 IN TXT "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxUDvrr1HvQ079r5vXSxesSjWuLETvRFT4fduNGuT+X/EoWsy/BcFGGlhLu3T21DJiniY0bAGlPHo7Z6Gv/z22fceR45Q9/9oQed9kQDaZhlcnCzYK/2VM3KY0Rkoet/76t1DYlvq60BzZEAC5u1iau3cezho5j1qU6tL1WgVtYDiC2IFrdLGwVm34k3E/bB" "y9HxiayI1LpWbDKNjnksEKsU85XOWYMj5EWqDR0wbiLGjdqyGbu7zD7NkiE8qWToLL83P1h8qatK8EIfmxbleFS1m5QSvWXIsDNDTA4u6fDG6/JkggbmY/toj8CPQ7Ze6SCoOFvoL4W+9wnBspC51qwIDAQAB"
```
(notice it is split into two chunks somewhere in the 4th line by the character sequence `" "`)