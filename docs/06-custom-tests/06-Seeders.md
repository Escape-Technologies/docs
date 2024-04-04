# Seeders

## REST seeder

`protocol: rest`

The REST seeder allows you to send a request that adapts to the host of your current scan.

You can still use a raw HTTP text format, but we'll automatically fill the host and scheme for you.

This requests will be sent at the same time as the hotstart, the syntax is similar to it but
you can configure for which user the request must be sent.

The main difference between this two features it that a seeded request is bound to a custom security check.
If you disable a check, the seeded request will not be sent.

### Example

```yaml
seed:
  - protocol: rest
    path: /books/some-title
    method: GET
    headers:
      Content-Type: application/json
    body: '{"hello": "world"}'
    user: admin
    params:
      id: 1
```

Or using raw:

```yaml
seed:
  - protocol: rest
    raw: |
      GET /books/some-title HTTP/1.1
      Content-Type: application/json
      {"hello": "world"}
```

### Properties

- `user`: The user to use for the request. If not provided, the request is sent without authentication.
- `path`: None
- `method`: None
- `headers`: None
- `raw`: None
- `body`: None
- `params`: None

## HTTP raw seeder

`protocol: http`

The HTTP seeder allows you to send a request at the start of the scan.

This requests will be sent at the same time as the hotstart, the syntax is similar to it but
you can configure for which user the request must be sent.

The main difference between this two features it that a seeded request is bound to a custom security check.
If you disable a check, the seeded request will not be sent.

### Example

```yaml
seed:
  - protocol: http
    raw: |
      @Host: https://example.com
      GET /debug HTTP/1.1
      Host: example.com
      Content-Type: application/json
```

### Properties

- `raw`: The raw HTTP request in [nuclei format](https://docs.projectdiscovery.io/templates/protocols/http/raw-http).
- `user`: The user to use for the request. If not provided, the request is sent without authentication.
