function froggySquad(input) {
    let frogsNameList = [];
    let splitedList = input
        .shift()
        .split(' ');
    frogsNameList.push(splitedList);
    frogsNameList = frogsNameList[0];

    for (let line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Join') {
            let frogName = tokens[1];
            join(frogName);
        } else if (command === 'Jump') {
            let frogToAdd = tokens[1];
            let index = Number(tokens[2]);
            
            jump(frogToAdd, index);
        } else if (command === 'Dive') {
            let givenIndex = Number(tokens[1]);

            dive(givenIndex);
        } else if (command === 'First' || command === 'Last') {
            let printCommand = tokens[0];
            let index = Number(tokens[1]);

            firstLast(printCommand, index);
        } else if (command === 'Print') {
            let orderToPrint = tokens[1];

            print(orderToPrint);
        }
    }
    
    function join(name) {
       frogsNameList.push(name); 
    }

    function jump(name, index) {
        let indexOfEl = frogsNameList.length - index;
        
        if (indexOfEl >= 0) {
            frogsNameList.splice(index, 0, name);
        } 
    }

    function dive(index) {
        let indexOfFrog = frogsNameList.length - index;

        if (index >= 0) {   
            frogsNameList.splice(index, 1);
        }
    }

    function firstLast(firstLast, count) {
        let frogsToPrint = [];

        if (firstLast === 'First') {
            frogsToPrint = frogsNameList.slice(0, count)
        } else {
            let lastIindex = frogsNameList.length - count;
            
            if (lastIindex !== -1) {
                frogsToPrint = frogsNameList.slice(lastIindex);
            } else {
                frogsToPrint = frogsNameList;
            }
        }
        
        console.log(frogsToPrint.join(' '));
    }

    function print(revOrNormal) {
        if (revOrNormal === 'Normal') {
            console.log(`Frogs: ${frogsNameList.join(' ')}`);
        } else {
            let reversedList = frogsNameList.reverse();
            console.log(`Frogs: ${reversedList.join(' ')}`);
        } 
    }
}

froggySquad(
[ 
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal' 
]
)

//froggySquad(
//[ 
//    'Blake Muggy Kishko',
//    'Join Kvachko',
//    'Dive 0',
//    'First 10',
//    'Print Reversed' 
//]
//)

