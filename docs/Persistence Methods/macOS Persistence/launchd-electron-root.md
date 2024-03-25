# launchd Persistence: Electron (Root)

### Description

Based off the `LaunchDaemon - Library` method, this method will create a Launch Daemon that will execute an Electron application as root. This method exploits misconfigured Electron applications allowing for arbitrary code execution.

This method allows for usage of CVEs such as CVE-2023-7245, CVE-2023-50975 and CVE-2024-23755.

### Available Method

| Method                       | Requires      | Runs As      |
|:-----------------------------|:--------------|:-------------|
| `LaunchDaemon - Electron`    | Root          | Root         |


### Demo:

#### - LaunchDaemon - Electron

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchDaemon - Electron"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis = Nekrosis(
  payload="/path/to/malware",
  custom_method="LaunchDaemon - Electron"
)
```

:::

![](../../public/macOS%20Persistence%20Methods/LaunchDaemon%20-%20Electron.png)