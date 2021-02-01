const { Post } = require('../models');

const postData = [
  {
    title: 'Title 1',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    user_id: 1
  },
  {
    title: 'Title 2',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    user_id: 1
  },
  {
    title: 'Title 3',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    user_id: 1
  },
  {
    title: 'Title 4',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    user_id: 2
  },
  {
    title: 'Title 5',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    user_id: 2
  },
  {
    title: 'Title 6',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
