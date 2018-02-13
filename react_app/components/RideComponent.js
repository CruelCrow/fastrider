import React from 'react';
import {Component} from 'react';
import {Ride} from './../models';
import moment from 'moment';

class RideComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className={`ride ${this.props.isSelected ? 'selected' : ''}`} onClick={this.props.onClick}>
                <figcaption>
                    {this.props.ride.name}
                </figcaption>
                <div className="zone-color" style={{backgroundColor: this.props.ride.zone.color}}></div>
                <div className="zone-name">{this.props.ride.zone.name}</div>
                {this.props.ride.return_time && <time className="return-time">{moment(this.props.ride.return_time).format("HH:mm")}</time>}
                <div className="tickets-remaining">{this.props.ride.remaining_tickets}</div>
            </figure>
        );
    }
}

RideComponent.defaultProps = {
    ride: new Ride(),
    isSelected: false
};

RideComponent.propTypes = {
    ride: React.PropTypes.object.isRequired,
    isSelected: React.PropTypes.bool
};

export default RideComponent;