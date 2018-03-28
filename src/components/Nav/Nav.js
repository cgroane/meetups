import React from 'react';
import {Link} from 'react-router-dom';

//import styles
import './Nav.css';

const Nav = (props) => {
    return (
        <nav className="fixed-top navbar" >
            <Link to="/selected" >
                <div className="nav-link" >
                    Selected Places to Contact!
                </div>
            </Link>
            <Link to="/" >
                <div className="nav-link" >
                    Back to map
                </div>
            </Link>
            <Link to="/attendees" >
                <div className="nav-link" >
                    check for new attendees
                </div>
            </Link>
        </nav>
    )
}
export default Nav;