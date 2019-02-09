import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Users from './components/users.js'
import Form from './components/Form.js'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      users:[],
      userInput: "",
      username:"",
      email:"",
      phone_number:""
    }
    // this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

handleChange = (event) => {
  this.setState({
    [event.target.id]: event.target.value
  })
}

handleSubmitForm = (event) => {
  let {username, email, phone_number} = this.state
  event.preventDefault();
  axios.post("/users", {
    username: username,
       email: email,
       phone_number: phone_number
  })
  .then(() => {
    this.setState({
      username: "",
      email: "",
      phone_number: ""
    })
  })

}


  componentDidMount(){
  this.apiCall()

  }

  apiCall = () => {
    axios.get("/users")
    .then(response => {
      this.setState({
        users: response.data.users
      })
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
hello world
<Users users={this.state.users}/>
<Form users={this.state.users} handleChange={this.handleChange} handleSubmitForm={this.handleSubmitForm} username={this.state.username} email={this.state.email} phone={this.state.phone}/>


      </div>
    );
  }
}

export default App;
