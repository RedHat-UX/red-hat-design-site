- [Current versions](#current-versions)
- [Getting started](#getting-started)
  - [Install NVM](#install-nvm)
  - [Install Node](#install-node)
  - [Install Gulp (CLI)](#install-gulp-cli)
  - [Install dependencies](#install-dependencies)
  - [Local development](#local-development)
  - [Production](#production)

# Current versions

- **NVM:** _0.39.1_
- **Node:** _17.8.0_
- **NPM:** _8.5.5_
- **Gulp CLI:** _2.3.0_

# Getting started

## Install NVM

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
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

- Builds the `src` project files to the `dist` folder, launches a local [Browsersync](https://browsersync.io) server in a browser, watches for file changes, and reloads the page when changes are detected.

## Production

```
$ gulp build
```

- Initiates the build stream without launching a local server in a browser.