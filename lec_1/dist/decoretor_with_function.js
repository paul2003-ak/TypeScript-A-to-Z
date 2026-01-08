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
//always in decorators 3 parameters ar maily premeters -> target , key , descriptor
function updateSum(target, key, descriptor) {
    descriptor.value = function sum(x, y) {
        console.log("the sum is ", x + y);
    };
}
class maths {
    sum(x, y) {
        return x + y;
    }
}
__decorate([
    updateSum,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], maths.prototype, "sum", null);
var v1 = new maths();
v1.sum(20, 30);
//# sourceMappingURL=decoretor_with_function.js.map