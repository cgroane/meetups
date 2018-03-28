import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import List from './../../ListComponents/List/List';
import {removePlace} from './../../../ducks/reducer';

class Selected extends Component {
    render() {
        var places;
        this.props.selectedPlaces ? places = <List data={this.props.selectedPlaces} selectPlace={this.props.removePlace} selected={this.props.selectedPlaces} /> : places = <div>Head back to the map view to select some businesses</div>
        return (
            <div className="height-less-nav shift-down">
                {places}
            </div>
        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {removePlace})(Selected);