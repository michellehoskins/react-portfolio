import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo2 from './images/Moi.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render(){
        return(
            <div>=
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={Photo2}
                                alt="me"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Michelle M Williams</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            Experienced full stack developer
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                       <Education
                            startYear={2002}
                            endYear={2006}
                            schoolName="My University"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es"
                       />

                        <Education
                            startYear={2007}
                            endYear={2007}
                            schoolName="My Second University"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es"
                       />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e"
                        />

                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit e"
                        />  

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>

                        <Skills 
                        skill="Javascript, HTML/CSS, PHP, Bootstrap, MySql, Sass, React"
                    
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;