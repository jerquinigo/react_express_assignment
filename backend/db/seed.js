const { db } = require('./index.js');
const faker = require('faker');


let users = [];

for (let i = 0; i < 25; i++) {
  let username = faker.name.findName();
  let email = faker.internet.email();
  let phone_number = faker.phone.phoneNumber()
  // let str = "( '" + username + "', '" + email + "', '" + phone_number + "')";
  let str = `('${username}', '${email}', '${phone_number}' )`
  users.push(str)
  console.log(typeof(phone_number),"this")
}

let photos = [];

for(let i = 0; i < 50; i++) {
  let user_id = Math.floor(Math.random() * 25) + 1;
  let url = faker.image.imageUrl();
  let str = "( " + user_id + ", '" + url + "')";
  photos.push(str)
}

let comments = [];

for(let i = 0; i < 100; i++) {
  let user_id = Math.floor(Math.random() * 25) + 1;
  let photo_id = Math.floor(Math.random() * 50) + 1;
  let body = faker.lorem.sentence();
  let str = `(${user_id}, ${photo_id}, '${body}')`
  comments.push(str)
}



users = users.join(", ")
photos = photos.join(", ")
comments = comments.join(", ")


db.none("INSERT INTO users(username, email, phone_number) VALUES " + users + ";")
  .then(() => {
    db.none("INSERT INTO photos(user_id, url) VALUES " + photos + ";")
    .then(() => {
      db.none("INSERT INTO comments(user_id, photo_id, body) VALUES " + comments + ";")
    })
  })
  .catch(err => {
    console.log(err);
  })
