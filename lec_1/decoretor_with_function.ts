//always in decorators 3 parameters ar maily premeters -> target , key , descriptor
function updateSum(target: any , key:string , descriptor:PropertyDescriptor){
    descriptor.value=function sum(x:number , y:number){
        console.log("the sum is ",x+y);
    }
}

class maths{
    @updateSum
    sum(x:number , y:number){
        return x+y;
    }
}

var v1=new maths();
v1.sum(20,30);