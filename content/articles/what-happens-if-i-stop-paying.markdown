---
title: What happens if I stop paying for my DNSimple subscription?
excerpt: Description of what happens if an account is unsubscribed.
categories:
 Account
---

# What happens if I stop paying for my DNSimple subscription?

After a certain period of time, an account is cancelled if payment cannot be collected. What happens in this case depends on the current configuration of your delegation.

If you are pointing to DNSimple's name servers and your account closes or you unsubscribe from your DNSimple plan, **your domain will no longer resolve, and will _immediately_ become unreachable** (You would get a 'SERVFAIL' or 'NXDOMAIN' DNS error code as a response in this case).

If you are not pointing to DNSimple's name servers and your account closes or is unsubscribed, **your domain will resolve as long as the name servers you are pointing to are valid**.

If you registered your domain with DNSimple and your account closes or is unsubscribed, the same logic from above applies. However, you'll still be able to manage your domain through our interface (you'll still be able to do things like update WHOIS contact information, alter domain delegation, etc).

<note>
If the domain is registered and you close your account or unsubscribe, your domain won't renew automatically, even if it was set to do so.
</note>
