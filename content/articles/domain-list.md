---
title: Getting to Know Your DNSimple Domain List
excerpt: How to use the DNSimple Domain List to manage your domains.
categories:
- DNSimple
---

# Getting to Know Your DNSimple Domain List

<iframe width="791" height="445" src="https://www.youtube.com/embed/PGa3Jk3nnGM" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The DNSimple Domain List is your home base for all the domains in your account. You'll see domains registered with DNSimple, with our Integrated Providers, and domains registered elsewhere that point to our name servers or those of an Integrated Provider. 

## Navigating to the Domain List

There are three ways to access the list of domain names within each account:

Select Registered Domains or DNS Zones from the account you want to view in your DNSimple Dashboard.

![](/files/domain-list-account-card-selection.png)

Select the account from the top navigation bar.

If you're already in the account but on another page, select Domain Names from the account navigation bar.

![](/files/domain-list-domain-name-arrow.png)

The account you're viewing is bolded so you can verify you're in the correct account. 

## List view

The page displays the first 50 domains in your account. 

If you have more than 50, use the pagination under the domain list to view next and previous pages, or jump to a specific page.

Each domain has an overview with the following information:

![](/files/domain-list-headers.png)

 ### Domain Name 
 A clickable link to the domain-specific home page to view, edit and manage the DNS and Domain Management. 

### Domain Registration 
The state of the domain in DNSimple.
 - **Transfer Domain** - indicates the domain is not registered with DNSimple or an Integrated Provider. Click the link attached to begin the transfer process.
 - **Registered** - indicates the domain is registered with DNSimple or an Integrated Provider. Clicking Registered will take you directly to the domain's registration hub.
   - If the domain is registered with DNSimple, it will display the expiration date, and auto-renew (if enabled). If the domain is not set to auto-renew, it will not be included in the quick view, and can be turned on by following [these steps](/articles/domain-auto-renewal/).
   - If the domain is registered with an Integrated Provider, that provider is also displayed.

![](/files/domain-list-godaddy-autorenew.png)

### DNS Zones

This indicates whether you have activated the zones and if the domain is resolving. Click the link attached to the zone status to navigate to the domain's DNS management page.

If it's active and resolving with DNSimple, it will appear like this:

![](/files/domain-list-active-zone.png)

If it's active and resolving with an Integrated Provider, that provider will also be displayed.

![](/files/domain-list-active-zone-route53.png)

If the domain does not have the zones activated within your DNSimple account, it will show as Inactive.

![](/files/domain-list-inactive-zone.png)

Learn more about Active and Inactive Zones, and how to manage them [here](/articles/dns-hosting/).

### Certificates 

This section displays all certificates currently issued to domains registered with DNSimple or an Integrated Provider.

If the domain has active certificates attached, they will be displayed, along with an identifier for the type of certificate issued. Clicking the link takes you to the domain-specific certificate page:

![](/files/domain-list-one-certificate.png)

If the domain is registered or resolving with DNSimple but does not have an active certificate, click the link shown below to add one:

![](/files/domain-list-add-certificate.png)

If the field is empty, the domain is registered elsewhere **and** resolving elsewhere. To learn more about certificates, visit [this guide](/articles/getting-started-ssl-certificates/).

### Last Updated  
Displays the date of the last activity logged for this domain. 

### Add to Favorites 
While not specified in the header, the stars to the right of each domain let you add them to your favorites for easy access. 

### Add new 
Above the Domain List view, you'll see an "Add new" dropdown.

![](/files/domain-list-add-new.png)

Click this button, and the menu will provide you with easy access to the many ways to manage your domains in DNSimple. 

![](/files/domain-list-add-new-dropdown.png)

### Label domains
At the bottom of your domain list, you'll see a button to add Labels. 

This option allows for optimal organization and understanding of the specifics to the domains in your account. Learn more about the available options in [this guide](/articles/labeling-domains/).

## Have more questions? 
Now you can use the Domain List to organize, view and manage your domains. Efficient domain management is only a click away. Have questions or feedback? [Get in touch](https://dnsimple.com/feedback) - our team is always happy to help.
