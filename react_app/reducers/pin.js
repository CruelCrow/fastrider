import {Consts} from './../constants';

const initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {

        case Consts.ACTIONS.LOAD_PIN:
            return localStorage.getItem('pin');
            break;

        case Consts.ACTIONS.SAVE_PIN:
            localStorage.setItem('pin', action.payload);
            return localStorage.getItem('pin');
            break;

        default:
            return state;
    }
}