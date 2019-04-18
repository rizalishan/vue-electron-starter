/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  if (key === './index.js') return;
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

const moduleFiles = require.context('@/modules', true, /\.store\.js$/);
moduleFiles.keys().forEach((key) => {
  if (key === './index.js') return;
  modules[key.replace(/(.*\/)/g, '').replace(/\.store\.js$/, '')] = moduleFiles(key).default;
});

export default modules;
