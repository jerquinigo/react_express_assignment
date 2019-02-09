const { db } = require('../index.js');


const getAllUsers = (req,res,next) => {
  db.any("SELECT * FROM users")
  .then(users => {
    res.status(200).json({
      status: "success",
      users:users,
      message: "recieved all users"
    })
  })
  .catch(err => next(err))
}

const getOneUser = (req,res,next) => {
  let userId = parseInt(req.params.id)
  db.one("SELECT * FROM users where id=$1", [userId])
  .then(users => {
    res.status(200).json({
      status: "success",
      users: users,
      message: "recieved one user"
    })
  })
}

const editOneUser = (req,res,next) => {
  // let userId = parseInt(req.params.id)
  db.none("UPDATE users SET username = ${username}, email = ${email}, phone_number = ${phone_number} WHERE id = ${id}", {
    username: req.body.username,
    email: req.body.email,
    phone_number: req.body.phone_number,
    id: parseInt(req.params.id)
  })
.then(()=> {
  res.status(200).json({
    status: "success",
    message: "edited one user"
  })
}).catch(err => next(err))

}

const addNewUser = (req,res,next) => {

  db.none("INSERT INTO users (username,email,phone_number) VALUES (${username}, ${email}, ${phone_number})", req.body)
  .then(()=> {
    res.status(200).json({
      status: "success",
      message: "added new user"
    })
  }).catch(err => next(err))
}




module.exports = {getAllUsers, getOneUser, editOneUser, addNewUser}
