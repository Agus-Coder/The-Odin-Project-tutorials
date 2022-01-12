const removeFromArray = function() {
    let largo = arguments.length -1;
    
    const inicial = arguments[0]
    const eliminar = arguments[1]
    const indexParaEliminar = inicial.indexOf(eliminar)

    let final = inicial.splice(indexParaEliminar,1)
    
        return final;
};

// Do not edit below this line
module.exports = removeFromArray;