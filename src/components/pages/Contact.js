import React, { Component } from 'react';
import Footer from '../Footer';

class Contact extends Component {
    render(){
        return(
            <div id="bg-img">
              <main id="contact">
                <h1 className="lg-heading">Contact <span className="text-secondary">Me</span></h1>
                <h2 className="sm-heading">
                  Send me a message
                </h2>
              <div className="about-info">
                
              <div className="bio">
                <h3 className="text-secondary">
                  Form
                </h3>
 
              </div>

      </div>
    </main>
    <Footer />
            </div>
        )
    }
}

export default Contact;