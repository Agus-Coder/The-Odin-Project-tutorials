const leapYears = function() {
    
    let number = parseInt(arguments[0])

    if (number%4 == 0 && number%400 == 0 && number%100 !==0 ){
        return true
    }
};

// Do not edit below this line
module.exports = leapYears;
