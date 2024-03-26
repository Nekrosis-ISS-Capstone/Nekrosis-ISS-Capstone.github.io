# Startup Folder Persistence

### Description

Windows contains two startup folders, one for the current user and one for all users. The current user startup folder is located at `C:\Users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` and the global startup folder is located at `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup`. Placing a executable to a file in either of these folders will cause the file to be executed when the user logs in.

### Available Method

| Method                          | Requires      | Runs As      |
|:--------------------------------|:--------------|:-------------|
| `Startup Folder (Current User)` | Standard User | Current User |
| `Startup Folder (Global)`       | Administrator | Current User |

### Demo:

#### - Startup Folder (Current User)

::: code-group

```PowerShell [Command Line]
nekrosis.exe --payload \path\to\payload --method "Startup Folder (Current User)"
```

:::

![](/public/..//Windows%20Persistence%20Methods/Startup%20Folder%20(Current%20User).png)


#### - Startup Folder (Global)

::: code-group

```PowerShell [Command Line]
nekrosis.exe --payload \path\to\payload --method "Startup Folder (Global)"
```
:::

![](/public/..//Windows%20Persistence%20Methods/Startup%20Folder%20(Global).png)
