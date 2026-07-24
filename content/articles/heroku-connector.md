---
title: Heroku Connector
excerpt: How to connect a Heroku app to your domain using DNSimple's Heroku Connector.
meta: Connect your domain to a Heroku app with the DNSimple Heroku Connector. Authorize both accounts and configure DNS records automatically.
categories:
- Connectors
- Integrations
---

# Heroku Connector

### Table of Contents {#toc}

* TOC
{:toc}

---

The Heroku Connector links a domain in your DNSimple account to an app on [Heroku](https://www.heroku.com) and creates the DNS records the app needs. For what a connector is and how it differs from an integration, see [What Are Connectors?](/articles/what-are-connectors/).

> [!NOTE]
> The <label>Connections</label> tab appears only for users who can manage the account. If you do not see it, you have domain-level access rather than account-level access.

## Video walk-through {#video}

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/Z1I0L1aSIA8" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Creating a connection {#create}

<div class="section-steps" markdown="1">
##### Connect a domain to a Heroku app

1. Choose the relevant domain from your domain list.
1. Click the <label>Connections</label> tab on the left side.
1. Under <label>Add Connection</label>, click <label>Add</label> in the Heroku Connector section.

    ![screenshot of adding a connector](/files/add-connector.png)

1. Authorize your DNSimple account to give the connector permission to access your domains and DNS records.

    ![Authorize your DNSimple account](/files/heroku-connector-authenticate-dnsimple.png)

1. Authorize your Heroku account to give the connector permission to access your Heroku apps.

    ![Authorize your Heroku account](/files/heroku-connector-connect-heroku.png)

1. Choose your Heroku app and set its mounting point. The mounting point is the address where your app is served. To use the domain apex, for example `example.com`, leave it blank.

    ![Connect your domain to Heroku](/files/heroku-connector-connect-domain.png)

1. Review the connection configuration. To confirm the information is correct, click <label>Connect</label>.

    ![Review configuration](/files/heroku-connector-confirm-config.png)

</div>

## After configuration {#after}

When your domain is connected, you are redirected back to the domain's <label>Connections</label> tab, with a new card for the connection. The card shows a green dot next to your domain, along with other information.

![Domain successfully connected](/files/heroku-connector-domain-connected.png)

From this tab you can view the connection's metadata or disconnect the Heroku connector from your domain. To connect additional Heroku apps to the same domain, click <label>Add</label> and repeat the process.

## Connection monitoring {#monitoring}

DNSimple checks connections on an ongoing basis. If a connection breaks, because the DNS records were removed or the configuration changed on the Heroku side, we send an email to your account notification email with instructions for fixing it and a link to the page where the domain can be reconnected.

## Have more questions?

If you have any questions, or need assistance connecting your domains to Heroku, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
