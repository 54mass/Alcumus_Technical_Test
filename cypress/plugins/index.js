// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    '..',
    'Alcumus_Technical_Test/cypress/configFiles',
    `${file}.json`
  );

  return fs.readJson(pathToConfigFile);
}
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  const file = config.env.fileConfig || 'development';
  return getConfigurationByFile(file);
  }
