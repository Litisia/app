/* Задание 1. Перепишите if с использованием оператора "?" */
let a = +prompt ('Введите число "a"');
let b = +prompt ('Введите число "b"');
let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

/*Задание 2. Перепишите if...else с использованием нескольких операторов '?'*/

let login = prompt ("Введите Логин:");
let message;
message = (login == "Вася") ? "Привет" 
: (login == "Директор") ? "Здравствуйте" 
: (login == "") ? "Нет логина" 
: 'Такого имени не существует';
alert(message);

document.write('<br/>');

/* Задание 3. Дано два числа A и B где (A<B). 
Выведите на экран сумму всех чисел, 
расположенных в числовом промежутке от A до B. 
Выведите на экран все нечетные значения, расположенные 
в числовом промежутке от A до B.*/

alert(" Введите поочереди 2 числа, при условии  А < В");
let A = prompt ("Введите число A");
let B = prompt ("Введите число B");
let summa = 0;
for (let i = Number(A); i < B; i++) {
    summa = summa + i;
}
document.write("Сумма всех чисел от А до В = ", summa, "<br>");
document.write("Нечетные значения чисел от А до В: ");
for (let i = A; i < B; i++) {
    if (i % 2 != 0) {
        document.write(i + " ");
    }
}

document.write('<br/>');
/*Задание 4. Используя циклы нарисуйте в браузере с помощью пробелов и '*':
|Прямоугольник|Прямоугольный треугольник|Равносторонний треугольник|Ромб|*/
/*|Прямоугольник|*/
for (let k = 10; k > 0; k--) {
    document.write("<br>") //разрыв строки 
    for (let i = 9; i > 0; i--) {
        document.write("*") //создаем звездочки
     }
 }

 document.write('<br/>');
/*|Прямоугольный треугольник|*/
for(let i = 0; i < 10; i++){
     for(let j = 0; j < i; j++) {
        document.write('*'); //создаем звездочки
    }
    document.write('<br/>'); //разрыв строки 
}
document.write('<br/>');
/*|Равносторонний треугольник|*/
let bos = "&nbsp";
    for (let i = 0; i < 7; i++) {
      for (let j = 8; j > i; j--) {
        document.write(bos + bos); // создаем пробелы 
      }
      for (let j = 0; j < i; j++) {
        document.write("*" + bos + bos); 
      //создаем звездочки + пробелы + пробелы
      }
      document.write("<br>"); //разрыв строки 
    }
document.write('<br/>');  
/*|Ромб|*/
//Верхний треугольник ромба
    for (let i = 0; i < 7; i++) {
      for (let j = 8; j > i; j--) {
        document.write(bos + bos); // создаем пробелы 
      }
      for (let j = 0; j < i; j++) {
        document.write("*" + bos + bos); 
      //создаем звездочки + пробелы + пробелы
      }
      document.write("<br>"); //разрыв строки 
    }
//Нижний треугольник ромба
    for (let i = 7; i > 0; i--) {
      for (let j = 8; j > i; j--) {
        document.write(bos + bos); // создаем пробелы 
      }
      for (let j = 0; j < i; j++) {
        document.write("*" + bos + bos); 
      //создаем звездочки + пробелы + пробелы
      }
      document.write("<br>"); //разрыв строки 
    }