---
sidebar_position: 16
title: CRLF
---

# CRLF

## Description

CRLF occurs when an attacker can abuse the carriage return character (\r) and a newline character (\n) in an HTTP request in order to inject new headers or a new body for the HTTP request. This attack is a very dangerous attack as it can give the attacker the ability to create whatever request he wants.

## Remediation

The only way to prevent CRLF attacks is to carefully sanitize every message that is sent by the client.


## Configuration

> CheckId: `http/crlf`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "CRLF": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)**
- PCI DSS: **6.5.1**
- CWE
  - **93**
  - **113**




### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

http://www.watchfire.com/resources/HTTPResponseSplitting.pdf
