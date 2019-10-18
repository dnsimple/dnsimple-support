---
title: Slack App
excerpt: How to set up the DNSimple Slack app.
categories:
- Integrations
---

# Slack App

### Table of Contents {#toc}

* TOC
{:toc}

---

The Slack app allows DNSimple customers to register and manage domains from their team's Slack Channel. The app is available for Professional, Business and Reseller plans.

## Installation

### Step 1: Add DNSimple to Slack

Visit [slack.dnsimple.com](https://slack.dnsimple.com) to add DNSimple to your Slack channel.

### Step 2: Select a Slack team

![Slack Integration Step 2](/files/slack-integration-step-2.png)

### Step 3: Authorise DNSimple to access your Slack team

![Slack Integration Step 3](/files/slack-integration-step-3.png)

### Step 4: Select the DNSimple account you want to use.


Start Slacking with the `/dnsimple` commands.

## Domains commands

### Check if a domain is available

    /dnsimple check example.com

### Register a domain

Use `/dnsimple register` to register a domain. You can specify several options to tailor the registration to your needs.

Registering `example.com`:

    /dnsimple register example.com registrant=1

Registering `example.com` without auto renewal:

    /dnsimple register example.com registrant=2 auto_renewal=false

Registering `example.com` enabling whois privacy:

    /dnsimple register example.com registrant=3 privacy=true

Mixing it all together:

    /dnsimple register example.com registrant=1 auto_renew=true privacy=true

Some things you should know:
1. You must specify a registrant. If you don't you will be prompted with a list of contacts to choose from.
2. If `auto_renew` is not specified it defaults to `true`.
3. If `privacy` is not specified it defaults to `false`.

## DNS Records commands

### List the records of a domain

    /dnsimple list record example.com

We will only show information for the first 20 records. All `NS` and `SOA` records will be filtered out. If you have more than those you should use the link to see them all in the app.

### Add a record to a domain

Use `/dnsimple add record` to add a record to a domain. You will have to specify at least the `name`, `type` and `content` for the record.

Adding an ALIAS record to `example.com`:

    /dnsimple add record example.com name=[] type=ALIAS content=example.provider.com

Adding a URL record to `example.com` for the `www` subdomain:

    /dnsimple add record example.com name=www type=url content=http://example.com

Adding a TXT record to `example.com` for the `_` subdomain:

    /dnsimple add record example.com name=_ type=TXT content=[record content with spaces]

Mixing it all together:

    /dnsimple add record example.com name=[] type=mx content=mxa.mailgun.com priority=10 ttl=600

Some things you should know:

1. In order to create records in the apex you will have to pass in an empty name: `name=[]`
1. White space is not allowed when providing record attributes: `name=foo` is valued but `name = foo` is not.
1. If you have to provide a record attribute value that has white space use `[]` to wrap it: `content=[this is a content with spaces]`. Note that if you want to have any of `[` or `]` you will have to use the UI as there is no way to escape those characters.

## Account commands

### List the contacts in your account

    /dnsimple list contacts

We will only show information for the first 15 contacts. If you have more than those you should use the link to see them all in the app.

You can use the contact number (under the `#` column) to reference contacts for other commands like the registrant when registering a domain.

### List the domains in your account

    /dnsimple list domains

We will only show information for the first 15 domains. If you have more than those you should use the link to see them all in the app.

### Show information for a single domain in your account

    /dnsimple show domain howdns.works
