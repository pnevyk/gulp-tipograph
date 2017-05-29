'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var tipograph = require('./index');

it('should use tipograph to apply typography rules', function (cb) {
	var stream = tipograph();

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), '\u201Clorem\u201D');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + 'file.txt',
		contents: new Buffer('"lorem"')
	}));

	stream.end();
});

it('should be configurable what to replace', function (cb) {
	var stream = tipograph({
        quotes : false
    });

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), '"lorem"');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + 'file.txt',
		contents: new Buffer('"lorem"')
	}));

	stream.end();
});

it('should add custom rules into tipograph', function (cb) {
    tipograph.addCustomRule('lorem', 'ipsum');

	var stream = tipograph();

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), 'ipsum');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + 'file.txt',
		contents: new Buffer('lorem')
	}));

	stream.end();
});
