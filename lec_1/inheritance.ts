class Auth{
    login(name:string, password:number, isteacher:boolean):string{
        if(isteacher){
            return `${name} login successful as teacher`;
        }
        else{
            return `${name} login successful as Student`
        }
    }
}

class Student extends Auth{
    result(marks:number):string{
        if(marks>40){
            return "pass"
        }
        else{
            return "fail"
        }
    }
}

class Teacher extends Auth{
    subject(subject:string):string{
        return `subject assigned: ${subject}`
    }
}

var t1=new Teacher();
console.log(t1.login("Ayan",123,true))

var s1=new Student();
console.log(s1.login("joy",143,false))