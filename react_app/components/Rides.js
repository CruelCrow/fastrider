import React from 'react';
import {Component} from 'react';
import Error from './Error';
import Loading from './Loading';
import RideComponent from "./RideComponent";

class Rides extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return (
            <div className="rides">
                {this.props.isLoadingRides && <Loading visible={true}/>}
                {
                    this.props.rides.map(r => <RideComponent onClick={()=>{this.props.onSelectRide(r);}} isSelected={this.props.currentRide && this.props.currentRide.id == r.id} key={`Ride${r.id}`} ride={r}/>)
                }
            </div>
        );
    }
}

Rides.defaultProps = {
    rides: [],
    onSelectRide: ()=>{},
    currentRide: null,
    isLoadingRides: true
};

Rides.propTypes = {
    rides: React.PropTypes.array.isRequired,
    currentRide: React.PropTypes.object,
    onClick: React.PropTypes.func,
    isLoadingRides: React.PropTypes.bool
};

export default Rides;