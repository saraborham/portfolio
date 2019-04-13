import React,{Component} from 'react'

class SocialProfil extends Component{


    
    render(){

        const{link, image} = this.props.socialProfile
        return(
             <div>
                 <a className="p-2"href={link}><img src={image} alt="social" style={{width:20,height:20}}/></a>
                   
             </div>
        )
    }

}

export default SocialProfil;