# DNSSEC Management in DNSimple

DNSSEC is applied on a per-domain basis. 

 <!--- needs screenshot -->
 
1. **DNSSEC**** tab - DNSSEC management options for the domain.
1. **Configure** in **Configure DNSSEC** card - Configure DNSSEC for the domain. 
1. **Manage** in the **DS Records** card - Manage the DS Records for the domain. 

## Configure DNSSEC

<!--- needs screenshot -->

1. **Enable DNSSEC** button - Turn on DNSSEC for the domain.

## Configured DNSSEC in Domain Names list

<!--- needs screenshot -->

1. When DNSSEC is configured, a **DNSSEC** tag is listed in the **Domain Names** list. 

## View DNSSEC configuration

<!--- needs screenshot -->

View Configuration in DNSSEC Configured card - View the domain’s DNSSEC key set.

## Manage DS records

<!--- needs screenshot -->

1. **Add DS record** button - Add a DS record.
1. **DS record information** - Information related to the DS Record.
1. **Managed by DNSimple** - DS Record is managed by DNSimple. Not present when self-managed.

## Manage DS records when none are present

<!--- needs screenshot -->

1. **Add DS record** button - Add a DS record.

## Add DS record

### DS-Data Interface

<!--- needs screenshot -->

1. **DS-Data Interface** - Method for working with a DS record.
1. **Algorithm** - Choose algorithm type for the DS record.
1. **Keytag** - Enter KeyTag number.
1. **Digest Type** - Select the digest type for the DS record.
1. **Digest** - Enter the digest provided by your current DNS provider.
1. **Add DS record** button- Adds the DS record to DNSimple for the domain. 

### KEY-Data Interface

<!--- needs screenshot -->

1. **KEY-Data Interface** - Method used to manage the keys themselves (DNSKEY records).
1. **Algorithm** - Choose algorithm type for the DS record.
1. **Flags** - Choose the type of flag.
1. **Protocol** - Select the Protocol for the DS record.
1. **Public Key** - Enter the public key of the Key-Signing Key (KSK) of your zone signing configuration.
1. **Add DS record** button - Adds the DS record to DNSimple for the domain.

## Delete DS Record

<!--- needs screenshot -->

Click the **trash can** icon to delete the DS record. 

<!--- needs screenshot -->

1. **Delete** button - Click to delete the DS record.

## Disable DNSSEC

<!--- needs screenshot -->

1. **Disable DNSSEC** button in **Disable DNSSEC** card - Start the process of disabling DNSSEC in DNSimple on the domain. 

<!--- needs screenshot -->

1. **Confirm** - Confirm the deletion of the DNSSEC configuration on the domain.
1. **Disable DNSSEC** button - Disables DNSSEC on the domain. 

## Have more questions? 
If you have any questions or need assistance with your DNSSEC management, [contact support](https://dnsimple.com/feedback), and we’ll be happy to help.
