# Run key Persistence

### Description

Creates a registry key in the `HKLM\Software\Microsoft\Windows\CurrentVersion\Run` registry key. This will execute the payload every time the system starts up.


### Available Method

| Method                   | Requires      | Runs As       |
|:-------------------------|:--------------|:--------------|
| `RUNKEY`                 | Administrator | Administrator |

### Demo:

#### - Run Key Persistence

::: code-group

```PowerShell [Command Line]
nekrosis.exe --payload \path\to\payload --method "RUNKEY"
```

:::

![](/public/Windows%20Persistence%20Methods/RunKey.png)