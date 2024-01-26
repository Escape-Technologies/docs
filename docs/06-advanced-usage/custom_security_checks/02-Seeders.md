# Seeders

## HTTP seeder

(`protocol: http`)


The HTTP seeder allows you to seed the scan with a raw HTTP request.
This request will be sent a the beginning of the scan, after the hotstart but before any other requests.

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

- `raw:` (string): The raw HTTP request in [nuclei format](https://docs.projectdiscovery.io/templates/protocols/http/raw-http)
- `user:` The user to use for the request.


