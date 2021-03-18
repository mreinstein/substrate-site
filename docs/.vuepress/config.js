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
            text: 'Examples',
            link: '/examples/',
        },
        {
            text: 'Tutorials',
            link: '/tutorials/',
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
            // fallback
            '/': [
                ''        /* / */
            ]
        },
        sidebarDepth: 1,
        smoothScroll: false
    }
}