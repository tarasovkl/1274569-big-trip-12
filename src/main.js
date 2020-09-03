import { createTripInfoTemplate } from "./view/trip-info.js";
import MenuView from "./view/menu.js";
import { createFiltersTemplate } from "./view/filters.js";
import { createSortTemplate } from "./view/sort.js";
import { createFormTemplate } from "./view/form.js";
import { createFormOfferTemplate } from "./view/formOffer.js";
import EventView from "./view/point.js";
import { createDayListTemplate } from "./view/dayList.js";
import { createDayTemplate } from "./view/day.js";
import { generateTripData } from "./mock/data.js";
import { renderTemplate, renderElement, RenderPosition} from "./utils/utils.js";

const EVENT_COUNT = 5;

const tripPoints = new Array(EVENT_COUNT).fill().map(generateTripData);

const pageHeader = document.querySelector(`.page-header`);
const tripInfo = pageHeader.querySelector(`.trip-main`);
const menuHeader = pageHeader.querySelector(`h2:first-child`);
const filterHeader = pageHeader.querySelector(`h2:last-child`);
const pageMain = document.querySelector(`.page-main`);
const tripEvents = pageMain.querySelector(`.trip-events`);

renderTemplate(tripInfo, createTripInfoTemplate(), `afterbegin`);
renderElement(menuHeader, new MenuView().getElement(), RenderPosition.AFTEREND);
renderTemplate(filterHeader, createFiltersTemplate(), `afterend`);
renderTemplate(tripEvents, createSortTemplate(), `beforeend`);
renderTemplate(tripEvents, createDayListTemplate(), `beforeend`);

const tripDayList = pageMain. querySelector(`.trip-days`);

renderTemplate(tripDayList, createDayTemplate(), `beforeend`);

const eventList = pageMain.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENT_COUNT; i++) {
  renderElement(eventList, new EventView(tripPoints[i]).getElement(), RenderPosition.BEFOREEND);
};

const tripPointsList = pageMain.querySelectorAll(`.trip-events__item`);
const pointsTotal = Array.from(tripPointsList).slice(0, tripPointsList.length);
const pointEditButtons = pageMain.querySelectorAll(`.event__rollup-btn`);

pointEditButtons.forEach((button, i) => {
  button.addEventListener(`click`, () => {
    renderTemplate(pointsTotal[i], createFormTemplate(tripPoints[i]), `beforeend`);
    const formHeaders = document.querySelectorAll(`.event__header`);
    console.log(formHeaders);
    renderTemplate(formHeaders[i], createFormOfferTemplate(tripPoints[i]), `afterend`);
  })
});
