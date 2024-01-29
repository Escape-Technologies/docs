# Transformations

# Transformations

The transformations are defined right after the Seeders, and before the detection and alerting.

You can write powerful `trigger`-then-`mutate` blocks to trigger the mutation on a specific request or response.

These leverage the detectors and mutators, that will be covered in next sections.

## Block structure

```yaml
---
custom_checks:
  - transform:
      trigger:
        - if: response.status_code
          is: 200
        - if: request.headers
          key: "X-Forwarded-For"
          value: "http://company.com"
      mutate:
        - key: request.headers
          name: "X-Forwarded-For"
          value: "http://localhost"
      detect:
      alert:
```

### Properties

- `trigger:` The detectors to trigger the transform, on the request or response. See [Detectors](./detectors)
- `mutate:` The mutations to apply to the request and replay it. See [Mutators](./mutators)
