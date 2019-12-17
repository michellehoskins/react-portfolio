import React, { Component } from 'react';
import Footer from './footer';
import './css/main.css';

export class FormDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    render(){
        const { values, handleChange } = this.props;
        return(
<div id="bg-img">
<main id="contact">
  <h1 className="lg-heading">Contact <span className="text-secondary">Me</span></h1>
  <h2 className="sm-heading">
    Contact me...
  </h2>
<div className="about-info">
  <form>
     <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleChange('name')}
        value={values.name}
     />
     <br/>
     <input
        name="name"
        type="text"
        placeholder="Email"
        onChange={handleChange('email')}
        defaultValue={values.name}
     />
     <br/>
     <textarea>
        name="message"
        onChange={handleChange('message')}
        value={values.name}
    </textarea>
     <br/>
     <button>
        label="Continue"
        primary={true}
        style={styles.button}
        onClick={this.continue}
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
export default FormDetails;