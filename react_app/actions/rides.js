import {Consts} from './../constants';
import FastriderApi from './../utils/FastriderApi';
import rootStore from './../utils/application_store';
import actions from "./index";

export default {
    [Consts.ACTIONS.GET_RIDES]: function() {
        let request = FastriderApi.rides();

        return {
            type: Consts.ACTIONS.GET_RIDES,
            payload: request
        }
    },

    [Consts.ACTIONS.GET_TICKET]: function(data) {
        let request = FastriderApi.ticket(data.pin, data.ride_id);

        request.then((res)=>{
            rootStore.dispatch(actions[Consts.ACTIONS.SAVE_PIN](data.pin));
        });

        return {
            type: Consts.ACTIONS.GET_TICKET,
            payload: request
        }
    }
}