const { Post } = require('../models');

const postData = [
  {
    title: 'Article Title 1',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-1.jpg',
    user_id: 1
  },
  {
    title: 'Article Title 2',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-2.jpg',
    user_id: 3
  },
  {
    title: 'Article Title 3',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-3.jpg',
    user_id: 3
  },
  {
    title: 'Article Title 4',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-4.jpg',
    user_id: 6
  },
  {
    title: 'Article Title 5',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-5.jpg',
    user_id: 4
  },
  {
    title: 'Article Title 6',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-6.jpg',
    user_id: 1
  },
  {
    title: 'Article Title 7',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-7.jpg',
    user_id: 4
  },
  {
    title: 'Article Title 8',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-8.jpg',
    user_id: 5
  },
  {
    title: 'Article Title 9',
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam posuere posuere. Id ad dolor incididunt laboris laboris commodo id cillum et reprehenderit et. Consectetur ut in dolor consequat non consectetur mollit laborum culpa aute mollit. Occaecat Lorem sit dolore in anim sunt eu. Qui eiusmod anim ad consequat.

    Duis velit ex dolor qui nisi mollit ad fugiat laboris culpa anim ea ex sint. Esse fugiat id incididunt culpa. Pariatur non ut proident non adipisicing. Ex excepteur aliqua qui tempor enim consequat incididunt. Dolore exercitation sint pariatur exercitation ad veniam eu sunt enim eiusmod sint. Est occaecat incididunt laboris duis cillum. Et irure cupidatat sint ex nisi sint.

    Fugiat Lorem do do ut qui incididunt et Lorem. Esse quis ea mollit ad exercitation amet ullamco dolore elit duis. Aute cillum nisi velit exercitation consequat elit commodo ut ex. Adipisicing exercitation eiusmod et adipisicing nulla aliquip.

    Minim ullamco incididunt labore ad. Irure aliqua pariatur commodo ullamco irure cupidatat in adipisicing nostrud minim cillum consequat ex. Et ipsum sint occaecat qui ipsum aute aliquip velit. Irure ea ex ea deserunt labore mollit. Adipisicing sit proident ipsum nisi sit laboris incididunt esse. Mollit nulla cupidatat officia consequat ad in. In mollit nulla enim excepteur ipsum voluptate laboris non minim esse officia eiusmod amet.

    Proident elit cupidatat veniam mollit ipsum cillum pariatur. Aliqua ullamco consectetur officia culpa cupidatat consectetur nisi occaecat enim Lorem pariatur magna mollit ut. Ut magna sunt amet aute fugiat. Laboris fugiat minim duis ad sit consequat voluptate non veniam laboris ullamco eu. Mollit aute est elit et amet consectetur sit amet laboris consequat nisi laborum ipsum.

    Laboris commodo id duis voluptate do fugiat quis aliqua. Duis commodo sit officia occaecat est esse non sit ipsum. Velit minim id sunt sunt ex aliqua officia deserunt dolor adipisicng incididunt ad. Culpa nostrud do sunt quis aliqua duis. Proident ullamco quis do quis irure excepteur ullamco.`,
    post_image: 'images/post-image-9.jpg',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
