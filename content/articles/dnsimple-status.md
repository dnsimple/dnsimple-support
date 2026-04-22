---
title: DNSimple Status Page
excerpt: We make our current system status, as well as our uptime history, available at dnsimplestatus.com.
meta: Check DNSimple system status and uptime history. Monitor name server availability and subscribe to incident notifications via email, SMS, or webhook.
categories:
- DNSimple
---

# DNSimple Status Page

View our current system status and uptime history at [dnsimplestatus.com](https://dnsimplestatus.com).

The status page shows the health of all DNSimple services, including DNS resolution, the web application, API, and certificate provisioning.

## Subscribing to notifications {#subscribe}

Visit [dnsimplestatus.com](https://dnsimplestatus.com) and click **Subscribe to Updates** to receive automatic notifications when an incident is created, updated, or resolved. Available notification channels:

- **Email** -- Incident updates delivered to your inbox.
- **SMS** -- Text message alerts.
- **RSS/Atom** -- Add the feed to your reader.
- **Webhook** -- HTTP POST requests for integration with monitoring tools.

## Understanding service status {#status-levels}

The status page displays the current state of each service component:

| Status | Meaning |
|--------|---------|
| **Operational** | The service is functioning normally. |
| **Degraded Performance** | The service is available but responding slower than usual. |
| **Partial Outage** | Some users or some functionality is affected. |
| **Major Outage** | The service is unavailable for most or all users. |

> [!NOTE]
> DNSimple operates multiple name servers across independent networks. Downtime on a single server does not indicate downtime for the system as a whole. Resolvers will automatically use any available name server.

## During an incident {#during-incident}

The status page is hosted on separate infrastructure from the DNSimple application. If the DNSimple dashboard is unavailable during an incident, the status page will still be accessible.

For details on how DNSimple communicates during incidents and what to expect from postmortems, see [How DNSimple Handles Incidents](/articles/how-dnsimple-handles-incidents/).

## Have more questions?

If you have any questions about DNSimple service status, [contact support](https://dnsimple.com/feedback), and we'll be happy to help.
