---
title: Preparing a Domain Transfer to Avoid Downtime
excerpt: How to prepare your DNS in DNSimple, to avoid downtime, before transferring your domain registration.
categories:
- Domain Transfers
---

# Preparing DNS Before Transferring a Domain Into DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Transferring domain names from one registrar to another is often something that is done with great reluctance, if for no other reason than concerns of downtime. The following steps will hopefully help you avoid any downtime while transferring so that the process is as smooth and easy as possible.

## Ensure the DS record is removed

If you are currently using DNSSEC, then you must [remove the current DS record](/articles/ds-records-changing-dns) before transferring to our name servers.

## Adding the domain to DNSimple

The first step, before starting the domain transfer, is to move the DNS management to DNSimple. This requires you to sign up for an account, activate your account and [add the domain](/articles/adding-domain) *without* transferring it.

This will give you the chance to fully set up and test your DNS records *before* you move the domain.

<note>
When you add your domain name it should be the domain only and not subdomains. You will add subdomains as DNS records in the next step.
</note>


## Copying the DNS records into DNSimple

Configure the DNS records for the domain. To do this you can either:

1. Use the *Add Services to Domain* feature in the domain's management screen to add all of the DNS records for common services like Google Apps.
1. Add the records one-by-one using the Advanced Editor.
1. Add the records [using the API](https://developer.dnsimple.com/).
1. Bulk import the records using the *Zone Import* feature.


## Checking the DNS record configuration

Once you've added all of the records for your domain, use a tool like `dig`, which is a command-line tool, to verify each of the records.

Keep in mind that, since your domain is still pointing to the previous registrar, you manually need to query against one of the DNSimple name server to check the real results.

The `dig` syntax is easy to remember:

```
$ dig @NAME_SERVER DOMAIN_NAME [RECORD_TYPE]
```

For example, the following command checks the A records associated to the root domain.

```
$ dig @ns1.dnsimple.com example.com
```

To look up details for a subdomain use

```
$ dig @ns1.dnsimple.com www.example.com
```

To look up details for a specific record type use

```
$ dig @ns1.dnsimple.com www.example.com CNAME
```


## Pointing the domain to DNSimple

After you have verified all of your records, you should [point the domain to DNSimple](/articles/delegating-dnsimple-hosted) by switching the domain name servers from your current name servers to DNSimple's name servers. You will do this at your current registrar.

<warning>
This step is essential as it ensures that your DNS will continue operating during the transfer process.
</warning>

<warning>
If you're using a SSL certificate provided by your current DNS hosting, please check if you need to [purchase](/articles/purchasing-ssl-certificates) and [install](/articles/installing-ssl-certificate/) a new certificate on your server.
</warning>

Once the name servers are changed to DNSimple you will need to wait for the DNS information to propagate.

This means that name servers that are currently caching your domain's DNS records will need to be given time for their caches to clear and to begin reporting the records from DNSimple's name servers.

<note>
It may take up to 24 hours for changes to propagate.
</note>


## Transferring the domain to DNSimple

Once you're satisfied that the DNS setup is complete and DNSimple is providing DNS service for your domain then you may [begin the transfer process](/articles/transferring-domain) without concern for downtime.
