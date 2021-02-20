import React, { Component } from 'react';



class Service extends Component {

    render() { 
        return ( 

	<section className="site-section dark"  id="services">

    <div className="container">
    <br /> <br /> 

        <div className="row mb-4">
            <div className="col-md-12">
                <div className="section-heading green text-center">
                
                    <h1>My <strong>Services</strong></h1>
                    
                    <div className="statistics-icon statistics-content "><i className="icon-fire bg-color-2 "></i></div>
                   
                    <p className="text-center lead"> Here are some of my expertise </p>

                </div>
            </div>
        </div>
        
        <div className="row">
        
        
        
        
         <div className="col-md-6 col-lg-4 text-center mb-5 services-section">
                <div className="icon-container bg-white " >
                    <span className="icon white bg-color-2">
                        <span className="icon-layers white font-50"></span>
                    </span>
                    <h3 className="mb-4">Logo Design</h3>
                    <p>I can convert your old website to a responsive dynamic Website. 
                    I can also make responsive HTML template from PSD or depend your own Idea.</p>  
                </div>
            </div>
            
            
             <div className="col-md-6 col-lg-4 text-center mb-5 services-section">
                <div className="icon-container  bg-white " >
                    <span className="icon bg-color-3">
                        <span className="icon-cog white font-50"></span>
                    </span>
                    <h3 className="mb-4">Logo Customization</h3>
                    <h6>I can customize your website with beautiful themes and script.</h6>
                  
                </div>
            </div>
            
            
            

            <div className="col-md-6 col-lg-4 text-center mb-5 services-section">
                <div className="icon-container  " >
                    <span className="icon bg-color-4">
                        <span className=" font-50 icon-browser2 white services-section" ></span>
                    </span>
                    <h3 className="mb-4">logo Designx</h3>
                    <h6> I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</h6>
                    
                </div>
            </div>
            
            <div className="col-md-6 col-lg-4 text-center mb-5 services-section">
                <div className="icon-container" >
                    <span className="icon bg-color-6">
                        <span className=" font-50 icon-presentation white"></span>
                    </span>
                    <h3 className="mb-4">logo Development</h3>
                    <h6>I can make any kinds of website using Django, React, javascript, HTML, CSS, mySql, SQLite etc. </h6>
                   
                </div>
            </div>
             <div className="col-md-6 col-lg-4 text-center mb-5 services-section">
                <div className="icon-container  " >
                    <span className="icon bg-color-2">
                        <span className="font-50 icon-message white"></span>
                    </span>
                    <h3 className="mb-4">Innovative Ideas</h3>
                    <h6>I can give you innovative ideas for your project & I am always ready to help you.</h6>
                   
                </div>
            </div>
            
            <div className="col-md-6 col-lg-4 text-center mb-5 services-section">
                <div className=" icon-container  " >
                    <span className="icon bg-color-2">
                        <span className="font-50 icon-code color-11"></span>
                    </span>
                    <h3 className="mb-4">marrage card</h3>
                    <h6>I can make API and I can also integrate them to your website's Backend. </h6>
                   
                </div>
            </div>
           </div>           
         </div>

	<br /> <br /> <br />
  </section>

         );
    }
}
 
export default Service;
