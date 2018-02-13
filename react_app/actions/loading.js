import {Consts} from "../constants";

export default {
    [Consts.ACTIONS.START_LOADING]: function(action) {
        return {
            type: Consts.ACTIONS.START_LOADING,
            payload: action
        }
    },

    [Consts.ACTIONS.END_LOADING]: function(action) {
        return {
            type: Consts.ACTIONS.END_LOADING,
            payload: action
        }
    }
}