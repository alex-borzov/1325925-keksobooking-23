//* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloat(min, max, numFix) {
  if (min < 0 || max <= min || numFix < 0) {
    return 'Неверный ввод параметров';
  }
  const numb = Math.random() * (max - min + 1) + min;//Максимум и минимум включаются
  return Number(numb.toFixed(numFix));
}

getRandomFloat();

//* Функция, возвращающая случайное целое число из переданного диапазона включительно(сайт MDN).

function getRandomIntInclusive(min, max) {
  if (min < 0 || max <= min) {
    return 'Неверный ввод параметров';
  }
  min = Math.ceil(min);
  max = Math.floor(max);

  const numbInt = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  return numbInt;
}

getRandomIntInclusive();
