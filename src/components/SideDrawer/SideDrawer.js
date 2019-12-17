import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="./aboutme">About</Link></li>
                <li><Link to="./projects">Projects</Link></li>
                <li><Link to="./contact">Contact</Link></li>
                <li><Link to="./blog">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default sideDrawer