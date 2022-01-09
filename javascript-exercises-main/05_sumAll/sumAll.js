const sumAll = function() {
    const firstNumber = arguments[0];
    const lastNumber = arguments [1];
    let start = 0;

    if (typeof(firstNumber) !== typeof(start) ||
        typeof(lastNumber) !== typeof(start) || 
        firstNumber<0 || lastNumber<0){

        return 'ERROR'    
    }
    else if (firstNumber<lastNumber) {

        for (let i = firstNumber; i<=lastNumber; i++) {
            start += i
        }
    }
    else if (firstNumber>lastNumber){

        for (let i = lastNumber; i<=firstNumber; i++) {
            start += i
        }       
    }

    return start;
};

// Do not edit below this line
module.exports = sumAll;
