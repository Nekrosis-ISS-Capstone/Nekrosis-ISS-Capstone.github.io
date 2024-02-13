import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nekrosis",
  description: "Multi-platform persistence toolkit for user-provided payloads.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/Getting Started/installation' }
    ],

    logo: {src: '/nekrosis.png', width: 24, height: 24},

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/Getting Started/installation' },
          { text: 'Usage', link: '/Getting Started/usage' }
        ]
      },
      {
        text: 'Persistence',
        items: [
          { text: 'Overview', link: '/Persistence Methods/overview' },
        ],
      },
      {
        text: 'Windows',
        items: [
          { text: 'Run Key', link: '/Persistence Methods/Windows Persistence/runkey' },
          { text: 'Startup Folder', link: '/Persistence Methods/Windows Persistence/startupfolder' },
          { text: 'Shortcut', link: '/Persistence Methods/Windows Persistence/shortcut' },
        ]
      },
      {
        text: 'macOS',
        items: [
          { text: 'Launch Services', link: '/Persistence Methods/macOS Persistence/launchservices' },
        ]
      },
      {
        text: 'Linux',
        items: [
          { text: 'Cron Jobs', link: '/Persistence Methods/Linux Persistence/cronjobs' },
          { text: 'systemd', link: '/Persistence Methods/Linux Persistence/systemd' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nekrosis-ISS-Capstone/Nekrosis' }
    ]
  },
})
