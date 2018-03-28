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
            <Link to="/places" >
                <div className="nav-link" >
                    Back to map
                </div>
            </Link>
        </nav>
    )
}
export default Nav;