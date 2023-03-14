---
sidebar_position: 35
title: Field suggestion
---

# Field suggestion

## Description

If introspection is disabled on your target, **Field Suggestion** still allow users infer the entire schema, with a tool like [Clairvoyance](https://github.com/nikitastupin/clairvoyance).

If you query a field with a typo, GraphQL will attempt to suggest fields close to what was requested. Example:
```
  Error: Cannot query field "createSesion" on type "RootMutation". Did you mean "createSession", "createUser", "createFile", or "createImage"?
```

## Remediation

Disable Field Suggestion in production.


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

## Configuration

> CheckId: `information_disclosure/field_suggestion`


### Examples


#### Ignoring this check

```json
{
    "checks": {
        "Field suggestion": {
            "skip": true
        }
    }
}
```




## Score

- Escape Severity: **<span className="medium-severity">MEDIUM</span>**
- OWASP: **[A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)**
- PCI DSS: **6.5.5**
- CWE
  - **200**
  - **489**
  - **668**
  - **1295**
- WASC: **15**



### CVSS

- CVSS_VECTOR: **CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N/E:H/RL:O/RC:C**
- CVSS_SCORE: **5.1**

## References

https://blog.yeswehack.com/yeswerhackers/how-exploit-graphql-endpoint-bug-bounty/
