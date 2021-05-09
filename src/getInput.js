const fs = require('fs');
const path = require('path');

const getInput = file => {
    if (file) {
        try {
            if (fs.existsSync(path.resolve(__dirname, file))) {
                return fs.createReadStream(path.resolve(__dirname, file));
            } else throw new Error('file not exist');
        } catch (error) {
            process.stderr.write(`Error: File "${file}" does not exists or not readable`);
            process.exit(1);
        }
    } else {
        return process.stdin;
    }
}

module.exports = { getInput };
