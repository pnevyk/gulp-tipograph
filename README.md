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

//configure
tipograph.configure(options);

//add custom rule
tipograph.addCustomRule(search, replacement);

gulp.task('default', function () {
	return gulp.src('path/to/files/**/*')
		.pipe(tipograph())
		.pipe(gulp.dest('dist'));
});
```


## API

### tipograph(options)

#### options

##### quotes

Type: `Boolean`
Default: `true`

Specify if Tipograph apply `replace.quotes(input)`.

##### spaces

Type: `Boolean`
Default: `true`

Specify if Tipograph apply `replace.spaces(input)`.

##### hyphens

Type: `Boolean`
Default: `true`

Specify if Tipograph apply `replace.hyphens(input)`.

##### mathSigns

Type: `Boolean`
Default: `true`

Specify if Tipograph apply `replace.quotes(input)`.

##### symbols

Type: `Boolean`
Default: `true`

Specify if Tipograph apply `replace.symbols(input)`.

##### custom

Type: `Boolean`
Default: `true`

Specify if Tipograph apply `replace.custom(input)`.

##### html

Type: `Boolean`
Default: `true`

Specify if Tipograph should keep HTML tags with attributes as they are.

##### language

Type: `String`

Set a language from `tipograph.Languages` as language to be used for quotes.

### tipograph.configure(options)

#### options

These are the same options as in original [tipograph](https://github.com/nevyk/tipograph) library.

### tipograph.addCustomRule(search, replacement)

Add custom typography rule to tipograph.

#### search

Type: `RegExp|String`

Define what will be searched in input to be replaced.

#### replacement

Type: `String|Function`

Define how found values will be replaced. The `String.prototype.replace` method is applied to input so format of this parameter could be the same as described [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).


## License

Gulp-tipograph is MIT licensed. Feel free to use it, contribute or spread the word. Created with love by Petr Nevyhoštěný ([Twitter](https://twitter.com/pnevyk)).
