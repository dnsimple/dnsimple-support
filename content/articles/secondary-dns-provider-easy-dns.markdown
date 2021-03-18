---
title: Secondary DNS with EasyDNS
excerpt: Secondary DNS can be complicated to set up. We simplify it with provider specific settings for EasyDNS.
categories:
- Secondary DNS
---

# Secondary DNS Configuration with EasyDNS

For an overview of SecondaryDNS, have a look at [our introduction article](/articles/secondary-dns).

**Requirements**

* An active account with **EasyDNS**. Every EasyDNS plan allows for secondary DNS Setup.
* Your domain [is pointing to the DNSimple name servers](/articles/pointing-domain-to-dnsimple).

You can get started with Secondary DNS from the DNS section of the domain management page.

![DNS management page](/files/setup-secondary-dns.png)

From DNSimple, select **EasyDNS** as the provider and click *Enable* at the bottom of the form. The name servers and IP addresses that EasyDNS is expecting are already filled in for you.

A confirmation message will tell you that Secondary DNS has been enabled from the DNSimple side.

![DNSimple configuration is successful](/files/secondary-dns-confirmation-message.png)

Log into your **EasyDNS** account. The first thing you'll do is add the domain.

<info>
EasyDNS has both a tabbed and one page view. Your interface may look different depending on the layout you've selected though the instructions below are the same.
</info>

![DNSimple configuration is successful](/files/easy-dns-add-domain.png)

Select the option *Use an existing domain* for the domain.

![DNSimple configuration is successful](/files/easy-dns-get-dns.png)

Go through the payment process. Any plan supports secondary DNS. When you're finished, the domain is added and ready to be managed. Click on *manage*.

![DNSimple configuration is successful](/files/easy-dns-ready-to-configure.png)

From the *DNS settings* tab, you'll tell EasyDNS the primary name server, in this case it's DNSimple. Click on *primary NS*.

![DNSimple configuration is successful](/files/easy-dns-domain-admin.png)

Now add the IP address you configured at DNSimple: `50.31.225.92`

![DNSimple configuration is successful](/files/easy-dns-adding-dnsimple-ip.png)

Then confirm the changes.

![DNSimple configuration is successful](/files/easy-dns-confirm.png)

It can take up to one hour for the first zone transfer. To check if your secondary is configured correctly, select the *Tools* tab, then *check* the zone file.

![DNSimple configuration is successful](/files/easy-dns-tools.png)

If everything is working correctly, you should see the DNSimple and EasyDNS nameservers.

![DNSimple configuration is successful](/files/easy-dns-secondary-zone.png)

Another way to verify your configuration is by using `dig` and querying the EasyDNS name servers. Read more about `dig` in [our overview article](/articles/how-dig/).

From your terminal, type the following `dig` command replacing `example.com` with your domain:

`$ dig @xfr0.easydns.com example.com soa`

The query should return all the DNSimple and EasyDNS name servers in the `AUTHORITY SECTION`.

<pre>
; <<>> DiG 9.8.3-P1 <<>> @xfr0.easydns.com example.com soa
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 58869
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 5, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; QUESTION SECTION:
;example.com.    IN  SOA

;; ANSWER SECTION:
example.com. 3600  IN  SOA axfr.dnsimple.com. admin.dnsimple.com. 1425558979 86400 7200 604800 300

;; AUTHORITY SECTION:
example.com. 3600  IN  NS  xfr0.easydns.com.
example.com. 3600  IN  NS  ns4.dnsimple.com.
example.com. 3600  IN  NS  ns2.dnsimple.com.
example.com. 3600  IN  NS  ns1.dnsimple.com.
example.com. 3600  IN  NS  ns3.dnsimple.com.

;; ADDITIONAL SECTION:
xfr0.easydns.com. 300 IN  A 64.68.200.91

;; Query time: 158 msec
;; SERVER: 64.68.200.91#53(64.68.200.91)
;; WHEN: Thu Mar  5 15:12:42 2015
;; MSG SIZE  rcvd: 205
</pre>

Congratulations, your secondary DNS is now working with **EasyDNS**.
