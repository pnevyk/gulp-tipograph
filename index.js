'use strict';

var PluginError = require('plugin-error');
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
            this.emit('error', new PluginError('gulp-tipograph', 'Streaming not supported'));
            return cb();
        }

        var input = file.contents.toString();
        file.contents = Buffer.from(typo(input));

        this.push(file);
        cb();
    });
};

module.exports.presets = tipograph.presets;
