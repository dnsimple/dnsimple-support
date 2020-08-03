---

title: What's an ALIAS record?
excerpt: What an ALIAS record is, and how to add an ALIAS record in DNSimple.
categories:
- DNS
---

# ALIAS Records

### Table of Contents {#toc}

* TOC
{:toc}

---

## What's an ALIAS record?

An **ALIAS** record is a virtual record type DNSimple created to provide [CNAME](/articles/cname-record)-like behavior on [apex domains](/articles/domain-apex-heroku/) .

For example, if your domain is example.com and you want it to point to a host name like `myapp.herokuapp.com`, you can't use a CNAME record, but you can use an ALIAS record. The ALIAS record will automatically resolve your domain to one or more A records at resolution time, and resolvers see your domain simply as if it had A records.

## How ALIAS record works

The DNSimple name servers are based on an open source Erlang DNS server we developed with the help of others in the DNS community. The [`erl-dns`](https://github.com/dnsimple/erldns) server provides a mechanism for plugging in custom handlers, and we use that extension mechanism for providing an ALIAS handler. Each time a request hits the DNSimple name servers for either an [A](/articles/a-record/) or [AAAA](aaaa-record/) record type, the custom handler is invoked and attempts to resolve the ALIAS into its appropriate IPv4 or IPv6 address. It does this by asking a resolver to resolve the domain. We are running PowerDNS's resolver locally on each system for this purpose.

If the resolution succeeds, the handler extracts the A and AAAA records and returns them to the erl-dns server process, which then goes on its way. It also sticks, or saves, the result in an in-memory cache.
If the resolution fails, for example due to a timeout, then the cached response is returned, if one exists. We have the request timeout set to 500 milliseconds, which is considered to be low. In the future we may lower it further. If there's no response in the cache, the request is retried again, up to the maximum number of retries. If the request ultimately fails, we return an empty result set.

To support secondary DNS servers, especially ones that connect to us and pull zones using AXFR, we must resolve the ALIAS differently. Currently we resolve it as part of the secondary DNS setup process, then run a scheduled job to update the ALIAS record at secondary name servers by resolving them again, removing the old records, and writing the new records to our zone transfer database. We then send a [NOTIFY](https://tools.ietf.org/html/rfc1996) message to the appropriate secondary name servers letting it know that a change has been made.

When creating an ALIAS record you'll notice an additional TXT field is created. This field is optional and can be used for debugging.


