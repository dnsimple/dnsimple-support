---
title: What Is an MX Record?
excerpt: What an MX record is, and how to create MX records with DNSimple.
meta: Learn what MX records are and how to easily create and manage them with DNSimple to ensure proper email delivery for your domain. Get started today!
categories:
- DNS
---

# What Is an MX Record?

An **MX record** (record type 15), short for **Mail eXchange record**, is a crucial type of DNS record that specifies which mail servers are responsible for accepting email messages on your domain's behalf. Essentially, MX records tell other mail servers on the internet where they should deliver your email.

Without correct MX records, email sent to your domain (e.g., `you@yourdomain.com`) would not know where to go, and would not be delivered. These essential directory entries guide incoming emails to their correct destination.

## How MX records guide email delivery
When someone sends an email to an address at your domain, the sending mail server performs a DNS lookup for your domain's MX records. It doesn't look for an [A record](/articles/a-record/) directly; instead, it specifically asks for the MX records to find the designated mail exchange servers.

A domain can have multiple MX records. These records work together to ensure reliable email delivery. Each MX record includes two key pieces of information:

**A priority value:** This numerical value indicates the preference for using a particular mail server. Lower numbers indicate higher priority (they are preferred first).

**A mail server hostname:** The domain name of the mail server responsible for accepting email (e.g., `aspmx.l.google.com`). This hostname must resolve to an A or [AAAA record](/articles/aaaa-record/) to get the actual IP address of the mail server.

The sending mail server will attempt to deliver the email to the server with the lowest priority value first. If that server is unavailable or rejects the email, the sending server will try the next lowest priority server, etc., until the email is successfully delivered, or all options are exhausted.

## Example: routing email with Google Workspace
A common (and excellent) example of using MX records is when you configure email delivery through a service like Google Workspace. When you set up your Google Workspace account and want your domain's email delivered there, Google provides a specific set of MX records you need to add to your DNSimple zone.

Example of the default MX records Google might suggest, each with its associated priority:

| Mail server hostname | Priority |
|--------|-----------|
|`aspmx.l.google.com`| 1 |
|`alt1.aspmx.l.google.com`| 5|
|`alt2.aspmx.l.google.com`| 5 |
|`aspmx2.googlemail.com`| 10|
|`aspmx3.googlemail.com`| 10|

In this setup:

1. A sending mail server trying to deliver email to your domain would first attempt to connect to `aspmx.l.google.com` (priority 1).
1. If `aspmx.l.google.com` is unreachable or rejects the delivery, it would try `alt1.aspmx.l.google.com` or `alt2.aspmx.l.google.com` (both priority 5). The sending server can choose between them, or try one, then the other.
1. If those are also unavailable, it would move on to `aspmx2.googlemail.com` or `aspmx3.googlemail.com` (both priority 10).

This hierarchical approach, made possible by MX priorities, ensures maximum redundancy and significantly increases the likelihood that your email will always be delivered, even if a primary mail server temporarily experiences issues.

The behavior and format of MX records are specified in [RFC 5321](https://datatracker.ietf.org/doc/html/rfc5321) (for mail transfer protocol) and [RFC 1035, Section 3.3.9](https://datatracker.ietf.org/doc/html/rfc1035#section-3.3.9) (for the record type).

## Managing MX records in DNSimple
DNSimple provides a user-friendly interface for configuring and maintaining your domain's MX records. You can easily add new records, remove existing ones, or update their target mail servers and priorities directly from your domain's [record editor](/articles/record-editor/).

## Have more questions?
If you have additional questions or need any assistance with your MX records, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
