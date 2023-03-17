---
sidebar_position: 27
title: Character limit (interceptor)
---

# Character limit (interceptor)

## Description

Clients using GraphQL may craft a query with a huge amount of characters.
This could lead to potential *DoS attacks* or *information leakage*.

## Remediation

Reject requests containing more than a certain number of characters.
For instance, `3,000` is a coherent threshold for characters.

This naïve approach will not prevent clever hackers from crafting costly requests if short field names are available.
One should prefer the better but more difficult to implement "query complexity" method and set a complexity threshold instead.


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

## Configuration

> CheckId: `complexity/character_limit_interceptor`

### Options

- *threshold* : Maximum characters before raising an alert (-1 = infinite)



### Examples


#### Ignoring this check

```json
{
    "checks": {
        "complexity/character_limit_interceptor": {
            "skip": true
        }
    }
}
```


#### Check with all default options

```json
{
    "checks": {
        "complexity/character_limit_interceptor": {
            "options": {
                "threshold": 15500
            }
        }
    }
}
```




## Score

- Escape Severity: **<span className="low-severity">LOW</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**
- PCI DSS: **6.5.8**
- CWE
  - **20**
  - **400**
  - **664**
  - **770**
- WASC: **10**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L/E:H/RL:O/RC:R**
- CVSS_SCORE: **4.9**

## References

https://shopify.engineering/rate-limiting-graphql-apis-calculating-query-complexity
