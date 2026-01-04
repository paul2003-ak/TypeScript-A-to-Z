// T means any type i can use
const fruit=<T>(data:T):T=>{
    return data;
}
let fruitdata=fruit("apple")
let fruitnum=fruit(100)
let fruitbool=fruit(true)



const animal=<T>(data:T[]):T | undefined=>{
    return data[0];
}

let animalcollection=animal(["tiger","lion","elephant"])