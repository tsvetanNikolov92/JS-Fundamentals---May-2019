function companyUsers(input) {
    let companies = {};

    input
        .forEach((line) => {
            let [ companyName, employeeId ] = line.split(' -> ');

            if (!companies.hasOwnProperty(companyName)) {
                let uniqueEmployeeId = new Set();
                uniqueEmployeeId.add(employeeId);
                uniqueEmployeeId = [...uniqueEmployeeId];
                companies[companyName] = uniqueEmployeeId;
            } else {
                let doesNotContain = !companies[companyName].includes(employeeId);
                
                if (doesNotContain) {
                    companies[companyName].push(employeeId);
                }
                
            }

    });

    let sortedCompanies = Object.entries(companies)
        .sort(sortCountries)


    for (let [ name, employeeId] of sortedCompanies) {
        console.log(name);

        if (employeeId.length > 1) {
            for (let currentId of employeeId) {
                console.log(`-- ${currentId}`);
            }
        } else {
        console.log(`-- ${employeeId}`);
        }
    }

    function sortCountries(firstCompany, secondCompany) {
        let firstName = firstCompany[0];
        let secondName = secondCompany[0];

        return firstName.localeCompare(secondName);
    }
} 

companyUsers(
[
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);