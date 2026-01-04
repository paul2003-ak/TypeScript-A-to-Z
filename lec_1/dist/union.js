"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userData = () => {
    let user = 1;
    if (user === 1) {
        return ["ayan", "paul"];
    }
    else {
        return "ayan paul";
    }
};
console.log(userData());
const fruitData = (name) => {
    console.log(name);
};
fruitData("Ayan");
fruitData(22);
//# sourceMappingURL=union.js.map