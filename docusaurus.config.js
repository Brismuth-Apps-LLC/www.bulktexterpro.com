// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bulk Texter Pro',
  tagline: 'Send texts with a personal touch, at scale.',
  url: 'https://www.bulktexterpro.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'brismuth',
  projectName: 'www.bulktexterpro.com',
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bulk Texter Pro',
        logo: {
          alt: 'Bulk Texter Pro Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'downloads',
            position: 'left',
            label: 'Downloads',
          },
          {
            to: 'docs/getting-started/installing-it',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'docs/features',
            position: 'left',
            label: 'Features',
          },
          {
            to: 'docs/faq',
            position: 'left',
            label: 'FAQ',
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
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started/installing-it',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'support@bulktexterpro.com',
                to: 'mailto:support@bulktexterpro.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Bulk Texter (free)',
                href: 'https://github.com/brismuth/google-voice-bulk-texter',
              },
            ],
          },
          {
            title: 'More about me',
            items: [
              {
                label: 'Blog',
                href: 'https://brismuth.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/brismuth',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/1569320/brismuth',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brismuth Apps, LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
