import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from './footer';
import './css/main.css';

export class Success extends Component {
    
    render(){
        return(
            <div id="bg-img">
                <main id="contact">
                <h1 className="lg-heading">Success</h1>
                <h2 className="sm-heading">
                    Thanks for getting in touch...
                </h2>
                <div className="about-info">
  
                <MuiThemeProvider>
                    <React.Fragment>
                        <h3 className="text-secondary">You will be contacted shortly</h3>
                    </React.Fragment>
 
                </MuiThemeProvider>

            </div>
        </main>
        <Footer />
        </div>
        )
    }
}

export default Success;