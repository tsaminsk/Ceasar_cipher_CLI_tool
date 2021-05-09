const checkParams = ({ action, shift, input, output }) => {

    if (action !== 'encode' && action !== 'decode') {
        process.stderr.write('Error: Required parameter must be specified action: encode / decode');
        process.exit(1);
    }

    if (isNaN(shift) || !Number.isInteger(shift) || shift == 0) {
        process.stderr.write('Error: Offset for encryption must be a nonzero positive or negative integer');
        process.exit(1);
    }

    if (input === output) {
        process.stderr.write('Error: The name of the data file and the result file cannot be the same');
        process.exit(1);
    }
}

module.exports = { checkParams };