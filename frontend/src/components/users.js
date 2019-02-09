import React from 'react';


const Users = (props) => {
  console.log(props)
  let userReturn = props.users.map(user => {
    return (
    <div className="userDisplay">
      <h4>username: {user.username} </h4>
      <br />
      <p>email: {user.email}</p>
      <p>phone: {user.phone_number}</p>



    </div>
  )
  })

  return (<div >
     {userReturn}
  </div>)

}

export default Users
