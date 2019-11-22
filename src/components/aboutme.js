import React, { Component } from 'react';
import Footer from './footer';
import './css/main.css';
import Photo2 from './img/Moi.jpg';

class About extends Component {
    render(){
        return(
            <div id="bg-img">
              <main id="about">
                <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
                <h2 className="sm-heading">
                  Let me tell you a few
                </h2>
              <div className="about-info">
                <img src={Photo2} alt="Michelle Williams" className="bio-image" />
              <div className="bio">
                <h3 className="text-secondary">
                  Biography
                </h3>
                <p>
                  Accomplished in HTML, CSS, SASS, Javascript, PHP, Node.js, React.js, Express, MySQL, MongoDB, GitHub, BitBucket, Version Control, and Email Development
                </p>
              </div>

        <div className="job job-1">
          <h3>Case Western Reserve University</h3>
          <h6>Full Stack Web Developer Bootcamp</h6>
          <p>
            It was a 6 month development bootcamp. We received a solid background in HTML, CSS, and Javascript before diving into the MERN stack. Built real projects with real people.
          </p>
        </div>
        <div className="job job-2">
          <h3>my360e</h3>
          <h6>Software Developer</h6>
          <p>
            We create enterprise level software for contractors. Built with the CakePHP framework.
          </p>
        </div>
        <div className="job job-3">
          <h3>Freelancer</h3>
          <h6>HTML E-mail Developer</h6>
          <p>
            I create eye-catching and creative responsive emails. Can fit in any client's request. Flexible and attentive to detail.
          </p>
        </div>
      </div>
    </main>
    <Footer />
            </div>
        )
    }
}

export default About;