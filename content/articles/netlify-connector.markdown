---
title: Netlify Connector
excerpt: How to connect a Netlify app to your domain using DNSimple's Netlify Connector
categories:
- Connectors
---

# Netlify Connector

### Table of Contents {#toc}

* TOC
{:toc}

---

[Netlify](https://www.netlify.com) unites an entire ecosystem of modern tools and services into a single, simple workflow for building high performance sites and apps. With DNSimple's Netlify Connector, you can easily connect your domains to Netlify, and set up the required DNS records and Netlify configuration, without having to think about DNS.

## Creating a connection

1. Head to the "Connections" tab for the domain you want to connect to Netlify. From there, click the "Add" button next to the Netlify connector.  
   ![Create a connection to Netlify](/files/netlify-connector-add-connector.png)


2. Authorize your DNSimple account to give the connector permission to access your domains and DNS records.
   ![Authorize your DNSimple account](/files/netlify-connector-authenticate-dnsimple.png)
   

3. Authorize your Netlify account to give the connector permission to access your Netlify apps.
![Authorize your Netlify account](/files/netlify-connector-connect-netlify.png)
   

4. Choose your Netlify site, and set its mounting point.
   <info>
   A mounting point is the address where your Netlify site is served. If you want to use the domain apex, e.g. `example.com`, leave this blank.
   </info>  
   ![Connect your domain to Netlify](/files/netlify-connector-connect-domain.png)
   

5. You will be asked to review the connection configuration. To confirm the information is correct, click "Connect".   
![Review configuration](/files/netlify-connector-confirm-config.png)
   
## After configuration
   
When your domain is connected, you will be redirected back to your domain's "Connections" tab, which will have a new card for your new connection. The card will have a green dot next to your domain, along with other information.

![Domain successfully connected](/files/netlify-connector-domain-connected.png)  

In this tab, you can view the metadata of the connection, or disconnect the Netlify connector from your domain. If you need to establish additional Netlify sites for the domain, click "add", and repeat the process.

## Connection monitoring

Connections are checked regularly to ensure the connection is still established. If the connection is broken, either from removing DNS records or changing the Netlify configuration, an email is sent to the DNSimple account email. The email includes instructions for fixing the connection as well as a link to the page where the domain can be reconnected to the Netlify application.
   
