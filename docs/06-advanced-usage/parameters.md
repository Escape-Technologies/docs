---
sidebar_position: 1
title: Advanced Configuration
---

# ⚙️ Advanced Configuration

Escape has a few parameters you can set as you please.

You are able to manually configure a few things, such as permissions or environment_mode from your application (Advanced Settings) page.

:::note JSON Schema example

```
{
    "params": {
        "blacklist": {
            "mutation": [
                "**value**"
            ],
            "objects": [
                "**value**"
            ],
            "query": [
                "**value**"
            ]
        },
        "client": {
            "concurrent_connection": "**value**",
            "concurrent_tasks": "**value**",
            "proxy": {
                "type": "escape | http"
            },
            "request_timeout": "**value**",
            "requests_per_minute": "**value**"
        },
        "complexity_mode": "low | medium | high | no_limit",
        "environment_mode": "dev | prod",
        "speed_mode": "medium | slow | fast"
    }
}
```

:::

***



## Blacklist

The operations that will be skipped by security tests.

```JSON
{
    "params": {
        "blacklist": {
            "mutation": [
                "**value**"
            ],
            "objects": [
                "**value**"
            ],
            "query": [
                "**value**"
            ]
        }
    }
}
```



## Client

GraphQL Client parameters

```JSON
{
    "params": {
        "client": {
            "concurrent_connection": "**value**",
            "concurrent_tasks": "**value**",
            "proxy": {
                "type": "escape | http"
            },
            "request_timeout": "**value**",
            "requests_per_minute": "**value**"
        }
    }
}
```

**concurrent_connection**: The maximum size of the connections pool

**concurrent_tasks**: The maximum number of parallel tasks

**proxy**: The proxy to use for the requests. Please, get in touch with us if you need to whitelist our proxy ips.

**request_timeout**: The maximum timeout for each request in seconds

**requests_per_minute**: The maximum number of request per minute. Which will be used on a per second window.



## Complexity mode

The choosen complexity

Must be one of `['low', 'medium', 'high', 'no_limit']`

```JSON
{
    "params": {
        "complexity_mode": "low | medium | high | no_limit"
    }
}
```



## Environment mode

The choosen mode for the tested API

Must be one of `['dev', 'prod']`

```JSON
{
    "params": {
        "environment_mode": "dev | prod"
    }
}
```



## Speed mode

The choosen speed of the explore

Must be one of `['medium', 'slow', 'fast']`

```JSON
{
    "params": {
        "speed_mode": "medium | slow | fast"
    }
}
```



## Hotstart

You are able to provide legitimate GraphQL query strings, to make it even more powerful. Escape will use these data to understand better the business logic of your application, and thus run faster and provide even more precise results.

The provided queries and mutations must be in a list under the key `hotstart`. You can provide as many queries you want, with as many parameters you want, with the complexity you want.

```JSON
{
    "hotstart": [
        "query { child(parentId: 'b63f4020-45f6-4f33-9747-32ac8f270097' ) { id name birthdate }}",
        "query { bank(account: 1337) { id address }}"
    ]
}
```

## Whitelist

Escape will **restrict** exploration phase to only these queries, and thus run faster as well as restricted on theses queries.

```JSON
{
    "whitelist": [
        "query { child(parentId: 'b63f4020-45f6-4f33-9747-32ac8f270097' ) { id name birthdate }}",
        "query { bank(account: 1337) { id address }}"
    ]
}
```