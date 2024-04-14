# Overview

Persistence is ability to remain active on a system after logouts, reboots, and shutdowns. Using officially supported methods for persistence in different OSes, we're able to install a malicious payload that is difficult for the user to detect and remove.

To determine supported persistence methods, use the appropriate Nekrosis flag/parameter:

::: code-group

```shell [Command Line]
nekrosis --list-supported-methods # Alternative: '-l'
```

```python [Python API]
from nekrosis import Nekrosis

Nekrosis().supported_persistence_methods()
```

:::

![](/public/Persistence%20Methods/List%20Methods.png)

Keep in mind Nekrosis' supported persistence methods are based on the privilege of the current session. Rerun as administrator/root to gain access to additional methods.

--------

## Supported Persistence Methods

* [Windows](./Windows%20Persistence/overview.md)
  * [Run Key](./Windows%20Persistence/runkey.md)
  * [Shortcut](./Windows%20Persistence/shortcut.md)
  * [Startup Folder](./Windows%20Persistence/startupfolder.md)

* [macOS](./macOS%20Persistence/overview.md)
  * [launchd - Launch Agent](./macOS%20Persistence/launchd-standard-user.md)
  * [launchd - Launch Daemon](./macOS%20Persistence/launchd-root.md)
  * [launchd - Electron](./macOS%20Persistence/launchd-electron.md)
  * [launchd - System](./macOS%20Persistence/launchd-root-volume.md)
  * [Cron Jobs](./macOS%20Persistence/cronjobs.md)

* [Linux](./Linux%20Persistence/overview.md)
  * [Cron Jobs](./Linux%20Persistence/cronjobs.md)
  * [systemd](./Linux%20Persistence/systemd.md)