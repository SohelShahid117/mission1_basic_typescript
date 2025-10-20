"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    function add(num1, num2 = 50) {
        return num1 + num2;
    }
    add(4, 55);
    const sum = (n1, n2) => n1 + n2;
    const poorUser = {
        name: "Shahid",
        balance: 0,
        addBalance(bal) {
            return `amar balanace holo: ${this.balance + bal}`;
        },
    };
    console.log(poorUser.addBalance(55));
    const arr = [4, 6, 1];
    const newArr = arr.map((n) => n * n);
    console.log(arr);
    console.log(newArr);
}
//# sourceMappingURL=function.js.map