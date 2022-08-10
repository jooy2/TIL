const getConfig = require("vuepress-bar");
const { defaultTheme } = require('@vuepress/theme-default')


const { nav, sidebar } = getConfig(`${__dirname}/..`, {
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
    theme: defaultTheme({
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
    })
}