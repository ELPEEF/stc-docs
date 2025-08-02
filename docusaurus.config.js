// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SmartWisataChain Docs',
  tagline: 'Documentation for Smart Contract based Tourism Platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://smartourism.elpeef.com',
  baseUrl: '/docs/',

  organizationName: 'elpeef', // GitHub username/org
  projectName: 'swc-docs',     // GitHub repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/elpeef/swc-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/elpeef/swc-docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SmartWisataChain Docs',
      logo: {
        alt: 'SmartWisataChain Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/elpeef/swc-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/elpeef/swc-docs/discussions',
            },
            {
              label: 'Ko-fi Support',
              href: 'https://ko-fi.com/khudri',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'SmartWisataChain Plugin',
              href: 'https://github.com/elpeef/smartwisatachain',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ELPEEF Dev Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
