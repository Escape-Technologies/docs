---
sidebar_position: 3
title: POST based CSRF
---

# POST based CSRF

## Description

The canonical content-type for GraphQL queries is JSON (`application/json`). Other content-types should be rejected as they facilitate CSRF attacks (e.g., via form submission).

Note that CSRF is an attack vector that specifically target requests where the browser automatically provides authentication (typically through `Cookie` or `Basic` Authentication).

Especially, if your application is attaching the credentials via an `Authorization` header then the browser can't automatically authenticate the requests, and CSRF isn't possible.

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

 See: [enforce-content-type GitHub Repo](https://github.com/codepunkt/enforce-content-type).


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
- OWASP: **[A02:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa2-broken-authentication.md)**
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