// Функция для проверки возраста и отображения соответствующего сообщения
function checkAccess() {
  // Берем введенное значение возраста
  const age = document.getElementById("ageInput").value;

  // Проверяем, достаточно ли возраст для доступа
  const resultMessage = age >= 18 ? "Доступ разрешен." : "Возраст ограничен.";

  // Показываем результат
  document.getElementById("result").innerText = resultMessage;
}