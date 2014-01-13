var spelunk, fs, path, assert, FIXTURES, EXPECTED, tests, runTest;

spelunk = require( 'spelunk' );
fs = require( 'fs' );
path = require( 'path' );
assert = require( 'assert' );

TMP = path.resolve( __dirname, '../tmp' );
EXPECTED = path.resolve( __dirname, 'expected' );

var tests = [
	{
		id: 'test_01',
		filename: 'test_01.json',
		message: 'should create a valid but empty JSON file'
	},

	{
		id: 'test_02',
		filename: 'test_02.json',
		message: 'should create a JSON file with two properties'
	},

	{
		id: 'test_03',
		filename: 'test_03.json',
		message: 'should create a JSON file containing an array'
	},

	{
		id: 'test_04',
		filename: 'test_04.json',
		message: 'should ignore the README file, as specified'
	},

	{
		id: 'test_05',
		filename: 'test_05.json',
		message: 'should ignore trailing slash on root property'
	},

	{
		id: 'test_06',
		filename: 'test_06.json',
		message: 'should create an object with an `array` member that is an array'
	},

	{
		id: 'test_07',
		filename: 'test_07.js',
		compareAsString: true,
		message: 'should create an AMD module'
	},

	{
		id: 'test_08',
		filename: 'test_08.js',
		compareAsString: true,
		message: 'should create a JSONP function'
	}
];

runTest = function () {
	var test = tests.shift(), expected, actual;

	if ( !test ) {
		return; // finito
	}

	console.log( '\n' + test.id + '\n=======' );

	expected = fs.readFileSync( path.resolve( EXPECTED, test.filename ) ).toString();
	actual = fs.readFileSync( path.resolve( TMP, test.filename ) ).toString();

	if ( !test.compareAsString ) {
		expected = JSON.parse( expected );
		actual = JSON.parse( actual );
	}

	console.log( 'result:\n', actual );
	console.log( 'expected:\n', expected );

	assert.deepEqual( actual, expected, test.message );

	runTest();
};

module.exports = runTest;
