---
title: API Access Token
excerpt: Explains how to create a new API access token for access to the API version 2.
categories:
- API
---

# API Access Token

### Table of Contents {#toc}

* TOC
{:toc}

---

If you would like to access the [DNSimple API](https://developer.dnsimple.com/) v2 you will need an access token.

One option for getting an access token is to use OAuth, however if you want a simple token you can use with your account directly, without needing to perform the OAuth dance, then you can generate an access token through the DNSimple web site.

## Account tokens vs User tokens

API v2 offers 2 types of tokens: account tokens and user tokens.

The user token gives you access to any resource associated to any account the user has access to. Conversely, an account token gives you access only to the resources connected to that account.

<note>
We recommend to use account tokens, unless your application needs multi-account access via single token.
</note>

## Getting to the Account Access Token page

To generate an account access token, log into your account and navigate to your account page.

Once you are there click on the <label>Access tokens</label> link in the left menu.

![Access Tokens Link](/files/access-tokens-link.png)

Here you can see all of your account access tokens, add new access tokens and remove existing access tokens.

## Generating an Account Access Token

Click on the <label>New access token</label> link to add a new access token.

![New Access Token](/files/access-token-new.png)

When you create a new token you need to give it a name that you will use to remember it. After you've entered a name, click on <label>Generate token</label> to create the token.

![Generate Token](/files/access-token-generate.png)

Make sure to copy the text for the access token as it will only be shown once.

![Token Generated](/files/access-token-generated.png)

With this access token you may now access the API using the HTTP header `Authorization: Bearer {TOKEN}`, replacing `{TOKEN}` with the value taken from the page when the token is generated. If you'd like additional information on how to access the API with the newly generated token, please visit [the authentication section](https://developer.dnsimple.com/v2/#authentication) on the DNSimple Developer site.

## Removing an Account Access Token

You can also remove a token at any time by using the <label>Remove token</label> button.

![Remove Token](/files/access-token-remove.png)
