# launchd Persistence: Root (Root Volume)

### Description

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate nisi in felis vulputate convallis. Vivamus lacus lorem, facilisis quis mi quis, fermentum cursus urna. Etiam dapibus, nisl sit amet porttitor tempus, tortor augue auctor ante, nec faucibus enim sapien in diam.

### Available Method

| Method                       | Requires      | Runs As      |
|:-----------------------------|:--------------|:-------------|
| `LaunchDaemon - System`      | Root          | Root         |


### Demo:

#### - LaunchDaemon - System

::: code-group

```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchDaemon - System"
```

```python [Python API]
from nekrosis import Nekrosis

nekrosis = Nekrosis(
  payload="/path/to/malware",
  custom_method="LaunchDaemon - System"
)
```

:::

![]()