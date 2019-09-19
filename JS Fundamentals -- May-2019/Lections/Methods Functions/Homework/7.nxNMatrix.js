function nxNMatrix(integerN) {
        
    for (let i = 0; i < integerN; i++) {
        console.log(repeatOutput());
    }

    function repeatOutput(){
        let output = '';

        for (let i = 0; i < integerN; i++) {
            output += integerN.toString() + ' '; 
        }

        return output.trim();
    }
}

nxNMatrix(3)