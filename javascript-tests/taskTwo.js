function decipher(encryptedText, knownWord) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = alphabet.toUpperCase();

    for (let shift = 0; shift < 26; shift++) {
        let decrypted = encryptedText.split("").map(char => {
            if (alphabet.includes(char)) {
                return alphabet[(alphabet.indexOf(char) - shift + 26) % 26];
            } else if (upperAlphabet.includes(char)) {
                return upperAlphabet[(upperAlphabet.indexOf(char) - shift + 26) % 26];
            }
            return char;
        }).join("");

        if (decrypted.includes(knownWord)) {
            return decrypted;
        }
    }
    
    return "No valid decryption found";
}

// Example Usage
let encryptedText = "Wklv lv d whvw phvvdjh"; // Shift 3 (This is a test message)
let knownWord = "test";

console.log(decipher(encryptedText, knownWord),'answer');

