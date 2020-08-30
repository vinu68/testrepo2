const svgContents = require('eleventy-plugin-svg-contents');

module.exports = function (config) {
  config.addPlugin(svgContents);

  config.addTransform('htmlmin', require('./src/utils/htmlmin.js'));

  config.addPassthroughCopy({ './src/assets/': '/' });

  let filesToCopy = [{ './src/assets/images': '/images' }, { './src/assets/build': '/build' }];
  filesToCopy.forEach((file) => {
    config.addPassthroughCopy(file);
  });

  config.addShortcode('bundledCss', function () {
    return manifest['critical.css']
      ? `<link href="${manifest['critical.css']}" rel="stylesheet" type="text/css"/>`
      : '';
  });
  config.addShortcode('bundledComponentCss', function () {
    return manifest['style.css']
      ? `<link href="${manifest['style.css']}" rel="stylesheet" type="text/css"/>`
      : '';
  });
  config.addShortcode('bundledPluginsCss', function () {
    return manifest['plugins.css']
      ? `<link href="${manifest['plugins.css']}" rel="stylesheet" type="text/css"/>`
      : '';
  });
  config.addShortcode('bundledComponentJs', function () {
    return manifest['app.js'] ? `<script src="${manifest['app.js']}"></script>` : '';
  });
  config.addShortcode('bundledJs', function () {
    return manifest['main.js'] ? `<script src="${manifest['main.js']}"></script>` : '';
  });

  return {
    dir: {
      input: 'src/',
      data: 'data',
      includes: 'includes',
      output: 'dist',
    },
  };
};
