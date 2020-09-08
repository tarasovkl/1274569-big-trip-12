import TripInfoView from "./view/trip-info.js";
import MenuView from "./view/menu.js";
import FiltersView from "./view/filters.js";
import SortView from "./view/sort.js";
import PointView from "./view/point.js";
import DayListView from "./view/dayList.js";
import DayView from "./view/day.js";
import TripPointListView from "./view/tripPointList.js";
import FormEditView from "./view/formEdit.js";
import {generateTripData} from "./mock/data.js";
import {renderElement, RenderPosition} from "./utils/utils.js";


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

const dayList = new DayListView();

renderElement(tripEvents, dayList.getElement(), RenderPosition.BEFOREEND);

const tripDayList = new DayView();

renderElement(dayList.getElement(), tripDayList.getElement(), RenderPosition.BEFOREEND);

const pointList = new TripPointListView();

renderElement(tripDayList.getElement(), pointList.getElement(), RenderPosition.BEFOREEND);

const renderPoint = (pointListElement, pointData) => {
  const point = new PointView(pointData);
  const editPoint = new FormEditView(pointData);
  renderElement(pointListElement, point.getElement(), RenderPosition.BEFOREEND);
  point.addToggleCallback(() => {
    pointListElement.replaceChild(editPoint.getElement(), point.getElement());
  });
  editPoint.getElement();
  editPoint.addToggleCallback(() => {
    pointListElement.replaceChild(point.getElement(), editPoint.getElement());
  });
};

for (let i = 0; i < EVENT_COUNT; i++) {
  renderPoint(pointList.getElement(), tripPoints[i]);
}

/* const tripPointsList = pageMain.querySelectorAll(`.trip-events__item`);
const pointsTotal = Array.from(tripPointsList).slice(0, tripPointsList.length);
const pointEditButtons = pageMain.querySelectorAll(`.event__rollup-btn`); */

/* pointEditButtons.forEach((button, i) => {
  button.addEventListener(`click`, () => {
    renderElement(pointsTotal[i], new FormView(tripPoints[i]).getElement(), RenderPosition.BEFOREEND);
    const formHeader = document.querySelector(`.event__header`);
    renderElement(formHeader, new FormOfferView(tripPoints[i]).getElement(), RenderPosition.AFTEREND);
  })
}); */
