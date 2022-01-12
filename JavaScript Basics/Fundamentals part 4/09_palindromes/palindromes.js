const palindromes = function (str) {

    let largo = str.length
    let array = []

    for(i= largo-1 ; i>=0 ; i--){

        let letter = str.charAt(i)
        
        array.push(letter);
    
    }

    return array.join('')
}

// Do not edit below this line
module.exports = palindromes;
