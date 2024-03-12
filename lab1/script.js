function triangle(value1, type1, value2, type2) {
    // Перевірка на нульові або від'ємні значення уведених даних
    if (value1 <= 0 || value2 <= 0) {
        console.log("Zero or negative input");
        return "failed";
    }

    // Визначення сторін та кутів трикутника
    let a, b, c, alpha, beta;

    switch (type1) {
        case "leg":
            a = value1;
            break;
        case "hypotenuse":
            c = value1;
            break;
        case "adjacent angle":
            alpha = value1;
            break;
        case "opposite angle":
            beta = value1;
            break;
        case "angle":
            if (value1 >= 90 || value1 <= 0) {
                console.log("Invalid angle value");
                return "failed";
            }
            // Кут є одним з гострих кутів, визначаємо його
            if (!alpha) {
                alpha = value1;
            } else {
                beta = value1;
            }
            break;
        default:
            console.log("Invalid type");
            return "failed";
    }

    switch (type2) {
        case "leg":
            b = value2;
            break;
        case "hypotenuse":
            c = value2;
            break;
        case "adjacent angle":
            alpha = value2;
            break;
        case "opposite angle":
            beta = value2;
            break;
        case "angle":
            if (value2 >= 90 || value2 <= 0) {
                console.log("Invalid angle value");
                return "failed";
            }
            // Кут є одним з гострих кутів, визначаємо його
            if (!alpha) {
                alpha = value2;
            } else {
                beta = value2;
            }
            break;
        default:
            console.log("Invalid type");
            return "failed";
    }

    // Перевірка на некоректність сторін трикутника
    if ((a && c && a >= c) || (b && c && b >= c)) {
        console.log("Invalid side lengths");
        return "failed";
    }

    // Розрахунок невідомих сторін та кутів
    if (a && b && !c) {
        c = Math.sqrt(a * a + b * b);
    } else if (a && c && !b) {
        b = Math.sqrt(c * c - a * a);
    } else if (b && c && !a) {
        a = Math.sqrt(c * c - b * b);
    }

    if (a && b && c && !alpha) {
        alpha = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * (180 / Math.PI);
        beta = 90 - alpha; // Другий кут обчислюємо як 90 градусів мінус перший кут
    } else if (a && b && c && !beta) {
        beta = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * (180 / Math.PI);
        alpha = 90 - beta; // Перший кут обчислюємо як 90 градусів мінус другий кут
    }

    // Перевірка на гострі кути
    if (alpha >= 90 || beta >= 90) {
        console.log("Obtuse angles");
        return "failed";
    }

    // Вивід результатів
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`alpha = ${alpha}`);
    console.log(`beta = ${beta}`);

    return "success";
}

// Приклади тестових запусків
console.log(triangle(7, "leg", 18, "hypotenuse"));
console.log(triangle(60, "opposite angle", 5, "leg"));
console.log(triangle(43.13, "angle", -2, "hypotenuse"));
