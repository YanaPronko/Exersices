// ТИПИЧНЫЕ ЗАДАЧИ

// 1) СИМВОЛ СТРОКИ
var str = 'fgfggg';
console.log(str[0]);
str[0] = "F"
console.log(str);
// Строки имммутабельны - прочитать можно, записать нет, только если целиком переписать

// 2)  Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4

// Поскольку, мы работаем с числами, надо расширить прототип Number новыми методами.

Number.prototype.plus = function (num) {
  return this + num;
};
Number.prototype.minus = function (num) {
  return this - num;
}

console.log((2).plus(3).minus(1));

// 3)