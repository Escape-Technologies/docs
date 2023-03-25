---
sidebar_position: 5
title: Security Headers
---

# Security Headers

## Description

* **Cache-Control**:
 - The HTTP 'Cache-Control' header is used to specify directives for caching mechanisms.
 - The server did not return (or returned an invalid) 'Cache-Control' header, which means pages containing sensitive information could be stored client-side and then be exposed to unauthorized persons.

 * **Content-Type**:
   - The Content-Type header was either missing or empty.

 * **X-Content-Type-Options**:
   - The Anti-MIME-Sniffing header X-Content-Type-Options was not set to ‘nosniff’.
   - This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.

 * **Strict-Transport-Security**:
   - HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL).
   - HSTS is an IETF standard track protocol specified in RFC 6797.

 * **CookiesSecure**:
   - A cookie has been set without the secure flag, which means that the cookie can be accessed via unencrypted connections.

 * **CookiesHttpOnly**:
   - A cookie has been set without the HttpOnly flag, which means that JavaScript code can access the cookie.
   - If a malicious script runs on this page, then the cookie will be accessible and can be transmitted to another hacker-controlled site. If this is a session cookie, then session hijacking may be possible.

 * **VersionDisclosure**:
   - The web/application server is leaking server version information via one or more HTTP response headers.
   - Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon, and the vulnerabilities of such components may be subject to the leaked information.

## Remediation

* **Cache-Control**:
  - Whenever possible, ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate, and that the pragma HTTP header is set with no-cache.

* **Content-Type**:
  - Ensure each page sets the specific and appropriate content-type value for the delivered content.

* **X-Content-Type-Options**:
  - Ensure that the application/web server sets the Content-Type header appropriately and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.
  - If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all or that can be directed by the web application/web server to not perform MIME-sniffing.

* **Strict-Transport-Security**:
  - Ensure that your web server, application server, load balancer, etc., are configured to enforce Strict-Transport-Security.

* **CookiesSecure**:
  - Whenever a cookie contains sensitive information or is a session token, it should always be passed using an encrypted channel.
  - Ensure that the secure flag is set for cookies containing such sensitive information

* **CookiesHttpOnly**:
  - Ensure that the HttpOnly flag is set for all cookies.

* **VersionDisclosure**:
  - Remove headers disclosing server-side softwares version.


<details>
    <summary>Apollo</summary>

When using Apollo with Express.js, [helmet](https://www.npmjs.com/package/helmet) can take care of the security headers.

```javascript
const helmet = require("helmet");
...
app.use(helmet);
```


</details>

<details>
    <summary>Awsappsync</summary>

* Add security headers with the API Gateway

Put your AppSync API behind an API Gateway and configure it to act as a proxy to your AppSync endpoint (e.g., using the HTTP Proxy feature).

[API Gateway Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)

Then you can manually add headers to each resource. (There is only one resource if your API Gateway is only used to proxy a single AppSync endpoint)

Here is an example of security headers you can add :

```
Cache-Control: no-store
Content-Security-Policy: default-src 'self'
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
```


* Add security headers using only AWS AppSync

AWS AppSync currently does not allow to append custom headers to every response.

However, custom response headers can be configured individually for every resolver by using response mapping templates.

To do this, go to:
   - AppSync > {Your App} > Schema

For every attached resolver :
   - Go to the resolver configuration
   - In the "Configure the response mapping template" section, add this :

```php
$util.http.addResponseHeader("Cache-Control", "no-store")
$util.http.addResponseHeader("Content-Security-Policy", "default-src 'self'")
$util.http.addResponseHeader("Strict-Transport-Security", "max-age=63072000")
$util.http.addResponseHeader("X-Content-Type-Options", "nosniff")
$util.http.addResponseHeader("X-Frame-Options", "SAMEORIGIN")
$util.http.addResponseHeader("X-XSS-Protection", "1; mode=block")
```

You can safely ignore this warning if you did this for every single resolver.

However, it may still appear here as GraphQL requests like `query { __typename }` are not associated with a resolver; therefore, you cannot add custom response headers. (Which doesn't matter as such requests cannot leak data as no actual field is queried)

[AWS AppSync adds support for custom response headers](https://aws.amazon.com/about-aws/whats-new/2022/02/aws-appsync-support-custom-response-headers/)

[HTTP helpers in $util.http](https://docs.aws.amazon.com/appsync/latest/devguide/http-helpers-in-utils-http.html)

[Resolver Mapping Template Programming Guide](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference-programming-guide.html)


</details>

<details>
    <summary>Graphene</summary>

To add Security Headers to **Django**, follow this guide :

[How to Score A+ for Security Headers on Your Django Website](https://adamj.eu/tech/2019/04/10/how-to-score-a+-for-security-headers-on-your-django-website/)

For **Flask**, use Google's [flask-talisman](https://github.com/GoogleCloudPlatform/flask-talisman)


</details>

<details>
    <summary>Graphqlgo</summary>

You can use a HTTP middleware to add security headers.

For instance, with [srikrsna/security-headers](https://github.com/srikrsna/security-headers):

```go
import (
  secure "github.com/srikrsna/security-headers"
)

h := handler.New(&handler.Config{
  Schema:   &schema,
  ...
})

s := &secure.Secure{
  STSIncludeSubdomains: true,
  STSPreload:           true,
  STSMaxAgeSeconds:     90,

  FrameOption: secure.FrameAllowFrom,
  FrameOrigin: "https://example.com/",

  ContentTypeNoSniff: true,

  XSSFilterBlock: true,

  HPKPPins: []string{
  "HBkhsug765gdKHhvdj6jdb7jJh/j+soZS7sWs=",
  "hjshHSHU68hbdkHhvdkgksgsg+jd/jHJ68HBH=",
  },
  HPKPMaxAge:            5184000,
  HPKPReportURI:         "https://www.example.org/hpkp-report",
  HPKPIncludeSubdomains: true,

  ExpectCTMaxAge:    5184000,
  ExpectCTEnforce:   true,
  ExpectCTReportUri: "https://www.example.org/ct-report",

  ReferrerPolicy: secure.ReferrerStrictOriginWhenCrossOrigin,
}
http.Handle("/graphql", s.Middleware()(h))

http.ListenAndServe(":8082", nil)
```


</details>

## Configuration

> CheckId: `http/security_headers`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "http/security_headers": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="low-severity">LOW</span>**
- OWASP: **[A02:2023](https://github.com/OWASP/API-Security/blob/master/2023/en/src/0xa2-broken-authentication.md)**
- PCI DSS: **6.5.10**
- CWE
  - **693**
  - **732**
  - **1004**
  - **1275**
- WASC: **15**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

- Security Headers: [OWASP: Security Headers](https://owasp.org/www-community/Security_Headers)
- Cache: [OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching)
- Cookies: [OWASP: Testing for Cookies attributes](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html)
- Version Disclosure: <https://www.tenable.com/plugins/was/98618s>

