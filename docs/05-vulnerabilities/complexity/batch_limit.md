---
sidebar_position: 8
title: Batch Limit
---

# Batch Limit

## Description

Some GraphQL engines support batching of **multiple queries** into a **single request**. This allows users to request multiple objects or multiple instances of objects efficiently.
However, an attacker can leverage this feature to evade many security measures, including rate limiting.

## Remediation

Disable or limit queries batching in your GraphQL engine.


<details>
    <summary>Apollo</summary>

Disable query batching in `ApolloServer` constructor options.

Install our open source package [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) for Apollo.

Otherwise, you can switch off batching in the `ApolloServer` constructor options.

```javascript
const server = new ApolloServer({
  ...
  allowBatchedHttpRequests: false,
)}
```
Source: <https://www.apollographql.com/docs/apollo-server/requests/#batching>


</details>

<details>
    <summary>Graphqlyoga</summary>

Install our open source package [GraphQL Armor](https://escape.tech/graphql-armor/docs/getting-started) for Yoga.


</details>

## Configuration

> CheckId: `complexity/batch_limit`

### Options

- *threshold* : Maximum number of batched documents allowed to be sent



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "complexity/batch_limit": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "complexity/batch_limit": {
            "options": {
                "threshold": 15
            }
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

https://lab.wallarm.com/graphql-batching-attack/