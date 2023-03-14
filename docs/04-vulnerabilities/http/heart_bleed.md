---
sidebar_position: 5
title: Heart Bleed
---

# Heart Bleed

## Description

The TLS implementation in OpenSSL 1.0.1 before 1.0.1g does not properly handle Heartbeat Extension packets, which allows remote attackers to obtain sensitive information from process memory via crafted packets that trigger a buffer over-read, potentially disclosing sensitive information.

## Remediation

To effectively prevent HeartBleed attacks:
- Update to OpenSSL 1.0.1g or later.
- Re-issue HTTPS certificates.
- Change asymmetric private keys and shared secret keys, since these may have been compromised with no evidence of corruption in the server log files.


## Configuration

> CheckId: `http/heart_bleed`



## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A06:2021](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)**

- CWE
  - **118**
  - **119**
  - **125**
  - **126**
  - **664**




### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **7.2**

## References

https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-2014-0160
