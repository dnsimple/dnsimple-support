---
title: How DNSimple Handles Incidents
excerpt: How DNSimple communicates during service incidents and where to find status updates.
meta: How DNSimple communicates during service incidents. Where to check system status, subscribe to notifications, and what to expect from postmortems.
categories:
- DNSimple
---

# How DNSimple Handles Incidents

### Table of Contents {#toc}

* TOC
{:toc}

---

DNSimple uses a public [status page](https://dnsimplestatus.com) to communicate service health in real time. During incidents, we post updates there and follow up with a postmortem when the issue is resolved.

## Checking service status {#status-page}

Visit [dnsimplestatus.com](https://dnsimplestatus.com) to see the current state of all DNSimple services, including DNS resolution, the web application, API, and certificate provisioning. The page also displays uptime history for each component.

> [!NOTE]
> Downtime on a single name server does not indicate downtime for the system as a whole. DNSimple operates multiple name servers across different networks, and resolvers will use any available server. See [DNSimple Status Page](/articles/dnsimple-status/) for details.

## Subscribing to notifications {#subscribe}

You do not need to check the status page manually. Subscribe to receive notifications automatically when an incident is created, updated, or resolved.

To subscribe, visit [dnsimplestatus.com](https://dnsimplestatus.com) and click **Subscribe to Updates** at the top of the page. You can choose to receive notifications by:

- **Email** -- Incident updates delivered to your inbox.
- **SMS** -- Text message alerts for incidents.
- **RSS/Atom** -- Add the feed to your reader.
- **Webhook** -- Receive HTTP POST requests for integration with your own monitoring tools.

We recommend subscribing all team members who manage DNS or domains, especially those responsible for production infrastructure.

## What happens during an incident {#during}

When DNSimple detects or is notified of a service disruption:

1. An incident is created on the status page with the affected components identified.
2. Updates are posted as the investigation progresses, including what is known and what is being done.
3. When the issue is resolved, the incident is marked resolved with a summary of what happened.

If the DNSimple dashboard is unavailable during an incident, the status page remains accessible because it is hosted on separate infrastructure.

## Postmortems {#postmortems}

For significant incidents, DNSimple publishes a postmortem on the [DNSimple blog](https://blog.dnsimple.com/). Postmortems typically include:

- A timeline of the incident.
- The root cause and contributing factors.
- What was done to resolve the issue.
- Steps being taken to prevent recurrence.

Postmortems are published after the engineering team completes its investigation. The timeline varies depending on the complexity of the incident.

## Protecting your domains during outages {#protection}

To reduce the impact of any DNS provider outage, consider adding a [secondary DNS provider](/articles/dns-redundancy/) as a resilience layer. Secondary DNS ensures your domains continue to resolve even if one provider is temporarily unavailable.

## Have more questions?

If you have any questions about how DNSimple handles incidents or want to report an issue, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
