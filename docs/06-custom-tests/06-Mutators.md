---
# Limit depth of table of contents
toc_min_heading_level: 2
toc_max_heading_level: 2
---
# Mutators
## Request Body JSON Mutator
`key: request.body.json`

You can use this mutator to change the JSON body of the request before resending it.

### Properties

- `jq:` JQ query to apply to the JSON body. See https://stedolan.github.io/jq/manual/


## Request Body Text Mutator
`key: request.body.text`

You can use this mutator to change the body (as text) of the request before resending it.

## Request Headers Mutator
`key: request.headers`

You can use this mutator to change the headers of the request before resending it.

### Properties

- `value:` The value to set.
- `values:` The values to set, generates multiple queries.
- `regex_replace:` Regex replace pattern.
- `name:` The header name to match, supports regex.
- `delete:` Delete the matched headers.


## Request Object Mutator
`key: request.object`


The detected object scalars (including custom scalars) in the request, with their kind, name and value.

## Request User Mutator
`key: request.user`


You can use this mutator to change the user of the request before resending it.

### Example

```yaml
transform:
    trigger:
    - if: schema.url
        contains: /api/v1/
    mutate:
      - key: request.user
      mutate:
      value: /api/v2/
```
        

### Properties

- `value:` The value to set.
- `values:` The values to set, generates multiple queries.
- `regex_replace:` Regex replace pattern.
- `drop_user:` Remove the user authentication from the request.


## Schema URL Mutator
`key: schema.url`


You can use this mutator to change the URL of the request before resending it.

## Example

```yaml
transform:
    trigger:
    - if: schema.url
        contains: /api/v1/
    mutate:
    - key: schema.url
        mutate:
        value: /api/v2/
```
        

