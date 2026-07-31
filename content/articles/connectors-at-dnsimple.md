---
title: Connectors at DNSimple
excerpt: Overview of DNSimple connector documentation, covering the Heroku and Netlify connectors and how connectors differ from one-click services.
meta: DNSimple connectors link a domain to a Heroku app or Netlify site and configure DNS automatically. Setup guides plus how connectors compare to integrations.
categories:
- Connectors
- Integrations
---

# Connectors at DNSimple

### Table of Contents {#toc}

* TOC
{:toc}

---

A **connector** links one domain in your DNSimple account to one Heroku app or Netlify site, creates the DNS records that the platform needs, and then monitors the connection and notifies you if it breaks. Heroku and Netlify are the only connectors DNSimple offers. This page is the starting point for connector documentation.

## Getting started {#getting-started}

- [Heroku Connector](/articles/heroku-connector/) - Connect a domain to a Heroku app.
- [Netlify Connector](/articles/netlify-connector/) - Connect a domain to a Netlify site.

## Understanding connectors {#understanding}

- [What Are Connectors?](/articles/what-are-connectors/) - What a connection stores, what authorizing a connector grants, how monitoring works, and what deleting a connection does.

## Choosing between connectors and one-click services {#choosing}

Connectors and one-click services are both offered by DNSimple. Which one you want depends on what you are connecting to.

| | Use when | Where to look |
|---|---|---|
| **Connector** | You use Heroku or Netlify and want DNSimple to configure and monitor the records | This category |
| **One-click service** | You want a known provider's records applied to your zone in one step | [One-click Services](/articles/services/) |

The practical difference is what happens after setup. A connector keeps watching the connection and tells you if it breaks. A one-click service leaves the records in your hands once they are in place.

For other providers, see the [integrations](/categories/integrations/) articles. For the fuller comparison, see [What Are Connectors?](/articles/what-are-connectors/).

## Related articles {#related}

- [How to Use the Record Editor](/articles/record-editor/) - Where the records a connector creates appear.
- [Integrations](/categories/integrations/) - Setup guides for other providers.

## Have more questions?

If you have any questions about connectors, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
