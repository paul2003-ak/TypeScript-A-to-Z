interface Info{
    name:string,
    age:number,
    colege:string
}
interface address{
    address:string
}

interface TeacherInfo extends Info,address{  //extends the interfaces
    dpet:string 
}

var studentObj:Info={
    name:"ayan",
    age:22,
    colege:"SNU"
}

var studentaddress={
    address:"dhaka"
}

var teacherObj:TeacherInfo={
    name:"upa",
    age:20,
    colege:"SNU",
    address:"kolkata",
    dpet:"cse"

}

