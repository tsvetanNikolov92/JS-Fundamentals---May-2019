function grades(gradeInNum) {
    
    if (gradeInNum >= 2.00 && gradeInNum <= 2.99) {
        console.log('Fail');
    } else if (gradeInNum >= 3.00 && gradeInNum <= 3.49) {
        console.log('Poor');
    } else if (gradeInNum >= 3.50 && gradeInNum <= 4.49) {
        console.log('Good');
    } else if (gradeInNum >= 4.50 && gradeInNum <= 5.49) {
       console.log('Very good');
    } else {
        console.log('Excellent');
    }
}

grades(3.33)
