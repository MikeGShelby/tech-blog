const { User } = require('../models');

const userData = [
  {
    username: 'UserName1',
    email: 'email1@email.com',
    password: 'password1'
  },
  {
    username: 'UserName2',
    email: 'email2@email.com',
    password: 'password2'
  },
  {
    username: 'UserName3',
    email: 'email3@email.com',
    password: 'password3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
