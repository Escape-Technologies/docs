---
sidebar_position: 23
title: Security timeout
---

# Security timeout

## Description

Requests that take a long time to process can be used by attackers to create Denial-of-Service (DoS) situations.

This security test is based on an arbitrary timeout threshold that might not match your application's requirements. To learn how to change it, head over to the configuration section below.

Example: Querying `getAllUsers(){ contacts { contacts }}` returns a response after 15s.

## Remediation

Implement a server timeout. For example, a server configured with a 5 seconds timeout would stop the execution of any query that takes over 5 seconds.

Pros:
 -Simple to implement.
 -Most security strategies use a timeout as a final layer of protection.

Cons:
 -Damage can already have been done before the timeout kicks in.
 -Can trigger other issues. Stoping connection after a certain time may result in strange behaviors and corrupt data.

Warning :
  When a timeout is configured on the server, the socket may be closed while the underlying request continues. Make sure that the request is actually canceled.


<details>
    <summary>Awsappsync</summary>

AWS AppSync enforces a timeout of 30s on each request by default.

If your API sits behind an [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html), you can configure a different (but lower than the hard 30s limit) timeout in the AWS API Gateway console by following this path:

AWS API Gateway console > {Your App} > Resources > Integration Request > "Use default timeout".


</details>

<details>
    <summary>Graphqlgo</summary>

Implement a server timeout by following this guide:

[The complete guide to Go net/http timeouts - Cloudfare blog](https://blog.cloudflare.com/the-complete-guide-to-golang-net-http-timeouts/)


</details>

<details>
    <summary>Hasura</summary>

Hasura allows you to set a custom query timeout.

To do so:
-Go to Project Console > Security Settings > API Limits.
-Click on "Global".
-Set a timeout (e.g., 10s).


</details>

<details>
    <summary>Stepzen</summary>

There is no known remediation for StepZen.


</details>

## Configuration

> CheckId: `dos/security_timeout`

### Options

- *threshold_low* : Duration of a request (in seconds) before raising a low level alert

- *threshold_medium* : Duration of a request (in seconds) before raising a low level alert

- *threshold_high* : Duration of a request (in seconds) before raising a low level alert



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "dos/security_timeout": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "dos/security_timeout": {
            "options": {
                "threshold_low": 1,
                "threshold_medium": 2,
                "threshold_high": 4
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A07:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa7-security-misconfiguration.md)**
- PCI DSS: **6.5.8**
- CWE
  - **400**
  - **557**
  - **664**
  - **770**
  - **1060**
  - **1088**
  - **1226**
- WASC: **10**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H/E:H/RL:O/RC:C**
- CVSS_SCORE: **7.2**

## References

https://medium.com/workflowgen/graphql-query-timeout-and-complexity-management-fab4d7315d8d
