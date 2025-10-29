---
title: TXT Record Format and Long Record Handling
excerpt: Technical specifications, formatting rules, and validation constraints for TXT records.
meta: Learn more about the structure of TXT records, their technical specifications, and how DNSimple handles their validation constraints.
categories:
- DNS
---

# TXT Record Formatting and Long Record Handling
This document serves as a reference for the technical specifications, formatting rules, and validation constraints that apply to [TXT (Text) records](/articles/txt-record/)  in the [Domain Name System](/articles/what-is-dns/), with a specific focus on how DNSimple processes and manages these records, particularly for long content strings.

## TXT record format basics
A TXT record is fundamentally composed of one or more strings of plain text. According to RFC 1035, each individual string within a TXT record can be up to 255 characters in length.

### DNSimple's input handling for TXT records
DNSimple's system simplifies the process of creating and updating TXT records by handling much of the complex RFC-defined formatting automatically. 

**We consider two main scenarios for input:**

**Scenario 1: Providing an unquoted value (deserialized input)**

This is the most common and recommended way to provide your TXT record content in DNSimple. Enter the raw text string without adding any double quotes (") around it.
- **DNSimple's processing**: When you provide an unquoted value, our system will automatically serialize the content to conform to DNS standards. This involves:
    - Wrapping the entire content in double quotes (").
    - Automatically escaping any double quotes (") that are present within your original text string with a backslash (\").
    - Example: If you input `I have "quoted text" here`, DNSimple stores it internally and publishes it as `"I have \"quoted text\" here"`.
- **Constraints**: When providing unquoted input, the total length of your content (after DNSimple's automatic serialization, including added quotes and escaped characters) is limited to 1000 characters.
  
**Scenario 2: Providing a value wrapped in double quotes (serialized input)**

The provided TXT record content is already enclosed in double quotes (e.g., copied directly from another source that presents it in RFC-compliant serialized form).
- **DNSimple's processing**: Our system will store and publish this content verbatim, without making any modifications. You are responsible for ensuring that the content adheres strictly to RFC 1035 rules for serialized TXT records, including:
    - The entire value must be wrapped in double quotes.
    - Any double quote characters (") that are present within the content string must be escaped with the sequence \".
- **Constraints**: The total length of the content you provide (including quotes and escaped characters) must not exceed 1000 characters.

## Handling long TXT records
According to RFC 1035, if a TXT record's content exceeds 255 characters, it must be split into multiple strings (or "chunks"), each not exceeding 255 characters. These chunks are then concatenated by DNS resolvers during lookup.

DNSimple's system manages the splitting of long TXT records transparently, with: 

- **Simplified input**: You are not required to manually split long TXT record content into 255-character chunks when entering it into DNSimple. You can provide the entire long string as a single value.
- **Automatic splitting**: DNSimple will automatically handle the necessary splitting of your long content into compliant 255-character chunks before publishing it to our name servers. This ensures maximum interoperability across the internet's DNS infrastructure.
- **Pre-Split input (advanced)**: If you provide a long TXT record content that is already wrapped in double quotes and manually split into chunks (e.g., `""chunk1""` `""chunk2""`), our system will store it as is. However, if any of your provided chunks individually exceed the 255-character limit, DNSimple's system may further split those into smaller, compliant chunks to adhere to industry standards.

### Example: long 2048-bit DKIM public key
Consider a typical 2048-bit DKIM public key, which is often longer than 255 characters.

**Input provided to DNSimple (as a single, unquoted string)**:
```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxUDvrr1HvQ079r5vXSxesSjWuLETvRFT4fduNGuT+X/EoWsy/BcFGGlhLu3T21DJiniY0bAGlPHo7Z6Gv/z22fceR45Q9/9oQed9kQDaZhlcnCzYK/2VM3KY0Rkoet/76t1DYlvq60BzZEAC5u1iau3cezho5j1qU6tL1WgVtYDiC2IFrdLGwVm34k3E/bBy9HxiayI1LpWbDKNjnksEKsU85XOWYMj5EWqDR0wbiLGjdqyGbu7zD7NkiE8qWToLL83P1h8qatK8EIfmxbleFS1m5QSvWXIsDNDTA4u6fDG6/JkggbmY/toj8CPQ7Ze6SCoOFvoL4W+9wnBspC51qwIDAQAB
```
How DNSimple stores it (internal serialized form):
```
"v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxUDvrr1HvQ079r5vXSxesSjWuLETvRFT4fduNGuT+X/EoWsy/BcFGGlhLu3T21DJiniY0bAGlPHo7Z6Gv/z22fceR45Q9/9oQed9kQDaZhlcnCzYK/2VM3KY0Rkoet/76t1DYlvq60BzZEAC5u1iau3cezho5j1qU6tL1WgVtYDiC2IFrdLGwVm34k3E/bBy9HxiayI1LpWbDKNjnksEKsU85XOWYMj5EWqDR0wbiLGjdqyGbu7zD7NkiE8qWToLL83P1h8qatK8EIfmxbleFS1m5QSvWXIsDNDTA4u6fDG6/JkggbmY/toj8CPQ7Ze6SCoOFvoL4W+9wnBspC51qwIDAQAB"
```
How DNS resolvers see it (resolved and potentially split into chunks by DNSimple):
```
example.com. 3600 IN TXT "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxUDvrr1HvQ079r5vXSxesSjWuLETvRFT4fduNGuT+X/EoWsy/BcFGGlhLu3T21DJiniY0bAGlPHo7Z6Gv/z22fceR45Q9/9oQed9kQDaZhlcnCzYK/2VM3KY0Rkoet/76t1DYlvq60BzZEAC5u1iau3cezho5j1qU6tL1WgVtYDiC2IFrdLGwVm34k3E/bB" "y9HxiayI1LpWbDKNjnksEKsU85XOWYMj5EWqDR0wbiLGjdqyGbu7zD7NkiE8qWToLL83P1h8qatK8EIfmxbleFS1m5QSvWXIsDNDTA4u6fDG6/JkggbmY/toj8CPQ7Ze6SCoOFvoL4W+9wnBspC51qwIDAQAB"
```
(The resolved output is split into multiple 255-character chunks, often by a space character sequence between the quoted chunks).

## Quotes and special characters in TXT values

**Double quotes**: If your provider gives you a TXT record value that is already enclosed in double quotes (e.g., `"v=DKIM1;..."`), you can provide it directly as serialized input. DNSimple will store it verbatim.

**Backslashes before semicolons**: Some external tools or providers might show backslashes before semicolons (e.g., `v=DKIM1\;`). These are typically for display purposes in certain environments. When providing unquoted input to DNSimple, you can usually remove these backslashes; our system will handle necessary escaping automatically. If providing quoted input, ensure any internal backslashes are correct for RFC compliance.

**Other characters**: Do not modify forward slashes or any other unusual characters that are part of the legitimate value string (e.g., within a Base64 encoded key, or an email/URL). Only handle quotes and backslashes as described above.

## References
**RFC 1035, Section 3.3.14**: [Domain Names - Concepts and Facilities (TXT record specification)](https://datatracker.ietf.org/doc/html/rfc1035).

## Have more questions?
If you have additional questions or need any assistance with your TXT records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
