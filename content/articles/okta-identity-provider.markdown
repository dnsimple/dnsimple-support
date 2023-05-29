---
title: Okta as an Identity Provider
excerpt: How to use Okta to create and log in to accounts.
categories:
- Account
---

# Okta as an Identity Provider

### Table of Contents {#toc}

* TOC
{:toc}

---

Using Okta as an identity provider streamlines the login experience for you and your team.

## Prerequisites

To proceed with configuring login with SSO through Okta, you must:

- Have administrator access to an Okta organization
- Have administrator access to a DNSimple account
- Have the Okta integration feature enabled on your DNSimple account

## Supported Features

- **SP-initiated Single Sign-On (SSO)**: This authentication flow occurs when the user attempts to log in to DNSimple from Okta.
- **Import Users**: Manage who can access your DNSimple account by assigning users to the Okta application

## Video walk-through

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe src="https://www.youtube.com/embed/XNJP2gwIIh4?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Logging in via Okta

You'll need to [link an Okta organization to your DNSimple account](#linking-an-okta-organization-to-a-dnsimple-account) before your team members can log in via Okta SSO.

1. To log in to DNSimple using Okta, visit [https://dnsimple.com/login](https://dnsimple.com/login).
1. Click on the <label>Sign in using Okta</label> button.
1. Enter the company's Okta domain and click "Sign in".
1. If you are prompted for your Okta username and password, enter them.
1. If your credentials are valid, you will be redirected back to DNSimple and logged in.

If you are not yet a member of the DNSimple account, the account administrator will receive a notification to grant access. Once they have granted access, you will be able to see the DNSimple account's assets.

If you log out of Okta, you will also be logged out of DNSimple.

## Linking an Okta organization to a DNSimple account

Follow the instructions below to connect DNSimple to your Okta organization.

### Adding the DNSimple App to Okta {#adding-the-dnsimple-app-to-okta}

1. Log in to your organization's Okta dashboard as an administrator.
1. Go to the <label>Applications</label> page, then click <label>Browse App Catalog</label>.
1. Search for <label>DNSimple</label> and click the <label>Add integration</label> button.
![Browse app catalog](/files/okta-browse-app-catalog.png)
1. Click the <label>Assignments</label> tab.
1. From the <label>Assignments</label> page, you can give users and groups from your Okta directory permission to sign in to DNSimple via Okta as an identity provider.
![Assign users and groups](/files/okta-assignment.png)
1. Click the <label>Okta API Scopes</label> tab.
1. Look for the `okta.eventHooks.manage` and `okta.eventHooks.read` scopes, and click <label>Grant</label> for each of them.
1. Verify the `okta.eventHooks.manage` and `okta.eventHooks.read` scopes have been granted.
![Granted scopes](/files/okta-grant-scopes.png)
1. Click on the <label>Sign On</label> tab. Take note of the client ID and client secret. You will need them for the following step which is configuring DNSimple for Okta SSO.
![Okta client credentials](/files/okta-client-credentials.png)

### Configuring DNSimple for Okta SSO {#configuring-dnsimple-for-okta-sso}

1. At DNSimple, go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Click <label>Authorize with Okta</label> to authorize the Workspace.
1. Fill in the Okta domain, client ID, and client secret, then click <label>Link</label>. You'll need to log in to the Okta Workspace with access to the `okta.eventHooks.manage`  and `okta.eventHooks.read` scopes. Your Okta user needs to already be [assigned to the DNSimple app integration](/articles/okta-identity-provider#assigning-people-or-groups-in-okta) in Okta with an email address that matches your DNSimple user email address.
![Link account to Okta](/files/okta-link-account.png)
1. After logging in via Okta, you will arrive back on the DNSimple Single Sign-On page with Okta SSO enabled for the account.
1. Repeat the process for each account where you want Okta SSO enabled.

When configuring Okta SSO, DNSimple creates an event hook in the Okta organization to listen and react to membership changes. If multiple configurations are made to the same Okta organization, only a single hook is created.

If the Okta app is no longer linked (e.g. access token is revoked or event hook removed), you can re-link the Okta application using the "Reauthorize with Okta" button.

![Reauthorize with Okta](/files/okta-reauthorize.png)

### Assigning People or Groups {#assigning-people-or-groups-in-okta}

To give people access to DNSimple, click "Assignments" under the configured DNSimple app in your Okta dashboard. Click "Assign", and select the appropriate users.

![Assign users and groups](/files/okta-assignment.png)

If an assigned user does not already have a matching DNSimple user with the same email address, a DNSimple user will be provisioned for them, and the DNSimple account admin will receive a notification that they have been added.

If an assigned user already exists, they will need to [link their DNSimple user to their Okta identity](#linking-a-dnsimple-user-to-an-okta-identity) on the User Settings page within DNSimple before they can log in to DNSimple with their Okta identity.

The team members can now easily log in with their Okta identity. When you delete or suspend a team member from your company's Okta organization admin, the corresponding member's DNSimple access will be revoked automatically, reducing the administration requirements for your organization.

### Access control

You can set the level of DNSimple access for each member by visiting the Account > Members tab in your DNSimple account. For full details, visit [Domain Access Control](/articles/domain-access-control/).

If you experience any issues or have any questions, please reach out at support@dnsimple.com.

## Unlinking an Okta organization from a DNSimple account

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Click <label>Revoke</label> next to the SSO Workspace you want to remove.

## Linking a DNSimple user to an Okta identity

When a DNSimple user exists in a DNSimple account _before_ SSO is enabled, they will be required to link their Okta identity to verify ownership of both DNSimple and Okta user accounts. To link a DNSimple user to an Okta identity:

1. Go to the User Settings page.
1. In the Identities card, click <label>Add</label> next to the Okta identity provider.
1. Authenticate your Okta account.
1. You can now log in to DNSimple using the linked Okta identity.

## Unlinking a DNSimple user from an Okta identity

1. Go to the User Settings page.
1. In the Identities card, click <label>Remove</label> next to the linked identity.

