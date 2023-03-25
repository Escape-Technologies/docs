---
sidebar_position: 0
title: Pagination limit
---

# Pagination limit

## Description

A security check that ensures that an attacker cannot launch a **DoS** attack by quering all the nodes in a connection.

## Remediation

To prevent such an attack, limit pagination variables.


## Configuration

> CheckId: `complexity/pagination_limit`

### Options

- *skip_objects* : List of object that are to be skipped by the security test.



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "complexity/pagination_limit": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "complexity/pagination_limit": {
            "options": {
                "skip_objects": []
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A04:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa4-unrestricted-resource-consumption.md)**
- PCI DSS: **6.5.8**
- CWE
  - **284**
  - **307**
  - **799**
- WASC: **10**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References


