type persona={
    name:string
}
type personb={
    age:number
}
type personc=persona & personb // combine intersection

// var personA:{
//     name:string
// }={
//     name:"Ayan"
// }
var personA:persona={//using intersection
    name:"Ayan"
}
// var personB:{
//     age:number
// }={
//     age:22
// }
var personB:personb={//using intersection
    age:22
}
var personC:personc={
    name:"ayan",
    age:22
}


//intersection using interface
        interface A{
            name:string
        }
        interface B extends A{
            age:number
        }
// type C=A & B;

var personD:B={
    name:"ayan",
    age:22
}
console.log(personD)