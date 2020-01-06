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
              <div className="contact-form">
                
              <div className="bio">
                <h3 className="text-secondary">
                  <form className="myform">
                    <div className="formgroup">
                        <label>Name</label>
                        <input type="text" name="Name" placeholder="John Smith" />
                    </div>

                    <div className="formgroup">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="example@gmail.com" />
                    </div>

                    <div className="formgroup">
                        <label>Message</label>
                        <textarea name="Message"></textarea>
                    </div>

                    <input className="button" type="submit" name="Submit" value="Submit" />
                  </form>
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