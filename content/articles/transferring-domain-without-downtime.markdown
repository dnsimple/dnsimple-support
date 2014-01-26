---
title: Transferring a Domain without Downtime
excerpt: 
categories:
- Domain Transfers
---

# Transferring a Domain without Downtime

Transferring domain names from one registrar to another is often something that is done with great reluctance, if for no other reason than concerns of downtime. The following steps will hopefully help you avoid any downtime while transferring so that the process is as smooth and easy as possible:

First, set up your account on DNSimple, activate your account and add the domain *without* transferring it. This will give you the chance to fully set up and test your DNS records *before* you move the domain. Remember that when you add your domain name it should be the domain only and not subdomains. You will add subdomains as DNS records in the next step.

For example: create and activate your account, navigate to your domain list and click Add a Domain. Enter just the domain name in the Domain Name box, without any subdomains, as in "example.com". Do *not* add the "www" prefix.

Next, add the DNS records for the domain. To do this you can either use the Add Services to Domain feature in the domain's management screen to add all of the DNS records for common services like Google Apps, or you can add records one-by-one using the Advanced Editor.

Once you've added all of the records for your domain, use a tool like `dig`, which is a command-line tool, to verify each of the records.

Example: `dig @ns1.dnsimple.com mydomain.com any` will return all of the DNS records for the base domain. To look up details for a subdomain: `dig @ns1.dnsimple.com www.mydomain.com any` will return all of the DNS records for the subdomain www under the domain mydomain.com.

After you have verified all of your records with a tool such as dig, then you should switch your name servers from your current name servers to DNSimple's name servers. You will do this at your current registrar. This step is essential as it ensures that your DNS will continue operating during the transfer process. The DNSimple name servers are ns1.dnsimple.com, ns2.dnsimple.com, ns3.dnsimple.com and ns4.dnsimple.com. Each registrar is different in how you change the name servers for a domain, however all of them should allow you to make this change.

Once the name servers are changed to DNSimple you will need to wait for the DNS information to propagate. This means that name servers that are currently caching your domain's DNS records will need to be given time for their caches to clear and to begin reporting the records from DNSimple's name servers. On your domain's manage page you should see the Domain Status as "Active" once the propagation has completed. We test against a variety of public name servers provided by organizations such as the Google, OpenDNS and Level3. You may also want to verify against your local name servers.

Example: if your domains are using DNSimple's name servers then this following command should show this: `dig mydomain.com ns`. This will list the name servers for the domain.

Once you're satisfied that the DNS setup is complete and DNSimple is providing DNS service for your domain then you may begin the transfer process without concern for downtime.

