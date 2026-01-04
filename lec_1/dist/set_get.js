"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmpInfo {
    name = "ayan";
    email = "Ayan@test.com";
    get Name() {
        return "MR." + this.name;
    }
    set Email(val) {
        this.email = "emp_" + val;
    }
}
var info = new EmpInfo();
console.log(info.Name);
info.Email = "joy@test.com";
console.log(info.email);
//# sourceMappingURL=set_get.js.map