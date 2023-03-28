// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Escape documentation',
  tagline: '',
  url: 'https://docs.escape.tech',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        max: 1030, // taille maximale de l'image redimensionnée.
        min: 640, // taille minimale de l'image redimensionnée. si celle de l'original est inférieure, utilisez cette taille.
        steps: 10, // le nombre maximum d'images générées entre min et max (inclus)
        disableInDev: false
      }
    ],
    require.resolve('docusaurus-lunr-search')
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Escape-Technologies/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'Escape logo',
          src: 'img/logo.svg',
          height: "300px",
        },
        items: [
          {
            href: 'https://escape.tech',
            label: 'Website',
            position: 'right'
          },
          {
            href: 'https://app.escape.tech/login',
            label: 'Login',
            position: 'right'
          },
          {
            href: 'https://github.com/Escape-Technologies',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.escape.tech'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/escape-technologies'
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Escape website',
                href: 'https://escape.tech/'
              },
              {
                label: 'Blog',
                href: 'https://escape.tech/blog'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Escape Technologies SAS.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
