---
sidebar_position: 9
title: POST based CSRF
---

# POST based CSRF

## Description

The canonical content-type for GraphQL queries is JSON (`application/json`). Other content-types should be rejected as they facilitate CSRF attacks (e.g., via form submission).

## Remediation

Only allow requests with the `Content-Type` header set to `application/json`.


<details>
    <summary>Apollo</summary>

Only allow requests with the `Content-Type` header set to `application/json`.

With Express.js, the `enforce-content-type` middleware can be used to block unwanted content types.

```javascript
 const enforceContentType = require('enforce-content-type')

 app.use(enforceContentType({
     type: 'application/json'
 }))
 ```

 See: [enforce-content-type Github Repo](https://github.com/codepunkt/enforce-content-type).


</details>

## Configuration

> CheckId: `request_forgery/post_based_csrf`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "request_forgery/post_based_csrf": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**
- PCI DSS: **6.5.9**
- CWE
  - **345**
  - **346**
  - **352**
  - **693**
- WASC: **9**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:P/RL:O/RC:R**
- CVSS_SCORE: **4.6**

## References

https://blog.doyensec.com/2021/05/20/graphql-csrf.html
