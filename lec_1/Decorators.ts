// "experimentalDecorators": true, // <--- ADD THIS
// "emitDecoratorMetadata": true   // <--- Usually needed too
// this two mustly add in tsconfig.json other wise decoretors not working
function calssLoger(constructor:Function){
    console.log(constructor.name)
}

function getKeyDetails(target:any, key:string):void{
    console.log(key)
}

@calssLoger
class CustomMaths{

    @getKeyDetails
    value1:number;
    value2:number;

    constructor(x:number, y:number){
        this.value1=x;
        this.value2=y;
    }
}

var C1=new CustomMaths(10,20);