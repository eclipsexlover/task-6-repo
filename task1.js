let a = 5;
let b = 3;
let product = a * b;
let sum = a + b;
console.log(product);
console.log(sum);

let str1 = "Hello";
let str2 = "World";
let totalLength = str1.length + str2.length;
console.log(totalLength);


let c = +prompt("Введите первое число:");
let d = +prompt("Введите второе число:");

if (c > d) {
    console.log("Наибольшее число: " + c);
} else if (d > c) {
    console.log("Наибольшее число: " + d);
} else {
    console.log("Числа равны");
}

const monthNumber = +prompt("Введите число от 1 до 12:");

if (monthNumber === 1) {
    console.log("Январь");
} else if (monthNumber === 2) {
    console.log("Февраль");
} else if (monthNumber === 3) {
    console.log("Март");
} else if (monthNumber === 4) {
    console.log("Апрель");
} else if (monthNumber === 5) {
    console.log("Май");
} else if (monthNumber === 6) {
    console.log("Июнь");
} else if (monthNumber === 7) {
    console.log("Июль");
} else if (monthNumber === 8) {
    console.log("Август");
} else if (monthNumber === 9) {
    console.log("Сентябрь");
} else if (monthNumber === 10) {
    console.log("Октябрь");
} else if (monthNumber === 11) {
    console.log("Ноябрь");
} else if (monthNumber === 12) {
    console.log("Декабрь");
} else {
    console.log("Ошибка! Введите число от 1 до 12");
}

let sum = 0; 
let number = 50;

while (number <= 100) {
    sum = sum + number; 
    number = number + 1; 
}

console.log("Сумма всех целых чисел от 50 до 100: " + sum);

for (let i = 1; i <= 9; i = i + 1) {
    let result = 7 * i;
    console.log("7 x " + i + " = " + result);
}

let user = {
  name: "John",
};

const age = prompt("Пожалуйста, введите ваш возраст:");

let ageNumber = Number(age);

let admin = Object.assign({}, user, { age: ageNumber, role: 'admin' });
let { name, age: ageAdmin, role } = admin;

console.log(name);
console.log(ageAdmin);
console.log(role);

//задание 5
let array = [4, 7, 12, 5, 9, 3, 15, 8, 6, 11];
console.log("Исходный массив:", array);
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log("1. Сумма всех элементов массива:", sum);
let doubledArray = [];
for (let i = 0; i < array.length; i++) {
    doubledArray.push(array[i] * 2); 
}

console.log("2. Новый массив с удвоенными элементами:", doubledArray);

//задание 6
let f = +prompt("Введите первое число:");
let g = +prompt("Введите второе число:");

function diff(f, g) {
    if (f > g) {
        return f - g;
    }
    return g - f;
}

console.log("Разница между числами:", diff(f, g));

let text = prompt("Введите текст:");

function isWord(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            return false;
        }
    }
    return true;
}

console.log(isWord(text));

<!DOCTYPE html>
<html>
<head>
    <title>DOM задание</title>
</head>
<body>
    <p>Первый параграф</p>
    <p>Второй параграф</p>
    <p>Третий параграф</p>
    
    <input type="text" id="textInput">
    <button id="addButton">Добавить параграф</button>
    
    <script src="script.js"></script>
</body>
</html>

let input = document.getElementById('textInput');
let button = document.getElementById('addButton');

button.style.display = 'none';

input.oninput = function() {
    if (input.value === '') {
        button.style.display = 'none'; 
    } else {
        button.style.display = 'block';
    }
};

button.onclick = function() {
  
    let newParagraph = document.createElement('p');
    newParagraph.textContent = input.value;
    
    document.body.insertBefore(newParagraph, input);
   
    input.value = '';
    button.style.display = 'none';
};

//задание 8

let userDate = prompt("Введите дату в формате ДД.ММ.ГГГГ:");
let parts = userDate.split('.');
let date = new Date(parts[2], parts[1] - 1, parts[0]);
let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
console.log("День недели: " + daysOfWeek[date.getDay()]);

let now = new Date();
let startOfDay = new Date();
startOfDay.setHours(0, 0, 0, 0);
let minutes = Math.floor((now - startOfDay) / (1000 * 60));
console.log("Минут с начала дня: " + minutes);

// задание 9
let h = +prompt("Введите длину первой стороны треугольника:");
let k = +prompt("Введите длину второй стороны треугольника:");
let l = +prompt("Введите длину третьей стороны треугольника:");

if (h * h + k * k === l * l || h * h + l * l === k * k || k * k + l * l === h * h) {
    console.log("Треугольник прямоугольный");
} else {
    console.log("Треугольник НЕ прямоугольный");
}

let R = +prompt("Введите радиус круга:");
let length = 2 * 3.14 * R;
let area = 3.14 * R * R;

console.log("Длина окружности: " + length.toFixed(2));
console.log("Площадь круга: " + area.toFixed(2));


let userInput = prompt("Введите строку для проверки:");

const dateReg = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
if (dateReg.test(userInput)) {
    console.log("Это дата");
} else {
    console.log("Это НЕ дата");
}

const emailReg = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
if (emailReg.test(userInput)) {
    console.log("Это email");
} else {
    console.log("Это НЕ email");
}
