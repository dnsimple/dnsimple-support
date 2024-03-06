---
meta: This article explains what a DNS zone file is, and how to import and export zone text files in DNSimple.
title: Domain Zone Files
excerpt: This article explains what a DNS zone file is, and how to import and export zone text files in DNSimple.
categories:
- DNS
---

# Domain Zone Files

* TOC
{:toc}

## What's a zone file? {#whats-a-zone-file}

A [zone file](https://en.wikipedia.org/wiki/Zone_file) is a representation of your domain's zone in a text file. The text file follows the BIND format and includes information about all the records the domain has.

You can use zone files to get a representation of all the records of a particular domain. You can use these files to accomplish various goals, like bulk migrating a domain zone to a secondary name server on a third-party system, or creating a backup of your domain records.

Zone files are a standard practice in the DNS industry, so you can also use zone files to get your domain working on DNSimple for the first time. You just have to get your domain's zone file from your current provider and import it.


## Importing records from a zone file

You can add records to your domain by importing a [zone file](#whats-a-zone-file).

<note>
Importing a zone file won't delete or replace the existing domain's records.
</note>

<div class="section-steps" markdown="1">
##### How to import records from a zone file

1.  Log in to DNSimple with your user credentials.
1.  Select the relevant account.
1.  On the header, click on the <label>Domain Names</label> tab.
1.  Locate the relevant domain, and click on the name to access the domain page.
1.  Go to the DNS section by clicking the <label>DNS</label> link on the left.
1.  Click on the <label>Import</label> link inside the zones card.

    ![Import zone link](/files/import-zone.png)

1.  Paste the content from the zone file into the text area, and click <label>Import Zone</label>.
1.  The results of the import will be displayed, including any errors that may have occurred.

    ![Zone file import results](/files/zone-import-results.png)

</div>


## Exporting records to a zone file

You can export your domain's records into a [zone file](#whats-a-zone-file).

The resulting zone file will allow you to copy over all the domain's records to a third-party system. You can also keep the zone file as a backup of your domain's records.

<info>
Non-standard records, like [ALIAS](/articles/alias-record) and [POOL](/articles/pool-record), will be commented out in the resulting file.
</info>

<div class="section-steps" markdown="1">
##### How to export your domain's records to a zone file

1.  Log in to DNSimple with your user credentials.
1.  Select the relevant account.
1.  On the header click on the <label>Domain Names</label> tab.
1.  Locate the relevant domain, and click on the name to access the domain page.
1.  Go to the DNS section by clicking the <label>DNS</label> link on the left.
1.  Click on the <label>Export</label> link inside the zones card. This creates a text file that you can save on your computer.

    ![Export zone link](/files/export-zone.png)
</div>
