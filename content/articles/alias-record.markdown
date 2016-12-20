---
title: What is an ALIAS record?
excerpt: What is an ALIAS record and how to add an ALIAS record in DNSimple.
categories:
- DNS
---

# ALIAS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What is an ALIAS record?

An **ALIAS** record is a virtual record type that we created to provide [CNAME](/articles/cname-record)-like behavior on apex domains.

For example, if your domain is example.com and you want it to point to a host name like `myapp.herokuapp.com`, then you cannot use a CNAME record, but you can use an ALIAS record. The ALIAS record will automatically resolve your domain to one or more A records at resolution time and thus resolvers see your domain simply as if it had A records.

## How ALIAS record works

The DNSimple name servers are currently based on an open source Erlang DNS server that we developed along with the help of others in the DNS community. The erl-dns server provides a mechanism for plugging in custom handlers (here is a sample custom handler) and we use that extension mechanism for providing an ALIAS handler. Each time a request hits the DNSimple name servers for either an A or AAAA record type the custom handler is invoked and attempts to resolve the ALIAS into its appropriate IPv4 or IPv6 address, respectively. It does this by asking a resolver to resolve the domain. At the moment we are running PowerDNS's resolver running locally on each system for this purpose.

If the resolution succeeds then the handler extracts the A and AAAA records and returns them to the erl-dns server process, which then goes on its merry way. It also sticks the result in an in-memory cache (you'll see why in a second).
If the resolution fails, for example due to a timeout, then the cached response is returned, if one exists. We have the request timeout set quite low (500 milliseconds) and we may even move it lower in the future. If there is no response in the cache then the request is retried again, up to a maximum number of retries. If the request ultimately fails then we return an empty result set.

To support secondary DNS servers, especially ones that connect to us and pull zones using AXFR, we must resolve the ALIAS in a different way. Currently we resolve it as part of the secondary DNS setup process initially and then run a scheduled job to update the ALIAS record at secondary name servers by resolving them again, removing the old records and writing the new records to our zone transfer database, and then finally sending a NOTIFY message to the appropriate secondary name servers.

The actual implementation is handled by a small Go application which our Rails application calls, either from within Rails execution or in an aynchrnonous job, to handle the resolution. The Go application currently calls to Google's public resolvers to resolve the ALIAS record.

When creating an ALIAS record you will notice than additional TXT field is created, this field is optional and it can be used for debugging purposes.

