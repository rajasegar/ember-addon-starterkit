# ember-addon-starterkit

Starter kit for creating and publishing new Ember addons with all batteries included.

## Installation
```shell
ember install ember-addon-starterkit
```

### Update yuidoc.json to use ember themes
In order to use the installed YUIDoc ember theme we need to update the yuidoc.json with the
following new options:

Add the following to the **options** section

```js
  "enabledEnvironments": ["development","production"],
  "themedir": "node_modules/yuidoc-ember-theme",
  "helpers": ["node_modules/yuidoc-ember-theme/helpers/helpers.js"]
```

### Update config/release.js to push demo app to gh-pages branch
If you want to keep your documentation/demo updated you need to automate
that part using the **ember-cli-release** config.

Add the following to the **config/release.js** file created by the addon.

```js
/* jshint node:true */
var execSync = require('child_process').execSync;

// For details on each option run `ember help release`
module.exports = {
  publish: true,
  afterPublish: function(project, versions) {
    // Publish dummy app with docs to gh-pages
    runCommand('ember github-pages:commit --message "Released ' + versions.next + '"');
    runCommand('git push origin gh-pages:gh-pages');
  }
};

function runCommand(command) {
  console.log('running: ' + command); // eslint-disable-line
  var output = execSync(command, { encoding: 'utf8' });
  console.log(output); // eslint-disable-line
}
```

## Usage
Once you have your addon code ready to be published with all the documentation added, You just have to issue 
only one command:

```shell
ember release
```

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

## Addon Demo
The demo application for this addon is published into **gh-pages** from the dummy app inside and is available 
[here](https://rajasegar.github.io/ember-addon-starterkit/)

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
