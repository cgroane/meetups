import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import RSVPList from './../../ListComponents/RSVPList/RSVPList';

class Selected extends Component {
    render() {
        var places;
        this.props.selectedPlaces ? places = <RSVPList attendees={this.props.selectedPlaces} /> : places = <div>Head back to the map view to select some businesses</div>
        return (
            <div className="height-less-nav">
                {places}
            </div>
        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Selected);