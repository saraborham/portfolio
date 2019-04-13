import React from 'react';
import MyLogo from '../img/mylogo.svg';
import Design from '../img/design-half.png';
import Code from '../img/code-half.png';
import Bio from './bio';
import Arrow from '../img/arrow1.svg'
import SocialProfiles from './social-profiles';


let Header = (props) =>{
    return (
        <header>

                <nav className="navbar navbar-expand-lg navbar-light p-3 ">
                    <div className="container">
                
                    <a className="navbar-brand my-name" href="#">SARA BORHAM</a>
                    
                       
                        <SocialProfiles/>
                        </div>
                 </nav>
                 <div className="bio-container">
                    
                     <div className="img-display container">
                     


                          <div className="design">
                             <img src={Design} alt="design" />
                        </div> 

                         <div className="code">
                             <img src={Code} alt="code"/> 
                        </div> 
                    
                     
                     </div>
                     <Bio/>
                 </div>
                 <div className="arrow-projects">
                 
                 <p>Projects</p>
                 <a className="btn" data-toggle="collapse" href="#projects" role="button" aria-expanded="false" aria-controls="projects"><img src={Arrow} alt=""/></a>
                 
                 </div>

                 

                </header>
    )
}

export default Header;