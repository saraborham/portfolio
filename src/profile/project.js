import React,{Component} from 'react';

class Project extends Component{


render(){
    const  { title, image, description,link} =this.props.project
    

    return(
        
            
                    <div className="card m-3" >
                        <img src={image} className="card-img-top" alt={title}/>
                        <div className="card-body ">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={link} className="">{link}</a>
                        </div>
                    </div>
               

                    
            
    )
}
}
export default Project;