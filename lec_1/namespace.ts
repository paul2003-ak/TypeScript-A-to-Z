//you can see the same function name we can use into different namespace .
namespace user{
    export class Auth{
        login(): void {
            console.log("User login");
        }
    }
    export const getList=():void=>{
        console.log("Getlist")
    }
}

namespace Admin{
    export class Auth{
        login(): void {
            console.log("Admin login");
        }
    }
    export const getList=():void=>{
        console.log("Getlist")
    }
}

const U1=new user.Auth();
U1.login();
user.getList();

const A1=new Admin.Auth();
A1.login();
Admin.getList();
