---
title: Heroku Connector
excerpt: How to set up Heroku DNS using DNSimple's Heroku Connector.
categories:
- Services
---

# Heroku Connector

### Table of Contents {#toc}

* TOC
{:toc}

---

[Heroku](https://www.heroku.com) is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. With DNSimple's Heroku Connector, you can easily connect your domains to Heroku and set up the required DNS records.

## Using the connector

1. Head into the "connections" tab for the domain you want to connect to Heroku. From there, click the "add" button next to the Heroku connector.  
   ![Add the connector](/files/heroku-connector-add-connector.png)


2. Authorize your DNSimple account to connect to Heroku.  
   ![Authorize your DNSimple account](/files/heroku-connector-authenticate-dnsimple.png)
   

3. You will then need to authorize the connection to Heroku.  
![Authorize the connection to Heroku](/files/heroku-connector-connect-heroku.png)
   

4. At the next step, you'll need to specify which Heroku app you want to connect to the domain, and the mounting point.
   <info>
   A mount point is the address where your Heroku app is served. If you would like to use the domain apex, e.g. `example.com`, then leave this blank.
   </info>  
   ![Connect your domain to Heroku](/files/heroku-connector-connect-domain.png)
   

5. In the final step, you will be asked to review the connection configuration, and ensure the information is correct by hitting "connect".   
![Review configuration](/files/heroku-connector-confirm-config.png)
   
## After configuration
   
After you click connect, your domain will be connected to Heroku. You can verify this by heading back to your domain's "connections" tab, and look for the green dot next to your domain. We'll also display information about the connection here.  
![Domain successfully connected](/files/heroku-connector-domain-connected.png)  
You can view the metadata of the connection, or disconnect the Heroku connector from your domain in this tab. If you need to establish additional Heroku apps for the domain, you can add another by clicking "add" and repeating the process.
   
