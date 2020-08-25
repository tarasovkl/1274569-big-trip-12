import { createTripInfoTemplate } from "./view/trip-info.js";
import { createMenuTemplate } from "./view/menu.js";
import { createFiltersTemplate } from "./view/filters.js";
import { createSortTemplate } from "./view/sort.js";
import { createFormTemplate } from "./view/form.js";
import { createFormOfferTemplate } from "./view/formOffer.js";
import { createEventTemplate } from "./view/point.js";
import { createDayListTemplate } from "./view/dayList.js";
import { generateTripData } from "./mock/data.js";

const EVENT_COUNT = 5;

const tripPoints = new Array(EVENT_COUNT).fill().map(generateTripData);

console.log(tripPoints);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const pageHeader = document.querySelector(`.page-header`);
const tripInfo = pageHeader.querySelector(`.trip-main`);
const menuHeader = pageHeader.querySelector(`h2:first-child`);
const filterHeader = pageHeader.querySelector(`h2:last-child`);
const pageMain = document.querySelector(`.page-main`);
const tripEvents = pageMain.querySelector(`.trip-events`);


render(tripInfo, createTripInfoTemplate(), `afterbegin`);
render(menuHeader, createMenuTemplate(), `afterend`);
render(filterHeader, createFiltersTemplate(), `afterend`);
render(tripEvents, createSortTemplate(), `beforeend`);
render(tripEvents, createDayListTemplate(), `beforeend`);



const eventList = pageMain.querySelector(`.trip-events__list`);


for (let i = 0; i < EVENT_COUNT; i++) {
  render(eventList, createEventTemplate(tripPoints[i]), `beforeend`);
};


const tripPointsList = pageMain.querySelectorAll(`.trip-events__item`);
const pointsTotal = Array.from(tripPointsList).slice(0, tripPointsList.length);
const pointEditButtons = pageMain.querySelectorAll(`.event__rollup-btn`);

pointEditButtons.forEach((button, i) => {
  button.addEventListener(`click`, () => {
    render(pointsTotal[i], createFormTemplate(tripPoints[i]), `beforeend`);
    const formHeaders = document.querySelectorAll(`.event__header`);
    render(formHeaders[i], createFormOfferTemplate(tripPoints[i]), `afterend`);
  })

});
