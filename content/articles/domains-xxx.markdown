---
title: .XXX Domains
excerpt: This article explains the requirements and special procedures for .XXX domain names.
categories:
- Domains
---

# .XXX Domain Names

* TOC
{:toc}

---

This article explains the requirements and special procedures for .XXX domain names.


## Registration

In order for a .XXX domain to be activated by the .XXX registry and be allowed to resolve, you must register on [the ICM Registry](http://icmregistry.com/about/sponsored-community/) and receive the required .XXX Member Authorization Token to activate your domain. The .XXX TLD requires a Member Auth Token to be provided in order to activate the domain.

You can provide the token during the registration as an extended attribute:

![](/files/xxx-member-auth-token.png)

### Registration via the API
To register a .XXX domain via the API, you need to pass your Member Auth Token through extended attributes. An example:
```
curl -X GET \
  https://api.dnsimple.com/v2/tlds/xxx/extended_attributes \
  -H 'accept: application/json' \
  -H 'authorization: Bearer TOKEN' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json'
```
```
{
    "data": [
        {
            "name": "xxx_memberid",
            "description": "Member Authorization Token",
            "required": false,
            "options": []
        },
        {
            "name": "xxx_resolving",
            "description": "Website Resolves",
            "required": false,
            "options": [
                {
                    "title": "Yes",
                    "value": "1",
                    "description": "Website resolves"
                },
                {
                    "title": "No",
                    "value": "nonResolver",
                    "description": "Website does not resolve"
                }
            ]
        }
    ]
}
```

## Changing your Member ID

Please [get in touch with us](https://dnsimple.com/contact) to change your Member ID for a .XXX domain.
