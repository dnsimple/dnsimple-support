---
title: Forgot Password
excerpt: How to reset your DNSimple password when you cannot sign in.
meta: Reset your DNSimple password using the forgot password flow. Troubleshoot missing reset emails and sign in with SSO when applicable.
categories:
- Account
---

# Forgot Password

### Table of Contents {#toc}

* TOC
{:toc}

---

Reset your password when you cannot sign in with your current credentials. Use the email address tied to your DNSimple **user email**.

## Get a password reset link {#get-a-password-reset-link}

<div class="section-steps" markdown="1">
##### To request a password reset link

1. Go to the [login page](https://dnsimple.com/login), and click <label>Forgot Password</label>.

    ![screenshot of forgot password link](/files/forgot-password-link.png)

1. Enter the user email address you use to sign in to DNSimple.

    ![Enter Your Email](/files/reset-password-email.png)

</div>

## Password reset email {#password-reset-email}

If a user with that email address exists, DNSimple sends a password reset email from `support@dnsimple.com`.

If you do not receive the email, check your spam folder. If you received the email but the link does not work, [contact support](https://dnsimple.com/feedback).

## Enter a new password {#enter-a-new-password}

<div class="section-steps" markdown="1">
##### To set a new password

1. Open the password reset link from the email.
1. Enter a new password and confirm it. DNSimple saves the new password and signs you in.

</div>

## Troubleshooting {#troubleshooting}

If you requested a password reset but did not receive the email:

- **Verify your email:** Confirm you entered the correct user email for your DNSimple account.
- **Alternative sign-in methods:** If you use [Google](/articles/google-identity-provider/), [Okta](/articles/okta-identity-provider/), or [Microsoft Entra](/articles/entra-identity-provider/) SSO, sign in with that provider instead of resetting your password.
- **Check your spam folder:** The reset email may have been filtered.
- **Account status:** If your account is inactive or suspended, you may not receive reset emails. [Contact support](https://dnsimple.com/feedback) for help.

## Have more questions?

If you have questions about resetting your password, [contact support](https://dnsimple.com/feedback), and we will be happy to help.
