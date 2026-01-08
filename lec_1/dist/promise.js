"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function complex() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved({
                name: "ayan",
                age: 22,
                location: "narankuri"
            });
        }, 2000);
    });
}
complex().then((data) => {
    console.log(data);
});
//# sourceMappingURL=promise.js.map