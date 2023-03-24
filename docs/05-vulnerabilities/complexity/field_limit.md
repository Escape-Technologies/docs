---
sidebar_position: 5
title: Field limit
---

# Field limit

## Description

Attackers may craft complex queries by requesting a significant number of fields.

This could lead to potential *DoS attacks* or *information leakage*.

## Remediation

Limit query complexity by using a library specific to your engine.


<details>
    <summary>Apollo</summary>

Add a module to compute query complexity and set a threshold so that overly broad requests get canceled.

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

To learn more about complexity estimation, you can read: [Securing Your GraphQL API from Malicious Queries](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/).


Source: <https://escape.tech/blog/9-graphql-security-best-practices/>.


</details>

<details>
    <summary>Graphene</summary>

With `graphene-django`, it is possible to implement a custom GraphQL backend to limit query complexity, such as this one:
[graphene-django query cost analysis / complexity limits](https://gist.github.com/thibaudlabat/7b86f1a4da34eccfbfa524ca7359e87c).


</details>

<details>
    <summary>Graphqlphp</summary>

```php
use GraphQL\GraphQL;
use GraphQL\Validator\Rules\QueryComplexity;
use GraphQL\Validator\DocumentValidator;

$rule = new QueryComplexity($maxQueryComplexity = 100);
DocumentValidator::addRule($rule);

GraphQL::executeQuery(/*...*/);
```

Source: <https://github.com/webonyx/graphql-php/blob/master/docs/security.md#query-complexity-analysis>


</details>

<details>
    <summary>Hasura</summary>

Limit the number of fecthed fields with Response Limiting.
To learn how to implement it, check out [Hasura's Response Limiting guide](https://hasura.io/learn/graphql/hasura-advanced/security/5-response-limit/).


</details>

## Configuration

> CheckId: `complexity/field_limit`

### Options

- *threshold* : Maximum fields before raising an alert (-1 = infinite).



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "complexity/field_limit": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "complexity/field_limit": {
            "options": {
                "threshold": 100
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
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
