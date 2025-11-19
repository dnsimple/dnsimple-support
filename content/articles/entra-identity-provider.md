---
title: Entra as an Identity Provider
excerpt: How to use Entra to create and log in to accounts.
meta: Learn how to seamlessly integrate Entra as your identity provider for account creation and secure logins, enhancing your user experience and security.
categories:
- Account
---

# Entra as an Identity Provider

### Table of Contents {#toc}

* TOC
{:toc}

---

Using Entra as an identity provider for single sign-on streamlines the login experience for you and your team and helps you manage risk at scale.

<info>
Entra as an Identity Provider is only available on Enterprise plans. See our [pricing page](https://dnsimple.com/pricing) for more details.
</info>

## Prerequisites

To proceed with configuring login with SSO through Entra, you must:

- Have [Application Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#application-administrator) access to a Microsoft Entra account.
- Have administrator access to a DNSimple account.
- Be subscribed to a DNSimple [Enterprise plan](https://dnsimple.com/enterprises).

## Linking an Entra organization to a DNSimple account

DNSimple's Entra app integration is pending review and is not yet available for installation via the [Microsoft Entra App Gallery](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-integrated-apps).

### Creating a customer Entra app

For now, you can use Entra as an Identity Provider by [creating your own custom **Single tenant** Entra app integration](https://docs.azure.cn/en-us/data-explorer/kusto/access-control/provision-entra-id-app) to work with DNSimple by following these steps. Take note of your **Directory (tenant) ID**, **Application (client) ID**, and **Client secret**.

### Adding Redirect URIs

After creating your app, add the [Redirect URIs](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-redirect-uri) for your new web app using the following URIs:
1. https://dnsimple.com/identity_providers/entra/callbacks/users/login
1. https://dnsimple.com/identity_providers/entra/callbacks/accounts/link
1. https://dnsimple.com/identity_providers/entra/callbacks/users/link

### Adding API permissions

Add the following [API permissions](https://learn.microsoft.com/en-us/entra/identity-platform/howto-update-permissions) with a [type of `Application`](https://learn.microsoft.com/en-us/troubleshoot/entra/entra-id/app-integration/application-delegated-permission-access-tokens-identity-platform):

- `openid`
- `email`
- `profile`
- `User.Read`
- `User.Read.All`
- `Domain.Read.All`

[Consent must also be granted](https://learn.microsoft.com/en-us/entra/identity-platform/howto-update-permissions#grant-consent-for-the-added-permissions-for-the-enterprise-application) for each API permission.

### Assign team members to the Entra app

From the Enterprise Application, click on the `Users and groups` tab to assign users to the application. Only users assigned to the application will be able to sign in to DNSimple via Entra as an identity provider. Read more about [assignments in Entra](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/assign-user-or-group-access-portal).

### Configuring DNSimple for Entra SSO

These steps are performed in your DNSimple account:

1. At DNSimple, use the **account switcher** at the top right of the page to select the account you want to link with Entra.
1. Click the gear icon ⚙️ next to the account name to open the **account settings**.
1. Click the **Single-Sign On** tab on the left side.
1. Click **Authorize with Microsoft Entra ID** to authorize the Workspace.
1. Fill in the Entra Tenant ID, client ID, and client secret, then click **Link**. You'll need to log in to the Entra Workspace.

### Link the account to Entra

After logging in via Entra, you will arrive back on the DNSimple Single Sign-On page with Entra SSO enabled for the account.

If the Entra app is no longer linked (e.g. the access token is revoked), you can re-link the Entra application by clicking **Reauthorize**.

### Access control

You can set the level of DNSimple access for each member under the **Members and seats** tab in your DNSimple Account settings. For full details, visit [Domain Access Control](/articles/domain-access-control/).

## Linking a DNSimple user to an Entra identity

When a DNSimple user exists in a DNSimple account before SSO is enabled, they will be required to link their Entra identity to verify ownership of both DNSimple and Entra user accounts. This is done on your DNSimple **User settings** page.

To link a DNSimple user to an Entra identity:
1. At DNSimple, use the **account switcher** at the top right of the page to go to your **User Settings** page.
1. Scroll down to the **Identities** card, and click **Add** next to the Entra identity provider.
1. Authenticate your Entra account.
1. You can now log in to DNSimple using the linked Entra identity.

## Logging in via Entra

You'll need to [link an Entra organization to your DNSimple account](#linking-an-entra-organization-to-a-dnsimple-account) before your team members can log in via Entra SSO.
1. To log in to DNSimple using Entra, visit [https://dnsimple.com/login](https://dnsimple.com/login).
1. Click **Sign in using Entra**.
1. Enter the [organization Entra domain or tenant ID](https://learn.microsoft.com/en-us/partner-center/account-settings/find-ids-and-domain-names#find-the-microsoft-entra-tenant-id-and-primary-domain-name) and click **Sign in**. The Entra domain is the default/primary domain in the Entra account.
1. If you are prompted for your Entra username and password, enter them.
1. If your credentials are valid, you will be redirected back to DNSimple and logged in.

<info>
If you are not yet a member of the DNSimple account, the account administrator will receive a notification to grant access. Once they have granted access, you will be able to see the DNSimple account's assets.

If you log out of Entra, you will also be logged out of DNSimple.
</info>

## Unlinking an Entra organization from a DNSimple account

1. At DNSimple, use the **account switcher** at the top right of the page to select the account you want to unlink.
1. Click the gear icon ⚙️ next to the account name to open the **account settings**.
1. Click the **Single-Sign On** tab on the left side.
1. Click **Revoke** next to the Entra SSO provider to remove the link from DNSimple to Entra.

## Unlinking a DNSimple user from an Entra identity

1. At DNSimple, use the **account switcher** at the top right of the page to go to your **User Settings** page.
1. In the **Identities** card, click **Revoke** next to the linked identity.

## Have more questions?

If you have any questions or need assistance about using Entra SSO with DNSimple, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
