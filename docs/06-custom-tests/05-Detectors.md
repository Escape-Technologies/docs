---
# Limit depth of table of contents
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Detectors

## Scan type detector

`if: scan.type`

Use this to select against the type of the scan.

### Properties

- `is:` The scan type is exactly this
- `is_not:` The scan type is not this type
- `in:` The scan type is in this list

---

## CRUD detector

`if: helpers.request.crud`

Use this to select against the detected CRUD operation of the request.

### Properties

- `is:` Condition is the request is this CRUD operation
- `is_not:` Condition is the request is not this CRUD operation
- `in:` Condition is the request is in this list of CRUD operations (exact match)

---

## Response status detector

`if: response.status_code`

Use this to compare the HTTP status code as an integer.

### Properties

- `is:` Condition is this exact integer
- `is_not:` Condition is not this exact integer
- `in:` Condition is in this list of integers (exact match)
- `gt:` Condition is greater than this integer
- `lt:` Condition is less than this integer

---

## Response duration detector

`if: response.duration_ms`

Use this to compare the duration of the request in milliseconds.

### Properties

- `is:` Condition is this exact integer
- `is_not:` Condition is not this exact integer
- `in:` Condition is in this list of integers (exact match)
- `gt:` Condition is greater than this integer
- `lt:` Condition is less than this integer

---

## Schema authentication detector

`if: schema.need_authentication`

Use this to select whether or not the schema requires authentication.

### Properties

- `is:` Condition is true
- `is_not:` Condition is false

---

## Request authentication detector

`if: request.is_authenticated`

Use this to select whether or not whether the request is authenticated.

### Properties

- `is:` Condition is true
- `is_not:` Condition is false

---

## Schema path reference detector

`if: schema.path_ref`

Use this to string compare the operation name in GraphQL or the path in REST

### Properties

- `is:` Condition is this exact string
- `is_not:` Condition is not this exact string
- `in:` Condition is in this list (exact match)
- `contains:` Contains this string
- `regex:` Condition is matched on this regex with fullmatch

---

## Response success detector

`if: helpers.response.is_successful`

Use this to check whether the response is successful.

### Properties

- `is:` Condition is true
- `is_not:` Condition is false

---

## Schema URL detector

`if: schema.url`

Use this to string compare the URL of the request.

### Properties

- `is:` Condition is this exact string
- `is_not:` Condition is not this exact string
- `in:` Condition is in this list (exact match)
- `contains:` Contains this string
- `regex:` Condition is matched on this regex with fullmatch

---

## Request user detector

`if: request.user`

Use this to string compare the configured user for the request.

### Properties

- `is:` Condition is this exact string
- `is_not:` Condition is not this exact string
- `in:` Condition is in this list (exact match)
- `contains:` Contains this string
- `regex:` Condition is matched on this regex with fullmatch

---

## Request headers detector

`if: request.headers`

Use that to select and compare the request headers in a key value dictionary.

### Properties

- `key:` Key to match
- `value:` Value to match

---

## Response headers detector

`if: response.headers`

Use that to select and compare the response headers in a key value dictionary.

### Properties

- `key:` Key to match
- `value:` Value to match

---

## Response body JSON detector

`if: response.body.json`

Use this to select and compare the response body when detected as JSON, using jq-like syntax.

### Properties

- `is:` Condition is this exact JSON
- `is_not:` Condition is not this exact JSON
- `in:` Condition is in this list of JSON
- `jq:` JQ query to match and use as boolean

---

## Request body JSON detector

`if: request.body.json`

Use this to select and compare the request body when detected as JSON, using jq-like syntax.

### Properties

- `is:` Condition is this exact JSON
- `is_not:` Condition is not this exact JSON
- `in:` Condition is in this list of JSON
- `jq:` JQ query to match and use as boolean

---

## Response body text detector

`if: response.body.text`

Use this to select and compare the response body as text, using string compare.

### Properties

- `is:` Condition is this exact string
- `is_not:` Condition is not this exact string
- `in:` Condition is in this list (exact match)
- `contains:` Contains this string
- `regex:` Condition is matched on this regex with fullmatch

---

## Request body text detector

`if: request.body.text`

Use this to select and compare the request body as text, using string compare.

### Properties

- `is:` Condition is this exact string
- `is_not:` Condition is not this exact string
- `in:` Condition is in this list (exact match)
- `contains:` Contains this string
- `regex:` Condition is matched on this regex with fullmatch

---

## Request object detector

`if: request.object`

Use this to select and compare the detected object scalars (including custom scalars) in the request, with their kind, name and value.

### Properties

- `type:` Object scalar type to match
- `name:` Object scalar name to match
- `value:` Object scalar value to match

---

## Response object detector

`if: response.object`

Use this to select and compare the detected object scalars (including custom scalars) in the response, with their kind, name and value.

### Properties

- `type:` Object scalar type to match
- `name:` Object scalar name to match
- `value:` Object scalar value to match

---
