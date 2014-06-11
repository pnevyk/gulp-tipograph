'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var replace = require('tipograph').Replace;
var languages = require('tipograph').Languages;

var i, len, input,
    parts = ['quotes', 'spaces', 'hyphens', 'mathSigns', 'symbols', 'custom'];

var tipograph = function (options) {
    options = options || {};
    
    for (i = 0, len = parts.length; i < len; i++) {
        options[parts[i]] = options[parts[i]] === false ? false : true;
    }
        
    options.html = options.html === false ? false : true;
    
    if (options.language) {
        replace.configure(languages[options.language]);
    }

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-tipograph', 'Streaming not supported'));
            return cb();
        }
        
        input = file.contents.toString();

        for (i = 0, len = parts.length; i < len; i++) {
            if (options[parts[i]]) {
                input = replace[parts[i]](input, options.html);
            }
        }
        
        file.contents = new Buffer(input);

        this.push(file);
        cb();
    });
};

tipograph.configure = function (options) {
    replace.configure(options);
};

tipograph.addCustomRule = function (regexp, replacement) {
    replace.addCustomRule(regexp, replacement);
};

module.exports = tipograph;