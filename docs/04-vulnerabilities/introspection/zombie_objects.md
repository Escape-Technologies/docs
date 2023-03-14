---
sidebar_position: 47
title: Zombie objects
---

# Zombie objects

## Description

Zombie objects are objects that are not accessible from any __query__, __mutation__,or __subscription__, but are still declared in your GraphQL schema.
Most of the time, zombie objects reveal legacy or unused part of your codebase.
Because they are not maintained nor patched, they are a **privileged vector of attack** and represent a severe security risk for your application.

## Remediation

**Remove zombie objects** from your GraphQL schema and associated code if they are indeed useless in your codebase, otherwise make them accessible from at least one __query__, __mutation__ or __subscription__.


## Configuration

> CheckId: `introspection/zombie_objects`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "introspection/zombie_objects": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="low-severity">LOW</span>**

- PCI DSS: **6.3.2**
- CWE
  - **561**
  - **1006**
  - **1164**
- WASC: **15**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N**
- CVSS_SCORE: **5.3**

## References

https://cwe.mitre.org/data/definitions/561.html
