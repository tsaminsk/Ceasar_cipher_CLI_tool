#!/usr/bin/env node
const stream = require('stream');
const { options } = require('./commander');
const { checkParams } = require('./checkParams');
const { getInput, getOutput } = require('./getStreams');
const { CipherTransform } = require('./transformStream');

const { version, name, description } = require('../package.json');

if (options.version) {
    console.log(`@${name}`);
    console.log(`version: ${version}`);
    process.exit(1);
}

checkParams(options.action, options.shift);

const inputStream = getInput(options.input);
const outputStream = getOutput(options.output);

const transformStream = new CipherTransform(options);

stream
    .pipeline(
        inputStream,
        transformStream,
        outputStream
    )
    .then((resp) => console.log('pipeline then', resp))
    .catch((err) => console.log(err))

// console.log(`@${name}`);
// console.log(`@${description}`);
// console.log('options: ', options);
