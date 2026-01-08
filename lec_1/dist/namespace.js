"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//you can see the same function name we can use into different namespace .
var user;
(function (user) {
    class Auth {
        login() {
            console.log("User login");
        }
    }
    user.Auth = Auth;
    user.getList = () => {
        console.log("Getlist");
    };
})(user || (user = {}));
var Admin;
(function (Admin) {
    class Auth {
        login() {
            console.log("Admin login");
        }
    }
    Admin.Auth = Auth;
    Admin.getList = () => {
        console.log("Getlist");
    };
})(Admin || (Admin = {}));
const U1 = new user.Auth();
U1.login();
user.getList();
const A1 = new Admin.Auth();
A1.login();
Admin.getList();
//# sourceMappingURL=namespace.js.map