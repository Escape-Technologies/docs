---
sidebar_position: 3
title: Weak JSON typing
---

# Weak JSON typing

## Description

Inputable JSON scalars are an arbitrary GraphQL scalar type that allow users to return JSON objects from the GraphQL schema.
It is a weak typing **bad practice** and may represent an unhandled data leak risk for your application.

## Remediation

When possible, use typed input objects instead.


## Configuration

> CheckId: `schema/weak_json_typing`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "schema/weak_json_typing": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="info-severityom">INFO</span>**
- OWASP: **[A08:2019](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md)**

- CWE
  - **710**
  - **1006**
  - **1059**
  - **1093**
  - **1111**




### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **0.0**

## References

