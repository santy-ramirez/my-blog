// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Santiago Ramirez",
  tagline:
    "Hi,Bienvenido a mi blog personal,en este blog encontraras  posts de recursos de programacion y soluciones de problemas que se me van presentando a medida que voy desarrollando proyectos, que los hago en mi tiempo libre .",
  url: "https://blog.santidev.com.ar",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  organizationName: "santy-ramirez",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // Usually your GitHub org/user name.
  projectName: "my-blog", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  stylesheets: [
    // String format.
    // Object format.
  ],

  scripts: [
    // String format.

    // Object format.
    {
      src: "https://kit.fontawesome.com/54c602822e.js",
      crossorigin: "anonymous",
      async: true,
    },
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8467593326194844",
      crossorigin: "anonymous",
      async: true,
    },
  ],

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: "G-SDN8CW1SP7",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "G-SDN8CW1SP7",
          anonymizeIP: true,
        },

        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },

        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: " https://github.com/santy-ramirez/my-blog/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],

        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#7384bc",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#7384bc",
          },
          {
            tagName: "meta",
            property: "og:image",
            content: "img/blog.png",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/logo.png",
            color: "#7384bc",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/logo.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#7384bc",
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "robots", content: "max-image-preview:large" }],

      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/blog", label: "Blogs", position: "left" },
          { to: "blog/tags/soluciones", label: "soluciones", position: "left" },
          { to: "blog/tags/recursos", label: "recursos", position: "left" },

          {
            href: "https://github.com/santy-ramirez",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Mis webs",
            items: [
              {
                label: "Portfolio",
                to: "https://santidev.com.ar",
              },
            ],
          },
          {
            title: "Mis Redes sociales",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/santy__dev",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/santy_dev/",
              },
              {
                label: "Medium",
                href: "https://medium.com/santyramirez",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blogs",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/santy-ramirez",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My blog. Santiago Ramirez.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell", "java"],
      },
    }),
};

module.exports = config;
