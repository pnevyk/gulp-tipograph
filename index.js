'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var tipograph = require('tipograph');

module.exports = function (options) {
    var typo = tipograph(options);

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-tipograph', 'Streaming not supported'));
            return cb();
        }

        var input = file.contents.toString();
        file.contents = new Buffer(typo(input));

        this.push(file);
        cb();
    });
};

module.exports.presets = tipograph.presets;
