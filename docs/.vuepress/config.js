const getConfig = require('vuepress-bar');

const { nav, sidebar } = getConfig(`${__dirname}/..`, {
  // See https://github.com/ozum/vuepress-bar
  maxLevel: 5,
});

module.exports = {
  title: 'TIL',
  description: 'Jooy2\'s Today I Learned. 각종 분야에서 습득한 다양한 지식을 정리한 미니 블로그입니다.',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    sidebar,
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/jooy2/TIL',
      }, {
        text: 'Blog',
        link: 'https://jootc.com',
      },
      ...nav,
    ],
    contributors: false,
  },
};
