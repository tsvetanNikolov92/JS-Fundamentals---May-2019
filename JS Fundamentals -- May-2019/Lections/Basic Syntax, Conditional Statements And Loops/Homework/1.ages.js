function ages(num) {
    let person = "";
   
    if (num >= 0 && num <= 2) {
        person = "baby";
    } else if (num >= 3 && num <= 13) {
        person = "child";
    } else if (num >= 14 && num <= 19) {
        person = "teenager";
    } else if (num >= 20 && num <= 65) {
        person = "adult";
    } else {
        person = "elder";
    }

    console.log(person);   
}

ages(20)