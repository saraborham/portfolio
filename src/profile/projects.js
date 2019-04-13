import React,{Component} from 'react';
import PROJECTS from './../data/projects';
import Project from './project';


class Projects extends Component{
    render(){
        return(
            <div className="container" id="projects">
                {/* <h1 className="m-4 p-3 text-info">Some of my work</h1> */}
                <div className="row">

                {
                    PROJECTS.map(PROJECT => {
                        return(
                            
                            <div className="col-sm-12 col-md-4 col-lg-4">
                            <Project key={PROJECT.id} project={PROJECT} /> 
                            </div>
                                     
                            
                            
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default Projects;

