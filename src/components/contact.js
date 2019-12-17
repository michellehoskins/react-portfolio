import React, { Component } from 'react';
import './css/main.css';
import FormDetails from './FormDetails';
import Confirm from './Confirm';
import Success from './Success';

export class Contact extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        message: ''
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    // Handle fields change

    render(){
        const { step } = this.state;
        const { name, email, message } = this.state;
        const values = { name, email, message };
        
        switch(step){
            case 1: 
            return(
                <FormDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 2:
            return(
                <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            );
            case 3:
                return <Success/>
        }

    }
}

export default Contact;