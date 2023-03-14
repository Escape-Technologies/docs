---
sidebar_position: 45
title: Recursive Fragment
---

# Recursive Fragment

## Description

This is a DoS vulnerability that allows an attacker with specifically designed queries to cause stack overflow panics. Any user with access to the GraphQL handler can send these queries and cause stack overflows. This in turn could potentially compromise the ability of the server to serve data to its users.

## Remediation

Implement a maximum recursion limit.


## Configuration

> CheckId: `dos/recursive_fragment`



## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**

- CWE
  - **20**
  - **400**
  - **664**
  - **770**




### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H/E:H/RL:O/RC:R**
- CVSS_SCORE: **6.9**

## References

https://github.com/graph-gophers/graphql-go/security/advisories/GHSA-mh3m-8c74-74xh
