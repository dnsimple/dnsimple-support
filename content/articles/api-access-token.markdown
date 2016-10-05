---
title: API Access Token
excerpt: Explains how to create a new API access token for access to the API version 2 and higher.
categories:
- API
---

# API Access Token

If you would like to access the [DNSimple API](https://developer.dnsimple.com/) v2 or higher, you will need an access token. One option for getting an access token is to use OAuth, however if you want a simple token you can use with your account directly, without needing to perform the OAuth dance, then you can generate an access token through the DNSimple web site.

## Getting to the Access Token page

To generate an access token, log into your account and navigate to your account page.

Once you are there click on the "Access tokens" link in the left menu.

![Access Tokens Link](/files/access-tokens-link.png)

Here you can see all of your access tokens, add new access tokens and remove existing access tokens.

## Generating an Access Token

Click on the "New access token" link to add a new access token.

![New Access Token](/files/access-token-new.png)

When you create a new token you need to give it a name that you will use to remember it. After you've entered a name, click on "Generate token" to create the token.

![Generate Token](/files/access-token-generate.png)

Make sure to copy the text for the access token as it will only be shown once.

![Token Generated](/files/access-token-generated.png)

With this access token you may now access the API using the HTTP header "Authorization: Bearer token", replacing "token" with the value taken from the page when the token is generated. If you'd like additional information on how to access the API with the newly generated token, please visit [the authentication section](https://developer.dnsimple.com/v2/#authentication) on the DNSimple Developer site.

## Removing an Access Token

You can also remove a token at any time by using the "Remove token" button.

![Remove Token](/files/access-token-remove.png)






