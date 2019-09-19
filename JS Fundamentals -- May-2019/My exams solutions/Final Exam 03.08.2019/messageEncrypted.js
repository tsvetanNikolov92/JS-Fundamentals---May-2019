function messageEncrypted(input) {
    let countOfInput = Number(input.shift());
    
    for (let line of input) {
        let tokens = line.split(': ');
        let currentTag = tokens[0];
        let currMessage = tokens[1];
        let isValidTag = /^([*@]{1})([A-Z][a-z]{3,})\1$/g.test(currentTag);
        let isValidMessage = /^([\(a-zA-Z)\]\|([\)(a-zA-Z)\]\|([\)([a-zA-Z]+)\]\|$/g.test(currMessage);
        let pattern = /([@*]{1})([A-Z][a-z]+)\1\:\s\[([a-zA-Z]{1})\]\|\[([a-zA-Z]{1})\]\|\[([a-zA-Z]{1})\]\|/g;
        let encryptedCode = '';
        let matches = pattern.exec(line);
        
        if (isValidMessage && isValidTag) {
            let matchLength = matches.length;
            
            for (let i = 3; i < matchLength; i++) {
                let currenLetter = matches[i];
                let asciiCode = currenLetter.charCodeAt(0);
                encryptedCode +=`${asciiCode} `;
            }

            console.log(`${matches[2]}: ${encryptedCode.trim()}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
}

//messageEncrypted(
//[
//    '3',
//    '*Request*: [I]|[s]|[i]|',
//    '*Taggy@: [73]|[73]|[73]|',
//    'Should be valid @Taggy@: [v]|[a]|[l]|' 
//]
//)

messageEncrypted(
[
'3',
'@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid',
'*tAGged*: [i][i][i]|',
'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'

]
)