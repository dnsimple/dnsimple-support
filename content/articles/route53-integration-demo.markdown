---
title: AWS Route 53 integration demo
excerpt: An introductory demo to integrating AWS Route 53 with DNSimple.
categories:
- DNS
- Integrations
---

# AWS Route 53 Integration Demo

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple can act as the central control plane and source of truth for all of your DNS zones and records, providing an easy, scalable way to gain visibility and management of all your DNS requirements across many services at scale. Many customers and organisations use multiple DNS vendors and on-premise DNS solutions for security, availability, and redundancy. Our integrations feature makes this simple, allowing you to leverage DNSimple's user friendly and powerful interface in conjunction with your existing DNS infrastructure and setup, wherever it may be. Learn more on our [blog post](https://blog.dnsimple.com/2023/06/manage-aws-routes-in-dnsimple/).

In this demo, we will demonstrate this power and flexibility by setting up an integration with AWS Route 53. You will need an AWS account with permissions to create new IAM users and policies, as well as Route 53 zones. Step-by-step instructions are provided in detail, and all will be done through UIs in the browser, so no APIs or CLIs are needed.

## Setting up AWS

This section will prepare your AWS account for integrating with DNS, by setting up the users and permissions as necessary for the integration to work.

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
1. In the *Security credentials* tab for the IAM user that has just been created:
  - Press *Create access key* to generate a new pair of credentials for the integration.
  - Select *Other* for the use case.
  - Provide a description for the credentials e.g. "DNSimple Route 53 Integration".
  - Take note of the access key and secret access key, they'll be used soon.

## Creating a Route 53 zone

To demonstrate the synchronization, we'll create a Route 53 zone with some populated data, and then see how we can synchronize it with DNSimple.

1. In the [AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones?region=us-east-1#CreateHostedZone), create a new hosted zone.
  - Enter the domain name.
  - Choose *Public hosted zone* for the type.
1. Create one or more records for the newly created zones. Some examples include:
  - `A www 1.1.1.1`
  - `CNAME static mybucket.s3.amazonaws.com`
  - `MX mail smtp.messaging-engine.com`

## Setting up the integration

We need to prepare our DNSimple account and inform it of our AWS account to establish the connection.

1. Go to your DNSimple account settings and select *Integrated Providers*.
1. Next to *Route53* select *Link*.
1. Provide the AWS credentials, and a nickname for the integration.
1. You should now see your AWS hosted zones listed in your DNSimple account.

## Sync DNS records from Route 53

Let's transfer our zones and records from Route 53 to DNSimple to show how easy it is to get started quickly and set up DNSimple as your control plane.

1. In your DNSimple account, go to the relevant zone.
1. Select *Sync records*.
1. Choose *Route53 - AWS* for *Source*.
1. Choose *DNSimple* for *Destination*.
1. Confirm the synchronization.
1. The records you entered previously in the AWS console for your Route 53 zone should now be the only records in your DNSimple zone, as shown.

## Update your zone

Now that all our zones and records are in DNS, we can use DNSimple as our central control plane and source of truth for all our DNS management needs across all services. Let's see how we can do this, by making a change in the central control plane and having it propagate to Route 53 seamlessly.

1. In your DNSimple zone, add a few records, and make some changes to existing ones.
1. Now, you can propagate them to Route 53 to keep your zone there in sync. Select *Sync records*.
1. Choose *DNSimple* for *Source*.
1. Choose *Route53 - AWS* for *Destination*.
1. Confirm the synchronization.
1. Check the corresponding Route 53 zone in the [AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones?region=us-east-1#) to ensure that the changes have been applied there as well.

## Synchronizing external changes

You should manage your DNS records exclusively through the DNSimple app and your DNSimple zone, as your central control plane and source of truth. However, if you update your AWS Route 53 zone (accidentally or intentionally), you can reflect those changes back into your DNSimple zone to restore it as the central source.

1. Using the [AWS console](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones?region=us-east-1#), In your AWS Route 53 zone, make some changes to the records.
1. Using the DNSimple app, go to your DNSimple zone, and select *Refresh records*.
1. You should see those Route 53 zone changes now. To copy them over to your DNSimple zone as a one-off, follow the instructions under [**Sync DNS records from Route 53**](#sync-dns-records-from-route-53).

## Next steps

You can now build on this simple setup to experiment a bit and see what you can achieve with DNSimple as your control plane. Some examples:

- Try creating in reverse i.e. create a new DNSimple zone first, and then synchronize it to Route 53.
- Add more integrations, for example [GoDaddy](https://support.dnsimple.com/articles/integrated-domain-provider-godaddy/).
- Link another AWS account.
- Use our [CoreDNS integration](https://support.dnsimple.com/articles/integrated-dns-provider-coredns/) for self-hosted DNS in your private on-premise network.
