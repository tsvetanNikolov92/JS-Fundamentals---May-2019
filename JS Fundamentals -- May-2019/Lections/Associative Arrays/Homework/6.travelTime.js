function travelTime(input) {
    let countries = {};

    input
        .forEach((line) => {
            let [ country, town, currentPrice ] = line.split(' > ');
            currentPrice = Number(currentPrice);

            if (!countries.hasOwnProperty(country)) {
                countries[country] = {};
                countries[country][town] = currentPrice;
            } else {
                let countyObj = countries[country];

                if (!countyObj.hasOwnProperty(town)) {
                    countyObj[town] = currentPrice;
                } else {
                    let oldPrice = countyObj[town];

                    if (oldPrice > currentPrice) {
                        countyObj[town] = currentPrice;
                    }
                }
            }
        });

    let sortedCountries = Object.entries(countries)
        .sort(sortCountries);

    for (let [ name, towns ] of sortedCountries) {
        let sortedTowns = Object.entries(towns)
            .sort(sortTowns);
            let output = `${name} -> `;

            for (let [ townName, townPrice ] of sortedTowns) {
                output += `${townName} -> ${townPrice} `;
            }

            console.table(output);
    }

    function sortCountries(firstCountry, secondCountry) {
        let firstName = firstCountry[0];
        let secondName = secondCountry[0];

        return firstName.localeCompare(secondName);
    }

    function sortTowns(firstTown, secondTown) {
        let firstPrice = firstTown[1];
        let secondPrice = secondTown[1];

        return firstPrice - secondPrice;
    }
}

travelTime(
[ 
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
);