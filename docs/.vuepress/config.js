const getConfig = require("vuepress-bar");

const { nav, sidebar } = getConfig({
    // See https://github.com/ozum/vuepress-bar
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
        ]
    },
}
