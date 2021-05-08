#!/usr/bin/env node

const { version, name, description } = require('../package.json');

console.log(`@${name}`);
if (process.argv.indexOf('--v') !== -1 || process.argv.indexOf('--version') !== -1) {
    console.log(`@${version}`);
} else {
    console.log(`@${description}`);
}