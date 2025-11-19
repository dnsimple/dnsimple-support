---
title: What Is dig
excerpt: What dig is, how it works, and its role in troubleshooting.
meta: You can discover, pinpoint and resolve DNS issues by using dig and troubleshoot issues on DNS servers to resolve DNS errors.
categories:
- DNS
---

# What Is `dig`?

**`dig`** is a command-line tool used for querying the [Domain Name System (DNS)](/articles/what-is-dns/). It stands for **Domain Information Groper**. It is a powerful utility for diagnosing DNS issues and gathering information about DNS records directly.

`dig` gives you a direct window into the DNS. It lets you ask a DNS server specific questions about a domain and get back a detailed response, which can be invaluable for troubleshooting problems like incorrect IP addresses, email delivery issues, or domain delegation errors.

## How `dig` works

When you run a `dig` command, you instruct your computer to perform a direct query against a DNS server. The command allows you to specify exactly what information you're looking for, such as the record type ([`A`](/articles/a-record/), [`CNAME`](/articles/cname-record/), [`MX`](/articles/mx-record/), etc.) and the specific DNS server you want to query.

For example, a command like `dig dnsimple.com` will perform a standard lookup for the domain's A record. The output is highly detailed, showing you the final answer (the IP address) along with the entire query process, including which server answered the query, the time it took, and the various sections of the DNS response.

## `dig`'s role in troubleshooting

The detailed output of `dig` is what makes it so useful. It provides the following key information:

- **The answer**: Shows the actual DNS records returned, such as IP addresses or mail server hostnames.
- **The authority**: Displays the authoritative name servers for the domain, confirming who is responsible for the zone.
- **Query time**: Tells you how long the query took, which helps in diagnosing performance issues.
- **Status codes**: Provides a status (e.g., `NOERROR`, `NXDOMAIN`) that tells you whether the query was successful, if the domain doesn't exist, or if there was a server error.

By analyzing this information, you can pinpoint exactly where a DNS problem lies—whether it's an incorrect record, an unresponsive name server, or a caching issue.

You can learn more about using dig in [How to Use dig](/articles/how-dig/). A quick reference for dig is available in our dig Reference Guide (LINK NEW ARTICLE).

## Have more questions?
If you have additional questions or need any assistance, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
