---
sidebar_position: 37
title: Large JSON
---

# Large JSON

## Description

Inputting a very large sized JSON as an argument.

## Remediation

Limit the maximum size of a JSON that can be inputted.


## Configuration

> CheckId: `complexity/large_json`

### Options

- *skip_objects* : List of object that are to be skipped by the security test.



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "complexity/large_json": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "complexity/large_json": {
            "options": {
                "skip_objects": []
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**
- PCI DSS: **6.5.8**
- CWE
  - **20**
  - **351**
  - **434**
  - **789**
  - **1215**
  - **1284**
- WASC: **20**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

https://gusralph.info/file-upload-checklist/
