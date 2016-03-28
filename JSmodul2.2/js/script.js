
//ДЗ 1-2 Заполнить массив циклом


var arrey = [];
var i;

console.log('Arrey =',arrey);
console.log('Длина массива =',arrey.length);
alert('Введите 5 любых имен');

for (i = 0; i < 5; i++) {
    arrey[i] = prompt('Введите имя');
}
console.log('Arrey =',arrey);
console.log('Длина массива =',arrey.length);

var userName = prompt('Введите Ваше имя');
var nameCheck;

for (i = 0; i < arrey.length; i++) {
    if (userName === arrey[i]) {
        alert(userName + ', Вы успешно вошли');
        nameCheck = 0;
        break;
    }
}
if (nameCheck != 0) {
    alert('Ошибка входа');
}










