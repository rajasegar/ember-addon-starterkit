/* jshint node:true */
var execSync = require('child_process').execSync;
var path = require('path');


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

  afterInstall: function() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        {name: 'ember-cli-code-coverage'},
        {name: 'ember-auto-import'}
      ]
    })
      .then(() => {
        // Add npm packages to package.json
        return this.addPackagesToProject([
          {name: 'coveralls'},
          {name: 'semantic-release'},
          {name: '@semantic-release/changelog'},
          {name: '@semantic-release/git'},
        ]);
      });
  }
};
