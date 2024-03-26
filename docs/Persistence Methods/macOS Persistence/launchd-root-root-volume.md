# launchd Persistence: System (Root)

### Description

Based on `LaunchDaemon - Library`, however instead employs the OS' `LaunchDaemons` system. This method will run the payload as the current user, and will install the Launch Daemon in the global `/System/Library/LaunchDaemons` directory.

Note this method requires System Integrity Protection (SIP) bits `CSR_ALLOW_UNRESTRICTED_FS` (0x2) and `CSR_ALLOW_UNAUTHENTICATED_ROOT` (0x800) to be enabled to modify the `/System` directory.

* 0x2: Required for OS X 10.11, El Capitan, and later
* 0x800: Required for macOS 11.0, Big Sur, and later

See [System Integrity Protection: The misunderstood setting](https://khronokernel.com/macos/2022/12/09/SIP.html) for more information on SIP's bit field.

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