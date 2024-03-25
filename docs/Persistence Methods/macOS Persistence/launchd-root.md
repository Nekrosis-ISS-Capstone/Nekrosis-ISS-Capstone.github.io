# launchd Persistence: Root

### Description

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate nisi in felis vulputate convallis. Vivamus lacus lorem, facilisis quis mi quis, fermentum cursus urna. Etiam dapibus, nisl sit amet porttitor tempus, tortor augue auctor ante, nec faucibus enim sapien in diam.

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

nekrosis = Nekrosis(
  payload="/path/to/malware",
  custom_method="LaunchDaemon - Library"
)
```

:::

![](../../public/macOS%20Persistence%20Methods/LaunchDaemon%20-%20Library.png)