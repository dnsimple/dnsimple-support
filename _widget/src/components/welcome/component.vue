<template>
  <div class="route welcome">
    <div v-html="trustyIcon" class="mascot"></div>
    <h1>Getting Started with DNSimple</h1>

    <h2 id="all-plans">All plans</h2>

    <h3 id="general">General</h3>
    <ul>
      <li><a href="/articles/dnsimple-services/">DNSimple Services</a></li>
      <li><a href="/articles/dnsimple-plans/">DNSimple Plans</a></li>
      <li><a href="/articles/why-not-web-hosting/">Why we don’t offer web hosting services</a></li>
      <li><a href="https://dnsimple.com/comics">Our Comics</a></li>
    </ul>

    <h3 id="account-and-billing">Account and billing</h3>
    <ul>
      <li><a href="/articles/account-creation/">Account Creation</a></li>
      <li><a href="/articles/account-activation/">Account Activation</a></li>
      <li><a href="/articles/billing-settings/#customizing-billing-information">Customize billing information</a></li>
      <li><a href="/articles/understanding-invoice/">Understanding Your DNSimple Invoice</a></li>
      <li><a href="/articles/what-happens-if-i-stop-paying/">What happens if I stop paying for my DNSimple subscription?</a></li>
    </ul>

    <h3 id="dns-and-domains">DNS and Domains</h3>
    <ul>
      <li>
        <a href="/articles/adding-domain/">Add a domain</a>
        <ul>
          <li><a href="/articles/registering-domain/">Register a domain</a></li>
          <li>
            <a href="/articles/transferring-domain/">Transfer a domain</a>
            <ul>
              <li><a href="https://dnsimple.com/how-to-transfer-without-downtime/">No downtime transfers</a></li>
            </ul>
          </li>
          <li><a href="/articles/delegating-dnsimple-hosted/">Host a domain</a></li>
        </ul>
      </li>
      <li>
        <a href="/articles/supported-dns-records/">Configure DNS records</a>
        <ul>
          <li><a href="/articles/services/">Connect to common services with one click</a></li>
          <li><a href="/articles/a-record/">A Records</a></li>
          <li><a href="/articles/cname-record/">CNAME Records</a></li>
        </ul>
      </li>
      <li><a href="https://dnsimple.com/tlds">Top-level domain catalog</a></li>
    </ul>

    <h2 id="accounts-with-multiple-members">Accounts with multiple members</h2>
    <ul>
      <li><a href="/articles/account-users/">Add users to your account</a></li>
      <li><a href="/articles/multi-factor-authentication-enforcement/">Enforce Multi-Factor Authentication for All Members of an Account</a></li>
      <li><a href="/articles/billing-settings/#changing-the-billing-email">Change the email address that invoices are delivered to</a></li>
    </ul>
  </div>
</template>

<script>
import { trustyIcon } from '../../assets/svgs';

import "./style.scss";

export default {
  props: ['app'],
  data () {
    return {
      trustyIcon
    };
  }
};
</script>
