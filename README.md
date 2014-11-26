gulp-just-replace
=================

The [gulp-replace](https://github.com/lazd/gulp-replace) is fine.
But it's painful to install it on production server as it takes
many seconds to install those useless dependencies for me.

This is just a gulp plugin only knows how to do string.replace().
No other dependencies except the `through2` needed by gulp.
This plugin is so simple that does not need tests. You can
understand the source code in less than one minute.

```js
var replace = require('gulp-just-replace');

// string
gulp.src('src.html').
pipe(replace(/%USER%/g, 'me')).
pipe(gulp.dest('dest.html'));

// array
gulp.src('src.html').
pipe(replace([
  {
    search: /%USER%/g,
    replacement: 'me'
  }, {
    search: /%DATE%/g,
    replacement: new Date
  }, {
    search: /%TIME_USED%/g,
    replacement: function () {
      return (+new Date - start) / 1000 + ' s';
    }
  }
])).
pipe(gulp.dest('dest.html'));
```
