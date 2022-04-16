function caesarCipherEncryptor(string, key) {
    let newString = "";
    let startASCIICode = 97;
    for (let index in string) {
        let code = string.charCodeAt(index);
        let newCode = ((code + key - startASCIICode) % 26) + startASCIICode;
        newString += String.fromCharCode(newCode);
    }
    return newString;
}
