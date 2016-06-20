/*
 * grunt-jam-publisher
 * https://github.com/iketari/grunt-jam-publish
 *
 * Copyright (c) 2015 Artsiom Mezin
 * Licensed under the MIT license.
 */

'use strict';

const path = require('path');
const jam = require('jamjs');
const git = require('git-promise');

const EXISTS_RE = /^Entry already exists/;

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  function checkGitTag (tag, remote) {
      const gitCommang = `git ls-remote ${remote} refs/tags/${tag}`;
      grunt.log.debug(gitCommang);

      return new Promise((resolve, reject) => {
          git(gitCommang).then(data => {
              if (!data) {
                  let error = `Can't find git ref ${tag} in ${remote}`;
                  grunt.log.error(error);
                  return reject(data);
              }

              resolve(data);
          }, err => {
              grunt.log.error('Something wrong with git');
              grunt.log.error(err);
              reject(err);
          });
      });
  }

  function publish (options) {
      return new Promise ((resolve, reject) => {
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
          });
      });
  }

  grunt.registerTask('jam-publisher', 'Task for publishing jam packages', function () {
    const options = this.options();
    const done = this.async();
    const packageCfg = options.cfg || {};

    let remote = options.remote || 'origin',
        tag = packageCfg.version;

    checkGitTag(tag, remote)
        .then(data => {
            publish(options).then(done, err => grunt.console.error(err));
        }, err => grunt.console.error(err));

  });
};
