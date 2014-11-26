var through = require('through2');

function replace (search, replacement) {
  return through.obj(function (file, enc, cb) {
    var src = file.contents.toString();

    if (!(search instanceof Array)) {
      search = [
        {
          search: search,
          replacement: replacement
        }
      ];
    }

    for (var i = 0; i < search.length; i++) {
      if (typeof search[i] !== 'object') continue;
      if (typeof search[i].search === 'undefined') continue;
      if (typeof search[i].replacement === 'undefined') continue;
      src = src.replace(search[i].search, search[i].replacement);
    }

    file.contents = new Buffer(src);
    this.push(file);
    cb();
  });
}

module.exports = replace;
