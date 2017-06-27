# ember-addon-starterkit

Starter kit for creating and publishing new Ember addons with all batteries included.

## Features
* Release Automation
* npm Package Publishing
* Documentation
* Demo Application

## Batteries
### ember-cli-release
Ember CLI addon that defines a release command for bumping the version of your app or addon. It's a streamlined alternative to the npm version command, with a number of additional advantages.
[ember-cli-release](https://github.com/lytics/ember-cli-release)

### ember-cli-github-pages
Easily manage gh-pages of your ember-cli addon
[ember-cli-github-pages](https://github.com/poetic/ember-cli-github-pages)

### ember-cli-yuidoc
This is an ember-cli addon for generate html documentation from YUIDoc comments in the source code.
[ember-cli-yuidoc](https://github.com/cibernox/ember-cli-yuidoc)

### yuidoc-ember-theme
An EmberJS based YUIDoc theme
[yuidoc-ember-theme](https://github.com/offirgolan/yuidoc-ember-theme)

**Note:** This is an npm package not an Ember addon

## Usage
Once you have your addon code ready to be published with all the documentation added, You just have to issue 
only one command:

```shell
ember release
```

## Installation

* `git clone https://github.com/rajasegar/ember-addon-starterkit <your-addon-name>` this repository
* `cd <your-addon-name>`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
