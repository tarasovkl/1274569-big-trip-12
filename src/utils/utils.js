/**
 * Возвращает случайное число из диапазона
 * @param  {number} a=0
 * @param  {number} b=1
 * @return число
 */
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
/**
 * Меняет порядок элементов в массиве
 * @param  {array} arr
 * @return массив
 */
const shuffle = (arr) => {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};

export {getRandomInteger, shuffle};
