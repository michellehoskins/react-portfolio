import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from './images/moi2.jpg';

class Landing extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={Photo}
                            alt="me"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | Javascript | PHP | React | NodeJS | Express | MySQL | MongoDB </p>

                            <div className="social-links">
                                
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/michelle-williams-3b8a48132/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/mmwilliamscodes" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;