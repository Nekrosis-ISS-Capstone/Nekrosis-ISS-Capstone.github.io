# systemd Persistence

### Description

### Available Method

| Method                   | Requires      | Runs As      |
|:-------------------------|:--------------|:-------------|
| `SystemdService`         | Root          | Root         |

### Demo:

#### - systemd Persistence

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "SystemdService"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/malware",
  custom_method="SystemdService"
)
nekrosis_obj.install()
```

:::


![](/public/Linux%20Persistence%20Methods/systemd.png)