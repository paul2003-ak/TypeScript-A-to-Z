"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// "experimentalDecorators": true, // <--- ADD THIS
// "emitDecoratorMetadata": true   // <--- Usually needed too
// this two mustly add in tsconfig.json other wise decoretors not working
function calssLoger(constructor) {
    console.log(constructor.name);
}
function getKeyDetails(target, key) {
    console.log(key);
}
let CustomMaths = class CustomMaths {
    value1;
    value2;
    constructor(x, y) {
        this.value1 = x;
        this.value2 = y;
    }
};
__decorate([
    getKeyDetails,
    __metadata("design:type", Number)
], CustomMaths.prototype, "value1", void 0);
CustomMaths = __decorate([
    calssLoger,
    __metadata("design:paramtypes", [Number, Number])
], CustomMaths);
var C1 = new CustomMaths(10, 20);
//# sourceMappingURL=Decorators.js.map