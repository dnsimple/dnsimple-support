---
meta: Set Up Your First Zone and Delegate Zones to DNSimple
title: Set Up Your First Zone and Delegate Zones to DNSimple
excerpt: A guide for setting up your first zone with DNSimple
categories:
- DNSimple
- Guides
---

# Guide: Set Up Your First Zone and Delegate Zones to DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

## 1. How to add a zone

There are several ways to add a zone to your DNSimple account. Let's look at the two most common.

**Adding a zone from your dashboard**

You'll see your accounts listed at the top of your [dashboard](https://support.dnsimple.com/articles/dashboard/). Click 'Add' in the top right of the relevant account card, and choose the type of DNS zone from the dropdown menu.

![screenshot: Add zone to your domain from dashboard](/files/add-zone-from-dashboard.png)

Enter the name of the zone you want to add.

![screenshot: Add zone modal dialog](/files/add-zone-modal.png)

<info>
Adding a zone to DNSimple does not mean the domain will resolve through DNSimple. To make a domain resolve through DNSimple, you must delegate it from wherever it's registered.
</info>

**Adding a zone from your Domain List**

You can also add a zone from your [Domain List](https://support.dnsimple.com/articles/domain-list/#add-new). Above the Domain List view, you'll see an "Add new" dropdown. From there, you can choose to add a DNS zone, a Secondary DNS zone, or a Reverse DNS zone.

![screenshot: Add zone from domains](/files/add-zone-from-domains.png)

## 2. How to add records to zones

Once you've added your zone, the next step is adding DNS records to that zone. There are a number of ways to do this.

**Auto-importing records**

When you create a zone, you can auto-import records to reduce downtime and avoid having to manually enter them. [This support article](https://support.dnsimple.com/articles/auto-import-dns/) shows you how.

**Setting up integrations**

Use our [Heroku](https://support.dnsimple.com/articles/heroku-connector/) and [Netlify](https://support.dnsimple.com/articles/netlify-connector/)
connectors to connect your domains. We'll set up the required DNS records for you.

[One-click services](https://support.dnsimple.com/articles/services/) add all the DNS records you need to connect a service to your account. All it takes is a single click, and you can connect any of the blogging, ecommerce, email, hosting, infrastructure, or productivity services we [currently offer](https://dnsimple.com/benefits/integrations). Add yours now — [learn how](https://support.dnsimple.com/articles/services/#adding-a-service).

**Using the record editor**

When you click a domain in your account, you'll find the record editor in the top right corner. The record editor lets you view, create, and manage the records for a domain. Learn more in our [record editor support article](https://support.dnsimple.com/articles/record-editor/#adding-a-record).

**Adding zones in our API**

Manage a lot of zones? Learn how to create, update, and delete zone records in our [developer documentation](https://developer.dnsimple.com/v2/zones/records/#createZoneRecord).

## 3. How to delegate your domain to DNSimple

If you have a zone with records in your DNSimple account, you're ready to delegate your domains to DNSimple or another registrar. Let's look at how that works and what to do if you're transferring a domain from another registrar. 

**Domains registered with DNSimple**

If you've registered a domain with DNSimple but aren't yet using our name servers, you can manually add them, or select a DNSimple system [name server set](https://support.dnsimple.com/articles/name-server-sets#system-name-server-sets), and we'll add them for you. Learn more about delegating domains to DNSimple in [this article](https://support.dnsimple.com/articles/delegating-dnsimple-registered/).

**Domains at other registrars**

If your domain is at another registrar, you can enter DNSimple's name servers in your account at that registrar. Just follow [these instructions](https://support.dnsimple.com/articles/delegating-dnsimple-hosted). Before you transfer a domain from another registrar, make sure it's prepared — [learn how](https://support.dnsimple.com/articles/before-transferring-domain/).

If you have any questions about setting up or delegating zones, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
