import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getEventInfo, getRSVPs} from './../../../ducks/reducer';

//components
import RSVPList from './../../ListComponents/RSVPList/RSVPList';

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
                <RSVPList attendees={this.props.rsvps} />
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {getEventInfo, getRSVPs})(Home);