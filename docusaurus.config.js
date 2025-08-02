// @ts-check
// Docusaurus config untuk SmartWisataChain Docs

const config = {
  title: 'SmartWisataChain Docs',
  tagline: 'Transparansi & Otomatisasi Ekosistem Wisata',
  url: 'https://elpeef.github.io',
  baseUrl: '/swc-docs/', 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'ELPEEF', 
  projectName: 'swc-docs', 

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ELPEEF/swc-docs/tree/main/',
        },
        blog: false, // Blog dinonaktifkan dulu
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'SmartWisataChain',
      logo: {
        alt: 'SmartWisataChain Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/ELPEEF/swc-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
                {
          title: 'Community',
          items: [
            {
              label: 'Discussion',
              href: 'https://github.com/ELPEEF/smartwisatachain/discussions',
            },
          ],
        },
        {
          title: 'Website',
          items: [
            {
              label: 'SWC',
              href: 'https://smartourism.elpeef.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} SmartWisataChain. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
  },
};

module.exports = config;
