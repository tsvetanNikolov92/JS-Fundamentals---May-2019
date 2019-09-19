function login(input) {
    let userName = input[0];
    let counter = 0


    let reversedUserName = '';
    for (let i = userName.length -1; i >= 0; i--) {
        reversedUserName += userName[i];
    }
    
    for (let y = 1; y < input.length; y++) {
        if (input[y] !== reversedUserName) {
            counter++
            if (counter >= 4) {
                console.log(`User ${userName} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${userName} logged in.`);
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);