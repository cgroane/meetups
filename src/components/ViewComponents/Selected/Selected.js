import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import List from './../../ListComponents/List/List';
import {removePlace} from './../../../ducks/reducer';

class Selected extends Component {
    render() {
        var places;
        this.props.selectedPlaces.length ? places = <List data={this.props.selectedPlaces} selectPlace={this.props.removePlace} selected={this.props.selectedPlaces} /> : places = <div>Head back to the map view to select some businesses, all you have to do is click on an item, and it will be added here. If you click on it again, it'll remove it. See if you can find anyone who might be interested in the React Meetup and give them a call to tell about it</div>
        return (
            <div className="height-less-nav shift-down">
                {places}
            </div>
        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {removePlace})(Selected);