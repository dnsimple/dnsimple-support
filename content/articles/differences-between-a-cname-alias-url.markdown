---
title: Differences Between A, CNAME, ALIAS and URL Records
excerpt: 
categories:
- DNS
---

# Differences Between A, CNAME, ALIAS and URL Records

A records map a name to one or more IP addresses when the IP addresses are known and stable. CNAME records map a name to another name and are only used when there are no other records on that name.

The general rule is use an A record if you manage what IP addresses are assigned to a particular machine. If, on the other hand, the IP addresses can change and you don't control those changes then you might use a CNAME record, as long as that is the **only** record for that specific name. If you use a CNAME record for a name like www.example.com then you can't use other records like MX for that same name.

**You should never use a CNAME record for your registered domain name (i.e. example.com).**

If you cannot use a CNAME record and you do not control the IP addresses, then you may use either an ALIAS record or a URL forwarding record. An ALIAS record will automatically resolve to the hostname's IP addresses. They have a short time-to-live and thus will reflect changes to the hostname's IP addresses quickly and may safely be used with other DNS records (like MX and NS records).

URL forwarding records on the other hand are not really DNS records. A URL forwarding record indicates that our web server should perform a 301 HTTP redirect and thus it will return an A record pointing to our redirection server.

Note that if you want to use SSL on a name you cannot use our redirection server.
