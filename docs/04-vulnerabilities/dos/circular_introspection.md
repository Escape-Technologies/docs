---
sidebar_position: 42
title: Circular introspection
---

# Circular introspection

## Description

A circular introspection has been performed on the system.
This can be exploited to conduct a Denial of Service attack.

The GraphQL introspection is done recursively on your schema.
By calling several objects that reference each other, an attacker can create a circular reference.

```graphql
__schema {
  types {
    fields {
      type {
        fields {
          type ... and so on infinitely
        }
      }
    }
  }
}
```

Creating a circular reference will increase the size of the returned document exponentially.
The larger your schema is, the bigger the document will be.

This DOS attack is hard to exploit as the size of the query might be limited by a server before reaching your backend.

## Remediation

To prevent circular introspection from being abused:
- Limit the maximum depth of the introspection query.
- Limit the maximum elapsed time to execute a GraphQL query.
- Disable your introspection.


## Configuration

> CheckId: `dos/circular_introspection`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "Circular introspection": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="info-severityom">INFO</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**
- PCI DSS: **6.5.8**
- CWE
  - **400**
  - **674**
  - **770**
- WASC: **10**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L/E:U/RL:O/RC:R**
- CVSS_SCORE: **4.4**

## References


