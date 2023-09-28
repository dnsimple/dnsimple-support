---
title: API Access Token
excerpt: Explains how to create a new API access token for access to the API version 2, including how to create a scoped access token with granular permissions.
categories:
- API
---

# API Access Token

### Table of Contents {#toc}

* TOC
{:toc}

---

If you want to access the [DNSimple API](https://developer.dnsimple.com/) v2, you need an access token.

This article covers generating account tokens and user tokens. If you want to create an application that requires access to DNSimple, or let an external application request authorization to private details in a user's DNSimple account without getting their password, you'll need an [OAuth Token](/articles/oauth-applications/) instead.

## Account tokens vs User tokens

API v2 offers 2 types of tokens: account tokens and user tokens.

The user token gives you access to any resource associated to any account the user has access to. An account token gives you access only to the resources connected to that account.

<tip>
We recommend using account tokens unless your application needs multi-account access via single token.
</tip>

## Getting to the account access token page

To generate an account access token, log into your account and navigate to your account page.

Once you are there click on the <label>Access Tokens</label> link in the left menu.

![Access Tokens Link](/files/access-tokens-link.png)

This shows all of your account access tokens and allows you to add new access tokens, or remove existing access tokens.

You can see the last used date of an access token from the list of existing access tokens.

![Access Tokens Last Used Date](/files/access-tokens-last-used.png)

## Generating an account access token

<info>
To generate an account access token with fine-grained permission scopes, i.e. a scoped access token, you must be [subscribed to an eligible plan](https://dnsimple.com/pricing).
</info>

Click on the <label>Add</label> link to add a new access token.

![New Access Token](/files/access-token-new.png)

When you create a new token, you need to give it a name you can remember. If you are [subscribed to an eligible plan](https://dnsimple.com/pricing), you can choose the permission scopes the token should have. Otherwise, the token will have full permissions to all resources in the account, and you can click on <label>Generate token</label> to create the token after giving it a name.

![Generate Token](/files/access-token-generate.png)

### Selecting permission scopes {#scoped-access-tokens}

Scoped access tokens can be restricted to access only certain resources, or certain groups of resources, in an account. The type of access, i.e. read-only or full access, can also be specified. For instance, you can create an account access token with permissions for managing all the certificates for a given domain name or across all domain names. You can also create account access tokens with read-only permissions for specific zones.

![Selecting Permission Scopes](/files/scoped-account-token-create.png)

Certificates, domains, registrar, and zones are resource types that allow restriction of access to specific resources. For instance, when configuring the token for access to zones, you can specify whether it should have access to all zones in the account, or only selected zones, as well as whether the type of access should be read-only or full (i.e. read and write).

![Selecting Zones](/files/scoped-account-token-select-zones.png)

When you are finished with your selections, click on <label>Generate token</label> to create the token.

## Obtaining the generated access token

After clicking on <label>Generate token</label>, the generated access token will be displayed on the screen.

Copy the text for the access token – **it will only be shown once**.

![Token Generated](/files/access-token-generated.png)

You can now access the API with this token using the HTTP header `Authorization: Bearer {TOKEN}`, replacing `{TOKEN}` with the value taken from the page when the token is generated. If you'd like additional information on how to access the API with the newly generated token, please visit [the authentication section](https://developer.dnsimple.com/v2/#authentication) on the DNSimple Developer site.

## Viewing the permissions of a scoped access token

Once an access token has been created, its permissions cannot be changed. However, you can still view the permissions it was created with.

To do so, click on the access token you want to view from the list of access tokens.

![View Token](/files/scoped-account-token-view.png)

You can then see what resources the token has access to.

![Token Permissions](/files/scoped-account-token-permissions.png)

## Removing an account access token

You can also remove a token at any time by using the <label>Delete</label> button.

![Remove Token](/files/access-token-remove.png)
