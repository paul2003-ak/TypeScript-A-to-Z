const userData=():string | number | Array<string>=>{
    let user=1;
    if(user===1){
        return ["ayan","paul"]
    }else{
        return "ayan paul"
    }
}
console.log(userData());

const fruitData=(name:string|number|boolean)=>{
    console.log(name)
}
fruitData("Ayan");
fruitData(22);