---
sidebar_position: 0
title: Typing inconsistency (interceptor)
---

# Typing inconsistency (interceptor)

## Description

This security check verifies that all the data returned in the response matches its expected type, as defined in the introspection.

## Remediation

Update your resolver to make the introspection type match the actual returned type.


## Configuration

> CheckId: `schema/typing_inconsistency_interceptor`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "schema/typing_inconsistency_interceptor": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="info-severityom">INFO</span>**
- OWASP: **[A08:2019](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md)**
- PCI DSS: **6.5.8**
- CWE
  - **389**
  - **438**
  - **440**
  - **684**
  - **1068**
- WASC: **40**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N/RL:O**
- CVSS_SCORE: **0**

## References

https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html