// 1. Створіть дві змінні для зберігання значень двох текстових полів.
// Перевірте, чи обидві змінні не є порожніми.
// Якщо обидва поля заповнені, вивести повідомлення
// "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

const textInput1 = "Ben"
const textInput2 = "Benson"

if (textInput1 && textInput2 !== false && textInput2 && textInput1 !== false) {
    console.log("All of the inputs are filled");
} else {
    console.log("Please, fill all of the remaining inputs");
}


// 2. Створіть дві змінні для зберігання числових значень.
// Обчисліть їх суму. Якщо сума більше 10 — виведіть
// "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".

const num1 = 12
const num2 = 6 
const sum = num1 + num2
if(sum > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

// 3. Створіть змінну для зберігання тексту.
// Перевірте, чи містить цей текст слово "JavaScript".
// Якщо містить, виведіть "Текст містить слово JavaScript",
// якщо ні — "Текст не містить слово JavaScript".

const textVar = "I love JavaScript" //after that try "I can code"
if (textVar.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}



// 4. Створіть змінну для зберігання числа.
// Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть
// "Число входить в діапазон від 10 до 20", якщо ні —
// "Число не входить в діапазон від 10 до 20".

const numberVar = 8 // to see the code works try 385623752650365263592789532
if (numberVar > 10 || numberVar < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}


// 5. Створіть змінні для зберігання значень полів (ім'я, email, пароль).
// Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього,
// а пароль не менше 6 символів. Якщо всі умови виконані —
// виведіть "Перенаправлення на іншу сторінку", якщо ні —
// "Помилка: неправильне заповнення".

const nameVar = "Tyler";
const emailVar = "tylerpayback@gmail.com"
const passwordVar = "ilovearabicmemez"

if (
    nameVar.length >= 3 &&
    emailVar.includes("@") &&
    emailVar.lastIndexOf(".") > emailVar.indexOf("@") &&
    passwordVar.length >= 6
) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}

