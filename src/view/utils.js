const DESCRIPTION_LENGTH = 5;
const MIN_PRICE = 50;
const MAX_PRICE = 200;
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
/**
 */
const generateTripType = () => {
  const tripTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];
  const randomIndex = getRandomInteger(0, tripTypes.length - 1);
  return tripTypes[randomIndex];
};
/**
 */
const generateCity = () => {
  const cities = [`Amsterdam`, `Chamonix`, `Geneva`, `Saint-Petersburg`]
  const randomIndex = getRandomInteger(0, cities.length - 1);
  return cities[randomIndex];
};

const generateOfferType = () => {
  const offer = [
    {description: `Add luggage`, price: 30},
    {description: `Switch to comfort class`, price: 100},
    {description: `Add meal`, price: 15},
    {description: `Choose seats`, price: 5},
    {description: `Travel by train`, price: 40}
  ];
  const randomIndex = getRandomInteger(0, offer.length - 1);
  return shuffle(offer).slice(0, randomIndex);
};

const generateDescription = () => {
  const sentences = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];
  return shuffle(sentences).slice(0, DESCRIPTION_LENGTH);
};

const generatePictures = () => {
  const pictures = [
    `img/photos/1.jpg`,
    `img/photos/2.jpg`,
    `img/photos/3.jpg`,
    `img/photos/4.jpg`,
    `img/photos/5.jpg`,
  ];
  const randomIndex = getRandomInteger(0, pictures.length - 1);
  return shuffle(pictures).slice(0, randomIndex);
};

const generatePrice = () => {
  return getRandomInteger(MIN_PRICE,MAX_PRICE);
};

const generateTripData = () => {
  return {
    type: generateTripType(),
    city: generateCity(),
    offer: generateOfferType(),
    description: generateDescription(),
    photo: generatePictures(),
    price : generatePrice(),
  };
};

export {generateTripData};
