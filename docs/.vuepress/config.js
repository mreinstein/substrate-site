module.exports = {
    title: 'Substrate',
    description: 'Literate programming for JavaScript',
    /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
    themeConfig: {
        nav: [
        {
            text: 'Guide',
            link: '/guide/',
        },
        {
            text: 'Tutorials',
            link: '/tutorials/',
        },
        {
            text: 'Examples',
            link: '/examples/',
        },
        {
            text: 'Github',
            link: 'https://github.com/mreinstein/substrate'
        }
        ],
        sidebar: {
            '/guide/': [
                '',
                'getting-started',
                'documents',
                'integrating-in-build'
            ],
            '/tutorials/': [
                '',
                'interactive-views',
                'views-in-dependencies',
                'rollup-plugin'
            ],
            '/examples/': [
                ''
            ],
            // fallback
            '/': [
                ''        /* / */
            ]
        },
        sidebarDepth: 1,
        smoothScroll: false
    },
    extendsMarkdown: (md) => {
        md.use(require('markdown-it-container'), 'tip')
    }
}