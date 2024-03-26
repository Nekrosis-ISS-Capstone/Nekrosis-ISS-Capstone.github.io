# Command Line Usage

To use Nekrosis, a payload must be provided. This can be a script or binary that will be executed on the target system. The payload can be a local file or a URL.

Supported arguments include:

| Argument | Description |
|:---------|:------------|
| `-h/--help` | Display the help message. |
| `-v/--version` | Display the current version of Nekrosis. |
| `-p/--payload` | Install a payload with recommended persistence method. |
| `-l/--list-supported-methods` | List all supported persistence methods. |
| `-m/--method` | Install a payload with a specific persistence method. |
| `-n/--nuke` | Remove the payload and Nekrosis from the system after persistence. |
| `-s/--silent` | Suppress all output except errors. |
| `-e/--export` | Export the persistence methods to STDOUT in PLIST, XML or JSON. |

### -h/--help

To start, run Nekrosis with the `--help` flag to view the available options:

::: code-group
```shell [Command Line]
nekrosis --help
```
:::


### -v/--version

To view the current version of Nekrosis, run the following command:
::: code-group
```shell [Command Line]
nekrosis --version
```
:::


### -p/--payload

To install a payload with recommended persistence method, run the following command:
::: code-group
```shell [Command Line]
nekrosis --payload /path/to/payload
```

If payload is a URL, Nekrosis will first download the payload to a temporary directory before installing it.


### -l/--list-supported-methods

To list all supported persistence methods, run the following command:
::: code-group
```shell [Command Line]
nekrosis --list-supported-methods
```
:::


### -m/--method

To install a payload with a specific persistence method, run the following command:
::: code-group
```shell [Command Line]
nekrosis --payload /path/to/payload --method "LaunchAgent - Current User"
```


### -n/--nuke

To remove the payload and Nekrosis from the system after persistence, run the following command:
::: code-group
```shell [Command Line]
nekrosis --payload /path/to/payload --nuke
```


### -s/--silent

To suppress all output except, run the following command:
::: code-group
```shell [Command Line]
nekrosis --payload /path/to/payload --silent
```


### -e/--export

To export the persistence methods to PLIST format in STDOUT, run the following command:
::: code-group
```shell [Command Line]
nekrosis --export
```
Optionally provide a format to export to (PLIST, XML or JSON):
::: code-group
```shell [Command Line]
nekrosis --export --format json
```