---
sidebar_position: 2
title: Undefined objects
---

# Undefined objects

## Description

Undefined objects are objects that use the built-in GraphQL object type instead of referencing a custom one.
They can be at the root of security issues due to their unstructured nature.

## Remediation

Enforce strong typing in your GraphQL objects.


## Configuration

> CheckId: `schema/undefined_objects`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "schema/undefined_objects": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="info-severityom">INFO</span>**
- OWASP: **[A09:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa9-improper-assets-management.md)**

- CWE
  - **758**
  - **1059**
  - **1111**
  - **1357**




### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N**
- CVSS_SCORE: **0.0**

## References

