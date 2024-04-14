# Shortcut Persistence

### Description

Creates a shortcut in the current user's Startup folder. This will execute the payload every time the user logs in. Note the shortcut's original value is retained and instead chains to the payload.

### Available Method

| Method                   | Requires      | Runs As      |
|:-------------------------|:--------------|:-------------|
| Shortcut (Current User)  | Standard User | Current User |

### Demo:

#### - Shortcut Persistence

::: code-group

```PowerShell [Command Line]
nekrosis.exe --payload \path\to\payload --method "Shortcut (Current User)"
```

:::

![](/public//Windows%20Persistence%20Methods/Shortcut.png)