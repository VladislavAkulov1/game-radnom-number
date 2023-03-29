let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numberToText(answerNumber)}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (maxValue - minValue <= 1){
            const phraseRandom = Math.round( Math.random() * 2);
             let answerPhrase;
             if (phraseRandom === 0) {
              answerPhrase = 'Вы загадали число не в заданом диапазоне. \n\u{1F914}';
             } else if (phraseRandom === 1) {
              answerPhrase = 'Вы меня обманываете!';
             } else {
              answerPhrase = 'Нужно загадать верное число!';
              }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${numberToText(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 2);
             let answerPhrase;
             if (phraseRandom === 0) {
              answerPhrase = 'Снова обогнал их, снова обогнал их....';
             } else if (phraseRandom === 1) {
              answerPhrase = 'Я опять угадал как же скучно.';
             } else {
              answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
              }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue - minValue <= 1){
            const phraseRandom = Math.round( Math.random() * 2);
             let answerPhrase;
             if (phraseRandom === 0) {
              answerPhrase = 'Вы загадали число не в заданом диапазоне. \n\u{1F914}';
             } else if (phraseRandom === 1) {
              answerPhrase = 'Вы меня обманываете!  \n\u{1F914}';
             } else {
              answerPhrase = 'Нужно загадать верное число!  \n\u{1F914}';
              }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${numberToText(answerNumber)}?`;
        }
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    const newMinValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    const newMaxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    if (!isNaN(newMinValue) && !isNaN(newMaxValue) && newMinValue < newMaxValue) {
        minValue = newMinValue;
        maxValue = newMaxValue;
        orderNumber = 1;
        gameRun = true;
        answerNumber = Math.floor((minValue + maxValue) / 2);
        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Вы загадали число ${numberToText(answerNumber)}?`;
    } else {
        alert('Вы ввели некорректные значения!');
    }
})

function numberToText(number) {
    const ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const tens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const thousands = ['', 'тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч'];
    const numberArray = number.toString().split('').reverse().map(Number);

    let text = '';
    if (number === 0) {
        text = 'ноль';
    } else {
        if (numberArray[3]) {
            text += thousands[numberArray[3]] + ' ';
        }
        if (numberArray[2]) {
            text += ones[numberArray[2]] + ' ' + 'сто' + ' ';
        }
        if (numberArray[1]) {
            if (numberArray[1] === 1) {
                text += teens[numberArray[0]] + ' ';
            } else {
                text += tens[numberArray[1]] + ' ';
                if (numberArray[0]) {
                    text += ones[numberArray[0]] + ' ';
                }
            }
        } else if (numberArray[0]) {
            text += ones[numberArray[0]] + ' ';
        }
    }

    return text.trim();
}