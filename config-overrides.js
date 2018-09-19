const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const rewireVendorSplitting = require('react-app-rewire-vendor-splitting');

module.exports = function override(config, env) {
  config = rewireVendorSplitting(config, env);
  config = rewireReactHotLoader(config, env);
  config = rewireStyledComponents(config, env);
  config = rewireSWPrecache(config, env);

  return config;
};

function rewireSWPrecache(config, env) {
  config.plugins.map(plugin => {
    if (plugin instanceof SWPrecacheWebpackPlugin) {
      plugin.options.navigateFallback = null;
      plugin.options.directoryIndex = null;
      plugin.options.maximumFileSizeToCacheInBytes = 4 * 1024 * 1024; // 4MB
    }
    return plugin;
  });
  return config;
}
