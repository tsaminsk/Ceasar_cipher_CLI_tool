#!/usr/bin/env node
const commander = require('commander')

const { version, name, description } = require('../package.json');

// commander.on('--help', () => {
//     console.log('  Examples:')
//     console.log('')
//     console.log('    node commander.js')
//     console.log('    node commander.js --help')
//     console.log('    node commander.js -h')
//     console.log('    node commander.js --size large')
//     console.log('    node commander.js search a b c')
//     console.log('    node commander.js -abc')
// });

commander
    .option('-v, --version', 'get current version of CLI tool')
    .option('-a, --action [type],', 'action encode || decode')
    .option('-s, --shift [number]', 'shift for cipher', 0)
    .option('-i, --input [file]', 'input file')
    .option('-o, --output [file]', 'output file')
    .parse(process.argv);

const options = commander.opts()

if (options.version) {
    console.log(`@${name}`);
    console.log(`version: ${version}`);
} else {
    console.log(`@${name}`);
    console.log(`@${description}`);
    console.log('options: ', options);
}
