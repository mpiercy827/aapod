const Sass = require('node-sass');
const Path = require('path');

Sass.renderSync({
  file: Path.join(__dirname, '..', 'public', 'scss', 'main.scss'),
  outFile: Path.join(__dirname, '..', 'public', 'css', 'main.css')
});
