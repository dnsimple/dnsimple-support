---
title: Slack Integration
excerpt: How to set up the DNSimple Slack App.
categories:
- Slack and DNSimple
---

# Slack Integration

### Table of Contents {#toc}

* TOC
{:toc}

---

This integration with Slack allows DNSimple customers to register and manage domains in a Slack Channel. 

At the moment, you can register a domain and list the DNS records, the registrant contact.  <!-- etc. -->


## Installation 

#### Step 1: Slack button

<a href="https://slack.com/oauth/authorize?scope=commands&amp;client_id=22653018193.22657499029"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"></a>

#### Step 2: Select a Slack team

![Slack Integration Step 2](/files/slack-integration-step-2.png)

#### Step 3: Authorise DNSimple to access your Slack team

![Slack Integration Step 3](/files/slack-integration-step-3.png)

#### Step 4: Select the DNSimple account you want to use.




Start Slacking with the `/dnsimple` commands.

## Commands

#### Register a domain

- `/dnsimple register spa.pizza`

#### List DNS Record for a domain

- `/dnsimple record list howdns.works`

- Edit record

#### List Registrant Contact

- `/dnsimple contact list`
