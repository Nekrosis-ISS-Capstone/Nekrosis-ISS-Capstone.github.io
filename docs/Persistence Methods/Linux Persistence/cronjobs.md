# Cron Job Persistence

### Description

This method relies on the unix utility `cron` to schedule tasks to run at startup. Can be configured to run payloads as the current user or as root.

### Available Methods

| Method                   | Requires      | Runs As      |
|:-------------------------|:--------------|:-------------|
| `Cronjob - Current User` | Standard User | Current User |
| `Cronjob - Root`         | Root          | Root         |

### Demo:

#### - Cronjob - Current User

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "Cronjob - Current User"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/payload",
  custom_method="Cronjob - Current User"
)
nekrosis_obj.install()
```

:::

![](/public/Linux%20Persistence%20Methods/CronJob%20-%20Current%20User.png)


#### - Cronjob - Root

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "Cronjob - Root"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/payload",
  custom_method="Cronjob - Root"
)
nekrosis_obj.install()
```

:::


![](/public/Linux%20Persistence%20Methods/CronJob%20-%20Root.png)