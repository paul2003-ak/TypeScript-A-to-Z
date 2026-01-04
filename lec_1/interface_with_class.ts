interface Teachertype {
    name: string;
    displayTeachername(): void;
    getStudentList(): string[];
}

//if we try to attach interface with class 
// so we need "implements" keyword
class Teacher implements Teachertype {
    name: string;
    constructor(cname: string) {
        this.name = cname;
    }
    
    displayTeachername():void{
        console.log(`Teacher Name: ${this.name}`);
    }
    getStudentList(): string[] {
        return ["Student1", "Student2", "Student3"];
    }
}

var T1=new Teacher("ayan");
T1.displayTeachername();
console.log(T1.getStudentList());

