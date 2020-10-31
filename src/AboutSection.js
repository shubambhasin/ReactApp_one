import React from 'react';

const AboutSection = () => {
    return(

          <section className="page-section bg-primary text-white mb-0" id="about">
         <div className="container">
                          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                 <div className="divider-custom divider-light">
                 <div className="divider-custom-line"></div>
                 <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                 <div className="divider-custom-line"></div>
             </div>
                          <div className="row">
                 <div className="col-lg-4 ml-auto"><p className="lead">This small little portfolio was available on startbootstrap.com website and it was made in bootstrap but i have succesfully ported it into react application/ react website. Cheers !!!!!!!!!!</p></div>
                 <div className="col-lg-4 mr-auto"><p className="lead"> You can Find me on Google, Instagram, facebook, linkedIn, Quora ! Just type Shubam Bhasin
                 </p></div>
             </div>
                         <div className="text-center mt-4">
                 <a className="btn btn-xl btn-outline-light" href="https://instagram.com/shubambhasin">
                     <i className="fas fa-download mr-2"></i>
                     Find me
                 </a>
             </div>
         </div>
     </section>

    )

}

export default AboutSection;
