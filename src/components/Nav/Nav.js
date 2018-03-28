import React from 'react';
import {Link} from 'react-router-dom';

//import styles
import './Nav.css';

const Nav = (props) => {
    return (
        <nav className="fixed-top navbar" >
            <Link to="/selected" >
                Selected Places to Contact!
            </Link>
        </nav>
    )
}
export default Nav;