---
sidebar_position: 29
title: Unreachable server
---

# Unreachable server

## Description

The server went offline for too long.
This can be caused by a server crash, a network issue, or a misconfiguration.

Often, this is a sign of a bigger issue.

## Remediation

We recommend you to investigate two possible causes:

- Unhandled exceptions in your code: Verify that your code is handling exceptions properly.
- Uncontrolled resource consumption: Verify what resolver has been used to leverage the data source.


## Configuration

> CheckId: `dos/unreachable_server`



## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**
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

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H**
- CVSS_SCORE: **7.5**

## References

https://medium.com/workflowgen/graphql-query-timeout-and-complexity-management-fab4d7315d8d
