import TripInfoView from "./view/trip-info.js";
import MenuView from "./view/menu.js";
import FiltersView from "./view/filters.js";
import SortView from "./view/sort.js";
import FormView from "./view/form.js";
import FormOffer from "./view/formOffer.js";
import PointView from "./view/point.js";
import DayListView from "./view/dayList.js";
import DayView from "./view/day.js";
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

renderElement(tripInfo, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);
renderElement(menuHeader, new MenuView().getElement(), RenderPosition.AFTEREND);
renderElement(filterHeader, new FiltersView().getElement(), RenderPosition.AFTEREND);
renderElement(tripEvents, new SortView().getElement(), RenderPosition.BEFOREEND);
renderElement(tripEvents, new DayListView().getElement(), RenderPosition.BEFOREEND);

const tripDayList = pageMain. querySelector(`.trip-days`);

renderElement(tripDayList, new DayView().getElement(), RenderPosition.BEFOREEND);

const eventList = pageMain.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENT_COUNT; i++) {
  renderElement(eventList, new PointView(tripPoints[i]).getElement(), RenderPosition.BEFOREEND);
};

const tripPointsList = pageMain.querySelectorAll(`.trip-events__item`);
const pointsTotal = Array.from(tripPointsList).slice(0, tripPointsList.length);
const pointEditButtons = pageMain.querySelectorAll(`.event__rollup-btn`);

pointEditButtons.forEach((button, i) => {
  button.addEventListener(`click`, () => {
    renderElement(pointsTotal[i], new FormView(tripPoints[i]).getElement(), RenderPosition.BEFOREEND);
    const formHeader = document.querySelector(`.event__header`);
    renderElement(formHeader, new FormOffer(tripPoints[i]).getElement(), RenderPosition.AFTEREND);
  })
});
