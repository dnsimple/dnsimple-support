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
- **Single Log Out (SLO)**: Users can log out of their DNSimple session by logging out of their Okta session.

## Logging in via Okta

You'll need to [link an Okta organization to your DNSimple account](#linking-an-okta-organization-to-a-dnsimple-account) before your team members can log in via Okta SSO.

Once an Okta organization is linked to a DNSimple account, any member of the Okta organization can request access to the DNSimple account by attempting to log in via Okta using the respective Okta domain.

Once they are granted access, they can log in directly via Okta. If the user logs out of Okta, they will be logged out of DNSimple.

## Linking an Okta organization to a DNSimple account

Follow the instructions below to connect DNSimple to your Okta organization.

### Adding the DNSimple App to Okta

1. Log in to your organization's Okta marketplace.
1. Search for DNSimple, and click Add.
1. Enter an Application Label in General Settings.
1. Click Done.
1. Assign yourself to the application.
1. Take note of your Client ID, Client Secret, and Okta Domain as you'll need them in the next step.

### Configuring DNSimple for Okta SSO

1. At DNSimple, go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Click <label>Authorize with Okta</label> to authorize the Workspace. You'll need to log in to the Okta Workspace with access to the `okta.eventHooks.manage`  and `okta.eventHooks.read` scopes.
1. After logging in via Okta, you will arrive back on the DNSimple Single Sign-On page with Okta SSO enabled for the account.
1. Repeat the process for each account where you want Okta SSO enabled.

When configuring Okta SSO, DNSimple creates an event hook in the Okta organization to listen and react to membership changes. In the case that multiple configurations are made to the same Okta organization, only a single hook is created.

If the Okta app is no longer linked (e.g. access token is revoked or event hook removed), you can re-link the Okta application using the "Reauthorize with Okta" button.

### Assigning People or Groups

To give people access to DNSimple, click "Assignments" under the configured DNSimple app in your Okta dashboard. Click "Assign", and select the appropriate users. 

If an assigned user does not already have a matching DNSimple user with the same email address, a DNSimple user will be provisioned for them, and the DNSimple account admin will receive a notification that they have been added.

If an assigned user already exists, they will need to [link their DNSimple user to their Okta identity](#linking-a-dnsimple-user-to-an-okta-identity) on the User Settings page within DNSimple before they can log in to DNSimple with their Okta identity.

The team members can now easily log in with their Okta identity. When you delete or suspend a team member from your company's Okta organization admin, the corresponding member's DNSimple access will be revoked automatically, reducing the administration requirements for your organization.

### Access control

Now, you can set the level of DNSimple access for each member by visiting the Account > Members tab in your DNSimple account. For the full details, visit [Domain Access Control](/articles/domain-access-control/).

If you experience any issues or have any questions, please reach out at support@dnsimple.com.

## Unlinking an Okta organization from a DNSimple account

1. Go to the <label>Account</label> page, and click the <label>Single Sign-On</label> tab.
1. Click <label>Revoke</label> next to the SSO Workspace you wish to remove.

## Linking a DNSimple user to an Okta identity

When a DNSimple user exists in a DNSimple account _before_ SSO is enabled, they will be required to link their Okta identity to verify ownership of both DNSimple and Okta user accounts. To link a DNSimple user to an Okta identity:

1. Go to the User Settings page.
1. In the Identities card, click <label>Add</label> next to the Okta identity provider.
1. Authenticate your Okta account.
1. You can now log in to DNSimple using the linked Okta identity.

## Unlinking a DNSimple user from an Okta identity

1. Go to the User Settings page.
1. In the Identities card, click <label>Remove</label> next to the linked identity.

