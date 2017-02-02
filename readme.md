# itunes-search-api [![Build Status](https://travis-ci.org/awcross/itunes-search-api.svg?branch=master)](https://travis-ci.org/awcross/itunes-search-api)

> iTunes Search API


## Install

```
$ npm install --save itunes-search-api
```


## Usage

```js
const itunesSearchApi = require('itunes-search-api');

const opts = {
	query: {
		entity: 'musicArtist',
		limit: 1
	}
};

itunesSearchApi('deftones', opts).then(res => {
	console.log(res.body);
	//=> {resultCount: 1, results: [{...}]}
});
```


## API

### itunesSearchApi(input, [options])

#### input

Type: `string`


#### options

##### query

Type: `object`


## CLI

```
$ npm install -g itunes-search-api
```

```
$ itunes-search-api --help

  Usage
    itunes-search-api <input>

  Options
    --country  Two-letter country code [Default: us]
    --entity  Type of results returned [Default: album]
    --limit  Number of results to return [Default: 25]

  Example
    $ itunes-search-api deftones
    {resultCount: 19, results: [{...}]}
```


## License

MIT © [Alex Cross](https://alexcross.io)
