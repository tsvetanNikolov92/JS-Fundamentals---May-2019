function employees(input) {
    let listOfEmployees = {};

    for (let i = 0; i < input.length; i++) {
        let employeeName = input[i];
        let employeeNameLength = Number(employeeName.length);
        
        let employeeInfo = {
            name: employeeName,
            length: employeeNameLength
        }

        listOfEmployees[employeeName] = employeeNameLength;
        console.log(`Name: ${employeeInfo.name} -- Personal Number: ${employeeInfo.length}`);
        listOfEmployees = {};
    }
}

employees(
    [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )