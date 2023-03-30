---
sidebar_position: 8
title: Unsecure HTTP
---

# Unsecure HTTP

## Description

This security **best practice** should be enforced by your organization, at least for your API routes.

Here are 4 risk examples when allowing GraphQL communication using unsecure `HTTP`:

- **Man in the Middle attacks**: hackers can intercept and alter data from a legitimate request.
- **Misuse of data**: confidential information can be accessed by hackers.
- **Downranking of websites**: your website can be considered insecure by search engines and rated as not trustworthy.
- **Loss of customers' trust**: without a secure HTTPS padlock displayed on your website, users may rightfully consider it to be unsafe.

Using [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) is not a solution to this problem, as it won't protect against MITM attacks and regular "public wifi sniffing" until connection has been upgraded to HTTPS.
As recommended by [Google](https://developers.google.com/search/docs/advanced/security/https), make sure that no cookies are being sent through HSTS, which is likely the case if you are using a GraphQL API over HSTS.

## Remediation

Enforce using HTTPS (using an SSL certificate) in order to protect your users' connections.
In most cases, this must be done at ingress/(reverse-)proxy level.

- **Kubernetes Ingress**: [Google Cloud documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#https_redirect).
- **Caddy**: [CaddyServer documentation](https://caddyserver.com/docs/json/apps/http/servers/automatic_https/).
- **Nginx Reverse Proxy**: [Nginx documentation](https://docs.nginx.com/nginx/admin-guide/security-controls/securing-http-traffic-upstream/).
- **Express**: [Node, Express, SSL Certificate: run HTTPS server from scratch in 5 steps](https://dev.to/omergulen/step-by-step-node-express-ssl-certificate-run-https-server-from-scratch-in-5-steps-5b87).
- **graphql-go/graphql**: [golang-tls](https://github.com/denji/golang-tls).

If you are using **Let's Encrypt** certificates, make sure to authorize HTTPS to HTTPS redirections on the path `/.well-known/acme-challenge/` to avoid any issues.


## Configuration

> CheckId: `http/unsecure_http`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "http/unsecure_http": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A02:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa2-broken-authentication.md)**
- PCI DSS: **6.5.4**
- CWE
  - **295**
  - **319**
- WASC: **4**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **7.2**

## References

https://developers.google.com/search/docs/advanced/security/https
