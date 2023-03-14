---
sidebar_position: 50
title: Stack traceback
---

# Stack traceback

## Description

Details about database-level or code-level errors have been found in the response. This may cause information leaks, allowing attackers to identify the exact database or dependency you are using, and can therefore lead to highly targeted attacks against your application.

Example: sending `getUser(id: null)` returns `{ success: false, message: "SQL Error: Postgres 3.6 has encountered an error : Invalid ID."}`.

## Remediation

Always avoid database or code error stack traces to be returned directly to the client.


<details>
    <summary>Apollo</summary>

Never allow database or code error stack traces to be returned directly to the client.

This remediation is supported by our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

When using Apollo you can also disable exception tracebacks in the response by either setting `NODE_ENV` to `production` or enforcing it:

```javascript
const server = new ApolloServer({
  ...,
  debug: false
)}
````

To learn more, you can read [Apollo's documentation on omitting stack traces](https://www.apollographql.com/docs/apollo-server/data/errors/#omitting-or-including-stacktrace).

*Note: if you are working in a development or staging environment, error disclosure might happen on purpose.
In that case, check if this is also the case in production by:
- Using our cURL copy button to find the request that generated the stack trace.
- Changing URL and authentication tokens to match your production environment.

If the issue doesn't happen in production, you can safely ignore it.*


</details>

<details>
    <summary>Graphqlyoga</summary>

Enable [error masking](https://www.the-guild.dev/graphql/yoga-server/docs/features/error-masking) to hide stack traces in production.

Since it is enabled by default, you are probably missing the variable `NODE_ENV=production` in your production environment.


</details>

<details>
    <summary>Hasura</summary>

Set the `HASURA_GRAPHQL_DEV_MODE` env variable to `false` in all user-facing environments.

Source: https://hasura.io/docs/latest/graphql/core/deployment/graphql-engine-flags/reference/

*Note: if you are working in a development or staging environment, error disclosure might happen on purpose.
In that case, make sure your production environment has `HASURA_GRAPHQL_DEV_MODE` set to `false`*


</details>

## Configuration

> CheckId: `information_disclosure/stack_traceback`



## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**
- PCI DSS: **6.5.5**
- CWE
  - **200**
  - **209**
  - **210**
  - **211**
  - **212**
  - **215**
  - **248**
  - **544**
  - **550**
  - **669**
  - **644**
  - **668**
  - **703**
  - **755**
  - **1207**
  - **1258**
  - **1295**
- WASC: **10**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

https://infosecwriteups.com/exploiting-error-based-sql-injections-bypassing-restrictions-ed099623cd94
