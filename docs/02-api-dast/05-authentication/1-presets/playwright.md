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
| extractions | `TokenExtraction` | `False` | The token extraction configuration used to extract the tokens
        from the HTTP response or the browser storage itself. | [TokenExtraction](#TokenExtraction) |
| injections | `BrowserInjection` | `False` | The injection configuration used to inject the tokens into the HTTP requests. | [BrowserInjection](#BrowserInjection) |



## Objects

### <a id="PlaywrightUserPreset"></a>PlaywrightUserPreset
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| username | `string` | `True` | The arbitrary name that identifies the user. |  |
| headers | `Dict[string, string]` | `False` | Optional headers injected during the authentication process and in authentified requests. |  |
| cookies | `Dict[string, string]` | `False` | Optional cookies injected during the authentication process and in authentified requests. |  |
| email | `string` | `True` | The email that will be used to auto login |  |
| password | `string` | `True` | The password that will be used to auto login |  |


### <a id="TokenExtraction"></a>TokenExtraction
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| location | `HTTPLocation` | `True` | The location of the HTTP request where the value should be extracted | [HTTPLocation](#HTTPLocation) |
| key | `string` | `True` | The key to use for the extracted value, depending on the location |  |
| regex | `string` | `False` | The regex to use to extract the token from the key value. By default the entire value is taken. |  |
| name | `string` | `True` | The name of the variable to store the extracted value into |  |


### <a id="BrowserInjection"></a>BrowserInjection
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| location | `BrowserLocation` | `True` | The location of the browser where the token should be injected | [BrowserLocation](#BrowserLocation) |
| origin | `string` | `True` | The origin of the local storage or session storage where the token should be injected |  |
| key | `string` | `True` | The key to use for the injected token. Its usage depends on the location. |  |
| variable | `string` | `True` | The name of a variable to retrieve to create the token&#39;s value. If not provided, the token will be infered as the first successful extraction of the procedure |  |





## Enums


### <a id="HTTPLocation"></a>HTTPLocation

- `header`

- `cookie`

- `body`

- `query`


### <a id="BrowserLocation"></a>BrowserLocation

- `browser_local_storage`

- `browser_session_storage`


