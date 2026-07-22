---
title: Domain Access Control
excerpt: How to set what each account member can access on a per-domain or per-zone basis.
meta: Step-by-step instructions for configuring Domain Access Control in DNSimple, including member roles and per-domain permissions.
categories:
- Account
- Domains and Transfers
- Enterprise
---

# Domain Access Control

### Table of Contents {#toc}

* TOC
{:toc}

---

Set access levels for each team member in your account. For what Domain Access Control is and what each access level means, see [What is Domain Access Control?](/articles/what-is-domain-access-control/).

> [!NOTE]
> Domain Access Control is only available on eligible [plans](https://dnsimple.com/pricing).

## Video walk-through {#video-walk-through}

<div class="mb4 aspect-ratio aspect-ratio--16x9 z-0">
  <iframe loading="lazy" src="https://www.youtube.com/embed/GlC2uvevIlc?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=en" class="aspect-ratio--object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>

## Setting access for a team member {#setting-access-for-a-team-member}

<div class="section-steps" markdown="1">
##### To set access for a team member across domains

1. Select the relevant account from the account switcher, then click the gear icon next to the account name to open <label>account settings</label>.
1. Click the <label>Members and seats</label> tab. On the <label>Members</label> card, each team member has <label>Manage Access</label> and <label>Remove</label> actions.
1. Click <label>Manage Access</label> for a team member to set their access level to [Full Access](/articles/what-is-domain-access-control/#full-access) or [Limited Access](/articles/what-is-domain-access-control/#limited-access).

    ![Manage Access](/files/manage-access.png)

</div>

You can choose <label>Full Access</label> when inviting or managing a member, or <label>Limited Access</label> to grant access per domain.

![Full Access](/files/domain-access-control-full-access.png)

![screenshot: invite a user with limited access](/files/invite-with-limited-access.png)

If you invited someone with Full Access and want to restrict them, set their permission to <label>Limited Access</label>. You can then assign a [Domain Manager](/articles/what-is-domain-access-control/#domain-manager) or [Zone Operator](/articles/what-is-domain-access-control/#zone-operator) role for each domain.

![screenshot: set team member as limited access](/files/limited-access-team-member.png)

![screenshot: assign roles per domain](/files/roles-per-domain.png)

## Setting access for a domain {#setting-access-for-a-domain}

> [!NOTE]
> A team member must have Limited Access before you can fine-tune their access at the domain level.

Configure per-domain permissions from the domain access settings or from the member <label>Manage Access</label> screen.

![screenshot: roles per domain](/files/access-per-domain.png)

For what each domain-level role includes, see [Domain Manager](/articles/what-is-domain-access-control/#domain-manager) and [Zone Operator](/articles/what-is-domain-access-control/#zone-operator).

![Domain Manager](/files/domain-access-control-domain-manager.png)

![Zone Operator](/files/domain-access-control-zone-operator.png)

## Have more questions?

If you have questions about Domain Access Control or how to implement it for your organization, [contact support](https://dnsimple.com/feedback), and we will help you get sorted.

Want to limit access to other parts of your DNSimple accounts? [Let us know](https://dnsimple.com/feedback) what permissions you are interested in, and you may see it in a future feature release.
