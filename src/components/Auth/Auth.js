import React, {Component} from 'react'
import axios from 'axios'
// import {actionBuilder} from '../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)


        this.state = {
            username: '',
            password: ''
        }

    }


    handleInput = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      login = () => {
        console.log('hit login')
          const {username, password} = this.state

          axios.post(`/api/login`, {username, password}).then(res => {
            console.log(this.props)
            this.props.actionBuilder(res.data)
            this.props.history.push("/Dashboard")
          }).catch(err => console.warn(err))

      }

      register = () => {
          console.log(`hit register`)
          const {username, password} = this.state
          axios.post(`/api/register`, {username, password}).then((res) => {
            this.props.actionBuilder(res.data)
            this.props.history.push("/Dashboard");
          }).catch(err => console.warn(err))
      }

    render(){
        return (
            <div>
                 <ul>
                <div>Username:</div>
                <input className="register"
                placeholder="Enter Username"
                name="username"
                onChange={this.handleInput}
                />
                </ul>
                <ul>
                <div>Password:</div>
                <input className="register"
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={this.handleInput}
                />
                </ul>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default Auth