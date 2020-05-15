---
title: OAuth Applications
excerpt: Explains how to create a new OAuth application for access to the API version 2.
categories:
- API
---

# OAuth Applications

### Table of Contents {#toc}

* TOC
{:toc}

---

When creating an application that requires access to DNSimple or letting an external application request authorization to private details in a user’s DNSimple account without getting their password, you'll need an OAuth token.

If you only need basic access to the API, a regular [user or account token](/articles/api-access-token/) can be used instead.

## What is OAuth?

OAuth 2 is a protocol that lets external applications request authorization to private details in a user’s DNSimple account without getting their password. This is preferred over Basic Authentication because tokens can be revoked by users at any time.

Developers need to register their application before getting started. A registered OAuth application is assigned a unique client ID and client secret. The client secret should not be shared.

## Creating a new OAuth application

To generate an OAuth application log into your account and navigate to your account page.

Once you are there click on the <label>Automation</label> link in the left menu, then head to Developer Applications at the bottom of the screen.

![OAuth Tokens Location](/files/oauth-location.png)

Your applications will be listed here. This also allows you to create a new application or remove an existing one.

## Creating a new Developer Application

Click on the <label>New</label> link to add a new access token.

![New Access Token](/files/new-application.png)

When you create a new application, you'll need to provide a few details including Application Name, a Homepage URL, and an Authorization Callback URL.

<tip>
Adding an application description is optional.
</tip>

![Application Details form](/files/app-details.png)

When created, you'll then be taken to the page with your new application, showing your Client ID and Client Secret.
![App created](files/app-created.png)

<info>
Both the Client ID and Client Secret are unique to your application, and the client secret should not be shared.
</info>

## Revoking user tokens

You can revoke all user tokens for your application by clicking the 'Revoke' button.

![Remove Token](/files/revoke-all-user-tokens.png)

This cannot be undone, and all clients will lose access to your application.

## Deleting an application

To delete an application, click the 'Delete' button.

![Delete Application](/files/delete-application.png)

This action cannot be undone, and will permanently delete your application. Any clients using the application will no longer be able to access DNSimple.

When deleting an application, you'll receive a warning prompt to ensure you want to continue.

![Delete Application confirmation](/files/delete-application-confirm.png)

## Interacting with the API through OAuth

For more details and step-by-step instructions on how to interact with DNSimple's API through OAuth, check our our developer guide [here](https://developer.dnsimple.com/v2/oauth/#web-application-flow).
