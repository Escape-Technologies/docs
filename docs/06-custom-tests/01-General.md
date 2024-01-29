# Custom Checks

A custom test is a YAML-formatted file that defines a list of custom check blocks to set some tests and conditions to trigger an alert.

- [Seeders](./seeders) are used to seed the scan with requests

- [Transformations](./transformations) are used to mutate the requests

- [Detectors](./detectors) are used to trigger the alerting

- [Alerting](./alerting) is used to raise an alert if the detections are matched


## Block structure

```yaml
---
custom_checks:
- seed:
    - http:
      raw: |
        <http_request>
  transform:
    trigger:
    - if: '<trigger_key>'
      is: '<trigger_condition>'
    mutate:
    - key: '<mutation_key>'
      name: '<mutation_select>'
      value: '<mutation_value>'
  detect:
    - if: '<detect_key>'
      is: '<detect_condition>'
  alert:
    name: '<alert_name>'
    severity: '<alert_severity>'
    context: '<alert_context>'
```

### Properties

- `seed:` A list of requests to seed the scan. See [Seeders](./seeders)
- `transform:` Defines lists of triggers and mutations (combined with AND operators).See [Transformations](./transformations)
- `detect:` The conditions to trigger the alert. See [Detectors](./detectors)
- `alert:` The alert to raise if the detection conditions are met. See [Alerting](./alerting)


