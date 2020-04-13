---
title: How to Use dig
excerpt: Instructions to determine the Certificate Authority that signed an SSL certificate.
categories:
- DNS
---

# How to Use dig

When you're trying to troubleshoot DNS issues, `dig` is one of the most valuable tools.

From the `dig` manual:

> `dig` (domain information groper) is a flexible tool for interrogating DNS name servers. It performs DNS lookups and displays the answers that are returned from the name server(s) that were queried.

An example:

```
$ dig dnsimple.com

; <<>> DiG 9.8.3-P1 <<>> dnsimple.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 60554
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;dnsimple.com.			IN	A

;; ANSWER SECTION:
dnsimple.com.		59	IN	A	50.31.213.210

;; Query time: 294 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Tue Feb  3 11:17:13 2015
;; MSG SIZE  rcvd: 46
```

The output above shows lots of interesting details. Line one contains the version of `dig` that was used and the domain name that was queried. Next, it gives any global `dig` options that were enabled, followed by the actual DNS packet details, in human-readable form. NOERROR indicates the response was returned without an error. The line `;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0` provides various details about the DNS packet ([RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt) has an in-depth explanation of the content of a DNS packet).

The question section displays the DNS question that was sent: "I want A records for dnsimple.com". The Answer section shows what the name server responded with: "dnsimple.com has one A record with the content 50.31.213.210 and a time-to-live (TTL) of 59 seconds.

It also gives details about how long the query took, what server was used, when the query was sent, and the size of the DNS packet. 


## Dig at a name server

What else can you do with `dig`? The first example uses the name servers configured locally. In that example it's the Google public resolver at 8.8.8.8. You can also specify a name server:

```
$ dig @ns1.dnsimple.com dnsimple.com

; <<>> DiG 9.8.3-P1 <<>> @ns1.dnsimple.com dnsimple.com
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 35081
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0
;; WARNING: recursion requested but not available

;; QUESTION SECTION:
;dnsimple.com.			IN	A

;; ANSWER SECTION:
dnsimple.com.		60	IN	A	50.31.213.210

;; Query time: 145 msec
;; SERVER: 198.241.10.53#53(198.241.10.53)
;; WHEN: Tue Feb  3 11:28:02 2015
;; MSG SIZE  rcvd: 46
```

## Trace

Another useful option is `+trace`. This causes dig to make iterative queries to resolve the name being looked up. It starts from the root name servers and works its way through the domain name hierarchy.

```
$ dig +trace dnsimple.com

; <<>> DiG 9.8.3-P1 <<>> +trace dnsimple.com
;; global options: +cmd
.			21456	IN	NS	a.root-servers.net.
.			21456	IN	NS	b.root-servers.net.
.			21456	IN	NS	c.root-servers.net.
.			21456	IN	NS	d.root-servers.net.
.			21456	IN	NS	e.root-servers.net.
.			21456	IN	NS	f.root-servers.net.
.			21456	IN	NS	g.root-servers.net.
.			21456	IN	NS	h.root-servers.net.
.			21456	IN	NS	i.root-servers.net.
.			21456	IN	NS	j.root-servers.net.
.			21456	IN	NS	k.root-servers.net.
.			21456	IN	NS	l.root-servers.net.
.			21456	IN	NS	m.root-servers.net.
;; Received 228 bytes from 8.8.8.8#53(8.8.8.8) in 740 ms

com.			172800	IN	NS	d.gtld-servers.net.
com.			172800	IN	NS	k.gtld-servers.net.
com.			172800	IN	NS	b.gtld-servers.net.
com.			172800	IN	NS	f.gtld-servers.net.
com.			172800	IN	NS	c.gtld-servers.net.
com.			172800	IN	NS	j.gtld-servers.net.
com.			172800	IN	NS	a.gtld-servers.net.
com.			172800	IN	NS	e.gtld-servers.net.
com.			172800	IN	NS	i.gtld-servers.net.
com.			172800	IN	NS	m.gtld-servers.net.
com.			172800	IN	NS	l.gtld-servers.net.
com.			172800	IN	NS	h.gtld-servers.net.
com.			172800	IN	NS	g.gtld-servers.net.
;; Received 490 bytes from 192.112.36.4#53(192.112.36.4) in 1849 ms

dnsimple.com.		172800	IN	NS	ns1.dnsimple.com.
dnsimple.com.		172800	IN	NS	ns2.dnsimple.com.
dnsimple.com.		172800	IN	NS	ns3.dnsimple.com.
dnsimple.com.		172800	IN	NS	ns4.dnsimple.com.
;; Received 278 bytes from 192.55.83.30#53(192.55.83.30) in 306 ms

dnsimple.com.		60	IN	A	50.31.213.210
;; Received 46 bytes from 50.31.242.53#53(50.31.242.53) in 55 ms
```

With `+trace` enabled, you can see the entire delegation tree.

First you receive a list of NS records showing the next name server set to query from the server 8.8.8.8. One of the NS records is chosen randomly (in this case it was `192.112.36.4` which is `g.root-servers.net`. That server is queried and responds with a list of servers that respond for `.com.` domains.

`dig` then queries `192.55.83.30` (`m.gtld-servers.net.`), and that name server responds with the `ns1.dnsimple.com` through `ns4.dnsimple.com` name servers. One of those is selected at random (`50.31.242.53` which is `ns3.dnsimple.com`). That name server finally returns the authoritative response and the IP address for the A record.


## Digging deeper

If you'd like to dig even deeper into `dig`, open a console and type `dig -h` for the list of supported options, or `man dig` for more in-depth details about `dig` and how it functions.
