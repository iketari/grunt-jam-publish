# grunt-jam-publisher

> Task for publishing jam packages

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jam-publisher --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jam-publisher');
```

## The "jam_publisher" task

### Overview
In your project's Gruntfile, add a section named `jam_publisher` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jam_publisher: {
    options: {
      // Task-specific options go here.
    }
  },
})
```

### Options

#### options.dir
Type: `String`
Default value: `'.'`

A string value that explain what exactly you want to publish.

#### options.repo
Type: `String`
Default value: `undefined`

A string value that explain how and where exactly you want to publish your stuff.
Format: `'http://<username>:<password>@host:PORT/resource'`


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 First working release


## License
Copyright (c) 2015 Artsiom Mezin. Licensed under the MIT license.
