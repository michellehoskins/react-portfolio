import React, { Component } from 'react';
import Footer from './footer';
import './css/main.css';


class Landing extends Component {
    render(){
        return(
            <div id="bg-img">
              <main id="home" >
                <h1 className="lg-heading" id="myName">
                  Michelle <span className="text-secondary">Williams</span>
                </h1>
                <h2 className="sm-heading">
                  Web Developer, Programmer, Designer & Entrepreneur
                </h2>
                <div className="icons">
                  <a href="https://twitter.com/MMWilli51510569" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                  <a href="https://www.youtube.com/channel/UCmC8V2m53O7g3stqvLK66xA/featured?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-2x"></i></a
                  ><a href="https://www.linkedin.com/in/michelle-williams-3b8a48132/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a
                  ><a href="https://github.com/mmwilliamscodes" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                </div>
                </main>
            <Footer />
            </div>
        )
    }
}

export default Landing;