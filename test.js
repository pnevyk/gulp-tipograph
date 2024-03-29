'use strict';
var assert = require('assert');
var Vinyl = require('vinyl');
var tipograph = require('./index');

it('should use tipograph to apply typography rules', function (cb) {
    var stream = tipograph();

    stream.on('data', function (file) {
        assert.equal(file.contents.toString(), '\u201Clorem\u201D');
    });

    stream.on('end', cb);

    stream.write(new Vinyl({
        base: __dirname,
        path: __dirname + 'file.txt',
        contents: Buffer.from('"lorem"')
    }));

    stream.end();
});

it('should pass options into tipograph', function (cb) {
    var stream = tipograph({
        presets: ['quotes'],
        language: 'czech',
        format: 'html'
    });

    stream.on('data', function (file) {
        assert.equal(file.contents.toString(), '<pre> "keep" </pre> -- \u201Elorem\u201C');
    });

    stream.on('end', cb);

    stream.write(new Vinyl({
        base: __dirname,
        path: __dirname + 'file.txt',
        contents: Buffer.from('<pre> "keep" </pre> -- "lorem"')
    }));

    stream.end();
});

it('should reexport tipograph other api', function () {
    assert.doesNotThrow(function () { tipograph.presets(); });
    assert.ok(Array.isArray(tipograph.presets()));
});
