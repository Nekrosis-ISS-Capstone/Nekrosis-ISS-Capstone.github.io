# launchd Persistence: Current User

### Description

`launchd` is macOS's first userspace process, and offers a "Launch Agent" system for running processes at user login. This method will run the payload as the current user, and will install the Launch Agent in the `~/Library/LaunchAgents` directory.

### Available Method

| Method                       | Requires      | Runs As      |
|:-----------------------------|:--------------|:-------------|
| `LaunchAgent - Current User` | Standard User | Current User |


### Demo:

#### - LaunchAgent - Current User

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchAgent - Current User"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/malware",
  custom_method="LaunchAgent - Current User"
)
nekrosis_obj.install()
```

:::

![](/public/macOS%20Persistence%20Methods/LaunchAgent%20-%20Current%20User.png)
