/*
 * grunt-jam-publisher
 * https://github.com/iketari/grunt-jam-publish
 *
 * Copyright (c) 2015 Artsiom Mezin
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var jam = require('jamjs');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('jam-publisher', 'Task for publishing jam packages', function () {

    var options = this.options();
    var done = this.async();
    var EXISTS_RE = /^Entry already exists/

    jam.publish({
      dir: path.resolve(options.dir || '.'),
      repo: options.repo,
      level: options.level || null
    }, function (error) {

      grunt.log.debug(error);

      if (error && !EXISTS_RE.test(error)) {
        grunt.log.error('Something wrong with publishing');
      } else {
        grunt.log.ok('Success publishing.' + (EXISTS_RE.test(error) ? ' Don\'t worry about error in terminal' : ''));
      }

      done();
    });

  });
};
