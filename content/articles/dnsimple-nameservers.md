---
title: DNSimple Name Servers
excerpt: How to change your domain's name servers to DNSimple's name servers.
meta: How to update your domain's name servers to DNSimple for improved DNS performance and reliability. Step-by-step name server change guide.
categories:
- Name Servers
---

# DNSimple Name Servers

For DNSimple to provide DNS for one of your domain names, you must change the name servers for your domain at your domain registrar.

The DNSimple name servers are:

- ns1.dnsimple.com
- ns2.dnsimple-edge.net
- ns3.dnsimple.com
- ns4.dnsimple-edge.org

If you registered your domain with DNSimple, your name servers will already be set to the DNSimple name servers. There's nothing else you need to do.

If you transferred your domain into DNSimple from another registrar, and you're ready for us to start providing your DNS, you need to [change your name servers to DNSimple](/articles/delegating-dnsimple-registered/).

> [!NOTE]
> We do not automatically change your name servers to ours during the transfer process.

If you need to provide the IP addresses to your current registrar, use the following:

<table>
<tr>
<th>Name</th>
<th>IPv4 Address</th>
<th>IPv6 Address</th>
</tr>
<tr>
<td>ns1.dnsimple.com</td>
<td>162.159.24.4</td>
<td>2400:cb00:2049:1::a29f:1804</td>
</tr>
<tr>
<td>ns2.dnsimple-edge.net</td>
<td>199.247.153.53</td>
<td>2620:111:8005::53</td>
</tr>
<tr>
<td>ns3.dnsimple.com</td>
<td>162.159.26.4</td>
<td>2400:cb00:2049:1::a29f:1a04</td>
</tr>
<tr>
<td>ns4.dnsimple-edge.org</td>
<td>199.247.155.53</td>
<td>2620:111:8007::53</td>
</tr>
</table>

If you are updating delegation or glue records during the NS1/NS3 edge migration, see [Discontinuation of Legacy NS1 and NS3 IP Addresses](/articles/announcement-ns1-ns3-ip-addresses/).

## Legacy Name Servers

We have some older name servers that we consider legacy. You can use them, but we recommend you use the more diverse names and TLDs:

- ns2.dnsimple.com
- ns4.dnsimple.com
