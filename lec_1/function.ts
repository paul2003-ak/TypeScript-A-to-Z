function user():object|string{
    let name ="ayan"
    let age = 22
    const location="india"
    if(location==="india"){
        return {name, age}
    }
    return location;
}

const data=():string=>{
    return "hello world"
}
//.         *this is the 
//.          accepting data
//.          👇🏻("ayan paul")
//.           👇🏻            **this is the returning 
//.            👇🏻           datatype
//              👇🏻            👇🏻
const simple=(data:string):string=>{
    return data;
}
simple("ayan paul")