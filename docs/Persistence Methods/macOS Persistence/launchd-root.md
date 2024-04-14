# launchd Persistence: Root

### Description

`launchd` is macOS's first userspace process, and offers a "Launch Daemon" system for running processes at system boot. This method will run the payload as the root user, and will install the Launch Daemon in the `/Library/LaunchDaemons` directory.

### Available Method

| Method                       | Requires      | Runs As      |
|:-----------------------------|:--------------|:-------------|
| `LaunchDaemon - Library`     | Root          | Root         |


### Demo:

#### - LaunchDaemon - Library

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchDaemon - Library"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/malware",
  custom_method="LaunchDaemon - Library"
)
nekrosis_obj.install()
```

:::

![](/public/macOS%20Persistence%20Methods/LaunchDaemon%20-%20Library.png)