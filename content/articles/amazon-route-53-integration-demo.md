---
title: Using Route 53 as an Integrated DNS Provider
excerpt: An introductory tutorial to integrating Amazon Route 53 with DNSimple.
meta: Discover how to seamlessly integrate Amazon Route 53 with DNSimple in this comprehensive tutorial, enhancing your domain management and DNS capabilities effortlessly.
categories:
- DNS
- Integrations
---

# Amazon Route 53 Integration Demo

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple can act as the central [control plane](https://blog.dnsimple.com/2023/12/introducing-domain-control-plane/) and source of truth for all of your DNS zones and records, providing an easy, scalable way to gain visibility and management of all your DNS requirements across many services at scale. 

Many customers and organizations use multiple DNS vendors and on-premise DNS solutions for security, availability, and redundancy. Our integrations feature makes this simple, allowing you to leverage DNSimple's user friendly and powerful interface in conjunction with your existing DNS infrastructure and setup, wherever it may be. Learn more in our [blog post](https://blog.dnsimple.com/2023/06/manage-aws-routes-in-dnsimple/).

<note>
You need an AWS account with permissions to create new IAM users and policies, as well as Route 53 zones. Step-by-step instructions are provided in detail, and everything is done through UIs in the browser, so no APIs or CLIs are needed.
</note>

## Setting up AWS

This section will prepare your AWS account for integrating with DNS by setting up the users and permissions necessary for the integration to work.

1. Create a new IAM policy using the [AWS console](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/policies/create?step=addPermissions) with the following JSON definition:
  ```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Action": [
        "route53:ChangeResourceRecordSets",
        "route53:CreateHostedZone",
        "route53:DeleteHostedZone",
        "route53:GetHostedZone",
        "route53:ListHostedZones",
        "route53:ListHostedZonesByName",
        "route53:ListResourceRecordSets"
      ],
      "Resource": "*"
    }
  ]
}
  ```
1. Create a new IAM user in the [AWS console](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users/create) for this integration, attaching the previously-created policy directly.
1. In the **ecurity credentials** tab for the IAM user you just created:
  - Click **Create access key** to generate a new pair of credentials for the integration.
  - Select **Other** for the use case.
  - Provide a description for the credentials, e.g., "DNSimple Route 53 Integration".
  - Note the access key and secret access key, you'll need them soon.

## Creating a Route 53 zone

To demonstrate the synchronization, we'll create a Route 53 zone with some populated data, then see how it synchronizes with DNSimple.

1. In the [AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones?region=us-east-1#CreateHostedZone), create a new hosted zone.
  - Enter the domain name.
  - Choose **Public hosted zone** for the type.
1. Create one or more records for the newly created zones. Some examples include:
  - `A www 1.1.1.1`
  - `CNAME static mybucket.s3.amazonaws.com`
  - `MX mail smtp.messaging-engine.com`

## Setting up the integration

Prepare your DNSimple account and inform it of your AWS account to establish the connection.

1. Go to your DNSimple account settings, and select **Integrated Providers**.
1. Next, go to **Route53**, and select **Link**.
1. Provide the AWS credentials and a nickname for the integration.
1. You should now see your AWS hosted zones listed in your DNSimple account.

## Syncing DNS records from Route 53

We'll demonstrate setting up DNSimple as your control plane by transferring zones and records from Route 53 to DNSimple.

1. In your DNSimple account, go to the relevant zone.
1. Select **Sync records**.
1. Choose **Route53 - AWS** for **Source**.
1. Choose **DNSimple** for **Destination**.
1. Confirm the synchronization.
1. The records you entered previously in the AWS console for your Route 53 zone should now be the only records in your DNSimple zone, as shown.

## Updating your zone

Now you can use DNSimple as your central control plane and source of truth for all your DNS management needs across all services. Let's see it in action — make a change in the central control plane and have it propagate to Route 53 seamlessly.

1. In your DNSimple zone, add a few records, and make some changes to existing ones.
1. Now, you can propagate them to Route 53 to keep your zone there in sync. Select **Sync records**.
1. Choose **DNSimple** for **Source**.
1. Choose **Route53 - AWS** for **Destination**.
1. Confirm the synchronization.
1. Check the corresponding Route 53 zone in the [AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones?region=us-east-1#) to ensure the changes have been applied there as well.

## Synchronizing external changes

You should manage your DNS records exclusively through the DNSimple app and your DNSimple zone as your central control plane and source of truth. However, if you update your Amazon Route 53 zone, you can reflect those changes back into your DNSimple zone to restore it as the central source.

1. Using the [AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones?region=us-east-1#), make changes to the records in your Amazon Route 53 zone.
1. Using the DNSimple app, go to your DNSimple zone, and select **Refresh records**.
1. You should see the Route 53 zone changes. To copy them over to your DNSimple zone as a one-off, follow the instructions under [Sync DNS records from Route 53](#sync-dns-records-from-route-53).

## Next steps

You can now build on this simple setup to experiment, and see what you can achieve with DNSimple as your control plane. Some examples:

- Try creating in reverse; i.e. create a new DNSimple zone first, and then synchronize it to Route 53.
- Add more integrations, for example [GoDaddy](/articles/integrated-domain-provider-godaddy/).
- Link another AWS account.
- Use our [CoreDNS integration](/articles/integrated-dns-provider-coredns/) for self-hosted DNS in your private on-premise network.

## Have more questions?
If you have additional questions or need any assistance with your Integrated DNS Providers, just [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
