import TripInfoView from "./view/trip-info.js";
import MenuView from "./view/menu.js";
import FiltersView from "./view/filters.js";
import SortView from "./view/sort.js";
/* import PointView from "./view/point.js";
import DayListView from "./view/dayList.js";
import DayView from "./view/day.js";
import TripPointListView from "./view/tripPointList.js";
import FormEditView from "./view/formEdit.js"; */
import {generateTripData} from "./mock/data.js";
import {render, RenderPosition, replace, remove} from "./utils/render.js";

import TripPresenter from "./presenter/trip.js"


const EVENT_COUNT = 5;

const tripPoints = new Array(EVENT_COUNT).fill().map(generateTripData);

const pageHeader = document.querySelector(`.page-header`);
const tripInfo = pageHeader.querySelector(`.trip-main`);
const menuHeader = pageHeader.querySelector(`h2:first-child`);
const filterHeader = pageHeader.querySelector(`h2:last-child`);
const pageMain = document.querySelector(`.page-main`);
const tripEvents = pageMain.querySelector(`.trip-events`);

render(tripInfo, new TripInfoView(), RenderPosition.AFTERBEGIN);
render(menuHeader, new MenuView(), RenderPosition.AFTEREND);
render(filterHeader, new FiltersView(), RenderPosition.AFTEREND);
render(tripEvents, new SortView(), RenderPosition.BEFOREEND);

const tripPresenter = new TripPresenter(tripEvents);

/* const dayList = new DayListView();

render(tripEvents, dayList, RenderPosition.BEFOREEND);

const tripDayList = new DayView();

render(dayList, tripDayList, RenderPosition.BEFOREEND);

const pointList = new TripPointListView();

render(tripDayList, pointList, RenderPosition.BEFOREEND);

const renderPoint = (pointListElement, pointData) => {
  const point = new PointView(pointData);
  const editPoint = new FormEditView(pointData);
  render(pointListElement, point, RenderPosition.BEFOREEND);
  point.setShowEdit(() => {
    replace(editPoint, point);
  });
  editPoint.getElement();
  editPoint.setCloseEdit(() => {
    replace(point, editPoint);
  });
};

for (let i = 0; i < EVENT_COUNT; i++) {
  renderPoint(pointList.getElement(), tripPoints[i]);
} */

tripPresenter.init(tripPoints);



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
