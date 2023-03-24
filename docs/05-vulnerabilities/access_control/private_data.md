---
sidebar_position: 23
title: Private data
---

# Private data

## Description

According to the rules provided in the configuration file, `private data` can be accessed by unauthorized users.

## Remediation

The best way to ensure that private data can only be accessed by authorized users is by implementing a proper access control system.
To do so, access control must be applied to every object and every link in the graphQL schema.


<details>
    <summary>Apollo</summary>

See [Apollo's Access Control documentation](https://www.apollographql.com/docs/apollo-server/security/authentication/#in-resolvers).
For large scale applications, you'll want to use a specific package like [GraphQL Shield](https://github.com/maticzav/graphql-shield) for quick and easy Access Control management.


</details>

<details>
    <summary>Awsappsync</summary>

Appsync provides several methods for protecting critical information.
- To learn more on implementing fine-grained access control, head over to https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html#fine-grained-access-control.


</details>

<details>
    <summary>Hasura</summary>

See Hasura's detailed [documentation for Authorization Management](https://hasura.io/docs/latest/graphql/core/auth/authorization/permission-rules/).


</details>

## Configuration

> CheckId: `access_control/private_data`

### Parameters


**user** : A list of `fieldName:[scalarValues]` the user should never be able to access. Set `.*` as `fieldName` to avoid the value everywhere.

```json
{'__user': [{'**value**': ['**value**']}]}
```




### Examples


#### Ignoring this check

```json
{
    "checks": {
        "access_control/private_data": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A03:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa3-broken-object-property-level-authorization.md)**
- PCI DSS: **6.5.8**
- CWE
  - **200**
  - **201**
  - **284**
  - **668**
  - **1198**
  - **1212**
  - **1220**
- WASC: **22**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
