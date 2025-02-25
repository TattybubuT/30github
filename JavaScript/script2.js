
// Условные операторы (if, else if, else, тернарный оператор)
let number = 10;

// Обычное условие if...else
if (number > 0) {
    console.log("Число положительное");
} else if (number < 0) {
    console.log("Число отрицательное");
} else {
    console.log("Число равно нулю");
}

// Тернарный оператор
let result = (number > 0) ? "Положительное" : (number < 0) ? "Отрицательное" : "Ноль";
console.log(result);