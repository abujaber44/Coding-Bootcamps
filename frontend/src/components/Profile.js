import React, { Component } from 'react';
import { profileRequest } from '../services/api'

class Profile extends Component {


    constructor(props) {
        super(props);
        this.state = { 
            email: ""
         }
    }


    componentDidMount() {
        profileRequest()
        .then(res => {
          if (!res.error) {
            this.setState({email: res.email})
          }
        })
      }


    render() { 
      
        return ( 
            <div id="profile">
                <h1>{this.state.email}'s Profile</h1>
            </div>
         );
    }
}
 
export default Profile;
