const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`,
};

const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

/**
 * Возвращает случайное число из диапазона
 * @param  {number} a=0
 * @param  {number} b=1
 * @return number
 */
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
/**
 * Меняет порядок элементов в массиве
 * @param  {array} arr
 * @return array
 */
const shuffle = (arr) => {
  let j, x, i;
  let newArr = [];
  newArr = arr;
  for (i = newArr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = x;
  }
  return newArr;
};

export {getRandomInteger, shuffle, RenderPosition, renderElement, renderTemplate, createElement};


