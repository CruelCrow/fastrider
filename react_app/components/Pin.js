import React from 'react';
import {Component} from 'react';
import moment from 'moment';

class Pin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pin">
                <input type="text" value={this.props.pin} onChange={this.props.onChange} placeholder="#PIN" />
                <button className={this.props.isButtonVisible ? 'mobile-visible' : ''} onClick={this.props.onSubmit}>SUBMIT</button>
            </div>
        );
    }
}

Pin.defaultProps = {
    pin: null,
    onChange: ()=>{},
    onSubmit: ()=>{},
    isButtonVisible: false
};

Pin.propTypes = {
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    isButtonVisible: React.PropTypes.bool
};

export default Pin;