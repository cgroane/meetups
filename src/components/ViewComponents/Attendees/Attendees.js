import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getEventInfo, getRSVPs} from './../../../ducks/reducer';

//components
import List from './../../ListComponents/List/List';
import AttendeesList from './../../ListComponents/Attendees/AttendeesList';

class Attendees extends Component {
    
    componentDidMount() {
        this.props.getEventInfo().then(() => this.props.getRSVPs(this.props.reactEvent.id))
    }
    render() {
        
        return (
            <div className="height-less-nav shift-down">
                <AttendeesList data={this.props.rsvps} />
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {getEventInfo, getRSVPs})(Attendees);