#!/usr/bin/env node
'use strict';
const chalk = require('chalk');
const meow = require('meow');
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
	for (const x of data) {
		console.log(`${x.name} ${chalk.dim(x.homepage)}`);
	}
});
