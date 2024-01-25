---
title: Basic
description: Basic Authentication Preset
---

# Basic Authentication with Escape

## Description
The &#39;Basic&#39; authentication preset is designed for straightforward authentication scenarios:

- **Credentials Encoding**: User&#39;s credentials (username and password) are encoded in **base64**.
- **Header Attachment**: The encoded credentials are attached to the request headers.
- **Authorization Header**: The client sends these credentials in the **Authorization** header of the HTTP request.

This method provides a simple and direct way to authenticate users, without requiring additional server requests for user creation or authentication. It is best suited for scenarios where simplicity and ease of implementation are prioritized.

**Note**: While this method is straightforward, it&#39;s less secure compared to more advanced authentication methods.

## Examples

```yaml
presets:
-   type: basic
    users:
    -   username: user1
        password: pass1
    -   username: user2
        password: pass2

```


## Extensive Configuration

| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| type | `Const[basic]` | `True` |  |  |
| users | `BasicUserPreset` | `True` | A list of users with basic credentials to create | [BasicUserPreset](#BasicUserPreset) |



## Objects

### <a id="BasicUserPreset"></a>BasicUserPreset
| Property | Type | Required | Description | Reference |
|----------|------|----------|-------------|-----------|
| username | `string` | `True` | The Basic username of the user. |  |
| headers | `Dict[string, string]` | `False` | Optional headers injected during the authentication process and in authentified requests. |  |
| cookies | `Dict[string, string]` | `False` | Optional cookies injected during the authentication process and in authentified requests. |  |
| password | `string` | `True` | The Basic password of the user. |  |




