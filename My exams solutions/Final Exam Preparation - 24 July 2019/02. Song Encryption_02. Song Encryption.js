function songEncryption(input) {
    
    for (let line of input) {
        if (line === 'end') {
            break;
        }
        
        let [ artist, song ] = line.split(':');
        let encryptedOutput = '';

        if (!/^[A-Z][a-z\s\']+$/g.test(artist) || !/^[A-Z\s]+$/g.test(song)) {
            console.log('Invalid input!');
            continue;
        }
        
        for (let currChar of line) {
            if (currChar === ':') {
                encryptedOutput += '@';
                continue;
            }
    
            let key = artist.length;
            let asciiCode = currChar.charCodeAt(0);
            
            if (asciiCode >= 65 && asciiCode <= 90) {
                asciiCode += key;

                if (asciiCode > 90) {
                    asciiCode -= 26;
                }
            }

            if (asciiCode >= 97 && asciiCode <= 122) {
                asciiCode += key;
                
                if (asciiCode > 122) {
                    asciiCode -= 26;
                }
            }

            encryptedOutput += String.fromCharCode(asciiCode);
        }

        console.log(`Successful encryption: ${encryptedOutput}`);
    }      
}

songEncryption(
[ 
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end' 
]
)