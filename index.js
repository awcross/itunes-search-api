'use strict';
const got = require('got');

const apiSearch = (query, opts) => {
	if (typeof query !== 'string') {
		return Promise.reject(new TypeError(`Expected a string, got ${typeof query}`));
	}

	const url = 'https://itunes.apple.com/search';

	opts = Object.assign({
		json: true
	}, opts);

	opts.query = Object.assign({
		country: 'us',
		entity: 'album',
		limit: 25
	}, opts.query);

	opts.query.term = query;

	if (opts.stream) {
		return got.stream(url, opts);
	}

	return got(url, opts);
};

apiSearch.stream = (query, opts) => apiSearch(query, Object.assign({}, opts, {
	json: false,
	stream: true
}));

module.exports = apiSearch;
