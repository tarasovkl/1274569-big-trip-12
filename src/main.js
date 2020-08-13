import {createTripInfoTemplate} from "./view/trip-info.js";
import {createMenuTemplate} from "./view/menu.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createSortTemplate} from "./view/sort.js";
import {createFormTemplate} from "./view/form.js";
import {createEventTemplate} from "./view/event.js";
import {createDayList} from "./view/day.js";

const EVENT_COUNT = 3;

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
render(tripEvents, createFormTemplate(), `beforeend`);
render(tripEvents, createDayList(), `beforeend`);

const eventList = pageMain.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENT_COUNT; i++) {
  render (eventList, createEventTemplate(), `beforeend`);
};
