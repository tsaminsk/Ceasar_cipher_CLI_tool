

const encode = (text, shift) => {
    const coding = (codeAt, start) => String.fromCharCode((codeAt - start + Number(shift)) % 26 + start);
    let currentText = '';
    for (let i = 0; i < text.length; i++) {
        let codeAt = text.charCodeAt(i);
        if (codeAt >= 65 && codeAt <= 90) {
            currentText += coding(codeAt, 65);
        } else if (codeAt >= 97 && codeAt <= 122) {
            currentText += coding(codeAt, 97);
        } else {
            currentText += text[i];
        }
    }
    return currentText;
}

const decode = (text, shift) => {
    shift = (26 - shift) % 26;
    return encode(text, shift);
}

module.exports = { cipher: { encode, decode }};