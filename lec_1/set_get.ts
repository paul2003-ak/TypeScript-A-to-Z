class EmpInfo{
    name:string="ayan";
    email:string="Ayan@test.com";

    get Name():string{//getter
        return "MR."+this.name;
    }

    set Email(val:string){//setter
        this.email="emp_"+val;
    }
}

var info=new EmpInfo();
console.log(info.Name);

info.Email="joy@test.com"
console.log(info.email);
