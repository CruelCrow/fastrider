import {Consts} from './../constants';

const initialState = new Set();

export default function (state = initialState, action) {
    switch (action.type) {

        case Consts.ACTIONS.START_LOADING:
            state.add(action.payload);
            return state;
            break;

        case Consts.ACTIONS.END_LOADING:
            state.delete(action.payload);
            return state;
            break;

        default:
            return state;
    }
}