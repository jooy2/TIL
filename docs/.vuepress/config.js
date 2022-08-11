const getConfig = require("vuepress-bar");

const { nav, sidebar } = getConfig(`${__dirname}/..`, {
    // See https://github.com/ozum/vuepress-bar
    maxLevel: 5
})

module.exports = {
    title: `TIL`,
    description: `Today I Learned`,
    /*head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],*/
    themeConfig: {
        sidebar,
        nav: [
            {
                text: 'GitHub',
                link: 'https://github.com/jooy2/TIL'
            }, {
                text: 'Blog',
                link: 'https://jootc.com'
            },
            ...nav
        ],
        contributors: false
    }
}
