- [Current versions](#current-versions)
- [Getting started](#getting-started)
  - [Install Homebrew](#install-homebrew)
  - [Install NVM](#install-nvm)
  - [Install Node](#install-node)
  - [Install Gulp (CLI)](#install-gulp-cli)
  - [Install dependencies](#install-dependencies)
  - [Local development](#local-development)
- [Other commands](#other-commands)

# Current versions

- **Node:** _16.4.2_
- **NPM:** _7.18.1_
- **Gulp CLI:** _2.3.0_

# Getting started

## Install Homebrew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Install NVM

```
brew install nvm
```

## Install Node

First, navigate to the repo's root directory.

```
cd path/to/repo
```

Then, install Node.

```
nvm install
```

## Install Gulp (CLI)

```
$ npm install -g gulp-cli
```

## Install dependencies

```
npm ci
```

## Local development

```
$ gulp
```

- Builds the `src` files to the repo's root directory, launches a local [Browsersync](https://browsersync.io) server in a browser, watches for file changes, and reloads the page when changes are detected.

# Other commands

```
nvm install --reinstall-packages-from=VERSION
```

- References the `.nvmrc` file in the repo's root directory, installs the specified version, and re-installs all global package dependencies from the specified Node version.

```
nvm uninstall VERSION
```

- Uninstalls the specified version of Node.

```
nvm list
```

- Displays currently installed versions of Node.

```
nvm alias default VERSION
```

- Specify a default version of Node, if multiple versions are installed.

```
nvm use VERSION
```

- Switches to the specified version of Node, if multiple versions are installed.