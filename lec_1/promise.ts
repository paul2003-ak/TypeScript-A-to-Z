 interface DataType{
    name:string,
    age:number,
    location:string
 }
 function complex():Promise<DataType>{
    return new Promise((resolved)=>{
        setTimeout(() => {
            resolved({
                name:"ayan",
                age:22,
                location:"narankuri"
            })
        }, 2000);
    })
}

complex().then((data:DataType)=>{
    console.log(data)
})