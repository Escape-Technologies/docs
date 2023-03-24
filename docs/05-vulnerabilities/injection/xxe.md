---
sidebar_position: 0
title: XXE
---

# XXE

## Description

External entities is an element of XML documents, and attackers may replace the entity value with malicious data, alternate referrals, or compromise the security of the data the server/XML application has access to. 
Attackers may also use External Entities to have the web services download malicious code or content on the server for use in secondary or follow up attacks.

## Remediation

To safely prevent XXE attacks, always disable DTDs (External Entities) completely. Depending on the parser, the method should be similar to the following:

```java
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
```

Disabling DTDs also helps secure the parser against Denial of Services attacks such as Billion Laughs. 

If it is not possible to disable DTDs completely, disable external entities and external document type declarations in the way that's specific to each parser.


## Configuration

> CheckId: `injection/xxe`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "injection/xxe": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)**
- PCI DSS: **_6_5_1**
- CWE
  - **610**
  - **611**
- WASC: **43**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:L/E:F/RL:O/RC:C**
- CVSS_SCORE: **6.8**

## References

http://projects.webappsec.org/XML-External-Entities
