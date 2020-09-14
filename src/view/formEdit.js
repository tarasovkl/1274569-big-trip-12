import AbstractView from "./abstract.js";

const createFormEditTemplate = (pointDetails) => {
  const {offers, price, type, startTime, endTime, city} = pointDetails;
  const createOffers = () => {
    return offers.map(({offerDescription, offerPrice, checked}) =>
      `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${checked === true ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${offerDescription}</span>
        +
        €&nbsp;<span class="event__offer-price">${offerPrice}</span>
      </label>
    </div>`
    ).join(``);
  };

  const offerTemplate = createOffers();

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
      <button class="event__reset-btn" type="reset">Delete</button>
      <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked="">
      <label class="event__favorite-btn" for="event-favorite-1">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </label>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
         <h3 class="event__section-title  event__section-title--offers">Offers</h3>
         <div class="event__available-offers">
            ${offerTemplate}
         </div>
       </section>
    </section>
  </form>`
  );

};

export default class FormEdit extends AbstractView {
  constructor(pointDetails) {
    super();
    this._tripPoint = pointDetails;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createFormEditTemplate(this._tripPoint);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._element.close();
  }

  setCloseEdit(callback) {
    if (this._element) {
      this._element.close = callback;
      this._element.querySelector(`.event__rollup-btn`).addEventListener(`click`, this._clickHandler);
    }
  }
}


