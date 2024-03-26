# launchd Persistence: Global User

### Description

`launchd` is macOS's first userspace process, and offers a "Launch Agent" system for running processes at user login. Similar to `LaunchAgent - Current User`, this method will run the payload as the current user. However, it will run at login for all users and will install the Launch Agent in the global `/Library/LaunchAgents` directory.

### Available Method

| Method                       | Requires      | Runs As      |
|:-----------------------------|:--------------|:-------------|
| `LaunchAgent - Library`      | Root          | Current User |


### Demo:

#### - LaunchAgent - Library

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchAgent - Library"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis = Nekrosis(
  payload="/path/to/malware",
  custom_method="LaunchAgent - Library"
)
```

:::

![](/public/macOS%20Persistence%20Methods/LaunchAgent%20-%20Library.png)