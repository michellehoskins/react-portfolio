import React, { Component } from 'react';
import Footer from './footer';
import './css/main.css';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const { values: {name, email, message} } = this.props;
        return(
            <div id="bg-img">
                <main id="contact">
                <h1 className="lg-heading">Confirm <span className="text-secondary">Your Data</span></h1>
                <h2 className="sm-heading">
                    Is Everything Correct?
                </h2>
                <div className="about-info">
                        <li>
                            <ul>
                                Name: {name}
                            </ul>
                            <ul>
                                Email: {email}
                            </ul>
                            <ul>
                                Message: {message}
                            </ul>
                        </li>
                        <br/>
                        <form>
                        <button>
                            label="Confirm & Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                            </button>
                        <button>
                            label="Back"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        </button>
                        </form>
        

            </div>
        </main>
        <Footer />
        </div>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default Confirm;