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

When creating an application that requires access to DNSimple or letting an external application request authorization to private details in a user's DNSimple account without getting their password, you'll need an OAuth token.

If you only need basic access to the API, a regular [user or account token](/articles/api-access-token/) can be used instead.

## What is OAuth?

OAuth 2 is a protocol that lets external applications request authorization to private details in a user's DNSimple account without getting their password. This is preferred over Basic Authentication, because tokens can be revoked by users at any time.

Developers need to register their application before starting. A registered OAuth application is assigned a unique client ID and client secret. **The client secret should not be shared.**

## Creating a new OAuth application

1. Navigate to your account page.
2. Click the **OAuth Applications** tab on the left side, then go to the **Developer applications** card.

 <!--- needs screenshot: https://drive.google.com/file/d/1IXkOZQiJ071ubfhscvGPD6sEwC1t8OSm/view?usp=sharing -->

Your applications are listed here. You create a new application, edit existing applications, or remove them.

## Creating a new developer application

1. Click **Add** to add a new access token.

When you create a new application, you'll need to provide a few details, including Application Name, a Homepage URL, and an Authorization Callback URL.

<tip>
Adding an application description is optional.
</tip>

![screenshot of creating a new oauth application](/files/oauth-app-new.png)

After the app has successfully been created, you'll be taken to the page with your new application, showing your Client ID and Client Secret.
![screenshot of successful creation of new oauth application](/files/oauth-app-created.png)

<info>
Both the Client ID and Client Secret are unique to your application, and **the client secret should not be shared.**
</info>

## Revoking user tokens

You can revoke all user tokens for your application by clicking **Revoke**.
![screenshot of revoking tokens for an oauth application](/files/oauth-app-revoke-tokens.png)

<warning>
This cannot be undone. All clients will lose access to your application.
</warning>

## Deleting an application

This action cannot be undone, and will permanently delete your application. Any clients using the application will no longer be able to access DNSimple.

To delete an application, click **Delete**.
![screenshot of deleting an oauth application](/files/oauth-app-delete.png)

When deleting an application, you'll receive a warning prompt to ensure you want to continue.
![screenshot of confirming delete of oauth application](/files/oauth-app-delete-confirm.png)

## Interacting with the API through OAuth

For more details and step-by-step instructions on how to interact with DNSimple's API through OAuth, read [this developer guide](https://developer.dnsimple.com/v2/oauth/#web-application-flow).

## Have more questions?
If you have additional questions or need any assistance with your OAuth Applications, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
