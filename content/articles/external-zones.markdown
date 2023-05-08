---
title: External Zones
excerpt: We support managing of zones at other authoritative DNS providers.
categories:
- DNS
---

# External Zones

 DNSimple supports the ability to view and manage zones that are deployed in other DNS providers external to DNSimple. In DNSimple, we refer to such zones as "External Zones".

## Supported External DNS Providers

Currently, DNSimple supports the management of zones from the following authoritative DNS providers, which we refer to as "External DNS Providers".

- [Amazon Route 53](https://aws.amazon.com/route53/)

In order to manage external zones from DNSimple, you first have to link an external DNS provider to your DNSimple account.

### Prerequisites for linking Amazon Route 53 as an external DNS provider

To proceed with linking [Amazon Route 53](https://aws.amazon.com/route53/) as an external DNS provider to your account, you must:

- Have an [AWS access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for an AWS user with permission to manage public hosted zones at Route 53.
- Have administrator access to a DNSimple account


## Linking an External DNS Provider to your account

1. At DNSimple, go to the <label>Account</label> page, and click the <label>External DNS Providers</label> tab.
1. Under <label>Add an external DNS provider<label>, click on the link button for the external DNS provider that you would like to link to your DNSimple account.
![Link an external DNS provider](/files/account-external-provider-link.png)
1. Fill in the necessary credentials for your account at the external DNS provider, as well as a nickname that will be used for identifying this provider.
![Enter external DNS provider credentials](/files/account-external-provider-credentials.png)
1. After successfully linking the external DNS provider, you will arrive back on the DNSimple External DNS Providers page with the external DNS provider linked to your account.
![Account external providers list](/files/account-external-providers.png)

