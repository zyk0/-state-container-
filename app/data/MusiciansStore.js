import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import Actions from "./Actions.js";
import ActionTypes from "./ActionTypes.js";
import MusiciansDispatcher from "./MusiciansDispatcher.js";
 
class MusiciansStore extends ReduceStore{
    constructor()
    {
        super(MusiciansDispatcher);
    }
    getInitialState() { //установка состояния/неизменяемый список 
        return Immutable.List.of("проказница Мартышка", "Осел", "Козел", "косолапый Мишка");
    }
 
    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.text) {
                  return state.push(action.text);
                }
                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.text);
                if (index > -1) {
                    return state.delete(index);
                }
                return state;
            default:
                return state;
        }
    }
}
export default new MusiciansStore();