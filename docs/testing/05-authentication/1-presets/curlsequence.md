---
title: cURL Sequence
description: cURL Sequence Authentication Preset
---

# cURL Sequence Authentication with Escape

## Description
The `cURL Sequence` authentication preset facilitates complex authentication flows by executing a templated sequence of cURL requests in a secure sandboxed cURL simulator:

- **Templated cURL Requests**: Enables the definition of a sequence of cURL requests, where each request can be templated with variables.
- **Dynamic Token Extractions**: Variables are dynamically extracted from the responses of these requests, allowing for sequential data dependency across requests.
- **Token Re-injection**: Extracted tokens or variables can be reinjected into subsequent authenticated requests.
- **User-Specific Variables**: Supports defining user-specific variables that can be injected into the cURL sequences.

This preset is particularly useful for complex authentication scenarios where multiple steps or interactions are required, and where each step might depend on the outcome of the previous one.

**Warning**: This preset requires to name your variables in order to be able to extract and inject them properly in the templates or the final injections.

The simulator supports a subset of arguments commonly used in `cURL`:
- `url`: The URL for the HTTP request.
- `-X`, `--request`: Specify a custom request method to use when communicating with the HTTP server.
- `-H`, `--header`: Add a header to the request (can be used multiple times for multiple headers).
- `-b`, `--cookie`: Add a cookie to the request (can be used multiple times for multiple cookies).
- `-d`, `--data`, `--data-ascii`, `--data-binary`, `--data-raw`: Sends the specified data in a POST request.
- `-u`, `--user`: Specify the user and password for server authentication.
- `-A`, `--user-agent`: Sets the user agent string for the HTTP request.
- `-x`, `--proxy`: Use the specified proxy.
- `-k`, `--insecure`: Allow connections to SSL sites without certificates.
- `-L`, `--location`: Follow redirects (the maximum number of redirects is defined by `--max-redirs`).
- `--max-redirs`: Set the maximum number of redirections to follow for `-L`.

**Note**: The simulator does not support all `cURL` arguments. Adding unsupported arguments may result in an error.



## Examples

```yaml
presets:
-   type: curl_sequence
    requests:
    -   curl: curl -X POST https://api.example.com/login -d "username={{username}}&password={{password}}"
        extractions:
        -   name: session_id
            key: SessionID
            location: cookie
        -   name: csrfToken
            key: X-CSRF-Token
            location: header
    -   curl: 'curl -X POST https://auth.example.com/token?session_id={{session_id}}
            -H "X-CSRF-Token: {{csrfToken}}"'
        extractions:
        -   name: bearerToken
            key: bearer
            location: body
    injections:
    -   key: X-CSRF-Token
        location: header
        variable: csrfToken
    -   key: Authorization
        location: header
        prefix: Bearer
        variable: bearerToken
    users:
    -   username: user1
        variables:
            username: user1
            password: user1Password
    -   username: admin2
        variables:
            username: user2
            password: user2Password

```


## Extensive Configuration

| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| type | `Const[curl_sequence]` | `True` |  |  |
| users | `cURLSequenceUserPreset` | `True` | The list of users to generate tokens for. | [cURLSequenceUserPreset](#cURLSequenceUserPreset) |
| requests | `cURLSequenceRequestPreset` | `True` | A sequence of curl templates used to make requests and extract variables. | [cURLSequenceRequestPreset](#cURLSequenceRequestPreset) |
| injections | `TokenInjection` | `False` | Final variables injected into the authentified requests. | [TokenInjection](#TokenInjection) |



## Objects

### <a id="cURLSequenceUserPreset"></a>cURLSequenceUserPreset
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| username | `string` | `True` | The arbitrary name that identifies the user. |  |
| headers | `Dict[string, string]` | `False` | Optional headers injected during the authentication process and in authentified requests. |  |
| cookies | `Dict[string, string]` | `False` | Optional cookies injected during the authentication process and in authentified requests. |  |
| variables | `Dict[string, string]` | `False` | A dict of variables to inject into the cURL sequences. |  |


### <a id="cURLSequenceRequestPreset"></a>cURLSequenceRequestPreset
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| curl | `string` | `True` | A curl template used to make a request. |  |
| extractions | `TokenExtraction` | `False` | Variables extracted from the response that can be templated in further requests. | [TokenExtraction](#TokenExtraction) |


### <a id="TokenInjection"></a>TokenInjection
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| location | `HTTPLocation` | `True` | The location of the HTTP request where the token should be injected | [HTTPLocation](#HTTPLocation) |
| key | `string` | `True` | The key to use for the injected token. Its usage depends on the location. For headers, cookies,and query parameters, this key describes the name of the header, cookie or query parameter. For a body location, the key is the field where the token should be injected within the request bodies |  |
| prefix | `string` | `False` | A prefix to prepend to the token before it is injected |  |
| variable | `string` | `True` | The name of a variable to retrieve to create the token&#39;s value. If not provided, the token will be infered as the first successful extraction of the procedure |  |


### <a id="TokenExtraction"></a>TokenExtraction
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| location | `HTTPLocation` | `True` | The location of the HTTP request where the value should be extracted | [HTTPLocation](#HTTPLocation) |
| key | `string` | `True` | The key to use for the extracted value, depending on the location |  |
| regex | `string` | `False` | The regex to use to extract the token from the key value. By default the entire value is taken. |  |
| name | `string` | `True` | The name of the variable to store the extracted value into |  |





## Enums


### <a id="HTTPLocation"></a>HTTPLocation

- `header`

- `cookie`

- `body`

- `query`


