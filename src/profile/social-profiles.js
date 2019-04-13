import React,{Component} from 'react';
import SOCIAL_PROFILES from './../data/social-profiles';
import SocialProfil from './social-profile';

class SocialProfiles extends Component{
    render(){
        return(
            <div className="social">
                
                {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE =>{
                            return(
                                <SocialProfil socialProfile={SOCIAL_PROFILE}/>
                            )
                        })
                }

            </div>
        )
    }
}

export default SocialProfiles;

