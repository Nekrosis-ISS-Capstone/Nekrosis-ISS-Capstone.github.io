# launchd Persistence: Launch Agent

### Description

`launchd` is macOS's first userspace process, and offers a "Launch Agent" system for running processes at user login. This method will run the payload as the current user, and will install the Launch Agent in the `~/Library/LaunchAgents` directory.

`LaunchAgent - Library` is similar, however it will run as whatever the current logged in user is, regardless if that user approved the launch service. This does require root to install to `/Library/LaunchAgents`.

### Available Method

| Method                       | Requires      | Runs As      |
|:-----------------------------|:--------------|:-------------|
| `LaunchAgent - Current User` | Standard User | Current User |
| `LaunchAgent - Library`      | Root          | Any User     |


### Demo:

#### - LaunchAgent - Current User

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchAgent - Current User"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/payload",
  custom_method="LaunchAgent - Current User"
)
nekrosis_obj.install()
```

:::

![](/public/macOS%20Persistence%20Methods/LaunchAgent%20-%20Current%20User.png)


#### - LaunchAgent - Library

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchAgent - Library"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis_obj = Nekrosis(
  payload="/path/to/payload",
  custom_method="LaunchAgent - Library"
)
nekrosis_obj.install()
```

:::

![](/public/macOS%20Persistence%20Methods/LaunchAgent%20-%20Library.png)