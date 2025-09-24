---
title: MX Record Reference
excerpt: The formal structure, behavior, and key technical details of an MX record.
meta: Learn more about the structure, behavior, and technical details for MX records.
categories:
- DNS
---

# MX Record Reference
This article serves as a reference for the formal structure, components, and key technical details of a Mail eXchange (MX) record.

## MX record format
An MX record specifies the mail servers responsible for a domain. The structure follows the standard format defined in [RFC 1035, Section 3.3.9](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.9).

The core components of an MX record's RDATA (Resource Data) section are composed of two elements:

`priority`: A 16-bit integer (0-65535) that indicates the preference given to this record.
`domain-name`: The fully-qualified domain name (FQDN) of the mail server.

The canonical representation of an MX record is: `<name> IN MX <priority> <domain-name>`

In the DNSimple record editor, an MX record is represented by the following customizable elements:
**Name:** The host name for the record, without the domain name. This is generally referred to as a "subdomain".
**TTL:** The time-to-live in seconds. This is the amount of time the record is allowed to be cached by a resolver.
**Priority:** A number that indicates the preference for this mail server.
**Content:** The fully-qualified `domain-name` of the mail server.

## MX record behavior and priorities
**Priority:** When a mail agent attempts to deliver an email, it will always try to connect to the mail server with the lowest priority value first.
**Redundancy:** If multiple MX records exist for a domain, they provide redundancy. If the highest-priority server fails, the mail agent will attempt to deliver the email to the next highest-priority server in the list.
Equal priorities: If multiple records share the same priority value, mail agents may randomly select among them for delivery.

## Example MX records
A common example of multiple MX records used to provide redundancy for a domain:

`example.com. IN MX 1 aspmx.l.google.com`. 
`example.com. IN MX 5 alt1.aspmx.l.google.com`. 
`example.com. IN MX 5 alt2.aspmx.l.google.com`. 
`example.com. IN MX 10 aspmx2.googlemail.com`.
`example.com. IN MX 10 aspmx3.googlemail.com`.

In this example, mail will first attempt to be delivered to `aspmx.l.google.com` (priority 1). If that fails, it will attempt `alt1.aspmx.l.google.com` or `alt2.aspmx.l.google.com` (priority 5).

## Have more questions?
If you have additional questions or need any assistance with your MX records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
