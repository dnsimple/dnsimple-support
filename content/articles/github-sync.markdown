---
title: Synchronize Zones from GitHub
categories:
- Github and DNSimple
---

# Sync Zones from Github

<note>
This article described a beta feature. The feature must be enabled on your account by request.
</note>

You can connect to Github and synchronize zone data from a Github repository into your DNSimple account.

## Setting up your repository

The synchronization feature requires that your repository has a directory called `zones`. In that directory you should place one JSON file for each zone you want to synchronize from Github.

Each JSON file contains a JSON object with a `name` key whose value is the domain name, and a `records` key that is a list of record objects.

Each record object must have a `name`, `type`, `content` and `ttl`. MX and SRV records may also have a `prio` field (for the priority).

Here is an example of how the JSON should look:

~~~json
{
  "name": "your-domain-name.com",
  "records": [
    {
      "name": "",
      "type": "A",
      "content": "1.2.3.4",
      "ttl": 3600
    },
    {
      "name": "",
      "type": "MX",
      "content": "mail-server.com",
      "ttl": 3600,
      "prio": 10
    }
  ]
}
~~~

## Linking

1. Once the feature is enabled, go to your Account page and click on the Sync tab.
2. Connect to your Github account. We request access to read and write both public and private repositories, but you will select the repository to synchronize with.
3. Once you've authorized DNSimple you will be prompted to select a repository to synchronize from. Select the repository with the /zones directory as described above.
4. If the connection is successful then all domains which have JSON files in the `zones` directory will be synchronized to your DNSimple account. Any zone not in your DNSimple account will be added.
5. Now whenever you push to the Github repository your zone data will automatically be updated in DNSimple and deployed to our authoritative name servers.

<warning>
If you specify a zone for a domain already in your account then that domain's records will be overwritten by the data from your Github repository.
</warning>

## Unlinking

You may unlink from your Github repository at any time. When you do this the domains in your DNSimple account will remain. If you want to actually delete them then you will need to do so from each domain's Manage page.
