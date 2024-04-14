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
  * [launchd - Current User](./macOS%20Persistence/launchd-current-user.md)
  * [launchd - Global (User)](./macOS%20Persistence/launchd-global-user.md)
  * [launchd - Root](./macOS%20Persistence/launchd-root.md)
  * [launchd - Electron (User)](./macOS%20Persistence/launchd-electron-user.md)
  * [launchd - Electron (Root)](./macOS%20Persistence/launchd-electron-root.md)
  * [launchd - System (User)](./macOS%20Persistence/launchd-global-user-root-volume.md)
  * [launchd - System (Root)](./macOS%20Persistence/launchd-root-root-volume.md)
  * [Cron Jobs](./macOS%20Persistence/cronjobs.md)

* [Linux](./Linux%20Persistence/overview.md)
  * [Cron Jobs](./Linux%20Persistence/cronjobs.md)
  * [systemd](./Linux%20Persistence/systemd.md)