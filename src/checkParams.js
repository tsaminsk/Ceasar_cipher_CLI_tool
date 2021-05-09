const checkParams = (action) => {

    if (action !== 'encode' && action !== 'decode') {
        process.stderr.write('Error: Required parameter must be specified action: encode / decode');
        process.exit(1);
    }
}

module.exports = { checkParams };