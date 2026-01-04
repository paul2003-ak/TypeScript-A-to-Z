// static is always usable into the own class not usable by and object (1)
class Company{
    static name:string="ayan"
    location="narankuri"
    static getName():string{
        return Company.name;//this is how i can access name (4)
    }
    static getname():string{
        return this.name;//we can use this here bcz name is also static (3)
    }
    
}

var c1=new Company();
// console.log(c1.name);
//now if i want to print the static name(2)
console.log(Company.name);
console.log(Company.getName());