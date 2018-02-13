import React from 'react';
import {Component} from 'react';
import {Ticket} from './../models';
import moment from 'moment';

class TicketComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className='ticket'>
                <div className="zone-color" style={{backgroundColor: this.props.ticket.ride.zone.color}}></div>
                <div className="zone-name">{this.props.ticket.ride.zone.name}</div>
                <div className="ride-name">{this.props.ticket.ride.name}</div>
                {this.props.ticket.return_time && <div className="return-time-wrapper">
                    Return At
                    <br />
                    <time className="return-time">{moment(this.props.ticket.return_time).format("HH:mm")}</time>
                </div>}
                <div className="access-code-wrapper">
                    Use access code
                    <div className="access-code">{this.props.ticket.access_code}</div>
                </div>
            </figure>
        );
    }
}

TicketComponent.defaultProps = {
    ticket: new Ticket()
};

TicketComponent.propTypes = {
    ticket: React.PropTypes.object.isRequired
};

export default TicketComponent;