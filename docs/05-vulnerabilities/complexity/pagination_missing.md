---
sidebar_position: 3
title: Pagination missing
---

# Pagination missing

## Description

The GraphQL API returned a substantial amount of data.
A query pagination might be missing.

## Remediation

Implement pagination on the specified queries.


## Configuration

> CheckId: `complexity/pagination_missing`

### Options

- *threshold* : Maximum number of nodes returned before raising an alert in the fast check.



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "complexity/pagination_missing": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "complexity/pagination_missing": {
            "options": {
                "threshold": 25
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="info-severityom">INFO</span>**
- OWASP: **[A08:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa8-lack-of-protection-from-automated-threats.md)**
- PCI DSS: **6.5.8**
- CWE
  - **284**
  - **668**
- WASC: **22**








## References

https://graphql.org/learn/pagination/
