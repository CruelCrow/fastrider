import {Consts} from './../constants';

export default {
    [Consts.ACTIONS.LOAD_PIN]: function() {
        return {
            type: Consts.ACTIONS.LOAD_PIN
        }
    },

    [Consts.ACTIONS.SAVE_PIN]: function(pin) {
        return {
            type: Consts.ACTIONS.SAVE_PIN,
            payload: pin
        }
    }
}