import React, { Component } from 'react';
import Footer from './footer';
import './css/main.css';
import Photo2 from './img/Moi.jpg';

class About extends Component {
    render(){
        return(
          <body id="bg-img">
            <div>
                 <main id="about">
      <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
      <h2 className="sm-heading">
        Let me tell you a few
      </h2>
      <div className="about-info">
        <img src={Photo2} alt="Jon Doe" className="bio-image" />
        <div className="bio">
          <h3 className="text-secondary">
            BIO
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            doloremque nam. Sed illum consectetur vero, nulla ad odio saepe ipsa
            culpa? Voluptatem fuga, expedita eius inventore pariatur sequi
            doloribus voluptatum!
          </p>
        </div>

        <div className="job job-1">
          <h3>123 Webshop</h3>
          <h6>Full Stack Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            numquam quisquam unde repudiandae blanditiis aliquid asperiores
            reprehenderit mollitia, praesentium, non officiis illum iure
            explicabo deserunt hic? Ea nisi animi voluptatibus?
          </p>
        </div>
        <div className="job job-2">
          <h3>Designers ABC</h3>
          <h6>Front End Developer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            numquam quisquam unde repudiandae blanditiis aliquid asperiores
            reprehenderit mollitia, praesentium, non officiis illum iure
            explicabo deserunt hic? Ea nisi animi voluptatibus?
          </p>
        </div>
        <div className="job job-3">
          <h3>Webworks</h3>
          <h6>Graphic Designer</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            numquam quisquam unde repudiandae blanditiis aliquid asperiores
            reprehenderit mollitia, praesentium, non officiis illum iure
            explicabo deserunt hic? Ea nisi animi voluptatibus?
          </p>
        </div>
      </div>
    </main>
    <Footer />
            </div>
            </body>
        )
    }
}

export default About;