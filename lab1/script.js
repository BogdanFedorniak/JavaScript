function triangle(value1, type1, value2, type2) {
    // Функція для перевірки чи є число додатнім
    function isPositive(value) {
        return value > 0;
    }

    // Перевірка чи є введені значення коректними
    if (!isPositive(value1) || !isPositive(value2)) {
        console.log("Значення аргументів повинні бути додатніми числами.");
        return "failed";
    }

    // Перевірка чи є введені типи коректними
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Некоректні типи аргументів.");
        return "failed";
    }

    // Ініціалізуємо змінні для сторін трикутника та кутів
    let a, b, c, alpha, beta;

    // Розглядаємо всі можливі варіанти введених типів
    if (type1 === "leg" && type2 === "leg") {
        console.log("Помилка: Обидва аргументи не можуть бути катетами.");
        return "failed";
    } else if (type1 === "leg" && type2 === "hypotenuse") {
        a = value1;
        c = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        c = value1;
        a = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.atan(a / b) * (180 / Math.PI);
        beta = 90 - alpha;
    } else if ((type1 === "leg" && type2 === "angle") || (type1 === "angle" && type2 === "leg")) {
        console.log("Помилка: Один з аргументів є катетом, а інший - кутом.");
        return "failed";
    } else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        console.log("Помилка: Один з аргументів є гіпотенузою, а інший - кутом.");
        return "failed";
    } else if (type1 === "angle" && type2 === "angle") {
        console.log("Помилка: Обидва аргументи не можуть бути кутами.");
        return "failed";
    }

    // Перевірка на некоректність отриманих значень
    if (!isPositive(b) || !isPositive(alpha) || !isPositive(beta)) {
        console.log("Помилка: Трикутник з такими параметрами не існує.");
        return "failed";
    }

    // Виведення результатів
    console.log("a:", a.toFixed(2), "b:", b.toFixed(2), "c:", c.toFixed(2), "alpha:", alpha.toFixed(2) + "°", "beta:", beta.toFixed(2) + "°");
    return "success";
}

// Приклади тестових запусків
triangle(3, "leg", 4, "hypotenuse");
triangle(4, "hypotenuse", 3, "leg");
triangle(5, "leg", 53.13, "angle");
triangle(53.13, "angle", 5, "leg");
triangle(3, "hypotenuse", 53.13, "angle");
triangle(53.13, "angle", 3, "hypotenuse");
triangle(4, "leg", 90, "angle");
triangle(90, "angle", 4, "leg");
triangle(3, "leg", 4, "leg");
triangle(3, "angle", 4, "angle");
