import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Consts} from './../constants';
import Error from './Error';
import Loading from './Loading';
import {callAction} from "./../actions";
import Rides from "./Rides";
import Pin from "./Pin";
import TicketComponent from "./TicketComponent";
import FastriderApiError from "../utils/FastriderApiError";
import validatePin from './../utils/validatePin';
import {Ticket,Ride,Zone} from "../models";

class FastRider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentRide: null,
            pin: '',
            error: null
        };

        this.setPageTitle = this.setPageTitle.bind(this);
        this.onSelectRide = this.onSelectRide.bind(this);
        this.onPinChange = this.onPinChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setPageTitle() {
        document.title = 'FastRider';
    }

    componentDidMount() {
        this.setPageTitle();

        let hourNow = (new Date()).getHours();
        if (hourNow < 9 || hourNow >= 19) {
            this.setState({error: new FastriderApiError({status: Consts.FASTRIDER_API_ERRORS.ERR_WORKING_HOURS})})
        }

        this.props.callAction(Consts.ACTIONS.LOAD_PIN);

        this.props.callAction(Consts.ACTIONS.GET_RIDES, null, true);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.pin != nextProps.pin) {
            this.setState({pin: nextProps.pin});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this.setPageTitle();
    }

    onSelectRide(ride) {
        if (ride.remaining_tickets < 1) {
            this.setState({error: new FastriderApiError({status: Consts.FASTRIDER_API_ERRORS.ERR_NO_TICKETS})});
            return;
        }
        this.setState({currentRide: ride});
    }

    onPinChange(e) {
        this.setState({pin: e.target.value});
    }

    onSubmit() {
        if (!validatePin(this.state.pin)) {
            this.setState({error: new FastriderApiError({status: Consts.FASTRIDER_API_ERRORS.ERR_PIN})});
            return;
        }
        if (!this.state.currentRide) {
            this.setState({error: new FastriderApiError({status: Consts.FASTRIDER_API_ERRORS.ERR_NO_RIDE_SELECTED})});
            return;
        }
        this.props.callAction(Consts.ACTIONS.GET_TICKET, {
            pin: this.state.pin,
            ride_id: this.state.currentRide.id
        }, true);
    }

    render() {
        return (
            <div className="fast-rider">
                <h1>The Jungle™ FastRider Service</h1>

                {this.props.ticket && <div>
                    <div className="ticket-success">
                        Thank you for using The Jungle™ FastRider ticket system - your access code is now ready!
                    </div>
                    <TicketComponent ticket={this.props.ticket}/>
                </div>}

                {!this.props.ticket && <div>
                    <div className="process">
                        <div>Enter your park ticket #PIN number, then select the desired ride while noting the stated
                            return time
                        </div>
                        <div>Press `submit` to confirm and retrieve your access code</div>
                        <div>When the time comes, use the special FastRider line to cut out a considerable wait time
                        </div>
                    </div>
                    <Pin pin={this.state.pin} onChange={this.onPinChange} onSubmit={this.onSubmit}
                         isButtonVisible={this.state.currentRide && this.state.pin ? true : false}/>
                    <Rides rides={this.props.rides} isLoadingRides={this.props.loading.has(Consts.ACTIONS.GET_RIDES)}
                           onSelectRide={this.onSelectRide} currentRide={this.state.currentRide}/>
                </div>}

                {this.props.loading.has(Consts.ACTIONS.GET_TICKET) && <div className="loading-ticket">
                    <Loading visible={true}/>
                </div>}

                <div className="errors">
                    {this.state.error && <Error
                        error={this.state.error}/>}
                    {this.props.errorRides && <Error
                        error={this.props.errorRides}/>}
                    {this.props.errorTicket && <Error
                        error={this.props.errorTicket}/>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading,
        pin: state.pin,
        rides: state.rides.rides,
        errorRides: state.rides.errorRides,
        ticket: state.rides.ticket,
        errorTicket: state.rides.errorTicket,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({callAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FastRider);