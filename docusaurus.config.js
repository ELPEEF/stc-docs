// @ts-check
// Docusaurus config untuk SmartWisataChain Docs

const config = {
  title: 'SmartWisataChain Docs',
  tagline: 'Transparansi & Otomatisasi Ekosistem Wisata',
  url: 'https://elpeef.github.io',
  baseUrl: '/swc-docs/', // Disesuaikan dengan nama repo GitHub
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'ELPEEF', // GitHub username/organisasi
  projectName: 'swc-docs', // Nama repo GitHub

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
          docId: 'installation',
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
          title: 'Documentation',
          items: [
            {
              label: 'Installation',
              to: '/docs/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussion',
              href: 'https://github.com/ELPEEF/swc-docs/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ELPEEF/swc-docs',
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
