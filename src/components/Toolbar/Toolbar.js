import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><Link to="./">Michelle Williams</Link></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><Link to="./aboutme">About Me</Link></li>
                    <li><Link to="./projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;