const checkParams = (action, shift) => {

    if (action !== 'encode' && action !== 'decode') {
        process.stderr.write('Error: Required parameter must be specified action: encode / decode');
        process.exit(1);
    }

    if (typeof shift != 'number' || isNaN(shift)) {
        process.stderr.write('Error: Offset for encryption must be a number');
        process.exit(1);
    }
}

module.exports = { checkParams };