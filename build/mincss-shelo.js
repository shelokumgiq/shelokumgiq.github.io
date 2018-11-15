const cssnano = require('cssnano').process;
const path = require('path');
const fs = require('fs');

let file = path.resolve('css', 'shelo.css');
cssnano(fs.readFileSync(file)).then(result => {
  let filemin = path.resolve('css', 'shelo.min.css');
  fs.writeFileSync(filemin, result.css);
});
