import React, { Component } from 'react';
import { authRequest } from '../services/api'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            message: ''
         }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state

        authRequest({email, password})
        .then(res => {
            if (res.error) {
        this.setState({message: res.error})
            } else {
        localStorage.setItem('jwt', res.jwt)
            }
        })
    }

    handleChangeEmail = e => {
        this.setState({email: e.target.value})
    }

    handleChangePassword = e => {
        this.setState({password: e.target.value})
    }


    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>{this.state.message}</p>
                    Email: <input type="text" onChange={this.handleChangeEmail} value={this.state.email}/> <br/>
                    Password: <input type="text" onChange={this.handleChangePassword} value={this.state.password}/> <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
         );
    }
}
 
export default Login;