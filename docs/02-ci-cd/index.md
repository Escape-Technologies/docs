---
title: 👾 Integrate in CI/CD
description: Use Escape in a CI/CD environment
---

## Continuous security testing

You can use our security tools within your CI/CD flows, and we are constantly working more on improving how well security scans integrate as part of your processes. Detailed, credentials-filled code snippets and examples can be found from the CI/CD management page of your Escape application.

## Supported integrations

As of now, Escape scans can be triggered from the following usages:

- [GitHub action](https://github.com/marketplace/actions/escape-graphql-security)
- Gitlab pipelines
- Anywhere else using our [`npm` package](https://www.npmjs.com/package/@escape.tech/action)
- Anywhere else using our public API

:::info
We are currently implementing solutions for other integrations. [Let us know your needs](https://discord.escape.tech) so that we can match them as closely as possible !
:::

## Automatic scan triggers

Escape provides a way for you to integrate its scanning functionalities within your CI/CD pipelines.

### Basic scan triggers

As of now, we support two types of CI triggers:

1. Trigger a scan in a non-blocking way (primarily intended for monitoring purposes)
2. Trigger a scan, wait for this scan to be over, and ensure no vulnerabilities are detected (primarily intended for CI/CD purposes).

### Compatibility with the Escape security platform

**This integration includes every regular feature of the security scan from Escape.**

Especially, scans triggered using this method will use the application configuration on the [Escape platform](https://app.escape.tech). It will notify your team at the end using whatever contact channels that were defined for this organization (see [integrations](/integrations)).

### Scan configuration overrides

When using dynamic parameters for the scans configuration, our integrations **allow you to provide configuration overrides when triggering a scan**. It is possible, for instance to renew the authentication headers before starting a scan.

### Introspection upload

Introspection for your applications can be programatically updated, allowing to easily keep your Escape application synced with the schema of GraphQL endpoint, **even in the case of a closed introspection**.

## Example usage

Escape is effortless to integrate into your CI/CD at two different steps of your Gitlflow 💪.

- Run a scan at every commit being pushed on a specific branch
- Run a scan before deploying the test environment onto production
