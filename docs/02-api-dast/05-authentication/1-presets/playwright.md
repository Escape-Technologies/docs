---
title: Playwright
description: Playwright Authentication Preset
---

# Playwright Authentication with Escape

## Description
The &#39;Playwright&#39; authentication preset is designed for scenarios where traditional authentication methods are not feasible, and it relies on browser-based automated login:

This preset is particularly useful when you need to authenticate via forms and simply supply inputs

## Examples

```yaml
presets:
-   type: playwright
    login_url: https://auth.example.com/login
    injections:
    -   key: token
        location: browser_local_storage
        origin: https://auth.example.com
        variable: token
    extractions:
    -   name: token
        key: token
        location: browser_local_storage
        origin: https://auth.example.com
    users:
    -   username: user
        email: user@example.com
        password: pass

```


## Extensive Configuration

| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| type | `Const[playwright]` | `True` |  |  |
| users | `PlaywrightUserPreset` | `True` | The list of users to generate tokens for. | [PlaywrightUserPreset](#PlaywrightUserPreset) |
| login_url | `string` | `True` | The url that presents the login form |  |
| extractions | `BrowserExtraction` | `False` | The token extraction configuration used to extract the tokens
        from the HTTP response or the browser storage itself. | [BrowserExtraction](#BrowserExtraction) |
| injections | `TokenInjection` | `False` | The injection configuration used to inject the tokens into the HTTP requests. | [TokenInjection](#TokenInjection) |



## Objects

### <a id="PlaywrightUserPreset"></a>PlaywrightUserPreset
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| username | `string` | `True` | The arbitrary name that identifies the user. |  |
| headers | `Dict[string, string]` | `False` | Optional headers injected during the authentication process and in authentified requests. |  |
| cookies | `Dict[string, string]` | `False` | Optional cookies injected during the authentication process and in authentified requests. |  |
| email | `string` | `True` | The email that will be used to auto login |  |
| password | `string` | `True` | The password that will be used to auto login |  |


### <a id="BrowserExtraction"></a>BrowserExtraction
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| location | `BrowserLocation` | `True` | The location of the browser where the value should be extracted | [BrowserLocation](#BrowserLocation) |
| origin | `string` | `True` | The origin of the local storage or session storage where the value should be extracted |  |
| key | `string` | `True` | The key to use for the extracted value, depending on the location |  |
| name | `string` | `True` | The name of the variable to store the extracted value into |  |


### <a id="TokenInjection"></a>TokenInjection
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| location | `HTTPLocation` | `True` | The location of the HTTP request where the token should be injected | [HTTPLocation](#HTTPLocation) |
| key | `string` | `True` | The key to use for the injected token. Its usage depends on the location. For headers, cookies,and query parameters, this key describes the name of the header, cookie or query parameter. For a body location, the key is the field where the token should be injected within the request bodies |  |
| prefix | `string` | `False` | A prefix to prepend to the token before it is injected |  |
| variable | `string` | `True` | The name of a variable to retrieve to create the token&#39;s value. If not provided, the token will be infered as the first successful extraction of the procedure |  |





## Enums


### <a id="BrowserLocation"></a>BrowserLocation

- `browser_local_storage`

- `browser_session_storage`


### <a id="HTTPLocation"></a>HTTPLocation

- `header`

- `cookie`

- `body`

- `query`


