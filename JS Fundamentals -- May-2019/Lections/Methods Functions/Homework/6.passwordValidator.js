function passwordValidator(password) {
    let isDigit = (asciiCode) => asciiCode >= 48 && asciiCode <= 57;
    
    let validLength = hasValidLength();
    let validContent = hasValidContent();
    let validDigit = hasAtLeastTwoDigits();

    if (!validLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!validContent) {
        console.log('Password must consist only of letters and digits');
    }

    if (!validDigit) {
        console.log('Password must have at least 2 digits');
    }

    if (validContent && validDigit && validLength) {
        console.log('Password is valid');
    }
    function hasValidLength() {
        return password.length >= 6 && password.length <= 10;
    }

    function hasValidContent() {
        let lowerCasePass = password.toLowerCase();
        let isLetter = (asciiCode) => asciiCode >= 97 && asciiCode <= 122;

        for (let i = 0; i < lowerCasePass.length; i++) {
           let ascii = lowerCasePass.charCodeAt(i);

           if (isLetter(ascii) || isDigit(ascii)) {
               continue;
           }

           return false;
        }

       return true;
    }

    function hasAtLeastTwoDigits() {
        let digitCount = 0;

        for (let i = 0; i < password.length; i++) {
            let ascii = password.charCodeAt(i);

            let asciiIsDigit = isDigit(ascii);

            if (asciiIsDigit) {
                digitCount++;
            }
        }

        return digitCount >= 2;
    }
    
}

passwordValidator('logIn')