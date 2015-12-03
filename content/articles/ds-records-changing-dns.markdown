---
title: Managing DS Records when changing DNS
excerpt: This article explains what you should do if you use DNSSEC and change DNS services
categories:
- Domains
- Domain Transfers
- Advanced DNS
---

If you use DNSSEC, then when you switch from one DNS provider to another you must take precautions to ensure your DNS resolution continues during the transition.

Your DS record is tied to the specific DNSSEC key that is used to sign your zone. If you move from a DNSSEC provider to a provider that does not support DNSSEC, then you must remove your DS record before switching.

The same rule applies if you switch from one DNS provider with DNSSEC to another DNS provider with DNSSEC. You should remove your DS record first, transition to the new DNS provider, and then have them provide you with the new DS record that you can add to your domain's registry name servers.
