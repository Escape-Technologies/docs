---
sidebar_position: 24
title: SSRF
---

# SSRF

## Description

SSRF (Server-Side Request Forgery) vulnerability occurs when the attacker can send any request as if the server was sending it.

## Remediation

Basic blacklisting and regular expressions are a bad approach to mitigating SSRF.

The correct ways to prevent SSRF are:
- Whitelisting and DNS resolution: whitelist the hostname (DNS name) or IP address that your application needs to access. (Best method to prevent SSRF))
- Response handling: To prevent response data from leaking to the attacker, you must ensure that the received response is as expected. Under no circumstances should the raw response body from the request sent by the server be delivered to the client.
- Disabling unused URL schemas: if your application only uses HTTP or HTTPS to make requests, allow only these URL schemas. Once unused URL schemas are disabled, the attacker will be unable to exploit the web application to make requests using potentially dangerous schemas such as `file:///`, `dict://`, `ftp://`, and `gopher://`.
- Authentication on internal services.


## Configuration

> CheckId: `request_forgery/ssrf`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "SSRF": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)**

- CWE
  - **441**
  - **610**
  - **668**
  - **918**




### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **6.2**

## References

https://owasp.org/www-community/attacks/Server_Side_Request_Forgery
