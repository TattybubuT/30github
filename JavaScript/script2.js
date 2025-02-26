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

// Цикл for:
for (let i = 1; i <= 10; i++) {
    console.log(i); // Выведет числа от 1 до 10
}

// Цикл while:
let a = 1;
while (a <= 10) {
    console.log(a); // Выведет числа от 1 до 10
    a++;
}

// Цикл do...while:
let b = 1;
do {
    console.log(b); // Выведет числа от 1 до 10
    b++;
} while (b <= 10);

// Операторы break и continue:
for (let c = 1; c <= 10; c++) {
    if (c === 5) {
        break; // Останавливает цикл, если i равно 5
    }
    console.log(c);
}

for (let d = 1; d <= 10; d++) {
    if (d === 5) {
        continue; // Пропускает итерацию, если i равно 5
    }
    console.log(d); 
}