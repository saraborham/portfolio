import React , { Component } from 'react';
import Header from './header';
import Projects from './projects';
class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>

                <Header/>
               
                <Projects/>
                

                
                
            </div>
        )
    }
}
export default Portfolio;
