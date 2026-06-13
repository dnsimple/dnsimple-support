---
title: OAuth Applications
excerpt: Explains how to create a new OAuth application for access to the API version 2.
meta: Register and manage OAuth applications in DNSimple to authorize third-party API access without sharing account passwords. Choose a confidential web app or a public client that uses PKCE.
categories:
- API
- Enterprise
---

# OAuth Applications

### Table of Contents {#toc}

* TOC
{:toc}

---

When you build an application that needs access to DNSimple, or you let an external application request authorization to private details in a user's DNSimple account without getting their password, you need an OAuth token.

If you only need basic access to the API, a regular [user or account token](/articles/api-access-token/) works instead.

## What is OAuth? {#what-is-oauth}

OAuth 2 is a protocol that lets external applications request authorization to private details in a user's DNSimple account without getting their password. This is preferred over Basic Authentication, because tokens can be revoked by users at any time.

Register your application before you start. A registered OAuth application is assigned a unique client ID. How the application proves its identity afterward depends on its [client type](#client-types): a confidential application also receives a client secret, while a public application uses PKCE instead of a secret.

## Confidential and public applications {#client-types}

When you register an application, you choose how it authenticates. This choice is permanent: you cannot change it after the application is created.

- **Web app (server-side)** is a confidential application. It runs on a server you control and can keep a client secret private. It authenticates with its client secret. Most integrations are this type; if you are not sure, choose this.
- **Native or browser app** is a public application, for command-line tools, desktop apps, mobile apps, and single-page apps. These run on a user's device or in their browser, where a secret cannot be kept private. A public application authenticates with PKCE (Proof Key for Code Exchange) instead of a client secret, so the dashboard does not display a client secret for it.

> [!NOTE]
> If you do not see a client type choice when you create an application, your account registers web (server-side) applications by default. These authenticate with a client secret.

## Finding the OAuth Applications page {#find}

1. Navigate to your account page.
1. Click the **OAuth Applications** tab on the left side, then go to the **Developer applications** card.
![screenshot of adding an oauth application](/files/oauth-app-add.png)

Your applications are listed here. From this page you can create a new application, edit an existing one, or remove it.

## Creating a new application {#create}

Click **Add** to create a new application.

Provide an Application Name, a Homepage URL, and an Authorization Callback URL. The callback URL must use HTTPS. For native apps such as command-line tools, you can use a loopback address (`http://127.0.0.1`, `http://[::1]`, or `http://localhost`); the port is matched leniently so the app can listen on whatever local port is free.

If your account can register [public applications](#client-types), the form also asks what kind of application you are building. Choose **Web app (server-side)** for a confidential application or **Native or browser app** for a public one.

> [!TIP]
> Adding an application description is optional.

![screenshot of creating a new oauth application](/files/oauth-app-new.png)

After the application is created, you are taken to its page. A confidential application shows a Client ID and a Client Secret. A public application shows only a Client ID, because it authenticates with PKCE and is not issued a client secret.
![screenshot of successful creation of new oauth application](/files/oauth-app-created.png)

> [!NOTE]
> The Client ID and Client Secret are unique to your application, and **the client secret should not be shared.**

## Revoking user tokens {#revoke}

You can revoke all user tokens for your application by clicking **Revoke**.
![screenshot of revoking tokens for an oauth application](/files/oauth-app-revoke-tokens.png)

> [!WARNING]
> This cannot be undone. All clients will lose access to your application.

## Deleting an application {#delete}

This action cannot be undone, and will permanently delete your application. Any clients using the application will no longer be able to access DNSimple.

To delete an application, click **Delete**.
![screenshot of deleting an oauth application](/files/oauth-app-delete.png)

When deleting an application, you receive a warning prompt to confirm you want to continue.
![screenshot of confirming delete of oauth application](/files/oauth-app-delete-confirm.png)

## Interacting with the API through OAuth {#api}

For step-by-step instructions on interacting with the DNSimple API through OAuth, see the [OAuth developer guide](https://developer.dnsimple.com/v2/oauth/).

## Have more questions?
If you have additional questions or need any assistance with your OAuth Applications, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
