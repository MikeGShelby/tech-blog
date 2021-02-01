const { User } = require('../models');

const userData = [
  {
    username: 'UserName1',
    email: 'email1@email.com',
    password: 'password1',
    image: 'images/default-user-image.png'
  },
  {
    username: 'UserName2',
    email: 'email2@email.com',
    password: 'password2',
    image: 'images/default-user-image.png'
  },
  {
    username: 'UserName3',
    email: 'email3@email.com',
    password: 'password3',
    image: 'images/default-user-image.png'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
