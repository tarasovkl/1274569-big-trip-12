const MAX_OFFER_COUNT = 3;

const createEventTemplate = (pointDetails) => {
  const {city, type, price, offer, startTime, endTime} = pointDetails;

  const createOffer = () => {
    return offer.map(({description, price}) =>
      `<li class="event__offer">
      <span class="event__offer-title">${description}</span>
      +
      €&nbsp;<span class="event__offer-price">${price}</span>
     </li>`
    ).join(``);
  };

  const offerTemplate = createOffer();

  return (
    `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type === `Check` ? `check-in` : type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${[`Sightseeing`, `Check`, `Restaurant`].includes(type) ? type + ` in` : type + ` to`} ${city}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T${startTime}">${startTime}</time>
          —
          <time class="event__end-time" datetime="2019-03-18T${endTime}">${endTime}</time>
        </p>
        <p class="event__duration"></p>
      </div>

      <p class="event__price">
        €&nbsp;<span class="event__price-value">${price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${offerTemplate}
      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};



export {createEventTemplate};
