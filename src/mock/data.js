import {getRandomInteger} from "../utils/common.js";
import {shuffle} from "../utils/common.js";

const DESCRIPTION_LENGTH = 5;
const MIN_PRICE = 1;
const MAX_PRICE = 1000;

const generateTripType = () => {
  const tripTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];
  const randomIndex = getRandomInteger(0, tripTypes.length - 1);
  return tripTypes[randomIndex];
};

const generateCity = () => {
  const cities = [`Amsterdam`, `Chamonix`, `Geneva`, `Saint-Petersburg`];
  const randomIndex = getRandomInteger(0, cities.length - 1);
  return cities[randomIndex];
};

const generateChecked = () => {
  return (
    Boolean(getRandomInteger(0, 1))
  );
};

const generateOfferType = () => {

  const isChecked = generateChecked();

  const offers = [
    {offerDescription: `Add luggage`, offerPrice: 30, checked: isChecked},
    {offerDescription: `Switch to comfort class`, offerPrice: 100, checked: isChecked},
    {offerDescription: `Add meal`, offerPrice: 15, checked: isChecked},
    {offerDescription: `Choose seats`, offerPrice: 5, checked: isChecked},
    {offerDescription: `Travel by train`, offerPrice: 40, checked: isChecked}
  ];
  const randomIndex = getRandomInteger(0, offers.length - 1);
  return shuffle(offers).slice(0, randomIndex);
};

const generateDescription = () => {
  const sentences = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
    `Cras aliquet varius magna, non porta ligula feugiat eget. `,
    `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. `,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. `,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. `,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. `,
    `Sed sed nisi sed augue convallis suscipit in sed felis. `,
    `Aliquam erat volutpat. `,
    `Nunc fermentum tortor ac porta dapibus. `,
    `In rutrum ac purus sit amet tempus. `
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
  return getRandomInteger(MIN_PRICE, MAX_PRICE);
};

const generateStartTime = () => {
  const timeValue = [`12:00`, `12:30`, `13:00`, `13:30`, `14:00`, `14:30`];
  const randomIndex = getRandomInteger(0, timeValue.length - 1);
  return timeValue[randomIndex];
};

const generateEndTime = () => {
  const timeValue = [`15:30`, `16:00`, `16:30`, `17:00`, `17:30`, `18:00`];
  const randomIndex = getRandomInteger(0, timeValue.length - 1);
  return timeValue[randomIndex];
};

const generateTripData = () => {
  return {
    type: generateTripType(),
    city: generateCity(),
    offers: generateOfferType(),
    description: generateDescription(),
    price: generatePrice(),
    startTime: generateStartTime(),
    endTime: generateEndTime(),
    pictures: generatePictures(),
  };
};

export {generateTripData};
