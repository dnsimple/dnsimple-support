---
title: A Record Format
excerpt: The structure and canonical representation of an A record
meta: Learn more about the structure of A records, their canonical representation, and customizable elements in DNSimple.
categories:
- DNS
---

# A Record Format

The structure of an A record follows the standard top-level format definition defined in [RFC 1035](https://tools.ietf.org/html/rfc1035#section-3.2.1). The RDATA section is composed of one element:

| Element | Description  |  
| ------- | -------------| 
| Address | A 32 bit Internet address representing an IPv4 address | 

The canonical representation is:

```
A <address>
```
where `<address>` is an IPv4 address and looks like `162.159.24.4`.

For a deeper explanation of what A records are and how they work, see [What Is an A Record](/articles/a-record/)?

In DNSimple, the A record is represented by the following customizable elements:

| Element | Description  |  
| ------- | -------------| 
| Name    |The host name for the record, without the domain name. This is generally referred to as "subdomain". We automatically append the domain name.| 
| TTL |The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.|
|Address| The IPv4 address the A record points to.|

For step-by-step instructions on creating or updating these fields, see our [Managing A Records article](/articles/manage-a-record/).

## Have more questions?

If you have additional questions or need any assistance with your A records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
