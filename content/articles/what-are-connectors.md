---
title: What Are Connectors?
excerpt: What a DNSimple connector does, what authorizing one grants, and how connectors differ from integrations and one-click services.
meta: A DNSimple connector links one domain to a Heroku app or Netlify site and configures the DNS records it needs. Learn what it authorizes and how it is monitored.
categories:
- Connectors
- Integrations
---

# What Are Connectors?

### Table of Contents {#toc}

* TOC
{:toc}

---

A connector links one domain in your DNSimple account to one account on a third-party platform, creates the DNS records that platform needs, and then watches the connection to make sure it keeps working. DNSimple offers two connectors: Heroku and Netlify.

## Which connectors are available {#available}

Heroku and Netlify are the only connectors DNSimple offers.

- [Heroku Connector](/articles/heroku-connector/) - connect a domain to a Heroku app
- [Netlify Connector](/articles/netlify-connector/) - connect a domain to a Netlify site

If you need to point a domain at a different provider, see the [integrations](/categories/integrations/) or [one-click services](/articles/services/) instead.

## What authorizing a connector grants {#authorization}

Setting up a connector asks you to authorize twice, because the connector needs to act on both sides.

- **Authorizing DNSimple** grants the connector permission to read your domains and to create and manage DNS records for the domain you are connecting.
- **Authorizing the platform** grants the connector permission to see your apps or sites on Heroku or Netlify, so it can look up the right hostname and, for Netlify, apply the matching configuration.

Both authorizations are scoped to the connection you are creating. Revoking either one stops the connector from maintaining that connection.

## What a connection is {#connections}

Each connector you set up creates a connection, which is tied to your account and to one domain. A connection stores:

- A title identifying it
- Metadata about the connected app or site, which is what the connection card shows
- A history of messages about the connection
- A history of its status over time

You can see your connections on the <label>Connections</label> tab of a domain. The tab appears only for users who can manage the account.

## Connections are monitored {#monitoring}

DNSimple checks connections on an ongoing basis rather than only at setup. If a connection breaks, because the DNS records were removed or the configuration changed on the platform side, we send an email to your account notification email with instructions for fixing it and a link to reconnect.

This monitoring is what most distinguishes a connector from following a setup guide by hand.

## What happens when you delete a connection {#deletion}

Disconnecting a connector removes the connection along with its stored metadata, messages, and status history.

> [!NOTE]
> Removing a connection stops DNSimple from monitoring it. Review the DNS records for the domain afterwards to confirm they are what you want, and remove any that are no longer needed.

## Connectors, integrations, and services {#comparison}

These three overlap, and choosing between them is mostly a question of what you are connecting to.

| | What it is | Who maintains the DNS |
|---|---|---|
| **Connector** | An authorized link between one domain and one Heroku app or Netlify site | DNSimple writes the records and monitors the connection |
| **Integration** | A provider-specific setup guide, or a supported external DNS provider configuration | Mostly you, following documented steps |
| **One-click service** | A DNSimple-maintained record template for a known provider | DNSimple writes the records when you apply the service |

Use a connector if you are on Heroku or Netlify and want the records maintained and watched for you. Use a one-click service if a ready-made record set exists for your provider. Use an integration guide for everything else.

## Have more questions?

If you have any questions about connectors, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
