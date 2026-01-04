"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    login(name, password, isteacher) {
        if (isteacher) {
            return `${name} login successful as teacher`;
        }
        else {
            return `${name} login successful as Student`;
        }
    }
}
class Student extends Auth {
    result(marks) {
        if (marks > 40) {
            return "pass";
        }
        else {
            return "fail";
        }
    }
}
class Teacher extends Auth {
    subject(subject) {
        return `subject assigned: ${subject}`;
    }
}
var t1 = new Teacher();
console.log(t1.login("Ayan", 123, true));
var s1 = new Student();
console.log(s1.login("joy", 143, false));
//# sourceMappingURL=inheritance.js.map