---
sidebar_position: 13
title: Imputable JSON scalars
---

# Imputable JSON scalars

## Description

Imputable JSON scalars are an arbitrary GraphQL scalar type that allow users to return JSON objects from the GraphQL schema.
It is a **bad practice** and may represent an unhandled data leak risk for your application.

## Remediation

When possible, use typed input objects instead.


## Configuration

> CheckId: `introspection/imputable_json_scalars`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "introspection/imputable_json_scalars": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="info-severityom">INFO</span>**
- OWASP: **[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)**

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


