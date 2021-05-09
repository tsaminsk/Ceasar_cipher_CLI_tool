#!/usr/bin/env node
const commander = require('commander');

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
    .option('-s, --shift <number>', 'shift for cipher')
    .option('-i, --input [input file]', 'input text or file path')
    .option('-o, --output [file]', 'output file')
    .parse(process.argv);

const options = commander.opts();

options.shift = parseFloat(options.shift);

module.exports = { options };