function aMinerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length; i+=2) {
        let resourceName = input[i];
        let resourceValue = Number(input[i + 1]);

        if (!resources.hasOwnProperty(resourceName)) {
            resources[resourceName] = resourceValue;
        } else {
            let currentValue = resourceValue;
            resources[resourceName] += currentValue;
        }
    }

    let currentResource = Object.entries(resources);

    for (let [ resourceName, resourceValue ] of currentResource) {
        console.log(`${resourceName} -> ${resourceValue}`);
    }
}

aMinerTask(
[
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '100'
]
);