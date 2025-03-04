// Определение возраста и статуса
function checkAge(age) {
    if (age >= 0 && age <= 2) {
        console.log("Вы младенец.");
    } else if (age >= 3 && age <= 12) {
        console.log("Вы ребенок.");
    } else if (age >= 13 && age <= 17) {
        console.log("Вы подросток.");
    } else if (age >= 18 && age <= 64) {
        console.log("Вы взрослый.");
    } else if (age >= 65) {
        console.log("Вы пожилой.");
    } else {
        console.log("Некорректный возраст.");
    }
}

checkAge(1);
checkAge(10);
checkAge(16);
checkAge(30);
checkAge(70);

// Оценка на основе баллов
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else if (score < 60 && score >= 0) {
        return "F";
    } else {
        return "Ошибка: некорректный балл!";
    }
}

console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(74));
console.log(getGrade(65));
console.log(getGrade(50));