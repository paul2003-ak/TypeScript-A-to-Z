"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//if we try to attach interface with class 
// so we need "implements" keyword
class Teacher {
    name;
    constructor(cname) {
        this.name = cname;
    }
    displayTeachername() {
        console.log(`Teacher Name: ${this.name}`);
    }
    getStudentList() {
        return ["Student1", "Student2", "Student3"];
    }
}
var T1 = new Teacher("ayan");
T1.displayTeachername();
console.log(T1.getStudentList());
//# sourceMappingURL=interface_with_class.js.map