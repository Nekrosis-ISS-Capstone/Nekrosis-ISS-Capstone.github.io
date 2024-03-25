# launchd Persistence: Current User

### Description

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate nisi in felis vulputate convallis. Vivamus lacus lorem, facilisis quis mi quis, fermentum cursus urna. Etiam dapibus, nisl sit amet porttitor tempus, tortor augue auctor ante, nec faucibus enim sapien in diam.

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

nekrosis = Nekrosis(
  payload="/path/to/malware",
  custom_method="LaunchAgent - Current User"
)
```

:::

![](../../public/macOS%20Persistence%20Methods/LaunchAgent%20-%20Current%20User.png)
