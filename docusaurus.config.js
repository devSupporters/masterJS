// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'masterJS',
    tagline:
        'All-In-One, free resources and collections related to javascript. we provide useful links to help you  learn JavaScript, web development and other related stuff along with some of the best resources available online.',
    url: 'https://masterjs.vercel.app/',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: '/img/js-logo.png',
    organizationName: 'devSupporters',
    projectName: 'masterJS',
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/devSupporters/masterJS'
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/devSupporters/masterJS'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: '/img/cover.png',
            metadata: [
                {
                    name: 'title',
                    content: 'MasterJS | All you need to master javascript'
                },
                {
                    name: 'description',
                    content:
                        'All-In-One, free resources and collections related to javascript. we provide useful links to help you learn JavaScript, web development and other related stuff along with some of the best resources available online.'
                },
                {
                    name: 'keywords',
                    content:
                        'javascript, resources, masterjs, alguerocode, performance, security, roadmaps'
                }
            ],
            navbar: {
                logo: {
                    alt: 'masterJS logo',
                    src: 'img/logo.png',
                    width: 115,
                    height: 200
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Resources'
                    },
                    {
                        href: 'https://github.com/devSupporters/masterJS',
                        label: 'GitHub',
                        position: 'right'
                    }
                ]
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Resources',
                        items: [
                            {
                                label: 'Resources',
                                to: '/docs/intro'
                            }
                        ]
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://leetcode.com/salah959/'
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/cfyQkKcd'
                            }
                        ]
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/devSupporters/masterJS'
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} alguerocode, Inc. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
}

module.exports = config
