---
title: Google as an Identity Provider
excerpt: How to use Google to create and log in to accounts.
meta: Learn how to seamlessly use Google as your identity provider for account creation and login, enhancing security and simplifying user access with DNSimple.
categories:
- Account
---

# Google as an Identity Provider

### Table of Contents {#toc}

* TOC
{:toc}

---

Use Google as an identity provider to streamline login for you and your team. For how [single sign-on (SSO)](/articles/what-is-sso-at-dnsimple/) works at DNSimple, see [What is SSO at DNSimple](/articles/what-is-sso-at-dnsimple/). Read more about [the benefits of using Google SSO](https://blog.dnsimple.com/2022/06/google-identity-provider/).

## Registering a new DNSimple account via Google {#registering-via-google}

[Signing up](https://dnsimple.com/signup) for a DNSimple account using Google as your identity provider is straightforward.

1. Click **Sign up using Google**.
1. Select your Google account.
1. You will be returned to DNSimple logged in to your new DNSimple account. DNSimple uses your Gmail address as your user email.

![Signing up to DNSimple via Google](/files/google-sso-social-signup.png)

## Linking a Google account to your DNSimple user {#linking-google-user}

![Link a Google identity](/files/google-link-identity.png)

<div class="section-steps" markdown="1">
#### To link a Google identity

1. Go to the <label>User Settings</label> page.
1. In the <label>Identities</label> card, click <label>Add</label> next to the Google identity provider.
1. Authenticate your Google account.
1. You can now log in to DNSimple using the linked Google identity.
</div>

## Linking a Google Workspace to a DNSimple account {#linking-google-workspace}

![screenshot: add identity provider](/files/add-identity-provider.png)

<div class="section-steps" markdown="1">
#### To link a Google Workspace

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Clicking <label>Add</label> next to the Google SSO provider will take you to Google to authorize the Workspace. You'll need to be logged-in to the Google Workspace as an administrator of the workspace.
1. Google will show you what access DNSimple is requesting.
1. Google SSO is enabled on the account.
1. Repeat the process for each account where you want Google SSO enabled.
</div>

If the Google Workspace is no longer linked (e.g. the access token is revoked), you can re-link the Workspace using the **Re-connect** button.

## Logging in to DNSimple via Google {#logging-in-via-google}

### Personal {#logging-in-personal-google}

If you did not sign up for DNSimple using Google, and you are using your personal Gmail account, you need to [link a Google account to your DNSimple user](#linking-google-user) before you can log in via Google.

### Workspace {#logging-in-workspace-google}

You'll need to [link a Google Workspace to your DNSimple account](#linking-google-workspace) before your team members can log in via Google SSO.

Once a Google Workspace is linked to a DNSimple account, any member of the Google Workspace can request access to the DNSimple account by attempting to log in via Google using the respective Workspace.

If this is the first time they're logging in, an email will be sent to the account owner indicating a new team member has signed in to the account. The new team member will not be able to see anything in the account until a team member with full access configures their [access roles](/articles/domain-access-control/).

### Suspended and deleted team members {#suspended-deleted-google-members}

When you delete or suspend a team member from your company's Google Workspace admin, the corresponding member's DNSimple access will be revoked automatically, reducing the administration requirements for your organization.

## Unlinking a Google Workspace from a DNSimple account {#unlinking-google-workspace}

![screenshot: identity provider list](/files/identity-provider-list.png)

<div class="section-steps" markdown="1">
#### To unlink a Google Workspace

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Click <label>Revoke</label> next to the SSO Workspace you wish to remove.

![screenshot: unlink Google workspace success](/files/unlink-google-workspace-success.png)

</div>

## Unlinking a Google account from your DNSimple user {#unlinking-google-user}

![screenshot: unlink Google identity provider](/files/unlink-google-identity-provider.png)

<div class="section-steps" markdown="1">
#### To unlink a Google identity

1. Go to the <label>User Settings</label> page.
1. In the <label>Identities</label> card, click <label>Revoke</label> next to the Google identity you wish to remove.
1. The selected identity can no longer be used to log in to your DNSimple account. You'll see a banner confirming the provider has been unlinked.

</div>

## Have more questions?

If you have any questions about using Google SSO with DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
