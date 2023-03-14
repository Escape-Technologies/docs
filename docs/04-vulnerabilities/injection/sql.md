---
sidebar_position: 26
title: SQL
---

# SQL

## Description

A SQL injection vulnerability occurs when users can insert (or “inject”) malicious SQL code in a legit SQL query that is built from user-submitted input.
A successful SQL injection exploit can read sensitive data from the database, modify database data, execute administration operations on the database (such as shutting down the DBMS), recover the content of a given file from the DBMS file system and in some cases issue commands to the operating system.

## Remediation

Primary defenses:
- Use of Prepared Statements (with parameterized queries). This prevention techniques is the most effective one as it will completely shutdown any SQL injection attacks. Keep in mind that prepared statements must be used everywhere, even if no user inputted data is found in the query.
- Use of Stored Procedures.
- Allow-list Input Validation. Usage whitelist is recommended to prevent SQL injection attacks as whitelisting is more effective then black listing.
- Escaping all user supplied input.

Additional defenses:
- Enforcing Least Privilege.
- Performing Allow-list Input Validation as a secondary line of defense.


## Configuration

> CheckId: `injection/sql`

### Options

- *skip_objects* : List of object that are to be skipped by the security test.




## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A03:2021](https://owasp.org/Top10/A03_2021-Injection/)**
- PCI DSS: **6.5.1**
- CWE
  - **89**
  - **564**
  - **943**
- WASC: **19**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **8.7**

## References

https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
