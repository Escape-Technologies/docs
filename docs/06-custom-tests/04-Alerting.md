# Alerting
# Alert

You can configure a custom alert to be raised when all detections are matched.

## Example

```yaml
---
alert:
  name: AccessControl
  severity: HIGH
  context: We succesfully deleted the admin user from another user.
```

### Properties

- `name:` Name of the alert
- `severity:` Severity of the alert
- `context:` Context of the alert


