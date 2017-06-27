/* eslint-env node */
module.exports = {
  description: 'Starterkit for creating and publishing Ember addons',

  afterInstall: function() {
    // Add addons to package.json and run defaultBlueprint
    return this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        {name: 'ember-cli-release'},
        {name: 'ember-cli-github-pages'},
        {name: 'ember-cli-yuidoc'}
      ]
    })
    .then(() => {
      // Add npm packages to package.json
      return this.addPackagesToProject([
        {name: 'yuidoc-ember-theme'}
      ]);
    });
  }
};
