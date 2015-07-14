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

  grunt.registerTask('jam_publisher', 'Task for publishing jam packages', function () {

    var options = this.options();

    global.console.log('dir', path.resolve('.'));
    global.console.log('repo', options.repo);

    jam.publish({
      dir: path.resolve('.'),
      repo: options.repo
    }, function () {
        global.console.log('publishing callback');
        global.console.dir(argumets);
    })

    global.console.log('jam publishing end');

  });
};
