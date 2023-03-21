---
sidebar_position: 33
title: Public Unsafe Route
---

# Public Unsafe Route

## Description

A route that mutate application data should not be public.

## Remediation

Restrict access to the route, using an authentication middleware for example.


## Configuration

> CheckId: `access_control/public_unsafe_route`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "access_control/public_unsafe_route": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A01:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa1-broken-object-level-authorization.md)**
- PCI DSS: **6.5.8**
- CWE
  - **200**
  - **264**
  - **275**
  - **284**
  - **285**
- WASC: **2**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **8.7**

## References

https://owasp.org/Top10/A01_2021-Broken_Access_Control/
