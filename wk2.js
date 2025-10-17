function add(a,b) {
    if (typeof a !== 'number'||typeof b !== 'number') {
        throw new Error("Input must be a number");
    }
    return a+b
}

function substract(a,b) {
   // if (typeof a !== 'number'||typeof b !== 'number') {
   //     throw new Error("Input must be a number");
   // }
    return a-b
}

module.exports={add,substract}