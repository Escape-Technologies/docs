---
sidebar_position: 7
title: Undefined objects
---

# Undefined objects

## Description

Undefined objects are objects that use the built-in GraphQL object type instead of referencing a custom one.
They can be at the root of security issues due to their unstructured nature.

## Remediation

Enforce strong typing in your GraphQL objects.


## Configuration

> CheckId: `introspection/undefined_objects`



## Score

- Escape Severity: **<span className="info-severityom">INFO</span>**
- OWASP: **[A06:2021](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)**

- CWE
  - **758**
  - **1059**
  - **1111**
  - **1357**




### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N**
- CVSS_SCORE: **0.0**

## References


