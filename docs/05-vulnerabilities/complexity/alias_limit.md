---
sidebar_position: 1
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

This remediation is supported by our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

When using Apollo, you can also add a module to compute the query complexity and set a threshold so that overly broad requests get canceled.

For a user-friendly module which requires no schema modification whatsoever, check out the [graphql-validation-complexity](https://github.com/4Catalyzer/graphql-validation-complexity) module.

```javascript
import { createComplexityLimitRule } from 'graphql-validation-complexity';

const ComplexityLimitRule = createComplexityLimitRule(1000);

const apolloServer = new ApolloServer({
    ...
    validationRules: [createComplexityLimitRule(1000)],
});
```

For a more customizable module that lets you manually configure the cost of each field/type of your schema, take a look at the [graphql-cost-analysis](https://github.com/pa-bru/graphql-cost-analysis) module.

This second option is best suited for a more realistic complexity estimator as all fields may not be equal in terms of complexity.

To learn more about complexity estimation, you can read: [Securing Your GraphQL API from Malicious Queries](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/)


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
