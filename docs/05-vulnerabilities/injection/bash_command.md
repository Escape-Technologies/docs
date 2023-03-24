---
sidebar_position: 31
title: Bash command
---

# Bash command

## Description

A system command was successfully executed on your application's system. Command injections happen when a user manages to successfully execute arbitrary commands on the host's operating system by abusing a vulnerable endpoint.

## Remediation

To prevent command injection attacks:
-Never use user-submitted input in shell commands.
-If supported by your language, add `semgrep` to your development process to ensure detection of potentially vulnerable system shell calls.
-Use proper input validation techniques to detect and prevent command injection. Keep in mind the input validation should be implemented in the backend as it will be easily bypassed if done in the frontend.


## Configuration

> CheckId: `injection/bash_command`

### Options

- *skip_objects* : List of objects that are to be skipped by the security test.



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "injection/bash_command": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "injection/bash_command": {
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
- PCI DSS: **6.5.1**
- CWE
  - **77**
  - **78**
  - **88**
- WASC: **31**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N/E:F/RC:R**
- CVSS_SCORE: **8.5**

## References

https://owasp.org/www-community/attacks/Command_Injection
