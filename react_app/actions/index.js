import pin from './pin';
import rides from './rides';
import loading from './loading';
import rootStore from './../utils/application_store';
import {Consts} from "../constants";

let actions = Object.assign({}, //combine actions
    pin,
    rides,
    loading
);

export function callAction(action, payload, loadingNeeded = false) {
    if (loadingNeeded) {
        rootStore.dispatch(actions[Consts.ACTIONS.START_LOADING](action));

        let request = actions[action](payload);

        request.payload.then((res) => {
            rootStore.dispatch(actions[Consts.ACTIONS.END_LOADING](action));
        });
        request.payload.catch((err) => {
            rootStore.dispatch(actions[Consts.ACTIONS.END_LOADING](action));
        });

        return request;
    } else {
        return actions[action](payload);
    }
}

export default actions;