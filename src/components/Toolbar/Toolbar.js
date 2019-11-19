import React from 'react';
import { Link } from 'react-router-dom';

const toolbar = props => (
    <header>
        <nav>
            <div></div>
            <div><Link to="./">MyPortfolio</Link></div>
            <div>
                <ul>
                    <Link to="./aboutme">About Me</Link>
                    <Link to="./projects">Projects</Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;