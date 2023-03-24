---
sidebar_position: 43
title: XSS
---

# XSS

## Description

XSS (Cross-site scripting) is an attack where malicious code (eg. JavaScript) is injected into the application and executed.

## Remediation

Preventing cross-site scripting is trivial in some cases but can be much harder depending on the complexity of the application and the ways it handles user-controllable data.

To effectively prevent XSS vulnerabilities, use a combination of the following measures:

- Filter user input on arrival as strictly as possible, based on what you expect as legitimate input.
- Encode user-controllable data as soons as it is outputted in HTTP reponses to prevent it from being interpreted as active content (ie. code). Depending on the output context, this might require applying combinations of HTML, URL, JavaScript, and CSS encoding.
- Use the right headers to ensure that browsers interpret the responses the way you intended. For example, to prevent XSS in HTTP responses that are not supposed to contain any HTML or JavaScript, you can use the Content-Type and X-Content-Type-Options headers.
- Use Content Security Policy (CSP) to reduce the severity of any XSS vulnerability that still occurs.


## Configuration

> CheckId: `injection/xss`

### Options

- *skip_objects* : List of object that are to be skipped by the security test.



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "injection/xss": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "injection/xss": {
            "options": {
                "skip_objects": []
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)**
- PCI DSS: **6.5.7**
- CWE
  - **74**
  - **79**
- WASC: **8**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **7.2**

## References

https://portswigger.net/web-security/cross-site-scripting
