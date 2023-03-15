---
sidebar_position: 3
title: Security Tests Reference
---

# ✅ Security Tests

Security tests are the set of tests that are run against the API to ensure that it is secure.

On this page, you will find the list of all the security tests that are run by Escape as well as their description, parameters and remediations.


|Category/Name|OWASP|Severity|
|-------------|-----|--------|
|[Request Forgery / SSRF](#request_forgery/ssrf)|A10:2021|<span className="high-severity">HIGH</span>|
|[Request Forgery / Partial SSRF](#request_forgery/partial_ssrf)|A10:2021|<span className="high-severity">HIGH</span>|
|[Request Forgery / GET based CSRF](#request_forgery/get_based_csrf)|A05:2021|<span className="high-severity">HIGH</span>|
|[Request Forgery / POST based CSRF](#request_forgery/post_based_csrf)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[Injection / XXE](#injection/xxe)|A03:2021|<span className="high-severity">HIGH</span>|
|[Injection / XSS](#injection/xss)|A03:2021|<span className="high-severity">HIGH</span>|
|[Injection / Stored XSS](#injection/stored_xss)|A03:2021|<span className="high-severity">HIGH</span>|
|[Injection / SQL](#injection/sql)|A03:2021|<span className="high-severity">HIGH</span>|
|[Injection / NoSQL](#injection/nosql)|A03:2021|<span className="high-severity">HIGH</span>|
|[Injection / Directory traversal](#injection/directory_traversal)|A03:2021|<span className="high-severity">HIGH</span>|
|[Injection / Bash command](#injection/bash_command)|A03:2021|<span className="high-severity">HIGH</span>|
|[Information Disclosure / Source code disclosure](#information_disclosure/source_code_disclosure)|A05:2021|<span className="high-severity">HIGH</span>|
|[Information Disclosure / Stack traceback](#information_disclosure/stack_traceback)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[Information Disclosure / Field suggestion](#information_disclosure/field_suggestion)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[Information Disclosure / Debug mode](#information_disclosure/debug_mode)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[Information Disclosure / GraphQL IDE](#information_disclosure/graphql_ide)|A05:2021|<span className="low-severity">LOW</span>|
|[Information Disclosure / Introspection](#information_disclosure/introspection)| |<span className="info-severityom">INFO</span>|
|[HTTP / SSL certificate expiration](#http/ssl_certificate_expiration)|A05:2021|<span className="high-severity">HIGH</span>|
|[HTTP / Server Error](#http/server_error)|A05:2021|<span className="high-severity">HIGH</span>|
|[HTTP / HeartBleed](#http/heartbleed)|A06:2021|<span className="high-severity">HIGH</span>|
|[HTTP / Unsecure HTTP](#http/unsecure_http)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[HTTP / CRLF](#http/crlf)|A03:2021|<span className="medium-severity">MEDIUM</span>|
|[HTTP / Security Headers](#http/security_headers)|A05:2021|<span className="low-severity">LOW</span>|
|[HTTP / Open redirection](#http/open_redirection)|A05:2021|<span className="low-severity">LOW</span>|
|[HTTP / CORS](#http/cors)|A05:2021|<span className="low-severity">LOW</span>|
|[DOS / Unreachable server](#dos/unreachable_server)|A05:2021|<span className="high-severity">HIGH</span>|
|[DOS / Security timeout](#dos/security_timeout)|A05:2021|<span className="high-severity">HIGH</span>|
|[DOS / Recursive Fragment](#dos/recursive_fragment)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[DOS / Directive overloading](#dos/directive_overloading)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[DOS / Automatic Persisted Queries](#dos/automatic_persisted_queries)|A05:2021|<span className="low-severity">LOW</span>|
|[DOS / Circular introspection](#dos/circular_introspection)|A05:2021|<span className="info-severityom">INFO</span>|
|[Access Control / Tenant isolation](#access_control/tenant_isolation)|A01:2021|<span className="high-severity">HIGH</span>|
|[Access Control / Secrets leaks](#access_control/secrets_leaks)|A01:2021|<span className="high-severity">HIGH</span>|
|[Access Control / Private fields](#access_control/private_fields)|A01:2021|<span className="high-severity">HIGH</span>|
|[Access Control / Private data](#access_control/private_data)|A01:2021|<span className="high-severity">HIGH</span>|
|[Access Control / Public Unsafe Route](#access_control/public_unsafe_route)|A01:2021|<span className="medium-severity">MEDIUM</span>|
|[Access Control / IDOR](#access_control/idor)|A01:2021|<span className="medium-severity">MEDIUM</span>|
|[Introspection / Typing inconsistency](#introspection/typing_inconsistency)|A03:2021|<span className="medium-severity">MEDIUM</span>|
|[Introspection / Zombie objects](#introspection/zombie_objects)| |<span className="low-severity">LOW</span>|
|[Introspection / Undefined objects](#introspection/undefined_objects)|A06:2021|<span className="info-severityom">INFO</span>|
|[Introspection / Typing inconsistency (interceptor)](#introspection/typing_inconsistency_interceptor)| |<span className="info-severityom">INFO</span>|
|[Introspection / Imputable JSON scalars](#introspection/imputable_json_scalars)|A03:2021|<span className="info-severityom">INFO</span>|
|[Complexity / Pagination limit](#complexity/pagination_limit)|A01:2021|<span className="medium-severity">MEDIUM</span>|
|[Complexity / Large JSON](#complexity/large_json)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[Complexity / Field limit](#complexity/field_limit)|A03:2021|<span className="medium-severity">MEDIUM</span>|
|[Complexity / Depth limit](#complexity/depth_limit)|A05:2021|<span className="medium-severity">MEDIUM</span>|
|[Complexity / Width limit](#complexity/width_limit)|A03:2021|<span className="low-severity">LOW</span>|
|[Complexity / Cyclic query](#complexity/cyclic_query)|A05:2021|<span className="low-severity">LOW</span>|
|[Complexity / Character limit (interceptor)](#complexity/character_limit_interceptor)|A05:2021|<span className="low-severity">LOW</span>|
|[Complexity / Batch Limit](#complexity/batch_limit)|A05:2021|<span className="low-severity">LOW</span>|
|[Complexity / Alias limit](#complexity/alias_limit)|A05:2021|<span className="low-severity">LOW</span>|


***



## Request Forgery



<br />

<a name="request_forgery/ssrf"></a>
<details>
    <summary>SSRF</summary>

<p>

#### SSRF

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| request_forgery/ssrf | <span className="high-severity">HIGH</span> |

SSRF (Server-Side Request Forgery) vulnerability occurs when the attacker can send any request as if the server was sending it.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Basic blacklisting and regular expressions are a bad approach to mitigating SSRF.

The correct ways to prevent SSRF are:
- Whitelisting and DNS resolution: whitelist the hostname (DNS name) or IP address that your application needs to access. (Best method to prevent SSRF))
- Response handling: To prevent response data from leaking to the attacker, you must ensure that the received response is as expected. Under no circumstances should the raw response body from the request sent by the server be delivered to the client.
- Disabling unused URL schemas: if your application only uses HTTP or HTTPS to make requests, allow only these URL schemas. Once unused URL schemas are disabled, the attacker will be unable to exploit the web application to make requests using potentially dangerous schemas such as `file:///`, `dict://`, `ftp://`, and `gopher://`.
- Authentication on internal services.


</details>


**Reference:**



[https://owasp.org/www-community/attacks/Server_Side_Request_Forgery ](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery)





</p>
</details>



<br />

<a name="request_forgery/partial_ssrf"></a>
<details>
    <summary>Partial SSRF</summary>

<p>

#### Partial SSRF

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| request_forgery/partial_ssrf | <span className="high-severity">HIGH</span> |

Partial Server-Side Request Forgery occurs when the attacker can manipulate a request made by the server.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Basic blacklisting and regular expressions are a bad approach to mitigating SSRF.

The correct ways to prevent SSRF are:
- Whitelisting and DNS resolution: whitelist the hostname (DNS name) or IP address that your application needs to access. (Best method to prevent SSRF))
- Response handling: To prevent response data from leaking to the attacker, you must ensure that the received response is as expected. Under no circumstances should the raw response body from the request sent by the server be delivered to the client.
- Disabling unused URL schemas: if your application only uses HTTP or HTTPS to make requests, allow only these URL schemas. Once unused URL schemas are disabled, the attacker will be unable to exploit the web application to make requests using potentially dangerous schemas such as `file:///`, `dict://`, `ftp://`, and `gopher://`.
- Authentication on internal services.


</details>


**Reference:**



[https://0xn3va.gitbook.io/cheat-sheets/web-application/graphql-vulnerabilities#abuse-graphql-as-an-api-gateway ](https://0xn3va.gitbook.io/cheat-sheets/web-application/graphql-vulnerabilities#abuse-graphql-as-an-api-gateway)





---

**Configuration**

```JSON
{
    "checks": {
        "request_forgery/partial_ssrf": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="request_forgery/get_based_csrf"></a>
<details>
    <summary>GET based CSRF</summary>

<p>

#### GET based CSRF

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| request_forgery/get_based_csrf | <span className="high-severity">HIGH</span> |

CSRF (Cross-Site Request Forgery) occurs when an external website has the ability to make API calls impersonating a user by visiting the website while being authenticated to your API.

Allowing API calls through `GET` requests can lead to CSRF attacks because cookies are added automatically to GET requests made by the browser.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Forbid API calls through `GET` requests to prevent CSRF attacks.


</details>

<details>
    <summary>Apollo</summary>

Pass `csrfPrevention: true` to `new ApolloServer()`.

Check out the the [CSRF prevention documentation](https://www.apollographql.com/docs/apollo-server/security/cors#preventing-cross-site-request-forgery-csrf) for the best CSRF prevention techniques.


</details>



<details>
    <summary>Awsappsync</summary>

Make sure that your API does not use Cookie-based authentication.

There are many other ways to authenticate a user with AppSync:
- API Keys
- Amazon Cognito User Pools
- OpenID Connect
- AWS Identity and Access Management (IAM)
- AWS Lamba custom authentication

[AppSync: Authorization and Authentication](https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html)

Whichever method you use, verify that authentication occurs through headers because authentication headers are not automatically added by the targeted user browser (while Cookies are).

To avoid any risk, you can block every `GET` request and allow only `POST` requests, which are immune to this attack, but it comes at a cost. (see AWS pricing for the corresponding services)

* Block GET requests with AWS API Gateway (prefered method):

Put your AppSync API behind an API Gateway.

[API Gateway Documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)

You can then configure the API Gateway to act as an HTTP Proxy to your AppSync endpoint and configure it to allow only POST requests.

* Block GET requests with AWS Web Application Firewall:

Add the following Web ACL rule in the AWS WAF Console to block every GET request to the API:

```json
{
  "Name": "block-get",
  "Priority": 0,
  "Statement": {
    "ByteMatchStatement": {
      "SearchString": "GET",
      "FieldToMatch": {
        "Method": {}
      },
      "TextTransformations": [
        {
          "Priority": 0,
          "Type": "NONE"
        }
      ],
      "PositionalConstraint": "EXACTLY"
    }
  },
  "Action": {
    "Block": {}
  },
  "VisibilityConfig": {
    "SampledRequestsEnabled": true,
    "CloudWatchMetricsEnabled": true,
    "MetricName": "add-headers"
  }
}
```

You can also configure it manually by using the following field values :

If:
  - Field to match = HTTP method
  - Positional constraint = Exactly matches string
  - Search string = GET

Then:
  - Block

See: [AppSync API with AWS WAF](https://docs.aws.amazon.com/appsync/latest/devguide/WAF-Integration.html).

To learn more on AWS WAF, see: [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).


</details>




**Reference:**



[https://blog.doyensec.com/2021/05/20/graphql-csrf.html ](https://blog.doyensec.com/2021/05/20/graphql-csrf.html)





</p>
</details>



<br />

<a name="request_forgery/post_based_csrf"></a>
<details>
    <summary>POST based CSRF</summary>

<p>

#### POST based CSRF

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| request_forgery/post_based_csrf | <span className="medium-severity">MEDIUM</span> |

The canonical content-type for GraphQL queries is JSON (`application/json`). Other content-types should be rejected as they facilitate CSRF attacks (e.g., via form submission).


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Only allow requests with the `Content-Type` header set to `application/json`.


</details>

<details>
    <summary>Apollo</summary>

Only allow requests with the `Content-Type` header set to `application/json`.

With Express.js, the `enforce-content-type` middleware can be used to block unwanted content types.

```javascript
 const enforceContentType = require('enforce-content-type')

 app.use(enforceContentType({
     type: 'application/json'
 }))
 ```

 See: [enforce-content-type GitHub Repo](https://github.com/codepunkt/enforce-content-type).


</details>




**Reference:**



[https://blog.doyensec.com/2021/05/20/graphql-csrf.html ](https://blog.doyensec.com/2021/05/20/graphql-csrf.html)





</p>
</details>





## Injection



<br />

<a name="injection/xxe"></a>
<details>
    <summary>XXE</summary>

<p>

#### XXE

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| injection/xxe | <span className="high-severity">HIGH</span> |

External entities is an element of XML documents, and attackers may replace the entity value with malicious data, alternate referrals, or compromise the security of the data the server/XML application has access to. 
Attackers may also use External Entities to have the web services download malicious code or content on the server for use in secondary or follow up attacks.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

To safely prevent XXE attacks, always disable DTDs (External Entities) completely. Depending on the parser, the method should be similar to the following:

```java
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
```

Disabling DTDs also helps secure the parser against Denial of Services attacks such as Billion Laughs. 

If it is not possible to disable DTDs completely, disable external entities and external document type declarations in the way that's specific to each parser.


</details>


**Reference:**



[http://projects.webappsec.org/XML-External-Entities ](http://projects.webappsec.org/XML-External-Entities)





</p>
</details>



<br />

<a name="injection/xss"></a>
<details>
    <summary>XSS</summary>

<p>

#### XSS

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| injection/xss | <span className="high-severity">HIGH</span> |

XSS (Cross-site scripting) is an attack where malicious code (eg. JavaScript) is injected into the application and executed.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Preventing cross-site scripting is trivial in some cases but can be much harder depending on the complexity of the application and the ways it handles user-controllable data.

To effectively prevent XSS vulnerabilities, use a combination of the following measures:

- Filter user input on arrival as strictly as possible, based on what you expect as legitimate input.
- Encode user-controllable data as soons as it is outputted in HTTP reponses to prevent it from being interpreted as active content (ie. code). Depending on the output context, this might require applying combinations of HTML, URL, JavaScript, and CSS encoding.
- Use the right headers to ensure that browsers interpret the responses the way you intended. For example, to prevent XSS in HTTP responses that are not supposed to contain any HTML or JavaScript, you can use the Content-Type and X-Content-Type-Options headers.
- Use Content Security Policy (CSP) to reduce the severity of any XSS vulnerability that still occurs.


</details>


**Reference:**



[https://portswigger.net/web-security/cross-site-scripting ](https://portswigger.net/web-security/cross-site-scripting)





---

**Configuration**

```JSON
{
    "checks": {
        "injection/xss": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="injection/stored_xss"></a>
<details>
    <summary>Stored XSS</summary>

<p>

#### Stored XSS

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| injection/stored_xss | <span className="high-severity">HIGH</span> |

Stored code injections are attacks where malicious code (such as JavaScript) is injected into the application and stored in the database to be later executed. Stored XSS is one of those attacks.
Stored XSS is when an XSS vulnerability originates from the database because of malicious code previously inserted in it.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Preventing cross-site scripting is trivial in some cases but can be much harder depending on the complexity of the application and the ways it handles user-controllable data.

To effectively prevent XSS vulnerabilities, use a combination of the following measures:

- Filter user input on arrival as strictly as possible, based on what you expect as legitimate input.
- Encode user-controllable data as soons as it is outputted in HTTP reponses to prevent it from being interpreted as active content (ie. code). Depending on the output context, this might require applying combinations of HTML, URL, JavaScript, and CSS encoding.
- Use the right headers to ensure that browsers interpret the responses the way you intended. For example, to prevent XSS in HTTP responses that are not supposed to contain any HTML or JavaScript, you can use the Content-Type and X-Content-Type-Options headers.
- Use Content Security Policy (CSP) to reduce the severity of any XSS vulnerability that still occurs.


</details>


**Reference:**



[https://portswigger.net/web-security/cross-site-scripting ](https://portswigger.net/web-security/cross-site-scripting)





---

**Configuration**

```JSON
{
    "checks": {
        "injection/stored_xss": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="injection/sql"></a>
<details>
    <summary>SQL</summary>

<p>

#### SQL

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| injection/sql | <span className="high-severity">HIGH</span> |

A SQL injection vulnerability occurs when users can insert (or “inject”) malicious SQL code in a legit SQL query that is built from user-submitted input.
A successful SQL injection exploit can read sensitive data from the database, modify database data, execute administration operations on the database (such as shutting down the DBMS), recover the content of a given file from the DBMS file system and in some cases issue commands to the operating system.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Primary defenses:
- Use of Prepared Statements (with parameterized queries). This prevention techniques is the most effective one as it will completely shutdown any SQL injection attacks. Keep in mind that prepared statements must be used everywhere, even if no user inputted data is found in the query.
- Use of Stored Procedures.
- Allow-list Input Validation. Usage whitelist is recommended to prevent SQL injection attacks as whitelisting is more effective then black listing.
- Escaping all user supplied input.

Additional defenses:
- Enforcing Least Privilege.
- Performing Allow-list Input Validation as a secondary line of defense.


</details>


**Reference:**



[https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)





---

**Configuration**

```JSON
{
    "checks": {
        "injection/sql": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="injection/nosql"></a>
<details>
    <summary>NoSQL</summary>

<p>

#### NoSQL

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| injection/nosql | <span className="high-severity">HIGH</span> |

A NoSQL injection vulnerability occurs when users can insert (or “inject”) malicious NoSQL code in a legit SQL query that is built from user-submitted input.
A successful NoSQL injection exploit can read sensitive data from the database, modify database data, execute administration operations on the database (such as shutting down the DBMS), recover the content of a given file from the DBMS file system and in some cases issue commands to the operating system.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Primary defenses:
- Use a sanitization library.
- Cast the inputs to the expected type (eg: The username and password are strings so cast the variables to a string).
- Never use `where`, `mapReduce`, or `group` operators with user input: they allow the attacker to inject JavaScript and are therefore much more dangerous than others. For extra safety, set `javascriptEnabled` to false in mongod.conf (if using mongoDB).
- Enforce Least Privilege.


</details>


**Reference:**



[https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05.6-Testing_for_NoSQL_Injection ](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05.6-Testing_for_NoSQL_Injection)





---

**Configuration**

```JSON
{
    "checks": {
        "injection/nosql": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="injection/directory_traversal"></a>
<details>
    <summary>Directory traversal</summary>

<p>

#### Directory traversal

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| injection/directory_traversal | <span className="high-severity">HIGH</span> |

Directory traversal occurs when a server allows an attacker to read a file or directories outside of the normal web server directory, and local file inclusion gives the attacker the ability to include an arbitrary local file (from the web server) in the web server's response.

Example: `getProfilePicture(name: '../../../etc/password')` returns the server's `/etc/password` file.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

There are multiple ways to prevent directory traversal attacks:
- Avoid using parameters entered directly by the user.
- Set up a file/folder name whitelist system: allow only certain folders and/or types of extensions, thus excluding all others.
- Compartmentalize your data and implement middlewares. These can take the form of an interface to the (potentially external) file system on which the data users may request is stored. If the attached data storage is dedicated to this purpose only and does not contain sensitive data, the risk is limited, even if a user manages to bypass the limitations that this middleware can put in place.
- Restrict access of the GraphQL worker to what is strictly necessary. By restricting as much as possible the files and folders to which the GraphQL worker has access, you reduce the range of files potentially exposed by an attack.
- Take advantage of virtualization. With virtualization, it is possible to have several virtual machines completely isolated from each other. The GraphQL worker can therefore be isolated on its own virtual machine, allowing it access only to the elements absolutely necessary for its proper execution.


</details>


**Reference:**



[https://escape.tech/blog/file-inclusion-directory-traversal-graphql/ ](https://escape.tech/blog/file-inclusion-directory-traversal-graphql/)





---

**Configuration**

```JSON
{
    "checks": {
        "injection/directory_traversal": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="injection/bash_command"></a>
<details>
    <summary>Bash command</summary>

<p>

#### Bash command

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| injection/bash_command | <span className="high-severity">HIGH</span> |

A system command was successfully executed on your application's system. Command injections happen when a user manages to successfully execute arbitrary commands on the host's operating system by abusing a vulnerable endpoint.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

To prevent command injection attacks:
-Never use user-submitted input in shell commands.
-If supported by your language, add `semgrep` to your development process to ensure detection of potentially vulnerable system shell calls.
-Use proper input validation techniques to detect and prevent command injection. Keep in mind the input validation should be implemented in the backend as it will be easily bypassed if done in the frontend.


</details>


**Reference:**



[https://owasp.org/www-community/attacks/Command_Injection ](https://owasp.org/www-community/attacks/Command_Injection)





---

**Configuration**

```JSON
{
    "checks": {
        "injection/bash_command": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of objects that are to be skipped by the security test.





</p>
</details>





## Information Disclosure



<br />

<a name="information_disclosure/source_code_disclosure"></a>
<details>
    <summary>Source code disclosure</summary>

<p>

#### Source code disclosure

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| information_disclosure/source_code_disclosure | <span className="high-severity">HIGH</span> |

The source code for the current page was disclosed by the web server.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Ensure that `.git`, `.svn`, `.htaccess` metadata files are not deployed to the web server or application server, or cannot be accessed.


</details>


**Reference:**



[https://www.zaproxy.org/docs/alerts/41/ ](https://www.zaproxy.org/docs/alerts/41/)





---

**Configuration**

```JSON
{
    "checks": {
        "information_disclosure/source_code_disclosure": {  
            "options":{ 
                "size_threshold": 200, 
                "diff_threshold": 0.1, 
                "small_response_diff_threshold": 0.4, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*size_threshold* :
The threshold size indicating whether a response is small or not.

*diff_threshold* :
The percentage by which 2 responses can differ and still be considered identical.

*small_response_diff_threshold* :
The percentage by which 2 small responses can differ and still be considered identical.





</p>
</details>



<br />

<a name="information_disclosure/stack_traceback"></a>
<details>
    <summary>Stack traceback</summary>

<p>

#### Stack traceback

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| information_disclosure/stack_traceback | <span className="medium-severity">MEDIUM</span> |

Details about database-level or code-level errors have been found in the response. This may cause information leaks, allowing attackers to identify the exact database or dependency you are using, and can therefore lead to highly targeted attacks against your application.

Example: sending `getUser(id: null)` returns `{ success: false, message: "SQL Error: Postgres 3.6 has encountered an error : Invalid ID."}`.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Always avoid database or code error stack traces to be returned directly to the client.


</details>

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




**Reference:**



[https://infosecwriteups.com/exploiting-error-based-sql-injections-bypassing-restrictions-ed099623cd94 ](https://infosecwriteups.com/exploiting-error-based-sql-injections-bypassing-restrictions-ed099623cd94)





</p>
</details>



<br />

<a name="information_disclosure/field_suggestion"></a>
<details>
    <summary>Field suggestion</summary>

<p>

#### Field suggestion

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| information_disclosure/field_suggestion | <span className="medium-severity">MEDIUM</span> |

If introspection is disabled on your target, **Field Suggestion** still allow users infer the entire schema, with a tool like [Clairvoyance](https://github.com/nikitastupin/clairvoyance).

If you query a field with a typo, GraphQL will attempt to suggest fields close to what was requested. Example:
```
  Error: Cannot query field "createSesion" on type "RootMutation". Did you mean "createSession", "createUser", "createFile", or "createImage"?
```


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Disable Field Suggestion in production.


</details>

<details>
    <summary>Apollo</summary>

Block field suggestion is supported by [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.


</details>



<details>
    <summary>Graphqlgo</summary>

`graphql-go/graphql` does not allow to disable field suggestion as of now.

However, you can filter field suggestion by discarding answers containing "Did you mean" with this middleware :

```go
type FilterResponseWriter struct {
  writer    http.ResponseWriter
  blacklist []string
  errorPtr  *bool
}

func (w FilterResponseWriter) Header() http.Header {
  return w.writer.Header()
}

func (w FilterResponseWriter) Write(data []byte) (int, error) {
  if *w.errorPtr {
    return 0, errors.New("write error")
  }
  for _, s := range w.blacklist {
    if bytes.Contains(data, []byte(s)) {
      *w.errorPtr = true
      return 0, errors.New("field not found")
    }
  }
  return w.writer.Write(data)
}

func (w FilterResponseWriter) WriteHeader(statusCode int) {
  w.writer.WriteHeader(statusCode)
}

func blockFieldSuggestion(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    var error bool
    newWriter := &FilterResponseWriter{writer: w, blacklist: []string{"Did you mean \\\""}, errorPtr: &error}
    next.ServeHTTP(newWriter, r)
    if error {
      w.Write([]byte("{\"errors\":[{\"message\":\"Field not found.\"}],\"data\":null}"))
    }
  })
}
```

Then you apply the middleware to your endpoint :
```go
func main(){
  ...
  h := handler.New(&handler.Config{
    Schema:   &schema
  })
  http.Handle("/graphql", blockFieldSuggestion(h))
}
```


</details>



<details>
    <summary>Graphqlyoga</summary>

Block field suggestion is supported by [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

Or, you can use the standalone [envelop plugin](https://www.npmjs.com/package/@escape.tech/graphql-armor-block-field-suggestions).


</details>




**Reference:**



[https://blog.yeswehack.com/yeswerhackers/how-exploit-graphql-endpoint-bug-bounty/ ](https://blog.yeswehack.com/yeswerhackers/how-exploit-graphql-endpoint-bug-bounty/)





</p>
</details>



<br />

<a name="information_disclosure/debug_mode"></a>
<details>
    <summary>Debug mode</summary>

<p>

#### Debug mode

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| information_disclosure/debug_mode | <span className="medium-severity">MEDIUM</span> |

When Debug mode is left turned on by developers, it allows attackers to gather precious information from excessive error reporting messages such as entire stack traces or tracebacks.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Disabled Debug mode.


</details>


**Reference:**



[https://www.infosecmatter.com/bug-bounty-tips-8-oct-14/#4-graphql-notes-for-beginners ](https://www.infosecmatter.com/bug-bounty-tips-8-oct-14/#4-graphql-notes-for-beginners)





</p>
</details>



<br />

<a name="information_disclosure/graphql_ide"></a>
<details>
    <summary>GraphQL IDE</summary>

<p>

#### GraphQL IDE

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| information_disclosure/graphql_ide | <span className="low-severity">LOW</span> |

A GraphQL IDE provides an interface for users to interact with the Endpoint, but an IDE can also leave room for potential vulnerabilities.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Disable GraphQL IDE, or restrict it.
Head over to your specific engine documentation to know how to do it.


</details>

<details>
    <summary>Apollo</summary>

GraphQL Playground is deprecated and disabled by default since Apollo v3.
If you installed it voluntarily with the corresponding plugin, you should consider disabling it to improve security.

If you still use Apollo v2, you can disable GraphQL Playground by either:

* Setting the environment variable `NODE_ENV` to `production`
* Explicitly disabling it:
  ```javascript
  const server = new ApolloServer({
    // ...
    playground: false,
  });
  ```

Source:

* [Apollo v2 Documentation](https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground/)
* [Apollo v3 Documentation](https://www.apollographql.com/docs/apollo-server/testing/build-run-queries/#graphql-playground)


</details>








</p>
</details>



<br />

<a name="information_disclosure/introspection"></a>
<details>
    <summary>Introspection</summary>

<p>

#### Introspection

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| information_disclosure/introspection | <span className="info-severityom">INFO</span> |

GraphQL introspection enables you to query a GraphQL server for information about the underlying schema, including data like types, fields, queries, mutations, and even the field-level descriptions.
It discloses sensitive information that potentially allows an attacker to design malicious operations.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Introspection should primarily be used as a discovery and diagnostic tool when we're in the **development phase** of building out GraphQL APIs.
While it's still possible for bad actors to learn how to write malicious queries by reverse engineering your GraphQL API through a lot of trial and error, **disabling introspection** is a form of security by obscurity.


</details>

<details>
    <summary>Apollo</summary>

To disable Introspection, either set `NODE_ENV` to `production` or enforce it :

 ```javascript
 const server = new ApolloServer({
   typeDefs,
   resolvers,
   introspection: false
 });
 ```

 Source: <https://escape.tech/blog/9-graphql-security-best-practices/>


</details>



<details>
    <summary>Ariadne</summary>

When defining the `ariadne.asgi.GraphQL` app make sure to add the flag `introspection=False`


</details>



<details>
    <summary>Awsappsync</summary>

Add ACL rule to prevent GraphQL __schema introspection queries to the API.
This is achieved by blocking any HTTP body that includes the string "__schema".
This would be entered into the Rule JSON editor when creating a web ACL in the AWS WAF Console.

```json
{
    "Name": "Block-Introspection",
    "Priority": 5,
    "Action": {
        "Block": {}
    },
    "VisibilityConfig": {
        "SampledRequestsEnabled": true,
        "CloudWatchMetricsEnabled": true,
        "MetricName": "Block-Introspection"
    },
    "Statement": {
        "ByteMatchStatement": {
            "FieldToMatch": {
                "Body": {}
            },
            "PositionalConstraint": "CONTAINS",
            "SearchString": "__schema",
            "TextTransformations": [
                {
                    "Type": "NONE",
                    "Priority": 0
                }
            ]
        }
    }
}
```

Don't forget to associate the previously created ACL rule with your AppSync API.

For more information refer to :

[AWS AppSync - Developer Guide](https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html)

[Integrate an AppSync API with AWS WAF](https://docs.aws.amazon.com/appsync/latest/devguide/WAF-Integration.html)

[AWS Web Application Firewall](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html)


</details>



<details>
    <summary>Graphene</summary>

When using Graphene, here is how you would disable introspection for your schema.

```python
from graphql import validate, parse
from graphene import ObjectType, Schema, String
from graphene.validation import DisableIntrospection


  class MyQuery(ObjectType):
  name = String(required=True)


  schema = Schema(query=MyQuery)

  # introspection queries will not be executed.

  validation_errors = validate(
    schema=schema.graphql_schema,
    document_ast=parse('THE QUERY'),
    rules=(
      DisableIntrospection,
    )
  )
```

Source: [docs.graphene-python.org](https://docs.graphene-python.org/en/latest/execution/queryvalidation/)


</details>



<details>
    <summary>Graphqlgo</summary>

`graphql-go/graphql` does not allow you to disable Introspection.

However, you can disable it with a custom middleware filtering the keyword `__schema`:

```go

func blockIntrospection(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    bodyBytes, _ := ioutil.ReadAll(r.Body)
    r.Body.Close()
    r.Body = ioutil.NopCloser(bytes.NewBuffer(bodyBytes))
    body_lower := bytes.ToLower(bodyBytes)
    subslice := "__schema"
    if bytes.Contains(body_lower, []byte(subslice)) {
      no_introspection := "{\"errors\": [{\"message\": \"Introspection is disabled.\"}],\"data\": null}"
      w.Write([]byte(no_introspection))
    } else {
      next.ServeHTTP(w, r)
    }
  })
}

...

func main(){
  ...
  h := handler.New(...) // GraphQL handler

  http.Handle("/graphql", blockIntrospection(h))

}
```


</details>



<details>
    <summary>Graphqljava</summary>

```java
GraphQLSchema schema = GraphQLSchema.newSchema()
.query(StarWarsSchema.queryType)
.fieldVisibility( NoIntrospectionGraphqlFieldVisibility.NO_INTROSPECTION_FIELD_VISIBILITY )
.build();
```

Source: https://www.graphql-java.com/documentation/v11/execution/


</details>



<details>
    <summary>Graphqlphp</summary>

```php
use GraphQL\GraphQL;
use GraphQL\Validator\Rules\DisableIntrospection;
use GraphQL\Validator\DocumentValidator;
DocumentValidator::addRule(new DisableIntrospection());<code>
</code>
```

Source: https://webonyx.github.io/graphql-php/security/#disabling-introspection


</details>



<details>
    <summary>Hasura</summary>

Hasura allows you to control who can run an introspection query.

 To do so:

 - Go to Project Console > Security Settings > Schema Introspection
 - Select a role (e.g., guest)
 - Check "Disabled"

See the [official guide](https://hasura.io/docs/latest/graphql/cloud/security/disable-graphql-introspection/) for more information.


</details>



<details>
    <summary>Ruby</summary>

```ruby
class MySchema < GraphQL::Schema
disable_introspection_entry_points if Rails.env.production?
end
```

Source: https://github.com/rmosolgo/graphql-ruby/blob/master/guides/schema/introspection.md#disabling-introspection


</details>




**Reference:**



[https://www.apollographql.com/blog/graphql/security/why-you-should-disable-graphql-introspection-in-production/ ](https://www.apollographql.com/blog/graphql/security/why-you-should-disable-graphql-introspection-in-production/)





</p>
</details>





## HTTP



<br />

<a name="http/ssl_certificate_expiration"></a>
<details>
    <summary>SSL certificate expiration</summary>

<p>

#### SSL certificate expiration

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| http/ssl_certificate_expiration | <span className="high-severity">HIGH</span> |

The SSL certificate found on the website is no longer valid. This is most probably due to the fact that the SSL certificate is expired.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Purchase a new SSL certificate.


</details>


**Reference:**



[https://www.thesslstore.com/blog/what-happens-when-your-ssl-certificate-expires/ ](https://www.thesslstore.com/blog/what-happens-when-your-ssl-certificate-expires/)





</p>
</details>



<br />

<a name="http/server_error"></a>
<details>
    <summary>Server Error</summary>

<p>

#### Server Error

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| http/server_error | <span className="high-severity">HIGH</span> |

A server error occurred.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

To fix this issue, you should check the logs and fix the handler that caused the error.
Make sure you also refer to the query we sent to the server to reproduce the issue.


</details>






</p>
</details>



<br />

<a name="http/heartbleed"></a>
<details>
    <summary>HeartBleed</summary>

<p>

#### HeartBleed

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| http/heartbleed | <span className="high-severity">HIGH</span> |

The TLS implementation in OpenSSL 1.0.1 before 1.0.1g does not properly handle Heartbeat Extension packets, which allows remote attackers to obtain sensitive information from process memory via crafted packets that trigger a buffer over-read, potentially disclosing sensitive information.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

To effectively prevent HeartBleed attacks:
- Update to OpenSSL 1.0.1g or later.
- Re-issue HTTPS certificates.
- Change asymmetric private keys and shared secret keys, since these may have been compromised with no evidence of corruption in the server log files.


</details>


**Reference:**



[https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-2014-0160 ](https://www.cvedetails.com/cve-details.php?t=1&cve_id=CVE-2014-0160)





</p>
</details>



<br />

<a name="http/unsecure_http"></a>
<details>
    <summary>Unsecure HTTP</summary>

<p>

#### Unsecure HTTP

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| http/unsecure_http | <span className="medium-severity">MEDIUM</span> |

This security **best practice** should be enforced by your organization, at least for your API routes.

Here are 4 risk examples when allowing GraphQL communication using unsecure `HTTP`:

- **Man in the Middle attacks**: hackers can intercept and alter data from a legitimate request.
- **Misuse of data**: confidential information can be accessed by hackers.
- **Downranking of websites**: your website can be considered insecure by search engines and rated as not trustworthy.
- **Loss of customers' trust**: without a secure HTTPS padlock displayed on your website, users may rightfully consider it to be unsafe.

Using [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) is not a solution to this problem, as it won't protect against MITM attacks and regular "public wifi sniffing" until connection has been upgraded to HTTPS.
As recommended by [Google](https://developers.google.com/search/docs/advanced/security/https), make sure that no cookies are being sent through HSTS, which is likely the case if you are using a GraphQL API over HSTS.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Enforce using HTTPS (using an SSL certificate) in order to protect your users' connections.
In most cases, this must be done at ingress/(reverse-)proxy level.

- **Kubernetes Ingress**: [Google Cloud documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#https_redirect).
- **Caddy**: [CaddyServer documentation](https://caddyserver.com/docs/json/apps/http/servers/automatic_https/).
- **Nginx Reverse Proxy**: [Nginx documentation](https://docs.nginx.com/nginx/admin-guide/security-controls/securing-http-traffic-upstream/).
- **Express**: [Node, Express, SSL Certificate: run HTTPS server from scratch in 5 steps](https://dev.to/omergulen/step-by-step-node-express-ssl-certificate-run-https-server-from-scratch-in-5-steps-5b87).
- **graphql-go/graphql**: [golang-tls](https://github.com/denji/golang-tls).

If you are using **Let's Encrypt** certificates, make sure to authorize HTTPS to HTTPS redirections on the path `/.well-known/acme-challenge/` to avoid any issues.


</details>


**Reference:**



[https://developers.google.com/search/docs/advanced/security/https ](https://developers.google.com/search/docs/advanced/security/https)





</p>
</details>



<br />

<a name="http/crlf"></a>
<details>
    <summary>CRLF</summary>

<p>

#### CRLF

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| http/crlf | <span className="medium-severity">MEDIUM</span> |

CRLF occurs when an attacker can abuse the carriage return character (\r) and a newline character (\n) in an HTTP request in order to inject new headers or a new body for the HTTP request. This attack is a very dangerous attack as it can give the attacker the ability to create whatever request he wants.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

The only way to prevent CRLF attacks is to carefully sanitize every message that is sent by the client.


</details>


**Reference:**



[http://www.watchfire.com/resources/HTTPResponseSplitting.pdf ](http://www.watchfire.com/resources/HTTPResponseSplitting.pdf)





</p>
</details>



<br />

<a name="http/security_headers"></a>
<details>
    <summary>Security Headers</summary>

<p>

#### Security Headers

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| http/security_headers | <span className="low-severity">LOW</span> |

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


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

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


</details>

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




**Reference:**



- Security Headers: [OWASP: Security Headers](https://owasp.org/www-community/Security_Headers)
- Cache: [OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching)
- Cookies: [OWASP: Testing for Cookies attributes](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html)
- Version Disclosure: <https://www.tenable.com/plugins/was/98618s>






</p>
</details>



<br />

<a name="http/open_redirection"></a>
<details>
    <summary>Open redirection</summary>

<p>

#### Open redirection

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| http/open_redirection | <span className="low-severity">LOW</span> |

Open redirects are part of the OWASP 2010 Top Ten vulnerabilities and occur when an application allows user-supplied input (e.g. http://nottrusted.com) to control an offsite redirect. For example an attacker could supply a user with the following link http://example.com/example.php?url=http://malicious.example.com.

---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

This check looks at user-supplied input in query string parameters and POST data to identify where open redirects might be possible. It is generally an accurate way to find where 301 or 302 redirects could be exploited by spammers or phishing attacks. To avoid the open redirect vulnerability, parameters of the application script/program must be validated before sending 302 HTTP code (redirect) to the client browser. Implement safe redirect functionality that only redirects to relative URL's, or a list of trusted domains


</details>


**Reference:**



[https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html)





</p>
</details>



<br />

<a name="http/cors"></a>
<details>
    <summary>CORS</summary>

<p>

#### CORS

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| http/cors | <span className="low-severity">LOW</span> |

Attackers can exploit CORS (Cross-Origin Resource Sharing) misconfigurations on the web server to perform CSRF (Cross-Site Request Forgery) attacks and send unauthorized commands from an authenticated user session.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Configure the 'Access-Control-Allow-Origin' HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.

If your API is public and used in websites you don't control yourself, you want to allow any request origin and you can safely ignore this alert.

See: [enable-cors.org](https://enable-cors.org/index.html).


</details>

<details>
    <summary>Apollo</summary>

Configure the 'Access-Control-Allow-Origin' HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.

For instance, with `apollo-server-express`, you can restrain request origin to only a few whitelisted domains:

 ```javascript
 await server.start();

 const corsOptions = {
   origin: ["https://www.your-app.example", "https://studio.apollographql.com"]
 };

 server.applyMiddleware({
   app,
   cors: corsOptions,
   path: "/graphql",
 });
 ```
 Source: <https://www.apollographql.com/docs/apollo-server/security/cors/>.

 If your API is public and used in websites you don't control yourself, you want to allow any request origin and you can safely ignore this alert.


</details>



<details>
    <summary>Awsappsync</summary>

Add CORS headers with the API Gateway.

Put your AppSync API behind an API Gateway and configure it to act as a proxy to your AppSync endpoint (e.g., using the HTTP Proxy feature).

To learn how to do so, see [AWS's API Gateway documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html).

You can then manually enable CORS for each resource (only for one if you created the gateway for a single AppSync endpoint):

API Gateway console > {your api gateway} > Resources > {your created resource} > Actions : Enable CORS


</details>




**Reference:**



[https://portswigger.net/web-security/cors ](https://portswigger.net/web-security/cors)





</p>
</details>





## DOS



<br />

<a name="dos/unreachable_server"></a>
<details>
    <summary>Unreachable server</summary>

<p>

#### Unreachable server

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| dos/unreachable_server | <span className="high-severity">HIGH</span> |

The server went offline for too long.
This can be caused by a server crash, a network issue, or a misconfiguration.

Often, this is a sign of a bigger issue.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

We recommend you to investigate two possible causes:

- Unhandled exceptions in your code: Verify that your code is handling exceptions properly.
- Uncontrolled resource consumption: Verify what resolver has been used to leverage the data source.


</details>


**Reference:**



[https://medium.com/workflowgen/graphql-query-timeout-and-complexity-management-fab4d7315d8d ](https://medium.com/workflowgen/graphql-query-timeout-and-complexity-management-fab4d7315d8d)





</p>
</details>



<br />

<a name="dos/security_timeout"></a>
<details>
    <summary>Security timeout</summary>

<p>

#### Security timeout

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| dos/security_timeout | <span className="high-severity">HIGH</span> |

Requests that take a long time to process can be used by attackers to create Denial-of-Service (DoS) situations.

This security test is based on an arbitrary timeout threshold that might not match your application's requirements. To learn how to change it, head over to the configuration section below.

Example: Querying `getAllUsers(){ contacts { contacts }}` returns a response after 15s.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Implement a server timeout. For example, a server configured with a 5 seconds timeout would stop the execution of any query that takes over 5 seconds.

Pros:
 -Simple to implement.
 -Most security strategies use a timeout as a final layer of protection.

Cons:
 -Damage can already have been done before the timeout kicks in.
 -Can trigger other issues. Stoping connection after a certain time may result in strange behaviors and corrupt data.

Warning :
  When a timeout is configured on the server, the socket may be closed while the underlying request continues. Make sure that the request is actually canceled.


</details>

<details>
    <summary>Awsappsync</summary>

AWS AppSync enforces a timeout of 30s on each request by default.

If your API sits behind an [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html), you can configure a different (but lower than the hard 30s limit) timeout in the AWS API Gateway console by following this path:

AWS API Gateway console > {Your App} > Resources > Integration Request > "Use default timeout".


</details>



<details>
    <summary>Graphqlgo</summary>

Implement a server timeout by following this guide:

[The complete guide to Go net/http timeouts - Cloudfare blog](https://blog.cloudflare.com/the-complete-guide-to-golang-net-http-timeouts/)


</details>



<details>
    <summary>Hasura</summary>

Hasura allows you to set a custom query timeout.

To do so:
-Go to Project Console > Security Settings > API Limits.
-Click on "Global".
-Set a timeout (e.g., 10s).


</details>



<details>
    <summary>Stepzen</summary>

There is no known remediation for StepZen.


</details>




**Reference:**



[https://medium.com/workflowgen/graphql-query-timeout-and-complexity-management-fab4d7315d8d ](https://medium.com/workflowgen/graphql-query-timeout-and-complexity-management-fab4d7315d8d)





---

**Configuration**

```JSON
{
    "checks": {
        "dos/security_timeout": {  
            "options":{ 
                "threshold_low": 1, 
                "threshold_medium": 2, 
                "threshold_high": 4, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*threshold_low* :
Duration of a request (in seconds) before raising a low level alert

*threshold_medium* :
Duration of a request (in seconds) before raising a low level alert

*threshold_high* :
Duration of a request (in seconds) before raising a low level alert





</p>
</details>



<br />

<a name="dos/recursive_fragment"></a>
<details>
    <summary>Recursive Fragment</summary>

<p>

#### Recursive Fragment

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| dos/recursive_fragment | <span className="medium-severity">MEDIUM</span> |

This is a DoS vulnerability that allows an attacker with specifically designed queries to cause stack overflow panics. Any user with access to the GraphQL handler can send these queries and cause stack overflows. This in turn could potentially compromise the ability of the server to serve data to its users.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Implement a maximum recursion limit.


</details>


**Reference:**



[https://github.com/graph-gophers/graphql-go/security/advisories/GHSA-mh3m-8c74-74xh ](https://github.com/graph-gophers/graphql-go/security/advisories/GHSA-mh3m-8c74-74xh)





</p>
</details>



<br />

<a name="dos/directive_overloading"></a>
<details>
    <summary>Directive overloading</summary>

<p>

#### Directive overloading

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| dos/directive_overloading | <span className="medium-severity">MEDIUM</span> |

Directive Overloading occurs when a user can send a query with many consecutive directives and overload the engine handling those directives.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Limit the number of directives allowed in a query.
This should be handled by the GraphQL engine while parsing the document, otherwise this can lead to a heap overflow.


</details>

<details>
    <summary>Apollo</summary>

Upgrade to GraphQL>=16.0.0 if you are not already up to date.
You can also use our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware to limit the number of directives allowed in a query.


</details>



<details>
    <summary>Graphqlyoga</summary>

Upgrade to GraphQL>=16.0.0 if you are not already up to date.
You can also use our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware to limit the number of directives allowed in a query.


</details>




**Reference:**



[no-reference-available-yet ](no-reference-available-yet)





---

**Configuration**

```JSON
{
    "checks": {
        "dos/directive_overloading": {  
            "options":{ 
                "threshold": 50, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*threshold* :
Maximum number of directives allowed before raising an alert in the fast check.





</p>
</details>



<br />

<a name="dos/automatic_persisted_queries"></a>
<details>
    <summary>Automatic Persisted Queries</summary>

<p>

#### Automatic Persisted Queries

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| dos/automatic_persisted_queries | <span className="low-severity">LOW</span> |

The absence of **Automatic Persisted Queries** can cause backend performance problems at scale.

GraphQL clients send queries to Apollo Servers as HTTP requests, including the GraphQL query string.
Depending on your GraphQL schema, the size of a valid query string might be arbitrarily large. As query strings become larger, increased latency and network usage can noticeably degrade client performance.
A persisted query is a query string cached on the server-side, along with its unique identifier (SHA-256 hash of the query). Clients can send this identifier instead of the full query string, drastically reducing request sizes.

To make a query string persist, your GraphQL server must first receive it from a requesting client. Each unique query string must therefore be sent to the server at least once. Once a client has sent a query string to persist, any other client executing that query can benefit from APQ.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

To improve network performance for large query strings, enable APQ if your GraphQL server supports it.


</details>

<details>
    <summary>Apollo</summary>

Enable Automatic Persisted queries. 
For a complete guide on how to do so, see [Apollo's Automatic Persisted Queries documentation](https://www.apollographql.com/docs/apollo-server/performance/apq/).


</details>



<details>
    <summary>Dgraph</summary>

For a complete guide on the matter, see [dgraph's Persisted Queries documentation](https://dgraph.io/docs/graphql/queries/persistent-queries/).


</details>



<details>
    <summary>Gqlgen</summary>

Enable Automatic persisted Queries
For a complete guide on how to do so, see [gqlgen's Automatic Persisted Queries documentation](https://gqlgen.com/reference/apq/).


</details>



<details>
    <summary>Graphene</summary>

Automatic Persisted Queries are not supported by Graphene alone.

However, if you use Graphene with [Django](https://github.com/graphql-python/graphene-django), the [django-graphql-persist](https://github.com/flavors/django-graphql-persist) library allows you to implement Automatic Persisted Queries.


</details>



<details>
    <summary>Graphqlapiforwp</summary>

Automatic Persisted Queries on graphqlapiforwp are different than with other engines.
Learn more on [graphqlapiforwp's Persisted Query guide](https://graphql-api.com/guides/use/creating-a-persisted-query/). You can also implement custom persisted queries using [WP GraphQL Lock](https://github.com/valu-digital/wp-graphql-lock).


</details>



<details>
    <summary>Ruby</summary>

Add graphql-persisted_queries to your Gemfile `gem 'graphql-persisted_queries'` and add the plugin to your schema class:

```ruby
class GraphqlSchema < GraphQL::Schema
  use GraphQL::PersistedQueries
end
```

Pass the `:extensions` argument as part of a context to all calls of `GraphqlSchema#execute`,
usually it happens in `GraphqlController`, `GraphqlChannel` and tests:

```ruby
GraphqlSchema.execute(
  params[:query],
  variables: ensure_hash(params[:variables]),
  context: {
    extensions: ensure_hash(params[:extensions])
  },
  operation_name: params[:operationName]
)
```

Source: https://github.com/DmitryTsepelev/graphql-ruby-persisted_queries.


</details>




**Reference:**



[https://www.apollographql.com/docs/apollo-server/performance/apq/ ](https://www.apollographql.com/docs/apollo-server/performance/apq/)





</p>
</details>



<br />

<a name="dos/circular_introspection"></a>
<details>
    <summary>Circular introspection</summary>

<p>

#### Circular introspection

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| dos/circular_introspection | <span className="info-severityom">INFO</span> |

A circular introspection has been performed on the system.
This can be exploited to conduct a Denial of Service attack.

The GraphQL introspection is done recursively on your schema.
By calling several objects that reference each other, an attacker can create a circular reference.

```graphql
__schema {
  types {
    fields {
      type {
        fields {
          type ... and so on infinitely
        }
      }
    }
  }
}
```

Creating a circular reference will increase the size of the returned document exponentially.
The larger your schema is, the bigger the document will be.

This DOS attack is hard to exploit as the size of the query might be limited by a server before reaching your backend.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

To prevent circular introspection from being abused:
- Limit the maximum depth of the introspection query.
- Limit the maximum elapsed time to execute a GraphQL query.
- Disable your introspection.


</details>






</p>
</details>





## Access Control



<br />

<a name="access_control/tenant_isolation"></a>
<details>
    <summary>Tenant isolation</summary>

<p>

#### Tenant isolation

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| access_control/tenant_isolation | <span className="high-severity">HIGH</span> |

Uses the rules defined by the users to detect same object instances detected by two different users whereas this is prohibited.
According to the rules provided in the configuration file, the same instance or object can be detected by two different users which is prohibited.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

When accessing the application via GraphQL, we must validate whether or not the user has access to the requested elements from the schema.
Especially we must implement access control policies **on every path** of the Graph leading considered field or object.

The authorization logic belongs to the business logic layer, and from there it is accessed by GraphQL.
This way, the application can have a single source of truth for authorization, which can then be used for other access points.

Among the several access control policies we can implement in our application, the two most popular ones are **Role-Based Access Control** (RBAC) and **Attribute-Based Access Control** (ABAC).
  - With **Role-Based Access Control**, we grant permissions based on roles, and then assign the roles to the users. For instance, WordPress has an `administrator` role with access to all resources, and the `editor`, `author`, `contributor`, and `subscriber` roles, which each restrict permissions in varying degrees, such as being able to create and publish a blog post, just create it, or just read it.
  - With **Attribute-Based Access Control**, permissions are granted based on metadata that can be assigned to different entities, including users, assets, and environment conditions (such as the time of the day or the visitor's IP address). For instance, in WordPress, the capability `edit_others_posts` is used to validate whether the user can edit other users' posts.

In general terms, ABAC is preferable over RBAC because it allows us to configure permissions with fine-grained control, and the permission is unequivocal in its objective.


</details>

<details>
    <summary>Apollo</summary>

See [Apollo's Access Control Documentation](https://www.apollographql.com/docs/apollo-server/security/authentication/#in-resolvers).
For large scale applications, you might want to use a specific package like [](https://github.com/maticzav/graphql-shield) for easy Access Control Management.


</details>



<details>
    <summary>Awsappsync</summary>

Appsync provides several methods for protecting critical information.
- For implementing fine-grained access control, see https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html#fine-grained-access-control


</details>



<details>
    <summary>Hasura</summary>

See Hasura's detailed documentation for Authorization Management [](https://hasura.io/docs/latest/graphql/core/auth/authorization/permission-rules/)


</details>




**Reference:**



[https://blog.logrocket.com/authorization-access-control-graphql/ ](https://blog.logrocket.com/authorization-access-control-graphql/)





---

**Configuration**

```JSON
{
    "checks": {
        "access_control/tenant_isolation": { 
            "parameters":{ 
                "objects": ['**value**'], 
                "scalars": {'**value**': ['**value**']}, 
            },  
            "skip": False,
        }
    }
}
```

**Examples:**



<details><summary>Accessiblity of objects private instances for differents users</summary>

```
{
  ... Authentication settings ...
  ... Other configuration settings ...

  "checks": {

    ... Other checks ...

    "access_control/tenant_isolation": {
      "parameters": {
        "objects": [
          "MyVeryPrivateData",            # Record access to object `MyVeryPrivateData`
                                          #  if two different users access the same object
                                          #  (i.e. two different users access the same self bound private data)
                                          #  the an alert will be raised.
        ],
        "scalars": {
          "Post": [
            "createdBy",                  # Record access to field `createdBy` of object `Post`
                                          #  if two different users can access the same scalar value
                                          #  an alert will be raised.
          ]
        }
      }
    }

    ... Other checks ...
  }

  ... Other configuration settings ...
}
```


</details>





**Parameters:**

*objects* :
A list of objects that are private.

`{'objects': ['**value**']}`

*scalars* :
A list of object fields that are private.

`{'scalars': {'**value**': ['**value**']}}`







</p>
</details>



<br />

<a name="access_control/secrets_leaks"></a>
<details>
    <summary>Secrets leaks</summary>

<p>

#### Secrets leaks

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| access_control/secrets_leaks | <span className="high-severity">HIGH</span> |

The database exposes sensitive data to the public, such as secrets, private keys, tokens, passwords, etc. This security check detects this sensitive data.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

* If there is a chance that unauthorized individuals have already accessed the secret, revoke it immediately and notify the concerned team.

* If the leak happens through another vulnerability, such as a [Server-Side Request Forgery](https://docs.escape.tech/security_tests.html#request-forgery), fix this issue to avoid further secret leaks.

* Have your developers implement these best practices to avoid leaking secrets:
    -Inside logs: [Keeping Sensitive Data Out of Logs](https://medium.com/@joecrobak/seven-best-practices-for-keeping-sensitive-data-out-of-logs-3d7bbd12904).
    -Inside commits: [Pre-commit](https://pre-commit.com/) or [Gitleaks](https://github.com/zricethezav/gitleaks).
    -In the configuration, using an environment variable manager like [Hashicorp Vault](https://www.hashicorp.com/products/vault).


</details>

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




**Reference:**



[https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)





---

**Configuration**

```JSON
{
    "checks": {
        "access_control/secrets_leaks": {  
            "options":{ 
                "blacklist": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*blacklist* :
List of elements to ignore.






</p>
</details>



<br />

<a name="access_control/private_fields"></a>
<details>
    <summary>Private fields</summary>

<p>

#### Private fields

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| access_control/private_fields | <span className="high-severity">HIGH</span> |

According to the rules provided in the configuration file, `objects` and `object fields` can be accessed by unauthorized users.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

When accessing the application through GraphQL, it is important to validate whether or not the user is given access to the requested elements from the schema.
Access control policies must therefore be implemented **on every path** of the Graph leading to the given field or object.

The authorization logic belongs to the business logic layer, and from there it is accessed by GraphQL.
This way, the application can have a single source of truth for authorization, which can then be used for other access points.

Among the several access control policies that can be implemented in an application, the two most popular ones are **Role-Based Access Control** (RBAC) and **Attribute-Based Access Control** (ABAC).
  - With **Role-Based Access Control**, permissions are granted based on roles which are later assigned to the users. For instance, WordPress has an `administrator` role with access to all resources, and the `editor`, `author`, `contributor`, and `subscriber` roles which each restrict permissions in various degrees, such as being able to create and publish a blog post, just create it, or simply read it.
  - With **Attribute-Based Access Control**, permissions are granted based on metadata that can be assigned to different entities including users, assets, or environment conditions (the time of the day or the visitor's IP address for example). In the WordPress example, the capability `edit_others_posts` is used to validate whether or not the user can edit other users' posts.

For most use cases, ABAC is preferable to RBAC as it allows for finely tuned permissions with explicit goals.


</details>

<details>
    <summary>Apollo</summary>

See [Apollo's Access Control documentation](https://www.apollographql.com/docs/apollo-server/security/authentication/#in-resolvers).
For large scale applications, you'll want to use a specific package like [GraphQL Shield](https://github.com/maticzav/graphql-shield) for quick and easy Access Control management.


</details>



<details>
    <summary>Awsappsync</summary>

Appsync provides several methods for protecting critical information.
-To learn how to implement fine-grained access control, head over to https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html#fine-grained-access-control.


</details>



<details>
    <summary>Hasura</summary>

See Hasura's detailed [documentation for Authorization Management](https://hasura.io/docs/latest/graphql/core/auth/authorization/permission-rules/).


</details>




**Reference:**



[https://blog.logrocket.com/authorization-access-control-graphql/ ](https://blog.logrocket.com/authorization-access-control-graphql/)





---

**Configuration**

```JSON
{
    "checks": {
        "access_control/private_fields": { 
            "parameters":{ 
                "**user**": , 
            },  
            "options":{ 
                "empty_values_are_positive": False, 
            }, 
            "skip": False,
        }
    }
}
```

**Examples:**



<details><summary>Accessiblity of private objects in a GraphQL API for not authenticated users.</summary>

```
{
  "auth": {
    "public": {                      #   
      "tech": "public"               # Default value on a new application 
    },                               #
    ... REDACTED AUTH ...
  },
  "users": {                         
    "public": {                      #
      "auth": "public"               # Default value on a new application 
    },                               #
    "exampleUser": {
      ... REDACTED AUTH ...
    }
  }
  ... Other configuration settings ...

  "checks": {

    ... Other checks ...

    "access_control/private_fields": {
      "public": {                    <--- Triggering on a "users" object key
        "Query": [                   <--- Object name
          "getUsersById",            <--- Field name
          "getAllUsers"              # Here, the public user is not supposed to 
                                     #  have access to the "getUsersById" and "getAllUsers" queries.
        ],
        "Mutation": [
          ...
        ],
        "User": [                    <--- Object name
          "id"                       # Here, the public user is not supposed to
                                     #  have access to the "id" field of the "User" object
        ]
      }
    }

    ... Other checks ...
  }

  ... Other configuration settings ...
}
```


</details>





**Parameters:**

***user*** :
An object where the key are GraphQL objects name and the value is an array of field's name that the user is not supposed to have access to.

`{'__user': {'**value**': ['**value**']}}`





**Options:**

*empty_values_are_positive* :
When the API returns a None value without error is the field considered to be successfully accessed ?





</p>
</details>



<br />

<a name="access_control/private_data"></a>
<details>
    <summary>Private data</summary>

<p>

#### Private data

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| access_control/private_data | <span className="high-severity">HIGH</span> |

According to the rules provided in the configuration file, `private data` can be accessed by unauthorized users.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

The best way to ensure that private data can only be accessed by authorized users is by implementing a proper access control system.
To do so, access control must be applied to every object and every link in the graphQL schema.


</details>

<details>
    <summary>Apollo</summary>

See [Apollo's Access Control documentation](https://www.apollographql.com/docs/apollo-server/security/authentication/#in-resolvers).
For large scale applications, you'll want to use a specific package like [GraphQL Shield](https://github.com/maticzav/graphql-shield) for quick and easy Access Control management.


</details>



<details>
    <summary>Awsappsync</summary>

Appsync provides several methods for protecting critical information.
- To learn more on implementing fine-grained access control, head over to https://docs.aws.amazon.com/appsync/latest/devguide/security-authz.html#fine-grained-access-control.


</details>



<details>
    <summary>Hasura</summary>

See Hasura's detailed [documentation for Authorization Management](https://hasura.io/docs/latest/graphql/core/auth/authorization/permission-rules/).


</details>




**Reference:**



[https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)





---

**Configuration**

```JSON
{
    "checks": {
        "access_control/private_data": { 
            "parameters":{ 
                "**user**": , 
            },  
            "skip": False,
        }
    }
}
```



**Parameters:**

***user*** :
A list of values the user should never be able to access.

`{'__user': ['**value**']}`







</p>
</details>



<br />

<a name="access_control/public_unsafe_route"></a>
<details>
    <summary>Public Unsafe Route</summary>

<p>

#### Public Unsafe Route

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| access_control/public_unsafe_route | <span className="medium-severity">MEDIUM</span> |

A route that mutate application data should not be public.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Restrict access to the route, using an authentication middleware for example.


</details>


**Reference:**



[https://owasp.org/Top10/A01_2021-Broken_Access_Control/ ](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)





</p>
</details>



<br />

<a name="access_control/idor"></a>
<details>
    <summary>IDOR</summary>

<p>

#### IDOR

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| access_control/idor | <span className="medium-severity">MEDIUM</span> |

We are able to enumerate a field without any limits.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Change the argument to one that cannot be enumerated.


</details>






---

**Configuration**

```JSON
{
    "checks": {
        "access_control/idor": {  
            "options":{ 
                "threshold_res": 0.8, 
                "threshold_enum": 0.6, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*threshold_res* :
Rate of correct responses to an argument being enumerated to raise an alert.

*threshold_enum* :
Rate of iterable values of a field to be considered iterable.





</p>
</details>





## Introspection



<br />

<a name="introspection/typing_inconsistency"></a>
<details>
    <summary>Typing inconsistency</summary>

<p>

#### Typing inconsistency

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| introspection/typing_inconsistency | <span className="medium-severity">MEDIUM</span> |

Look for typing misconfigurations by checking if a mutation parameter with the wrong parameter type succeeds.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Do not resolve queries with a wrong argument type.


</details>

<details>
    <summary>Apollo</summary>

Apollo doesn't allow arguments of the wrong type by default.

Example:
```javascript
{
  "errors": [
    {
      "message": "String cannot represent a non string value: 123",
      "extensions": {
        "code": "GRAPHQL_VALIDATION_FAILED"
      }
    }
  ]
}
```

This error should appear if you are using Apollo.


</details>



<details>
    <summary>Awsappsync</summary>

AWS AppSync doesn't allow arguments of the wrong type by default.

Example:

```json
{
  "data": null,
  "errors": [
    {
      "path": null,
      "locations": [
        {
          "line": 1,
          "column": 18,
          "sourceName": null
        }
      ],
      "message": "Validation error of type WrongType: argument 'a' with value 'StringValue{value='4'}' is not a valid 'Int' @ 'testType'"
    }
  ]
}
```


</details>




**Reference:**



[https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html)





---

**Configuration**

```JSON
{
    "checks": {
        "introspection/typing_inconsistency": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="introspection/zombie_objects"></a>
<details>
    <summary>Zombie objects</summary>

<p>

#### Zombie objects

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| introspection/zombie_objects | <span className="low-severity">LOW</span> |

Zombie objects are objects that are not accessible from any __query__, __mutation__,or __subscription__, but are still declared in your GraphQL schema.
Most of the time, zombie objects reveal legacy or unused part of your codebase.
Because they are not maintained nor patched, they are a **privileged vector of attack** and represent a severe security risk for your application.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

**Remove zombie objects** from your GraphQL schema and associated code if they are indeed useless in your codebase, otherwise make them accessible from at least one __query__, __mutation__ or __subscription__.


</details>


**Reference:**



[https://cwe.mitre.org/data/definitions/561.html ](https://cwe.mitre.org/data/definitions/561.html)





</p>
</details>



<br />

<a name="introspection/undefined_objects"></a>
<details>
    <summary>Undefined objects</summary>

<p>

#### Undefined objects

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| introspection/undefined_objects | <span className="info-severityom">INFO</span> |

Undefined objects are objects that use the built-in GraphQL object type instead of referencing a custom one.
They can be at the root of security issues due to their unstructured nature.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Enforce strong typing in your GraphQL objects.


</details>






</p>
</details>



<br />

<a name="introspection/typing_inconsistency_interceptor"></a>
<details>
    <summary>Typing inconsistency (interceptor)</summary>

<p>

#### Typing inconsistency (interceptor)

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| introspection/typing_inconsistency_interceptor | <span className="info-severityom">INFO</span> |

This security check verifies that all the data returned in the response matches its expected type, as defined in the introspection.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Update your resolver to make the introspection type match the actual returned type.


</details>


**Reference:**



[https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html)





</p>
</details>



<br />

<a name="introspection/imputable_json_scalars"></a>
<details>
    <summary>Imputable JSON scalars</summary>

<p>

#### Imputable JSON scalars

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| introspection/imputable_json_scalars | <span className="info-severityom">INFO</span> |

Imputable JSON scalars are an arbitrary GraphQL scalar type that allow users to return JSON objects from the GraphQL schema.
It is a **bad practice** and may represent an unhandled data leak risk for your application.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

When possible, use typed input objects instead.


</details>






</p>
</details>





## Complexity



<br />

<a name="complexity/pagination_limit"></a>
<details>
    <summary>Pagination limit</summary>

<p>

#### Pagination limit

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/pagination_limit | <span className="medium-severity">MEDIUM</span> |

A security check that ensures that an attacker cannot launch a **DoS** attack by quering all the nodes in a connection.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

To prevent such an attack, limit pagination variables.


</details>






---

**Configuration**

```JSON
{
    "checks": {
        "complexity/pagination_limit": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="complexity/large_json"></a>
<details>
    <summary>Large JSON</summary>

<p>

#### Large JSON

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/large_json | <span className="medium-severity">MEDIUM</span> |

Inputting a very large sized JSON as an argument.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Limit the maximum size of a JSON that can be inputted.


</details>


**Reference:**



[https://gusralph.info/file-upload-checklist/ ](https://gusralph.info/file-upload-checklist/)





---

**Configuration**

```JSON
{
    "checks": {
        "complexity/large_json": {  
            "options":{ 
                "skip_objects": [], 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*skip_objects* :
List of object that are to be skipped by the security test.





</p>
</details>



<br />

<a name="complexity/field_limit"></a>
<details>
    <summary>Field limit</summary>

<p>

#### Field limit

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/field_limit | <span className="medium-severity">MEDIUM</span> |

Attackers may craft complex queries by requesting a significant number of fields.

This could lead to potential *DoS attacks* or *information leakage*.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Limit query complexity by using a library specific to your engine.


</details>

<details>
    <summary>Apollo</summary>

Add a module to compute query complexity and set a threshold so that overly broad requests get canceled.

For a user-friendly module which requires no schema modification whatsoever, check out the [graphql-validation-complexity](https://github.com/4Catalyzer/graphql-validation-complexity) module.

```javascript
import { createComplexityLimitRule } from 'graphql-validation-complexity';

const ComplexityLimitRule = createComplexityLimitRule(1000);

const apolloServer = new ApolloServer({
    ...
    validationRules: [ComplexityLimitRule],
});
```

For a more customizable module that lets you manually configure the cost of each field/type of your schema, take a look at the [graphql-cost-analysis](https://github.com/pa-bru/graphql-cost-analysis) module.

This second option is best suited for a more realistic complexity estimator as all fields may not be equal in terms of complexity.

To learn more about complexity estimation, you can read: [Securing Your GraphQL API from Malicious Queries](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/).


Source: <https://escape.tech/blog/9-graphql-security-best-practices/>.


</details>



<details>
    <summary>Graphene</summary>

With `graphene-django`, it is possible to implement a custom GraphQL backend to limit query complexity, such as this one:
[graphene-django query cost analysis / complexity limits](https://gist.github.com/thibaudlabat/7b86f1a4da34eccfbfa524ca7359e87c).


</details>



<details>
    <summary>Graphqlphp</summary>

```php
use GraphQL\GraphQL;
use GraphQL\Validator\Rules\QueryComplexity;
use GraphQL\Validator\DocumentValidator;

$rule = new QueryComplexity($maxQueryComplexity = 100);
DocumentValidator::addRule($rule);

GraphQL::executeQuery(/*...*/);
```

Source: <https://github.com/webonyx/graphql-php/blob/master/docs/security.md#query-complexity-analysis>


</details>



<details>
    <summary>Hasura</summary>

Limit the number of fecthed fields with Response Limiting.
To learn how to implement it, check out [Hasura's Response Limiting guide](https://hasura.io/learn/graphql/hasura-advanced/security/5-response-limit/).


</details>




**Reference:**



[https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/ ](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/)





---

**Configuration**

```JSON
{
    "checks": {
        "complexity/field_limit": {  
            "options":{ 
                "threshold": 100, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*threshold* :
Maximum fields before raising an alert (-1 = infinite).





</p>
</details>



<br />

<a name="complexity/depth_limit"></a>
<details>
    <summary>Depth limit</summary>

<p>

#### Depth limit

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/depth_limit | <span className="medium-severity">MEDIUM</span> |

GraphQL does not limit how deep a query can be.

Since GraphQL schemas are often cyclic graphs, a query like the one below could technically be crafted:

```graphql
query IAmEvil {
  author(id: "abc") {
    posts {
      author {
        posts {
          author {
            posts {
              author {
                # Can go on as deep as the client wants
              }
            }
          }
        }
      }
    }
  }
}
```

This can lead to potential *DoS attacks* or *information leakage*.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Secure your application by preventing clients from abusing query depth.
To do so, add a *Maximum Query Depth* limit based on your knowledge of the schema and how deep you believe a legitimate query could go.
By analyzing the query document's abstract syntax tree (AST), a GraphQL server is able to reject or accept a request based on its depth.

For instance, using graphql-ruby with the max query depth setting set to `3` gives the following result:

```json
{
  "errors": [
    {
      "message": "Query has depth of 6, which exceeds max depth of 3"
    }
  ]
}
```

Since the document's AST is analyzed statically, the query does not even execute, which adds no load on your GraphQL server.

Depth alone is often not enough to cover all abusive queries. For example, a query requesting an enormous amount of nodes on the root will be very expensive but unlikely to be blocked by a query depth analyzer.


</details>

<details>
    <summary>Apollo</summary>

This remediation is supported by our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

You can also limit the depth of queries with the very light [graphql-depth-limit](https://www.npmjs.com/package/graphql-depth-limit) library.

Check how deep legitimate queries should be and set a maximum depth accordingly.

```javascript
import depthLimit from 'graphql-depth-limit'

const server = new ApolloServer({
  // ...
  validationRules: [depthLimit(5)]
});
```

Source: <https://escape.tech/blog/9-graphql-security-best-practices/>.


</details>



<details>
    <summary>Awsappsync</summary>

For now, AppSync does not allow out-of-the-box query depth limit configuration.

This can however be bypassed by implementing depth limit using Velocity Template Language VTL in Escape's Resolver.
Below is an example of using the Matches regex to determine the length of selectionSetList.
This example enforces a depth limit of 3 and can be added inside of an AppSync resolver function.
```
#set($selectionSetList = $ctx.info.selectionSetList)

#foreach ($item in $selectionSetList)
  #if($item.matches(".*/.*/./."))
    $util.error("Error: Queries with more than 3 levels found. At level - $item")
  #end
#end
#return($ctx.prev.result)
```
Source: https://robertbulmer.medium.com/aws-appsync-rate-and-max-depth-limiting-c536e5ba43d6.


</details>



<details>
    <summary>Graphene</summary>

With `graphene-django`, it is possible to implement a custom GraphQL backend to limit query complexity, such as this one:
[graphene-django query cost analysis / complexity limits](https://gist.github.com/thibaudlabat/7b86f1a4da34eccfbfa524ca7359e87c).


</details>



<details>
    <summary>Graphqlphp</summary>

```php
use GraphQL\GraphQL;
use GraphQL\Validator\Rules\QueryDepth;
use GraphQL\Validator\DocumentValidator;

$rule = new QueryDepth($maxDepth = 10);
DocumentValidator::addRule($rule);

GraphQL::executeQuery(/*...*/);
```

Source: https://github.com/webonyx/graphql-php/blob/master/docs/security.md#limiting-query-depth.


</details>



<details>
    <summary>Graphqlyoga</summary>

This remediation is supported by our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

You can also use the standalone [envelop plugin](https://www.npmjs.com/package/@escape.tech/graphql-armor-max-depth).


</details>



<details>
    <summary>Hasura</summary>

Hasura allows for manual query depth limit configuration directly in the security settings:
- Go to Project Console > Security Settings > API Limits.
- Click on "Global".
- Set a depth limit (e.g., 3).


</details>




**Reference:**



[https://www.howtographql.com/advanced/4-security/ ](https://www.howtographql.com/advanced/4-security/)





---

**Configuration**

```JSON
{
    "checks": {
        "complexity/depth_limit": {  
            "options":{ 
                "threshold": 3, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*threshold* :
Maximum depth before raising an alert (-1 = infinite).





</p>
</details>



<br />

<a name="complexity/width_limit"></a>
<details>
    <summary>Width limit</summary>

<p>

#### Width limit

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/width_limit | <span className="low-severity">LOW</span> |

GraphQL defines the maximum width of a query as the **maximum number of subfields** queried from one field.

If no limit is set on query width, clients may therefore craft a complex query that could lead to potential *DoS attacks* or *information leakage*.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Set a threshold on the maximum number of subfields that can be queried simultaneously.


</details>

<details>
    <summary>Apollo</summary>

Add a module to compute query complexity and set a threshold on this complexity so that overly broad requests get canceled.

For a user-friendly module which requires no schema modification whatsoever, check out the [graphql-validation-complexity](https://github.com/4Catalyzer/graphql-validation-complexity) module.

```javascript
import { createComplexityLimitRule } from 'graphql-validation-complexity';

const ComplexityLimitRule = createComplexityLimitRule(1000);

const apolloServer = new ApolloServer({
    ...
    validationRules: [ComplexityLimitRule],
});
```

For a more customizable module that lets you manually configure the cost of each field/type of your schema, take a look at the [graphql-cost-analysis](https://github.com/pa-bru/graphql-cost-analysis) module.

This second option is best suited for a more realistic complexity estimator as all fields may not be equal in terms of complexity.

To learn more on complexity estimation, you can read: [Securing Your GraphQL API from Malicious Queries](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/).


</details>



<details>
    <summary>Graphene</summary>

With `graphene-django`, it is possible to implement a custom GraphQL backend to limit query complexity, such as this one:
[graphene-django query cost analysis / complexity limits](https://gist.github.com/thibaudlabat/7b86f1a4da34eccfbfa524ca7359e87c).


</details>



<details>
    <summary>Hasura</summary>

Hasura allows you to set a width (=node) limit.

 To do so:
 -Go to Project Console > Security Settings > API Limits.
 -Click on "Global".
 -Set a node limit (e.g., 15).


</details>




**Reference:**



[https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/ ](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/)





---

**Configuration**

```JSON
{
    "checks": {
        "complexity/width_limit": {  
            "options":{ 
                "threshold": 20, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*threshold* :
Maximum width before raising an alert (-1 = infinite).





</p>
</details>



<br />

<a name="complexity/cyclic_query"></a>
<details>
    <summary>Cyclic query</summary>

<p>

#### Cyclic query

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/cyclic_query | <span className="low-severity">LOW</span> |

GraphQL allows developers to nest queries and objects. Attackers can abuse this feature by calling a deeply nested query similar to a recursive function and causing a Denial of Service by exhausting CPU, memory, or other resources.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Although the ability to fetch a cyclic query is necessary for some GraphQL application, it is best to always implement security measures to control these cyclic queries:
  -**Set query timeouts**: restrict the time a query is allowed to run.
  -**Set a maximum query depth**: limit the tolerated depth of queries in order to prevent overly deep queries from abusing resources.
  -**Set a maximum query complexity**: limit the complexity of queries to mitigate the abuse of GraphQL resources.
  -**Use server-time-based throttling**: limit the amount of server time a user can consume.
  -**Use query-complexity-based throttling**: limit the total complexity of queries a user can consume.


</details>

<details>
    <summary>Apollo</summary>

Although the ability to fetch a cyclic query is necessary for some GraphQL application, it is best to always implement security measures to control these cyclic queries:
-**Set a maximum query depth**: limit the depth of allowed queries in order to prevent overly deep queries from abusing GraphQL resources.

  You can easily limit query depth with the very light [graphql-depth-limit](https://www.npmjs.com/package/graphql-depth-limit) library.

  Add a maximum query depth limit based on your knowledge of the schema and how deep you believe a legitimate query could go.

  ```javascript
  import depthLimit from 'graphql-depth-limit'

  const server = new ApolloServer({
    ...
    validationRules: [depthLimit(5)]
    });
  ```

  Source: <https://escape.tech/blog/9-graphql-security-best-practices/>.


-**Set maximum query complexity**: limit the complexity of allowed queries to prevent overly complex queries from abusing GraphQL resources.

  To do so, add a module to compute the complexity of each query and set a threshold on this complexity so that overly broad requests get canceled.

    For a user-friendly module which requires no schema modification whatsoever, check out the [graphql-validation-complexity](https://github.com/4Catalyzer/graphql-validation-complexity) module.

    ```javascript
    import { createComplexityLimitRule } from 'graphql-validation-complexity';

    const ComplexityLimitRule = createComplexityLimitRule(1000);

    const apolloServer = new ApolloServer({
        ...
        validationRules: [ComplexityLimitRule],
    });
    ```

    For a more customizable module that lets you manually configure the cost of each field/type of your schema, take a look at the [graphql-cost-analysis](https://github.com/pa-bru/graphql-cost-analysis) module.

    This second option is best suited for a more realistic complexity estimator as all fields may not be equal in terms of complexity.

    To learn more about complexity estimation, you can read: [Securing Your GraphQL API from Malicious Queries](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/).


    Source: <https://escape.tech/blog/9-graphql-security-best-practices/>.


</details>



<details>
    <summary>Graphene</summary>

With `graphene-django`, it is possible to implement a custom GraphQL backend to limit query complexity, such as this one:
[graphene-django query cost analysis / complexity limits](https://gist.github.com/thibaudlabat/7b86f1a4da34eccfbfa524ca7359e87c).


</details>




**Reference:**



[https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/ ](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/)





</p>
</details>



<br />

<a name="complexity/character_limit_interceptor"></a>
<details>
    <summary>Character limit (interceptor)</summary>

<p>

#### Character limit (interceptor)

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/character_limit_interceptor | <span className="low-severity">LOW</span> |

Clients using GraphQL may craft a query with a huge amount of characters.
This could lead to potential *DoS attacks* or *information leakage*.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Reject requests containing more than a certain number of characters.
For instance, `3,000` is a coherent threshold for characters.

This naïve approach will not prevent clever hackers from crafting costly requests if short field names are available.
One should prefer the better but more difficult to implement "query complexity" method and set a complexity threshold instead.


</details>

<details>
    <summary>Apollo</summary>

Reject requests containing more than a certain number of characters.

For instance, `3,000` is a coherent threshold for characters.

This remediation is supported by [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

Otherwise, this is an example code for Apollo with Express.js:
```javascript
import bodyParser from "body-parser";
...
app.use(bodyParser.json({ limit : 3000, type : '*/*' }));
```
**Note:** If your application is designed to send big graphql queries, you might want to put a higher character limit.

This naïve approach will not prevent clever hackers from crafting costly requests if short field names are available.
One should additionally use the better but more difficult to implement "query complexity" method and set a complexity threshold.

Source: <https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/>


</details>



<details>
    <summary>Awsappsync</summary>

Add ACL rule to prevent requests bigger than a threshold. (e.g., 3000 characters)
This would be entered into the Rule JSON editor when creating a web ACL in the AWS WAF Console :

```json
{
  "Name": "BodySizeRule",
  "Priority": 1,
  "RuleAction": {
    "Block": {}
  },
  "Statement": {
    "SizeConstraintStatement": {
      "ComparisonOperator": "GE",
      "FieldToMatch": {
        "Body": {}
      },
      "Size": 3000,
      "TextTransformations": [
        {
          "Priority": 0,
          "Type": "NONE"
        }
      ]
    }
  },
  "VisibilityConfig": {
    "CloudWatchMetricsEnabled": true,
    "MetricName": "BodySizeRule",
    "SampledRequestsEnabled": true
  }
}
```

Don't forget to associate the previously created ACL rule with your AppSync API.

For more information refer to :

[AWS AppSync - Developer Guide](https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html)

[Integrate an AppSync API with AWS WAF](https://docs.aws.amazon.com/appsync/latest/devguide/WAF-Integration.html)

[AWS Web Application Firewall](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html)


</details>



<details>
    <summary>Graphqlgo</summary>

You can limit query size with a net/http middlware.

```go
func limitBodySize(next http.Handler, limit int64) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    limitedBody := http.MaxBytesReader(w, r.Body, limit)
    bodyBytes, err := ioutil.ReadAll(limitedBody)
    limitedBody.Close()
    if err != nil {
      message := "{\"errors\": [{\"message\": \"Request too large.\"}],\"data\": null}"
      w.Write([]byte(message))
    } else {
      r.Body = ioutil.NopCloser(bytes.NewBuffer(bodyBytes))
      next.ServeHTTP(w, r)
    }
  })
}

func main(){
  ...
  h := handler.New(&handler.Config{
    Schema:   &schema
  })
  http.Handle("/graphql", limitBodySize(h, 3000))
}
```


</details>



<details>
    <summary>Graphqlyoga</summary>

Reject requests containing more than a certain number of characters.

This remediation is supported by [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

Otherwise, you can use the standalone [envelop plugin](https://www.npmjs.com/package/@escape.tech/graphql-armor-character-limit) directly.


</details>




**Reference:**



[https://shopify.engineering/rate-limiting-graphql-apis-calculating-query-complexity ](https://shopify.engineering/rate-limiting-graphql-apis-calculating-query-complexity)





---

**Configuration**

```JSON
{
    "checks": {
        "complexity/character_limit_interceptor": {  
            "options":{ 
                "threshold": 15500, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*threshold* :
Maximum characters before raising an alert (-1 = infinite)





</p>
</details>



<br />

<a name="complexity/batch_limit"></a>
<details>
    <summary>Batch Limit</summary>

<p>

#### Batch Limit

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/batch_limit | <span className="low-severity">LOW</span> |

Some GraphQL engines support batching of **multiple queries** into a **single request**. This allows users to request multiple objects or multiple instances of objects efficiently.
However, an attacker can leverage this feature to evade many security measures, including rate limiting.


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

Disable or limit queries batching in your GraphQL engine.


</details>

<details>
    <summary>Apollo</summary>

Disable query batching in `ApolloServer` constructor options.

This remediation is supported by [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

Otherwise, you can switch off batching in the `ApolloServer` constructor options.

```javascript
const server = new ApolloServer({
  ...
  allowBatchedHttpRequests: false,
)}
```
Source: <https://www.apollographql.com/docs/apollo-server/requests/#batching>


</details>




**Reference:**



[https://lab.wallarm.com/graphql-batching-attack/ ](https://lab.wallarm.com/graphql-batching-attack/)





---

**Configuration**

```JSON
{
    "checks": {
        "complexity/batch_limit": {  
            "options":{ 
                "threshold": 15, 
            }, 
            "skip": False,
        }
    }
}
```





**Options:**

*threshold* :
Maximum number of batched documents allowed to be sent





</p>
</details>



<br />

<a name="complexity/alias_limit"></a>
<details>
    <summary>Alias limit</summary>

<p>

#### Alias limit

| Identifier                        | Severity                                       |
| --------------------------------- | ---------------------------------------------- |
| complexity/alias_limit | <span className="low-severity">LOW</span> |

GraphQL supports the aliasing of multiple sub-queries into a single query. It allows requesting multiple instances of objects efficiently and without conflicts.
However, attackers can leverage this feature to bypass many security measures, including rate limiting.

Query example:
```graphql
query {
  a: myself{username}
  b: myself{username}
  ...
}
```

Response example:
```javascript
{
  "data": {
    "a": {"username":"EscapeAdmin"},
    "b": {"username":"EscapeAdmin"},
    ...
  }
}
```


---

**Remediations**

<details>
    <summary><strong>Generic</strong></summary>

**Limit query aliasing** in your GraphQL Engine to prevent aliasing-based attacks.


</details>

<details>
    <summary>Apollo</summary>

Adding a limit on request complexity is a much better alternative to disabling aliasing, which can trigger other issues.

This remediation is supported by our [GraphQL Armor](https://github.com/Escape-Technologies/graphql-armor) middleware.

When using Apollo, you can also add a module to compute the query complexity and set a threshold so that overly broad requests get canceled.

For a user-friendly module which requires no schema modification whatsoever, check out the [graphql-validation-complexity](https://github.com/4Catalyzer/graphql-validation-complexity) module.

```javascript
import { createComplexityLimitRule } from 'graphql-validation-complexity';

const ComplexityLimitRule = createComplexityLimitRule(1000);

const apolloServer = new ApolloServer({
    ...
    validationRules: [createComplexityLimitRule(1000)],
});
```

For a more customizable module that lets you manually configure the cost of each field/type of your schema, take a look at the [graphql-cost-analysis](https://github.com/pa-bru/graphql-cost-analysis) module.

This second option is best suited for a more realistic complexity estimator as all fields may not be equal in terms of complexity.

To learn more about complexity estimation, you can read: [Securing Your GraphQL API from Malicious Queries](https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/)


</details>




**Reference:**



[https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/12-API_Testing/01-Testing_GraphQL ](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/12-API_Testing/01-Testing_GraphQL)





</p>
</details>



