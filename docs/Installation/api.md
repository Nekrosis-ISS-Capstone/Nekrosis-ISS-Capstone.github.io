# Python API Installation

Nekrosis is available either through PyPI or GitHub as source code. You can install Nekrosis using either method, depending on your preference.

* [PyPI](#pypi)
* [GitHub Source](#github-source)

### PyPI

::: tip Prerequisite

1. Python 3.6 or newer from [Python.org](https://www.python.org).

:::

First, install Nekrosis through PyPI using the following command:
::: code-group
```shell [Command Line]
python -m pip install nekrosis
```
:::

Now, you can use the `nekrosis` command in your terminal to access the tool.
::: code-group
```shell [Command Line]
nekrosis --help
```
:::


### GitHub Source

::: tip Prerequisite

1. Python 3.6 or newer from [Python.org](https://www.python.org).
2. `git` to clone the repository.
:::

First, clone the repository using the following command:
::: code-group
```shell [Command Line]
git clone https://https://github.com/Nekrosis-ISS-Capstone/Nekrosis.git
```
:::

Next, navigate to the cloned repositsory and install the required dependencies using the following command:
::: code-group
```shell [Command Line]
python -m pip install -r requirements.txt
```
:::

Now, you can use the `nekrosis` command in your terminal to access the tool.

::: code-group
```shell [Command Line]
./nekrosis --help
```
:::