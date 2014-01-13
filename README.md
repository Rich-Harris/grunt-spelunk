grunt-spelunk
=============

Grunt task to traverse a folder and flatten it to a JSON representation. Previously existed as [grunt-dir2json](https://github.com/GuardianInteractive/grunt-dir2json) (grunt-spelunk extracts the core functionality into a separate module - [spelunk](https://github.com/Rich-Harris/spelunk)  - and improves performance).

See the [spelunk](https://github.com/Rich-Harris/spelunk) docs for an introduction.



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-spelunk --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-spelunk');
```

## The "spelunk" task

### Overview
In your project's Gruntfile, add a section named `spelunk` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  spelunk: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### exclude
Type: `String` or `Array`

A pattern, or array of patterns, of filenames to exclude, e.g. `**/README.md`. Uses the standard globbing syntax. `.DS_Store` and `Thumbs.db` files will **always** be excluded - you don't need to specify these.

#### replacer
Type: `Function` or `Array`

Transforms values and properties when stringifying JSON. See the [MDN docs](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify)

#### space
Type: `String`

Pretty-prints the result using this string. See the [MDN docs](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify)

#### jsonpCallback
Type: `String`

If supplied, spelunk will create JSONP instead of JSON (note that the destination filename should end `.js` and not `.json` in this case)

#### amd
Type: `Boolean`

If `true`, spelunk will create an AMD module (as above, extension should be `.js`)


### Usage Examples

#### Default Options
This will read the contents of `project/data` and write a JSON file representing its contents to `project/src/data.json`, excluding any README files:

```js
grunt.initConfig({
  spelunk: {
    data: {
      root: 'project/data',
      dest: 'project/src/data.json',
      options: {
        exclude: '**/README.md'
      }
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).