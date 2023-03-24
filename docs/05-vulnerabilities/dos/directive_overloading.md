---
sidebar_position: 0
title: Directive overloading
---

# Directive overloading

## Description

Directive Overloading occurs when a user can send a query with many consecutive directives and overload the engine handling those directives.

## Remediation

Limit the number of directives allowed in a query.
This should be handled by the GraphQL engine while parsing the document, otherwise this can lead to a heap overflow.


<details>
    <summary>Apollo</summary>

Upgrade to GraphQL>=16.0.0 if you are not already up to date.
You can also use our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware to limit the number of directives allowed in a query.


</details>

<details>
    <summary>Graphqlyoga</summary>

Upgrade to GraphQL>=16.0.0 if you are not already up to date.
You can also use our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware to limit the number of directives allowed in a query.


</details>

## Configuration

> CheckId: `dos/directive_overloading`

### Options

- *threshold* : Maximum number of directives allowed before raising an alert in the fast check.



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "dos/directive_overloading": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "dos/directive_overloading": {
            "options": {
                "threshold": 50
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A08:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa8-lack-of-protection-from-automated-threats.md)**

- CWE
  - **20**
  - **400**
  - **664**
  - **770**




### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H/E:H/RL:O/RC:R**
- CVSS_SCORE: **6.9**

## References

no-reference-available-yet
