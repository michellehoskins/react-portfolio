import React, { Component } from 'react';
import Footer from '../Footer';

class Blog extends Component {
    render(){
        return(
            <div id="bg-img">
              <main id="blog">
                <h1 className="lg-heading">My <span className="text-secondary">Blog</span></h1>
                <h2 className="sm-heading">
                  My Blog
                </h2>
              <div className="about-info">
                
              <div className="bio">
                <h3 className="text-secondary">
                  Php blog
                </h3>
 
              </div>

      </div>
    </main>
    <Footer />
            </div>
        )
    }
}

export default Blog;