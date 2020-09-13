import AbstractView from "./abstract.js";

const createTripPointListTemplate = () => {
  return (`<ul class="trip-events__list"></ul>`);
};

export default class TripPointList extends AbstractView{

  getTemplate() {
    return createTripPointListTemplate();
  }
}
