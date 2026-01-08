"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchApi = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await result.json();
    return data;
};
fetchApi().then((data) => {
    console.log(data);
});
//# sourceMappingURL=api.js.map