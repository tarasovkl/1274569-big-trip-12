import {createElement} from "../utils/utils.js";

const createFormOfferTemplate = (pointDetails) => {
  const {description, offers, pictures} = pointDetails;
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

  const createPictures = () => {
    return pictures.map((path) =>
      `<img class="event__photo" src="${path}" alt="Event photo">`
    ).join(``);
  };

  const pictureTemplate = createPictures();

  return (
    `<section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${offerTemplate}
      </div>
    </section>

    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description.join(``)}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${pictureTemplate}
        </div>
      </div>
    </section>
  </section>`
  );
};

export default class FormOffer {
  constructor(pointDetails) {
    this._tripPoint = pointDetails;
    this._element = null;
  }
  getTemplate() {
    return createFormOfferTemplate(this._tripPoint);
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
}
