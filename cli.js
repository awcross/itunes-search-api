#!/usr/bin/env node
'use strict';
const meow = require('meow');
const itunesSearchApi = require('./');

const cli = meow(`
	Usage
	  $ itunes-search-api <input>

	Options
	  --country  Two-letter country code [Default: us]
	  --entity  Type of results returned [Default: album]
	  --limit  Number of results to return [Default: 25]

	Examples
	  $ itunes-search-api deftones
	  {resultCount: 19, results: [{...}]}
`);

let input = cli.input;

if (input.length === 0) {
	console.error('Specify a string');
	process.exit(1);
}

if (input.length > 0) {
	input = input.join(' ');
}

const opts = {
	query: cli.flags
};

itunesSearchApi(input, opts).then(res => console.log(res.body));
