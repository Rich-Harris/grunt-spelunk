module.exports = function ( grunt ) {

	grunt.initConfig({

		spelunk: {
			test_01: {
				root: 'test/fixtures/test_01',
				dest: 'tmp/test_01.json'
			},
			test_02: {
				root: 'test/fixtures/test_02',
				dest: 'tmp/test_02.json'
			},
			test_03: {
				root: 'test/fixtures/test_03',
				dest: 'tmp/test_03.json'
			},
			test_04: {
				root: 'test/fixtures/test_04',
				dest: 'tmp/test_04.json',
				options: {
					exclude: '**/README.md'
				}
			},
			test_05: {
				root: 'test/fixtures/test_05',
				dest: 'tmp/test_05.json'
			},
			test_06: {
				root: 'test/fixtures/test_06',
				dest: 'tmp/test_06.json',
				options: {
					exclude: '**/README.md'
				}
			},
			test_07: {
				root: 'test/fixtures/test_07',
				dest: 'tmp/test_07.js',
				options: {
					amd: true
				}
			},
			test_08: {
				root: 'test/fixtures/test_08',
				dest: 'tmp/test_08.js',
				options: {
					jsonpCallback: 'xyz'
				}
			}
		}
	});

	grunt.loadTasks( 'tasks' );

	grunt.registerTask( 'checkTestResults', function () {
		var runTest = require( './test/spelunk_tests' );
		runTest();
	});

	grunt.registerTask( 'default', [
		'spelunk',
		'checkTestResults'
	]);

};