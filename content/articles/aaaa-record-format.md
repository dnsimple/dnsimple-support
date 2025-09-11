---
title: AAAA Record Format
excerpt: The structure and canonical representation of an AAAA record
meta: Learn more about the structure of AAAA records, their canonical representation, and customizable elements in DNSimple.
categories:
- DNS
---
# AAAA Record Format

The structure of an AAAA record follows the standard top-level format definition defined in [RFC 1035](https://tools.ietf.org/html/rfc1035#section-3.2.1). The RDATA section is composed of one element:

| Element | Description |
|:--------|:-------------------------------------------------------|
| address | A 128-bit Internet address representing an IPv6 address |

The canonical representation is:

```
AAAA <address>
```

where `<address>` is an IPv6 address and looks like `2400:cb00:2049:1::a29f:1804`.

For a broader explanation of what AAAA records are and how they work, see [What Is an AAAA Record](/articles/aaaa-record/)?

In DNSimple, the AAAA record is represented by the following customizable elements:
 
 Element | Description |
|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| Name    | The host name for the record, without the domain name. This is generally referred to as a "subdomain". We automatically append the domain name. |
| TTL     | The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.                                  |
| Address | The IPv6 address the AAAA record points to.                                                                                                   |

## Formatting

Because the same IPV6 address can be represented in different ways, DNSimple normalizes the IPV6 address to the canonical form, as described in RFC 5952 section 4.

Some examples:

- If you provide the IPv6 address `2001:0000:0000:00FE:0000:0000:0000:CDEF`, we will store it as `2001:0:0:fe::cdef`.
- If you provide the IPv6 address `2001:0db8::0001:0000`, we will store it as `2001:db8::1:0`.
- If you provide the IPv6 address `2001:db8:0:0:0:0:2:1`, we will store it as `2001:db8::2:1`.
- If you provide the IPv6 address `::ffff:c000:0280`, we will store it as `::ffff:192.0.2.128`.

## Have more questions?

 If you have any questions or need assistance managing AAAA records, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
