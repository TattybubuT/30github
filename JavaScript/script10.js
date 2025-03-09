// Калькулятор с операторами (+, -, *, /)
function calculator(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        if (b === 0) {
            return "Ошибка: деление на 0!";
        }
        return a / b;
    } else {
        return "Ошибка: неверный оператор";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(8, 2, "-"));
console.log(calculator(6, 3, "*"));
console.log(calculator(9, 0, "/"));
console.log(calculator(4, 2, "%"));