---
title: Preparing a Domain Transfer to Avoid Downtime
excerpt: How to prepare your DNS in DNSimple to avoid downtime before transferring your domain registration.
categories:
- Domains
---

# Preparing DNS Before Transferring a Domain Into DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

Transferring domain names from one registrar to another often causes concerns of downtime. The following steps will hopefully help you avoid any downtime while transferring, so the process is as smooth and easy as possible.

## DNSSEC considerations

Our system will perform a series of automated maintenance tasks after your domain gets transferred to DNSimple:
- We will automatically provision any missing DS records to ensure DNSSEC works correctly if it's enabled.
- We will pull any missing custom DS records from the parent zone so that they show up when in the [DS record management page](/articles/ds-records-changing-dns/)

Please remember that an incorrect DNSSEC set up may cause your domain to be inaccessible:
- If you haven't enabled DNSSEC with us, and it is enabled in your current provider, please either enable it with us or disable it with your current provider before transferring.
- If you have enabled DNSSEC with us, and you're delegating your domain through multiple providers, please make sure that all of them are configured correctly before transferring. You can contact us for guidance at [support@dnsimple.com](mailto:support@dnsimple.com).

## Adding the domain to DNSimple

The first step, before starting the domain transfer, is to move the DNS management to DNSimple. This requires you to sign up for an account, activate your account, and [add the domain](/articles/adding-domain/) *without* transferring it.

This gives you the chance to fully set up and test your DNS records *before* you move the domain.

> [!NOTE]
> When you add your domain name it should be the domain only and not subdomains. You will add subdomains as DNS records in the next step.


## Copying the DNS records into DNSimple

Configure the DNS records for the domain. To do this you can do any of the following:

1. Use the *Add Services to Domain* feature in the domain's management screen to add all of the DNS records for common services, like Google Apps.
1. Add the records one-by-one using the Advanced Editor.
1. Add the records [using the API](https://developer.dnsimple.com/).
1. Bulk-import the records using the *Zone Import* feature.


## Checking the DNS record configuration

Once you've added all of the records for your domain, use a tool like `dig`, which is a command-line tool, to verify each of the records.

Since your domain is still pointing to the previous registrar, you manually need to query against one of the DNSimple name server to check the real results.

The `dig` syntax is easy to remember:

```
$ dig @NAME_SERVER DOMAIN_NAME [RECORD_TYPE]
```

For example, the following command checks the A records associated to the root domain:

```
$ dig @ns1.dnsimple.com example.com
```

To look up details for a subdomain use:

```
$ dig @ns1.dnsimple.com www.example.com
```

To look up details for a specific record type use:

```
$ dig @ns1.dnsimple.com www.example.com CNAME
```


## Pointing the domain to DNSimple

After you have verified all of your records, you should [point the domain to DNSimple](/articles/delegating-dnsimple-hosted/) by switching the domain name servers from your current name servers to DNSimple's name servers. You will do this at your current registrar.

> [!WARNING]
> This step is essential. It ensures your DNS will continue operating during the transfer process.

Once the name servers are changed to DNSimple, you will need to wait for the DNS information to propagate.

Name servers that are currently caching your domain's DNS records need time for their caches to clear and to begin reporting the records from DNSimple's name servers.

> [!NOTE]
> It may take up to 24 hours for changes to propagate.


## Transferring the domain to DNSimple

Once the DNS setup is complete and DNSimple is providing DNS service for your domain, you can [begin the transfer process](/articles/domain-transfer/) without worrying about downtime.
