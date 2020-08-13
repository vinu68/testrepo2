const svgContents = require('eleventy-plugin-svg-contents');

module.exports = function (config) {
	config.addPlugin(svgContents);

	config.addTransform('htmlmin', require('./src/utils/htmlmin.js'));

	config.addPassthroughCopy({ './src/assets/': '/' });

	return {
		dir: {
			input: 'src/',
			data: 'data',
			includes: 'includes',
			output: 'dist',
		},
	};
};
