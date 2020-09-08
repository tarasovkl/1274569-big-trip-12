import {createElement} from "../utils/utils.js";

const createFormTemplate = (pointDetails) => {
  const {startTime, endTime, price, type, city} = pointDetails;
  const createTransferTemplate = () => {
    const tripTransfer = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
    return tripTransfer.map((transfer) =>
      `<div class="event__type-item">
<input id="event-type-${transfer.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${transfer.toLocaleLowerCase()}">
<label class="event__type-label  event__type-label--${transfer.toLocaleLowerCase()}" for="event-type-${transfer.toLocaleLowerCase()}-1">${transfer}</label>
</div>`).join(``);
  };

  const createTransferList = createTransferTemplate();

  const createActivityTemplate = () => {
    const tripActivity = [`Check-in`, `Sightseeing`, `Restaurant`];
    return tripActivity.map((activity) =>
      `<div class="event__type-item">
      <input id="event-type-${activity.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${activity.toLowerCase()}">
      <label class="event__type-label  event__type-label--${activity.toLowerCase()}" for="event-type-check-in-1">${activity}</label>
    </div>`).join(``);
  };

  const createActivityList = createActivityTemplate();

  const createCityTemplate = () => {
    const cities = [`Amsterdam`, `Chamonix`, `Geneva`, `Saint-Petersburg`];
    return cities.map((cityName) =>
      `<option value="${cityName}"></option>`).join(``);
  };

  const createCityList = createCityTemplate();


  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type === `Check` ? `check-in` : type.toLowerCase()}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Transfer</legend>

            ${createTransferList}
          </fieldset>

          <fieldset class="event__type-group">
            <legend class="visually-hidden">Activity</legend>
            ${createActivityList}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${[`Sightseeing`, `Check`, `Restaurant`].includes(type) ? type + ` in` : type + ` to`}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
        <datalist id="destination-list-1">
        ${createCityList}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">
          From
        </label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 ${startTime}">
        —
        <label class="visually-hidden" for="event-end-time-1">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 ${endTime}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
  </form>`
  );
};

export default class Form {
  constructor(pointDetails) {
    this._element = null;
    this._tripPoint = pointDetails;
  }

  getTemplate() {
    return createFormTemplate(this._tripPoint);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  addToggleCallback(callback) {
    if (this._element) {
      this._element.querySelector(`.event__rollup-btn`).addEventListener(`click`, callback);
    }
  }
}
