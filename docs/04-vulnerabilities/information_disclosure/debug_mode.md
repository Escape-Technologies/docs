---
sidebar_position: 20
title: Debug mode
---

# Debug mode

## Description

When Debug mode is left turned on by developers, it allows attackers to gather precious information from excessive error reporting messages such as entire stack traces or tracebacks.

## Remediation

Disabled Debug mode.


## Configuration

> CheckId: `information_disclosure/debug_mode`



## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**
- PCI DSS: **6.5.5**
- CWE
  - **200**
  - **215**
  - **489**
  - **668**
  - **1258**
  - **1295**
- WASC: **14**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

https://www.infosecmatter.com/bug-bounty-tips-8-oct-14/#4-graphql-notes-for-beginners
