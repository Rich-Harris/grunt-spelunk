var fs, spelunk;

fs = require( 'fs' );
spelunk = require( 'spelunk' );

module.exports = function(grunt) {

	'use strict';

	grunt.registerMultiTask('spelunk', 'Flatten a folder to a JSON file representing its contents', function() {

		var done, options, key, root, dest, exclusions, path, result, contentsAreNumeric, removeExclusions, processFile, processDir, getKey;

		done = this.async();

		// Task config
		options = this.options({
			replacer: null,
			jsonpCallback: null,
			amd: false,
			processContent: null
		});

		root = this.data.root;
		dest = this.data.dest;

		// Error checking
		if ( !root ) {
			grunt.log.error( 'You must specify a root folder' );
			return false;
		}

		if ( !dest ) {
			grunt.log.error( 'You must specify a destination file' );
			return false;
		}

		if ( !grunt.file.exists( root ) || !grunt.file.isDir( root ) ) {
			grunt.log.error( 'Specified root folder does not exist' );
			return false;
		}


		// No errors, on with the show
		spelunk( root, { exclude: options.exclude }, function ( err, result ) {
			if ( err ) {
				done( false );
			}

			else {
				grunt.log.writeln( 'Writing file ' + dest );

				if ( options.amd ) {
					grunt.file.write( dest, 'define([],function () {\nreturn ' + JSON.stringify( result, options.replacer, options.space ) + ';\n}());' );
				} else if ( options.jsonpCallback ) {
					grunt.file.write( dest, options.jsonpCallback + '(' + JSON.stringify( result, options.replacer, options.space ) + ');' );
				} else {
					grunt.file.write( dest, JSON.stringify( result, options.replacer, options.space ) );
				}

				done();
			}
		});

	});

};
