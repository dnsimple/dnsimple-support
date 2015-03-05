---
title: Secondary DNS with EasyDNS
excerpt:
categories:
- Advanced DNS
---

# Secondary DNS configuration with EasyDNS

For an overview of SecondaryDNS, have a look at [our introduction article](/articles/secondary-dns/).

You need an active account to configure secondary DNS with **EasyDNS**. Every EasyDNS plan allows for secondary DNS setup.

From DNSimple, select **EasyDNS** as the provider and click *Enable* at the bottom of the form. The name servers and IP addresses that EasyDNS is expecting are already filled in for you.

![DNSimple configuration with EasyDNS](/assets/images/secondary-dns/easy-dns-enabling.png)

A confirmation message will tell you that Secondary DNS has been enabled from the DNSimple side.

![DNSimple configuration is successful](/assets/images/secondary-dns/confirmation-message.png)

Log into your **EasyDNS** account. The first thing we are going to do is add the domain.

![DNSimple configuration is successful](/assets/images/secondary-dns/easy-dns-add-domain.png)

Select the option *Get DNS* for the domain.

![DNSimple configuration is successful](/assets/images/secondary-dns/easy-dns-get-dns.png)

Go through the payment process. Any plan support secondary DNS. When you are finish, the domain is added and ready to be managed. Click on *manage*

![DNSimple configuration is successful](/assets/images/secondary-dns/easy-dns-ready-to-configure.png)

From the *DNS settings* tab, we are going to tell EasyDNS the primary nameserver, in this case, us DNSimple. Click on *primary NS*

![DNSimple configuration is successful](/assets/images/secondary-dns/easy-dns-domain-admin.png)

Now let's add the IP address that we have configured at DNSimple: `50.31.225.92`

![DNSimple configuration is successful](/assets/images/secondary-dns/easy-dns-adding-dnsimple-ip.png)

And then confirm the changes

![DNSimple configuration is successful](/assets/images/secondary-dns/easy-dns-confirm.png)

Note that it can take up to one hour for the first zone transfer. To check if your secondary is configured correctly, select the *Tools* tab and then *check* the zone file.

![DNSimple configuration is successful](/assets/images/secondary-dns/easy-dns-tools.png)

If everything is working correctly, you should see the DNSimple and EasyDNS nameservers.

![DNSimple configuration is successful](/assets/images/secondary-dns/easy-dns-secondary-zone.png)

Another way to verify your configuration is by using `dig` and querying the EasyDNS name servers. Read more about `dig` in [our overview article](https://newsletter.dnsimple.com/how-to-dig/).

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
