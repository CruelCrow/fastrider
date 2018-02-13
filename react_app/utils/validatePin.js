export default function (pin) {
    //JN-1234-5678-AA
    if (!/JN-\d\d\d\d-\d\d\d\d-[A-Z][A-Z]/.test(pin)) {
        return false;
    }
    let parts = pin.split('-');
    let firstFour = parts[1];
    let secondFour = parts[2];
    let firstLetter = parts[3][0];
    let secondLetter = parts[3][1];

    let calculateHash = (fourDigits) => {
        let singleDigitHash = (d) => {
            return d % 10 + parseInt(d % 100 / 10);
        };

        let hash1 = parseInt(fourDigits[0]);
        let hash2 = parseInt(fourDigits[1]) * 2;
        if (hash2 > 9) {
            hash2 = singleDigitHash(hash2);
        }
        let hash3 = parseInt(fourDigits[2]);
        let hash4 = parseInt(fourDigits[3]) * 2;
        if (hash4 > 9) {
            hash4 = singleDigitHash(hash4);
        }

        return String.fromCharCode((hash1 + hash2 + hash3 + hash4) % 26 + 65);
    };

    return firstLetter == calculateHash(firstFour) && secondLetter == calculateHash(secondFour);
}