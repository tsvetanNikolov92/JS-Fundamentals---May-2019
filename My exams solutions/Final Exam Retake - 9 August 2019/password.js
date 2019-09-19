function password(input) {
    let inputCount = Number(input.shift());
    
    for (let i = 0; i < inputCount; i++) {
        let line = input.shift();
        let pattern = /^([\w\W]+)>([\d]+)\|([a-z]+)\|([A-Z]+)\|([^<>][\w\W]+)<\1$/g;
        let matches = pattern.exec(line);
        let encryptedPass = '';
        
        if (matches !== null) {
            let isLengthValid = matches[0].split('<');
            isLengthValid = isLengthValid[1].length;

            if (isLengthValid === matches[1].length) {
                let firstGroup = matches[2];
                let secondGroup = matches[3];
                let thirdGroup = matches[4];
                let fourGroup = matches[5]
                    .split('<').join('');
                    encryptedPass += firstGroup + secondGroup + thirdGroup + fourGroup;

                    console.log(`Password: ${encryptedPass}`);
            } else {
                console.log('Try another password!'); 
            }
        } 
        
        if (matches === null) {
            console.log('Try another password!');
        }
    }
}

password(
[
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'

]
)