function analyzeStudentGrades(grades) {
    if (grades.length === 0) {
        console.log("Ошибка: массив оценок пуст!");
        return;
    }

    // 1. Средняя оценка
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    let average = (sum / grades.length).toFixed(2); // Округляем до 2 знаков

    // 2. Определение сдачи курса
    let isPassed = average >= 5 ? "Курс сдан ✅" : "Курс не сдан ❌";

    // 3. Максимальная и минимальная оценка
    let maxGrade = Math.max(...grades);
    let minGrade = Math.min(...grades);

    // 4. Определение ранга студента
    let rank;
    if (average >= 8) {
        rank = "Отличник";
    } else if (average >= 5) {
        rank = "Хорошист";
    } else {
        rank = "Двоечник";
    }

    // Вывод результатов
    console.log(`Средняя оценка: ${average}`);
    console.log(`Максимальная оценка: ${maxGrade}`);
    console.log(`Минимальная оценка: ${minGrade}`);
    console.log(isPassed);
    console.log(`Ранг студента: ${rank}`);
}

// Пример использования
let grades = [7, 8, 9, 6, 5, 7, 8];
analyzeStudentGrades(grades);
