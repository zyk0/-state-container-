import ActionTypes from "./ActionTypes.js";
import MusiciansDispatcher from "./MusiciansDispatcher.js";
//dispatch() тип действия и данные
const Actions = {
  addItem(text) {
    MusiciansDispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      text,
    });
  },
  removeItem(text) {
    MusiciansDispatcher.dispatch({
      type: ActionTypes.REMOVE_ITEM,
      text,
    });
  }
};
 
export default Actions;