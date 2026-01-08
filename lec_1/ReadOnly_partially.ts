interface collgeData5{
    name:string,
    location:string,
    students:number,

}

var collegeData15:Readonly<collgeData5>={
    name:"Snu",
    location:"kolkata",
    students:1000
}
// collegeData15.name="amiti" -> this we cant not do , bcz its a read only property 
