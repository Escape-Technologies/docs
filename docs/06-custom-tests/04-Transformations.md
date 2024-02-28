# Transformations

# Transformations

The transformations are defined right after the Seeders, and before the detection and alerting.

You can write powerful `trigger`-then-`mutate` blocks to trigger the mutation on a specific request or response.

These leverage the detectors and mutators, that will be covered in next sections.

## Block structure

```yaml
transform:
  trigger:
    - if: response.status_code
      is: 200
    - if: request.headers
      key:
        is: "X-Forwarded-For"
      value:
        is: "http://company.com"
  mutate:
    - key: request.headers
      name: "X-Forwarded-For"
      value: "http://localhost"
```

### Properties

- `trigger`: The detectors to trigger the transform, on the request or response. See [Detectors](https://docs.escape.tech/custom-tests/Detectors)
- `mutate`: The mutations to apply to the request and replay it. See [Mutators](https://docs.escape.tech/custom-tests/Mutators)
