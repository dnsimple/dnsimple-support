---
title: Heroku Connector
excerpt: How to connect a Heroku app to your domain using DNSimple's Heroku Connector
categories:
- Services
---

# Heroku Connector

### Table of Contents {#toc}

* TOC
{:toc}

---

[Heroku](https://www.heroku.com) is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. With DNSimple's Heroku Connector, you can easily connect your domains to Heroku, and set up the required DNS records.

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe src="https://www.youtube.com/embed/Z1I0L1aSIA8" class="aspect-ratio--object" frameborder="0" allow="accelero    meter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Creating a connection

1. Head to the "Connections" tab for the domain you want to connect to Heroku. From there, click the "Add" button next to the Heroku connector.  
   ![Create a connection to Heroku](/files/heroku-connector-add-connector.png)


2. Authorize your DNSimple account to give the connector permission to access your domains and DNS records.
   ![Authorize your DNSimple account](/files/heroku-connector-authenticate-dnsimple.png)
   

3. Authorize your Heroku account to give the connector permission to access your Heroku apps.
![Authorize your Heroku account](/files/heroku-connector-connect-heroku.png)
   

4. Choose your Heroku app, and set its mounting point.
   <info>
   A mounting point is the address where your Heroku app is served. If you want to use the domain apex, e.g. `example.com`, leave this blank.
   </info>  
   ![Connect your domain to Heroku](/files/heroku-connector-connect-domain.png)
   

5. You will be asked to review the connection configuration. To confirm the information is correct, click "Connect".   
![Review configuration](/files/heroku-connector-confirm-config.png)
   
## After configuration
   
When your domain is connected, you will be redirected back to your domain's "Connections" tab, which will have a new card for your new connection. The card will have a green dot next to your domain, along with other information.
![Domain successfully connected](/files/heroku-connector-domain-connected.png)  
In this tab, you can view the metadata of the connection, or disconnect the Heroku connector from your domain. If you need to establish additional Heroku apps for the domain, click "add", and repeat the process.
   
