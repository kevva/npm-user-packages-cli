#!/usr/bin/env node
'use strict';
const alphaSort = require('alpha-sort');
const chalk = require('chalk');
const meow = require('meow');
const normalizeUrl = require('normalize-url');
const npmUserPackages = require('npm-user-packages');

const cli = meow(`
	Usage
	  $ npm-user-packages <username>
`);

if (cli.input.length === 0) {
	console.error('Specify a username');
	process.exit(1);
}

npmUserPackages(cli.input[0]).then(data => {
	const packages = data.sort((a, b) => alphaSort.asc(a.name, b.name));

	for (const x of packages) {
		const url = x.links.homepage;
		console.log(`${x.name} ${url ? chalk.dim(normalizeUrl(url)) : ''}`);
	}
});
