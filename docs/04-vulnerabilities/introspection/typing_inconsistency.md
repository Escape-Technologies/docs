---
sidebar_position: 10
title: Typing inconsistency
---

# Typing inconsistency

## Description

Look for typing misconfigurations by checking if a mutation parameter with the wrong parameter type succeeds.

## Remediation

Do not resolve queries with a wrong argument type.


<details>
    <summary>Apollo</summary>

Apollo doesn't allow arguments of the wrong type by default.

Example:
```javascript
{
  "errors": [
    {
      "message": "String cannot represent a non string value: 123",
      "extensions": {
        "code": "GRAPHQL_VALIDATION_FAILED"
      }
    }
  ]
}
```

This error should appear if you are using Apollo.


</details>

<details>
    <summary>Awsappsync</summary>

AWS AppSync doesn't allow arguments of the wrong type by default.

Example:

```json
{
  "data": null,
  "errors": [
    {
      "path": null,
      "locations": [
        {
          "line": 1,
          "column": 18,
          "sourceName": null
        }
      ],
      "message": "Validation error of type WrongType: argument 'a' with value 'StringValue{value='4'}' is not a valid 'Int' @ 'testType'"
    }
  ]
}
```


</details>

## Configuration

> CheckId: `introspection/typing_inconsistency`

### Options

- *skip_objects* : List of object that are to be skipped by the security test.



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "Typing inconsistency": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)**
- PCI DSS: **6.5.8**
- CWE
  - **20**
  - **351**
  - **1068**
  - **1287**
- WASC: **40**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N/RL:O/RC:C**
- CVSS_SCORE: **0.0**

## References

https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html
