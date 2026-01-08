interface Datatype{
    userId:string,
    id:string,
    title:string,
    completed:boolean
}
const fetchApi=async():Promise<Datatype>=>{
    const result=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data=await result.json();
    return data;
}
fetchApi().then((data:Datatype):void=>{
    console.log(data)
})