---
sidebar_position: 0
title: IDOR
---

# IDOR

## Description

We are able to enumerate a field without any limits.

## Remediation

Change the argument to one that cannot be enumerated.


## Configuration

> CheckId: `access_control/idor`

### Options

- *threshold_res* : Rate of correct responses to an argument being enumerated to raise an alert.

- *threshold_enum* : Rate of iterable values of a field to be considered iterable.



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "access_control/idor": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "access_control/idor": {
            "options": {
                "threshold_res": 0.8,
                "threshold_enum": 0.6
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A01:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa1-broken-object-level-authorization.md)**
- PCI DSS: **6.5.8**
- CWE
  - **284**
  - **307**
  - **566**
  - **639**
  - **799**
- WASC: **11**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References


