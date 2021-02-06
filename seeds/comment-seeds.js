const { Comment } = require('../models');

const commentData = [
  {
    comment_text: `Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing.`,
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: `Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.`,
    user_id: 1,
    post_id: 8
  },
  {
    comment_text: `Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.`,
    user_id: 2,
    post_id: 8
  },
  {
    comment_text: `Fugiat Lorem do do ut qui incididunt et Lorem. `,
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: `Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex.

    Et ipsum sint occaecat qui ipsum aute aliquip velit.`,
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: `Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing.`,
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: `Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.`,
    user_id: 4,
    post_id: 7
  },
  {
    comment_text: `Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.`,
    user_id: 5,
    post_id: 6
  },
  {
    comment_text: `Fugiat Lorem do do ut qui incididunt et Lorem. `,
    user_id: 5,
    post_id: 6
  },
  {
    comment_text: `Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex.

    Et ipsum sint occaecat qui ipsum aute aliquip velit.`,
    user_id: 6,
    post_id: 9
  }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
