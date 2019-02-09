import React from 'react'


const Form = (props) => {
  console.log(props)

return(
  <form onSubmit={props.handleSubmitForm}>

    <input id="username" value={props.username} onChange={props.handleChange} type="text"
     placeholder="search for user"/>

      <input id="email" onChange={props.handleChange} value={props.email}type="text" placeholder="Email"/>

        <input id="phone" onChange={props.handleChange} type="text" value={props.phone} placeholder="phoneNumber"/>

        <button type="submit">submit</button>
  </form>
)

}

export default Form;



// import React, { Component } from "react";
// import "./App.css";
// import axios from "axios";
//
// import { Users } from "./components/Users";
// import { Form } from "./components/Form";
//
// class App extends Component {
//   state = {
//     users: [],
//     username: "",
//     phone: "",
//     email: ""
//   };
//
//   componentDidMount = () => {
//     axios.get("/users").then(res => {
//       this.setState({
//         users: res.data.users
//       });
//     });
//   };
//
//   onChangeHandler = e => {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   };
//
//   handleSubmit = e => {
//     let { username, phone, email } = this.state;
//     e.preventDefault();
//     axios
//       .post("/users", {
//         username: username,
//         phone: phone,
//         email: email
//       })
//       .then(() => {
//         this.setState({
//           username: "",
//           phone: "",
//           email: ""
//         });
//       })
//       .catch(err => {
//         return err;
//       });
//   };
//
//   render() {
//     console.log(this.state);
//     let { users, username, phone, email } = this.state;
//     return (
//       <div className="App">
//         <h2>Left sidebar</h2>
//
//         <Form
//           users={users}
//           email={email}
//           phone={phone}
//           handleSubmit={this.handleSubmit}
//           onChangeHandler={this.onChangeHandler}
//         />
//         <Users users={users} />
//       </div>
//     );
//   }
// }
//
// export default App;
