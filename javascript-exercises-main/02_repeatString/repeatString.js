const repeatString = function(frase, iteraciones) {
    
    const result = [];
    let i=0;

    if (iteraciones<i){
        return 'ERROR';
    } else if(i<=iteraciones){

    while (i<iteraciones){
        result.push(`${frase}`)
        i++;
    }
    
    return result.join('')
}
};

// Do not edit below this line
module.exports = repeatString;
