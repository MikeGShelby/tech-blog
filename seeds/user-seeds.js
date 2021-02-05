const { User } = require('../models');

const userData = [
  {
    username: 'Smokey B',
    email: 'email1@email.com',
    password: 'password1',
    user_image: 'images/avatars/avatar-1.png'
  },
  {
    username: 'Robby R',
    email: 'email2@email.com',
    password: 'password2',
    user_image: 'images/avatars/avatar-6.png'
  },
  {
    username: 'Marvin M',
    email: 'email3@email.com',
    password: 'password3',
    user_image: 'images/avatars/avatar-22.png'
  },
  {
    username: 'Ragnar V',
    email: 'email4@email.com',
    password: 'password4',
    user_image: 'images/avatars/avatar-5.png'
  },
  {
    username: 'Bozo C',
    email: 'email5@email.com',
    password: 'password5',
    user_image: 'images/avatars/avatar-16.png'
  },
  {
    username: 'Arthur K',
    email: 'email6@email.com',
    password: 'password6',
    user_image: 'images/avatars/avatar-38.png'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
