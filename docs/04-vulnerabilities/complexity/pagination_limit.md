---
sidebar_position: 4
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




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)**
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


