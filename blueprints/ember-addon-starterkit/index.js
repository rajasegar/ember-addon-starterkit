/* jshint node:true */
var execSync = require('child_process').execSync;

/* eslint-env node */
module.exports = {
  description: 'Starterkit for creating and publishing Ember addons',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

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
        {name: 'ember-cli-release'},
        {name: 'ember-cli-github-pages'},
        {name: 'ember-cli-yuidoc'},
        {name: 'ember-cli-code-coverage'}
      ]
    })
    .then(() => {
      // Add npm packages to package.json
      return this.addPackagesToProject([
        {name: 'yuidoc-ember-theme'}
      ]);
    })
    .then(() => {
      // Committing github-pages addon changes
      this.runCommand('git add -A && git commit -m "Added ember-cli-github-pages addon"');

      // Creating gh-pages branch
      this.runCommand('git checkout --orphan gh-pages');

      // Cleaning up branch and committing changes
      this.runCommand('rm -rf `bash -c "ls -a | grep -vE \'\.gitignore|\.git|node_modules|bower_components|(^[.]{1,2}/?$)\'"` && git add -A && git commit -m "initial gh-pages commit"');

      return true;
    });
  }
};
