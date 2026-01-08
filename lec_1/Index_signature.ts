//It is use when we dont know what data is commig from suppose a after api fetching 
// so in that time index signature is workig...

interface userDataType{
    [key:string]:string | number
}
var userdata:userDataType={
    name:"ayan",
    number:1234,
    age:23,
    location:"raniganj"
}