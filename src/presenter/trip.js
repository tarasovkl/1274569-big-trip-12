import PointView from "../view/point.js";
import DayListView from "../view/dayList.js";
import DayView from "../view/day.js";
import TripPointListView from "../view/tripPointList.js";
import FormEditView from "../view/formEdit.js";
import {render, RenderPosition, replace, remove} from "../utils/render.js";

const EVENT_COUNT = 5;

export default class Trip {
  constructor(tripContainer) {

    this._tripContainer = tripContainer;

    this._dayListComponent = new DayListView();
    this._dayComponent = new DayView();
    this._tripPointListComponent = new TripPointListView();
  }

  init(pointData) {
    render(this._tripContainer, this._dayListComponent, RenderPosition.BEFOREEND);
    render(this._dayListComponent, this._dayComponent, RenderPosition.BEFOREEND);
    render(this._dayComponent, this._tripPointListComponent, RenderPosition.BEFOREEND);

    this._renderPointList(pointData);
  }



  _renderPointList(pointData) {

    const point = new PointView(pointData);
    const editPoint = new FormEditView(pointData);
    render(this._tripPointListComponent, point, RenderPosition.BEFOREEND);
    point.setShowEdit(() => {
      replace(editPoint, point);
    });
    editPoint.getElement();
    editPoint.setCloseEdit(() => {
      replace(point, editPoint);
    });

    for (let i = 0; i < EVENT_COUNT; i++) {
      renderPoint(this._tripPointListComponent.getElement(), tripPoints[i]);
    }
  }
}

