---
sidebar_position: 7
title: Alias limit
---

# Alias limit

## Description

GraphQL supports the aliasing of multiple sub-queries into a single query. It allows requesting multiple instances of objects efficiently and without conflicts.
However, attackers can leverage this feature to bypass many security measures, including rate limiting.

Query example:
```graphql
query {
  a: myself{username}
  b: myself{username}
  ...
}
```

Response example:
```javascript
{
  "data": {
    "a": {"username":"EscapeAdmin"},
    "b": {"username":"EscapeAdmin"},
    ...
  }
}
```

## Remediation

**Limit query aliasing** in your GraphQL Engine to prevent aliasing-based attacks.


<details>
    <summary>Apollo</summary>

Adding a limit on request complexity is a much better alternative to disabling aliasing, which can trigger other issues.

Install our open source package [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) for Apollo.


</details>

<details>
    <summary>Graphqlyoga</summary>

Install our open source package [GraphQL Armor](https://escape.tech/graphql-armor/docs/getting-started) for Yoga.


</details>

## Configuration

> CheckId: `complexity/alias_limit`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "complexity/alias_limit": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="low-severity">LOW</span>**
- OWASP: **[A08:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa8-lack-of-protection-from-automated-threats.md)**
- PCI DSS: **6.5.8**
- CWE
  - **20**
  - **400**
  - **664**
  - **770**
  - **799**
- WASC: **10**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L/E:H/RL:O/RC:R**
- CVSS_SCORE: **4.9**

## References

https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/12-API_Testing/01-Testing_GraphQL
