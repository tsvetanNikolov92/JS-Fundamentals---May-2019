function followers(input) {
    let usersLikesList = {};
    let usersCommList = {};
    let followCounter = 0;

    let commandParser = {
        'New follower': newFollower,
        'Like': likesCounter,
        'Comment': usersComments,
        'Blocked': blockedUsers
    }


    for (let line of input) {
        if (line === 'Log out') {
            break;
        }

        let tokens = line.split(': ');
        let command = tokens.shift();

        commandParser[command](...tokens);
    }

    for (let [ name, value ] of Object.entries(usersLikesList)) {
        usersLikesList[name] += usersCommList[name];
    }
    
    let sortedUsers = Object.entries(usersLikesList)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    
    console.log(`${followCounter} followers`);

    for (let [ nameUser, sumComLike] of sortedUsers) {
        console.log(`${nameUser}: ${sumComLike}`);
    }


    function newFollower(username) {
        if (!usersLikesList.hasOwnProperty(username)) {
            usersLikesList[username] = 0;
            
            if (!usersCommList.hasOwnProperty(username)) {
                usersCommList[username] = 0; 
            }          
            followCounter ++;
        }
    }

    function likesCounter(name, count) {
        if (!usersLikesList.hasOwnProperty(name)) {
            usersLikesList[name] = Number(count);
            followCounter++;
            
            if (!usersCommList.hasOwnProperty(name)) {
                usersCommList[name] = 0;
            }
        } else {
            usersLikesList[name] += Number(count);
        }
    }

    function usersComments(username) {
        if (!usersCommList.hasOwnProperty(username)) {
            usersCommList[username] = 1;
            followCounter++;
            
            if (!usersLikesList.hasOwnProperty(username)) {
                usersLikesList[username] = 0;
            }
        } else {
            usersCommList[username] += 1;
        }
    }

    function blockedUsers(userToDel) {
        if (!usersCommList.hasOwnProperty(userToDel)) {
            console.log(`${userToDel} doesn't exist.`);
        } else {
            delete usersCommList[userToDel];
            delete usersLikesList[userToDel];
            followCounter--;
        }
    }
}

followers(
[ 
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out' 
]
)