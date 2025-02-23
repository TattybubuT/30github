// Вывести в консоль текст
console.log("Привет, мир!"); 
console.log("Я изучаю JavaScript!");

// Создать переменные и изменить их значения
let name = "Айнура";
console.log(name); // Айнура

name = "Айжан"; 
console.log(name); // Айжан

const age = 22;
console.log(age); // 22

// age = 23;  // Ошибка, т.к. const нельзя изменять

//  Конвертация типов (строка → число, число → строка)
let num = "42";
console.log(typeof num); // string

let convertedNum = Number(num);
console.log(convertedNum, typeof convertedNum); // 42, number

let str = String(100);
console.log(str, typeof str); // "100", string

let bool = Boolean(""); 
console.log(bool); // false (пустая строка = false)

let bool2 = Boolean("Hello"); 
console.log(bool2); // true (непустая строка = true)

//  Вывести в консоль текст и переменные
let username = "Таттыбубу";
let country = "Кыргызстан";
let age1 = 22;

console.log("Привет, меня зовут " + username + "!"); 
console.log(`Я живу в ${country} и мне ${age1} года.`);

// Работа с переменными (let, const, var)

let city = "Бишкек";
console.log(city); // Бишкек

city = "Ош";
console.log(city); // Ош

const birthYear = 2002;
console.log(birthYear); // 2002

// birthYear = 2003; // Ошибка: const нельзя изменить

var hobby = "Чтение";
console.log(hobby); // Чтение

hobby = "Программирование";
console.log(hobby); // Программирование

// Работа со строками
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333
console.log(a % b); // 1 (остаток от деления)
console.log(a ** b); // 1000 (10 в степени 3)

// Конвертация типов (дополнительно)
let num1 = "25";
let num2 = "10.5";

console.log(Number(num1) + Number(num2)); // 35.5
console.log(parseInt(num2)); // 10 (переводит в целое число)
console.log(parseFloat(num2)); // 10.5 (оставляет дробную часть)

console.log(String(123)); // "123"
console.log((456).toString()); // "456"

console.log(Boolean(0)); // false (0 считается ложным значением)
console.log(Boolean(1)); // true (любое число, кроме 0, считается истиной)
console.log(Boolean("")); // false (пустая строка)
console.log(Boolean("Привет")); // true (непустая строка)

// Сравнения и логические операторы
console.log(5 > 3);  // true
console.log(10 < 3); // false
console.log(5 >= 5); // true
console.log(8 == "8");  // true (нестрогое равенство)
console.log(8 === "8"); // false (строгое равенство)
console.log(10 != 5); // true
console.log(10 !== "10"); // true

console.log(true && false); // false (и)
console.log(true || false); // true (или)
console.log(!true); // false (не)

// Простая программа для проверки возраста
let userAge = prompt("Введите ваш возраст:"); 
userAge = Number(userAge);

if (userAge >= 18) {
    console.log("Вы совершеннолетний!");
} else {
    console.log("Вы еще несовершеннолетний.");
}


