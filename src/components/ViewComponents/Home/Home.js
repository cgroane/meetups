import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getEventInfo, getRSVPs} from './../../../ducks/reducer';

//components
import List from './../../ListComponents/List/List';

class Home extends Component {
    
    componentDidMount() {
        this.props.getEventInfo().then(() => this.props.getRSVPs(this.props.reactEvent.id))
    }
    render() {
        
        return (
            <div>
                <Link to="/places" >
                    <div>
                        Map
                        </div>
                </Link>
                <List data={this.props.rsvps} />
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {getEventInfo, getRSVPs})(Home);