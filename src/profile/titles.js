import React, {Component} from 'react';
import { clearInterval } from 'timers';

const TITLES =[
    ' I am Front-End developer',
    'Web Designer',
    'Logo designer',
    'Character designer'

]

class Title extends Component{
    state={
        titleIndex:0,
        transition:true
    }

    componentDidMount(){
        this.animateTitle();
        setTimeout(()=> this.setState({transition:false}),2000)

    }
    componentWillUnmount(){
        console.log('will unmunt')
        clearInterval(this.titleInterval)
        
    }




    animateTitle =() => {
    this.titleInterval = setInterval(() =>{
    const titleIndex= (this.state.titleIndex +1) % TITLES.length;
    this.setState({
        titleIndex,
        transition:true

    })

    setTimeout(()=> this.setState({transition:false}),2000)
        },4000)
        

    }



    

    render(){
        const {titleIndex ,transition}=this.state
            const title = TITLES[titleIndex]
        return(
                <p className={transition ? 'fade-in': 'fade-out'}>
                {title}
                </p>

        )
    }
}
export default Title;