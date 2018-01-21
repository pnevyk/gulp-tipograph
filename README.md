# [gulp](http://gulpjs.com)-tipograph

> [Tipograph](https://github.com/nevyk/tipograph) plugin for Gulp


## Install

```bash
$ npm install --save-dev gulp-tipograph
```


## Usage

```js
var gulp = require('gulp');
var tipograph = require('gulp-tipograph');

gulp.task('default', function () {
    return gulp.src('path/to/files/**/*')
        .pipe(tipograph(/* options */))
        .pipe(gulp.dest('dist'));
});
```


## API

### tipograph(options)

#### options

Options object is exactly the same as in *tipograph* itself. See its
[documentation](https://github.com/pnevyk/tipograph/blob/master/README.md).


## License

Gulp-tipograph is licensed under [MIT](LICENSE). Feel free to use it, contribute or spread the word.
