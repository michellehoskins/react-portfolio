import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

function SideDrawer ({ isOpen, setIsOpen }) {
    const links = [
        {to: "./aboutme", title: "About"},
        {to: "./projects", title: "Projects"},
        {to: "./contact", title: "Contact"},
        {to: "./blog", title: "Blog"}
    ];

    return(
        <nav className={`side-drawer ${isOpen ? 'open' : '' }`}>
            <ul>
                {links.map(linkItem => <DrawerLink onOpen={() => setIsOpen(false)} link={linkItem} />)}
            </ul>
        </nav>
    );
}

function DrawerLink({onOpen, link}) {
    const {to, title } = link;
    return <Link onClick={() => onOpen()} to={to}>{title}</Link>
}

export default SideDrawer