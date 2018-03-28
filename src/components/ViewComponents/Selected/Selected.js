import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Selected extends Component {
    render() {
        return (
            <div>
                Selected businesses to contact
            </div>
        )
    }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Selected);