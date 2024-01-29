# Alerting

Configure how the alert will be displayed in the Escape interface.

This block configure your alert rendering in the Escape interface.
For example you can configure the severity of the alert: `HIGH`, `MEDIUM`, `LOW` or `INFO`.

To help others users to understand why this alert is raised and why it is important, you can also add a `context`
with more information.

```yaml
---
alert:
  severity: HIGH
  name: Admin email changed
  context: |
    The admin email has been changed. This should not been allowed by any API.
    For more information, please contact the security team.
```

### Properties

- `severity:` Severity of the alert
- `name:` Name of the alert
- `context:` Context of the alert
