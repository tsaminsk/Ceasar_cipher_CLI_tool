const { Transform } = require('stream');
const { cipher } = require('./cipher');
class CipherTransform extends Transform {

    constructor(options) {
        this.options = options;
    }

    _transform(data, encoder, callback) {
        try {
            const result = cipher[this.options.action](data.toString(), this.options.shift);
            callback(null, `${result}\n`);
        } catch (error) {
            callback(error);
        }
    }
}

module.exports = { CipherTransform };