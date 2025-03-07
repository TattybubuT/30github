// Проверка четного и нечетного числа
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`Число ${number} четное`);
    } else {
        console.log(`Число ${number} нечетное`);
    }
}

checkEvenOdd(4);
checkEvenOdd(7);
checkEvenOdd(0);