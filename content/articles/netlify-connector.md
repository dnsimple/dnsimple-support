---
title: Netlify Connector
excerpt: How to connect a Netlify site to your domain using DNSimple's Netlify Connector.
meta: Connect your domain to a Netlify site with the DNSimple Netlify Connector. Set up DNS records and Netlify configuration automatically.
categories:
- Connectors
- Integrations
---

# Netlify Connector

### Table of Contents {#toc}

* TOC
{:toc}

---

The Netlify Connector links a domain in your DNSimple account to a site on [Netlify](https://www.netlify.com) and creates the DNS records and Netlify configuration the site needs. For what a connector is and how it differs from an integration, see [What Are Connectors?](/articles/what-are-connectors/).

> [!NOTE]
> The <label>Connections</label> tab appears only for users who can manage the account. If you do not see it, you have domain-level access rather than account-level access.

## Video walk-through {#video}

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/VnQq1uFO6l4" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Creating a connection {#create}

<div class="section-steps" markdown="1">
##### Connect a domain to a Netlify site

1. Choose the relevant domain from your domain list.
1. Click the <label>Connections</label> tab on the left side.
1. Under <label>Add Connection</label>, click <label>Add</label> in the Netlify Connector section.

    ![screenshot of adding a connector](/files/add-connector.png)

1. Authorize your DNSimple account to give the connector permission to access your domains and DNS records.

    ![Authorize your DNSimple account](/files/netlify-connector-authenticate-dnsimple.png)

1. Authorize your Netlify account to give the connector permission to access your Netlify sites.

    ![Authorize your Netlify account](/files/netlify-connector-connect-netlify.png)

1. Choose your Netlify site and set its mounting point. The mounting point is the address where your site is served. To use the domain apex, for example `example.com`, leave it blank.

    ![Connect your domain to Netlify](/files/netlify-connector-connect-domain.png)

1. Review the connection configuration. To confirm the information is correct, click <label>Connect</label>.

    ![Review configuration](/files/netlify-connector-confirm-config.png)

</div>

## After configuration {#after}

When your domain is connected, you are redirected back to the domain's <label>Connections</label> tab, with a new card for the connection. The card shows a green dot next to your domain, along with other information.

![Domain successfully connected](/files/netlify-connector-domain-connected.png)

From this tab you can view the connection's metadata or disconnect the Netlify connector from your domain. To connect additional Netlify sites to the same domain, click <label>Add</label> and repeat the process.

## Connection monitoring {#monitoring}

DNSimple checks connections on an ongoing basis. If a connection breaks, because the DNS records were removed or the Netlify configuration changed, we send an email to your account notification email with instructions for fixing it and a link to the page where the domain can be reconnected.

## Have more questions?

If you have any questions, or need assistance connecting your domains to Netlify, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
