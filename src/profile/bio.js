import React,{Component} from 'react';
import Title from './titles';

class Bio extends Component{


    state ={
        toggleBio:false,
        
    }

handleToggleBio =() =>{
    this.setState({
        toggleBio:!this.state.toggleBio
    })
}



render(){
    return(
        <div className="bio">
            <h1>Hello!</h1>
                    <p> My Name is Sara</p>

                    <Title/>
                     
                    <p>I am looking forward to working on challengable projects.</p>

                    
                    {
                      this.state.toggleBio ?
                      <div>
                      <p>I'm a developer and designer  based in Cairo, Egypt.</p>
                     <p>I enjoy turning complex problems into simple and beautiful designs, clean and efficient code.</p>
                    <p> In my free time I code, draw and play with papers</p>
                    <button onClick={this.handleToggleBio} className="btn btn-color">Show Less</button>
                    </div>
                    :
                    <div>
                    <button onClick={this.handleToggleBio} className="btn btn-light btn-color" >Read more</button>
                    </div>

                    }

        </div>
    )
}


}





export default Bio;