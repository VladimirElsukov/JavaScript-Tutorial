// Задача №2: Работа парикмахера
// Парикмахерская применяет скидки клиентам в зависимости от длины стрижки. Если длина волос клиента превышает 30 см, скидка составляет 15%, если короче — скидка равна 10%.

// Напишите функцию calculateDiscount(lengthOfHair), использующую тернарный оператор, которая рассчитывает скидку клиента.


function calculateDiscount(lengthOfHair) {
  return lengthOfHair >= 30 ? "Скидка: 15 процентов" : "Скидка: 10 процентов";
}

console.log(calculateDiscount(29))
console.log(calculateDiscount(30))