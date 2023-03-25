---
sidebar_position: 2
title: Width limit
---

# Width limit

## Description

GraphQL defines the maximum width of a query as the **maximum number of subfields** queried from one field.

If no limit is set on query width, clients may therefore craft a complex query that could lead to potential *DoS attacks* or *information leakage*.

## Remediation

Set a threshold on the maximum number of subfields that can be queried simultaneously.


<details>
    <summary>Apollo</summary>

Add a module to compute query complexity and set a threshold on this complexity so that overly broad requests get canceled.

For a user-friendly module which requires no schema modification whatsoever, check out the [graphql-validation-complexity](https://github.com/4Catalyzer/graphql-validation-complexity) module.

```javascript
import { createComplexityLimitRule } from 'graphql-validation-complexity';

const ComplexityLimitRule = createComplexityLimitRule(1000);

const apolloServer = new ApolloServer({
    ...
    validationRules: [ComplexityLimitRule],
});
```

For a more customizable module that lets you manually configure the cost of each field/type of your schema, take a look at the [graphql-cost-analysis](https://github.com/pa-bru/graphql-cost-analysis) module.

This second option is best suited for a more realistic complexity estimator as all fields may not be equal in terms of complexity.

To learn more on complexity estimation, you can read: [Securing Your GraphQL API from Malicious Queries](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/).


</details>

<details>
    <summary>Graphene</summary>

With `graphene-django`, it is possible to implement a custom GraphQL backend to limit query complexity, such as this one:
[graphene-django query cost analysis / complexity limits](https://gist.github.com/thibaudlabat/7b86f1a4da34eccfbfa524ca7359e87c).


</details>

<details>
    <summary>Hasura</summary>

Hasura allows you to set a width (=node) limit.

 To do so:
 -Go to Project Console > Security Settings > API Limits.
 -Click on "Global".
 -Set a node limit (e.g., 15).


</details>

## Configuration

> CheckId: `complexity/width_limit`

### Options

- *threshold* : Maximum width before raising an alert (-1 = infinite).



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "complexity/width_limit": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "complexity/width_limit": {
            "options": {
                "threshold": 20
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="low-severity">LOW</span>**
- OWASP: **[A04:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa4-unrestricted-resource-consumption.md)**
- PCI DSS: **6.5.8**
- CWE
  - **20**
  - **400**
  - **664**
  - **770**
- WASC: **10**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/
