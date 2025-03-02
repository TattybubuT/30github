// 1. Проверка палиндрома
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, ""); // Убираем пробелы и знаки препинания
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("А роза упала на лапу Азора")); // true

// 2. Факториал числа (цикл и рекурсия)
function factorial(n) {
    if (n < 0) return "Ошибка: отрицательное число!";
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(n) {
    if (n < 0) return "Ошибка: отрицательное число!";
    return n === 0 ? 1 : n * factorialRecursive(n - 1);
}

console.log(factorial(5));  // 120
console.log(factorialRecursive(5));  // 120

// 3. Фильтрация уникальных значений в массиве
function uniqueValues(arr) {
    return [...new Set(arr)]; // Используем Set
}

console.log(uniqueValues([1, 2, 3, 2, 1, 4, 5, 6, 4])); 
// [1, 2, 3, 4, 5, 6]

// 4. Генератор случайного пароля
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

console.log(generatePassword(8));  // Пример: "aB3dE9fG"

// 5. Самое длинное слово в строке
function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = words[0];

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("JavaScript is an amazing programming language")); 
// "programming"
