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

This article covers generating account tokens and user tokens. If you want to create an application that requires access to DNSimple or let an external application request authorization to private details in a user's DNSimple account without getting their password, you'll need an [OAuth Token](/articles/oauth-applications/) instead.

## Account tokens vs User tokens

API v2 offers 2 types of tokens: account tokens and user tokens.

The user token gives you access to any resource associated to any account the user has access to. An account token gives you access only to the resources connected to that account.

<tip>
We recommend using account tokens, unless your application needs multi-account access via single token.
</tip>

## Getting to the Account Access Token page

To generate an account access token, log into your account and navigate to your account page.

Once you are there click on the <label>Automation</label> link in the left menu.

![Access Tokens Link](/files/access-tokens-link.png)

This shows all of your account access tokens, and allows you to add new access tokens or remove existing access tokens.

## Generating an Account Access Token

Click on the <label>New</label> link to add a new access token.

![New Access Token](/files/access-token-new.png)

When you create a new token you need to give it a name that you can remember. After you've entered a name, click on <label>Generate token</label> to create the token.

![Generate Token](/files/access-token-generate.png)

Make sure to copy the text for the access token as it will only be shown once.

![Token Generated](/files/access-token-generated.png)

You now can access the API with this token using the HTTP header `Authorization: Bearer {TOKEN}`, replacing `{TOKEN}` with the value taken from the page when the token is generated. If you'd like additional information on how to access the API with the newly generated token, please visit [the authentication section](https://developer.dnsimple.com/v2/#authentication) on the DNSimple Developer site.

## Removing an Account Access Token

You can also remove a token at any time by using the <label>Delete</label> button.

![Remove Token](/files/access-token-remove.png)
