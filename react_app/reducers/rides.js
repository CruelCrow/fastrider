import {Consts} from './../constants';
import {Ride,Ticket} from './../models';
import extend from './../utils/extend';
import {Zone} from "../models";

const initialState = {
    rides: [],
    errorRides: null,
    ticket: null/*new Ticket({
        id: 55,
        ride: new Ride({
            id: 66,
            zone: new Zone({
                id: 777,
                name: 'Zone Name',
                color: '#450102'
            }),
            name: 'Ride Name',
            remaining_tickets: 0,
            return_time: "2018-02-12T13:58:53.714Z"
        }),
        access_code: '1234-4567-89AB',
        return_time: "2018-02-12T12:58:53.714Z"
    })*/,
    errorTicket: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case Consts.ACTIONS.GET_RIDES:
            if (action.error) {
                return extend({}, state, {
                    errorRides: action.payload,
                    rides: []
                });
            } else {
                return extend({}, state, {
                    errorRides: null,
                    rides: action.payload.data.map(v => new Ride(v))
                });
            }
            break;

        case Consts.ACTIONS.GET_TICKET:
            if (action.error) {
                return extend({}, state, {
                    errorTicket: action.payload,
                    ticket: null
                });
            } else {
                return extend({}, state, {
                    errorTicket: null,
                    ticket: new Ticket(action.payload)
                });
            }
            break;

        default:
            return state;
    }
}