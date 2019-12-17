import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Contact from './contact';
import Blog from './blog';
import './css/main.css';

const Main = () => (
    
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
    </Switch>
    
)


export default Main;