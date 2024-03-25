# launchd Persistence: Electron (User)

### Description

Based off the `LaunchAgent - Current User` method, this method will create a Launch Agent that will execute an Electron application as the current user. This method exploits misconfigured Electron applications allowing for arbitrary code execution.

This method allows for usage of CVEs such as CVE-2023-7245, CVE-2023-50975 and CVE-2024-23755.

### Available Method

| Method                       | Requires      | Runs As      |
|:-----------------------------|:--------------|:-------------|
| `LaunchAgent - Electron`     | Standard User | Root         |


### Demo:

#### - LaunchAgent - Electron

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchAgent - Electron"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis = Nekrosis(
  payload="/path/to/malware",
  custom_method="LaunchAgent - Electron"
)
```

:::

![](../../public/macOS%20Persistence%20Methods/LaunchAgent%20-%20Electron.png)