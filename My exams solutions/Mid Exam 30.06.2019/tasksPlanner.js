function tasksPlanner(input) {
    let completedCounter = 0;
    let incompletedCounter = 0;
    let droppedCounter = 0;
    let tasksHoursList = [];
    let currentTaskHours = input
        .shift()
        .split(' ');
    tasksHoursList.push(currentTaskHours);
    tasksHoursList = tasksHoursList[0];
    tasksHoursList = tasksHoursList.map(Number);

    const complete = (index) => {
        if (index >= 0 && index <= tasksHoursList.length - 1) {
            tasksHoursList.splice(index, 1, 0);
        }
    };

    const change = (index, time) => {
        if (index >= 0 && index <= tasksHoursList.length - 1) {
            tasksHoursList.splice(index, 1, time);
        }
    };

    const drop = (index) => {
        if (index >= 0 && index <= tasksHoursList.length -1) {
            tasksHoursList.splice(index, 1, -1);
        }
    };

    const printComplete = () => {
        for (let hour of tasksHoursList) {
            if (hour === 0) {
                completedCounter++;
            }
        }

        console.log(completedCounter);
    };

    const printIncomplete = () => {
        for (let line of tasksHoursList) {
            if (line > 0) {
                incompletedCounter++
            }
        }
        console.log(incompletedCounter);
    };

    const printDropped = () => {
        for (let currentHour of tasksHoursList) {
            if (currentHour === -1) {
                droppedCounter++;
            } 
        }  
        
        console.log(droppedCounter);
    };

    let commandParser = {
        'Complete': complete,
        'Change': change,
        'Drop': drop,
    };
    
    for (let line of input) {
        if (line === 'End') {
            break;
        } 

        if (line === 'Count Completed') {
            printComplete();
        } else if (line === 'Count Incomplete') {
            printIncomplete();
        } else if (line === 'Count Dropped') {
            printDropped();
        } else {
            let tokens = line.split(' ');
            let command = tokens.shift();
            tokens = tokens.map(Number);

            commandParser[command](...tokens);
        } 
    }
    
    let filteredList = tasksHoursList.filter((hour) => hour > 0);
    console.log(filteredList.join(' '));
}

tasksPlanner(
[
    '1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed'
]
)