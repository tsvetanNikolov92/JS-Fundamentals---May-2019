function towns(input) {
   let townInfo = {};
   
   input
    .forEach((line) => {
        let [ townName, latitude, longitude ] = line.split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        let currentTown = {
            town: townName,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }

        townInfo = currentTown;
        console.log(townInfo);
   });
}

towns(
    [
    'Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'
]
);
