const fibonacci = function(x) {
    let first = 0
    let second = 1
    let number = parseInt(x)

    if (number<0){

        return "OOPS"

    }else if(number==1) {

        return 1;

    }else if(number>0){

    for (i=1; i < number ; i++){
        var net = first + second;
        first = second;
        second = net;
    }

    return net
    }
};

// Do not edit below this line
module.exports = fibonacci;
