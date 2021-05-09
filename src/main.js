#!/usr/bin/env node
const { options } = require('./commander');
const { checkParams } = require('./checkParams');
const { getInput } = require('./getInput');

const { version, name, description } = require('../package.json');

if (options.version) {
    console.log(`@${name}`);
    console.log(`version: ${version}`);
    process.exit(1);
}

checkParams(options.action, options.shift);

const inputStream = getInput(options.input);

console.log('inputStream: ', inputStream);

// console.log(`@${name}`);
// console.log(`@${description}`);
// console.log('options: ', options);
