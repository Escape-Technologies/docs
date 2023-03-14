---
sidebar_position: 1
title: Secrets leaks
---

# Secrets leaks

## Description

The database exposes sensitive data to the public, such as secrets, private keys, tokens, passwords, etc. This security check detects this sensitive data.

## Remediation

* If there is a chance that unauthorized individuals have already accessed the secret, revoke it immediately and notify the concerned team.

* If the leak happens through another vulnerability, such as a [Server-Side Request Forgery](https://docs.escape.tech/security_tests.html#request-forgery), fix this issue to avoid further secret leaks.

* Have your developers implement these best practices to avoid leaking secrets:
    -Inside logs: [Keeping Sensitive Data Out of Logs](https://medium.com/@joecrobak/seven-best-practices-for-keeping-sensitive-data-out-of-logs-3d7bbd12904).
    -Inside commits: [Pre-commit](https://pre-commit.com/) or [Gitleaks](https://github.com/zricethezav/gitleaks).
    -In the configuration, using an environment variable manager like [Hashicorp Vault](https://www.hashicorp.com/products/vault).


<details>
    <summary>Apollo</summary>

* If there is a chance that unauthorized individuals have already accessed the secret, revoke it immediately and notify the concerned team.

* If the leak happens through another vulnerability, such as a [Server-Side Request Forgery](https://docs.escape.tech/security_tests.html#request-forgery), fix this issue to avoid further secret leaks.

* Have your developers implement these best practices to avoid leaking secrets:
    -Inside logs: [keeping sensitive data out of logs](https://medium.com/@joecrobak/seven-best-practices-for-keeping-sensitive-data-out-of-logs-3d7bbd12904).
    -Inside commits: [Pre-commit](https://pre-commit.com/) or [Gitleaks](https://github.com/zricethezav/gitleaks).
    -In the configuration, using an environment variable manager like [Hashicorp Vault](https://www.hashicorp.com/products/vault).

See [Apollo's Access Control Documentation](https://www.apollographql.com/docs/apollo-server/security/authentication/#in-resolvers).
For large scale applications, you'll want to use a specific package like [GraphQL Shield](https://github.com/maticzav/graphql-shield) for quick and easy Access Control management.


</details>

<details>
    <summary>Awsappsync</summary>

* If there is a chance that unauthorized individuals have already accessed the secret, revoke it immediately and notify the concerned team.

* If the leak happens through another vulnerability, such as a [Server-Side Request Forgery](https://docs.escape.tech/security_tests.html#request-forgery), fix this issue to avoid further secret leaks.

* Have your developers implement these best practices to avoid leaking secrets:
    -Inside logs: [keeping sensitive data out of logs](https://medium.com/@joecrobak/seven-best-practices-for-keeping-sensitive-data-out-of-logs-3d7bbd12904)
    -Inside commits: [Pre-commit](https://pre-commit.com/) or [Gitleaks](https://github.com/zricethezav/gitleaks)
    -In the configuration, using an environment variable manager like [Hashicorp Vault](https://www.hashicorp.com/products/vault)

Appsync provides several other methods for protecting critical information.
-To learn more on implementing fine-grained access control, head over to https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html#fine-grained-access-control.
-To learn more on filtering critical data directly from responses, see https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html#aws-appsync-filtering-information.


</details>

<details>
    <summary>Hasura</summary>

* If there is a chance that unauthorized individuals have already accessed the secret, revoke it immediately and notify the concerned team.

* If the leak happens through another vulnerability, such as a [Server-Side Request Forgery](https://docs.escape.tech/security_tests.html#request-forgery), fix this issue to avoid further secret leaks.

* Have your developers implement these best practices to avoid leaking secrets:
    -Inside logs: [keeping sensitive data out of logs](https://medium.com/@joecrobak/seven-best-practices-for-keeping-sensitive-data-out-of-logs-3d7bbd12904)
    -Inside commits: [Pre-commit](https://pre-commit.com/) or [Gitleaks](https://github.com/zricethezav/gitleaks)
    -In the configuration, using an environment variable manager like [Hashicorp Vault](https://www.hashicorp.com/products/vault)

See Hasura's detailed documentation for [authorization management](https://hasura.io/docs/latest/graphql/core/auth/authorization/permission-rules/).


</details>

## Configuration

> CheckId: `access_control/secrets_leaks`

### Options

- *blacklist* : List of elements to ignore.





## Score

- Escape Severity: **<span className="high-severity">HIGH</span>**
- OWASP: **[A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)**
- PCI DSS: **6.5.8**
- CWE
  - **200**
  - **201**
  - **284**
  - **668**
  - **1198**
  - **1212**
  - **1220**
- WASC: **22**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **7.2**

## References

https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
