/* jshint node:true */
var execSync = require('child_process').execSync;
var path = require('path');
const globalModulesDir = require('global-modules');
const yarnGlobalModulesDir = require('yarn-global-modules')();
const stringifyAndNormalizePath = require.resolve('ember-cli/lib/utilities/stringify-and-normalize', {
  paths: [ yarnGlobalModulesDir, globalModulesDir ]
});
const stringifyAndNormalize = require(stringifyAndNormalizePath);
const sortPackageJson = require('sort-package-json');


/* eslint-env node */
module.exports = {
  description: 'Starterkit for creating and publishing Ember addons',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  fileMapTokens: function() {
    return {
      __root__: function(options) {
        if (options.inAddon) {
          return path.join('tests', 'dummy');
        }

        return '/';
      }
    };
  },

  runCommand: function(command) {
    this.ui.writeLine('running: ' + command); // eslint-disable-line
    var output = execSync(command, { encoding: 'utf8' });
    this.ui.writeLine(output); // eslint-disable-line
  },

  updatePackageJson(contents) {
    contents = JSON.parse(contents);

    // Add `coveralls` to devDependencies by default
    contents.devDependencies['coveralls'] = '^3.1.0';

    return stringifyAndNormalize(sortPackageJson(contents));
  },

  afterInstall: function() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        {name: 'ember-cli-code-coverage'},
        {name: 'ember-auto-import'}
      ]
    });
  }
};
