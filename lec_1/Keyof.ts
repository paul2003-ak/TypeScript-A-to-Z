type persont={
    name:string,
    age:number,
    isEmp:boolean
}

let persondata:persont={
    name:"ayan",
    age:22,
    isEmp:true
}

type personX=keyof persont
let personXData:personX

personXData="name"//it will store only the keys of persont 
personXData="age"
personXData="isEmp"

let useX:keyof typeof persondata="name" // keyof typeof thats how you can use object Keys