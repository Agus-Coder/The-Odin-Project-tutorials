const leapYears = function() {
    
    let number = arguments[0]

    if (number%4 == 0) {

        if (number%100 == 0 && number%400 == 0){
            return true;
        }
        if (number%400 == 0) {
            return true
        }
        if (number%100 == 0) {
           return false 
        }

        return true
        
    } else {
        return false
    }
    
    
    
};

// Do not edit below this line
module.exports = leapYears;
