import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nekrosis",
  description: "Multi-platform persistence toolkit for user-provided payloads.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/Installation/cli' }
    ],

    logo: {src: '/nekrosis.png', width: 24, height: 24},

    sidebar: [
      {
        text: 'Installation',
        items: [
          { text: 'Command Line', link: '/Installation/cli' },
          { text: 'Python API', link: '/Installation/api' }
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'Command Line', link: '/Usage/cli' },
          { text: 'Python API', link: '/Usage/api' }
        ]
      },
      {
        text: 'Persistence',
        items: [
          { text: 'Overview', link: '/Persistence Methods/overview' },
          {
            text: 'Windows Persistence',
            link: '/Persistence Methods/Windows Persistence/overview',
            items: [
              { text: 'Run Key', link: '/Persistence Methods/Windows Persistence/runkey' },
              { text: 'Shortcut', link: '/Persistence Methods/Windows Persistence/shortcut' },
              { text: 'Startup Folder', link: '/Persistence Methods/Windows Persistence/startupfolder' },
            ]
          },
          {
            text: 'macOS Persistence',
            link: '/Persistence Methods/macOS Persistence/overview',
            items: [
              { text: 'launchd - Current User', link: '/Persistence Methods/macOS Persistence/launchd-current-user' },
              { text: 'launchd - Global User', link: '/Persistence Methods/macOS Persistence/launchd-global-user' },
              { text: 'launchd - Root', link: '/Persistence Methods/macOS Persistence/launchd-root' },
              { text: 'launchd - Electron (User)', link: '/Persistence Methods/macOS Persistence/launchd-electron-user' },
              { text: 'launchd - Electron (Root)', link: '/Persistence Methods/macOS Persistence/launchd-electron-root' },
              { text: 'launchd - System (User)', link: '/Persistence Methods/macOS Persistence/launchd-global-user-root-volume' },
              { text: 'launchd - System (Root)', link: '/Persistence Methods/macOS Persistence/launchd-root-root-volume' },
              { text: 'Cron Jobs', link: '/Persistence Methods/macOS Persistence/cronjobs' },
            ]
          },
          {
            text: 'Linux Persistence',
            link: '/Persistence Methods/Linux Persistence/overview',
            items: [
              { text: 'systemd', link: '/Persistence Methods/Linux Persistence/systemd' },
              { text: 'Cron Jobs', link: '/Persistence Methods/Linux Persistence/cronjobs' },
            ]
          },
        ],
      },
      {
        text: 'Sample Payloads',
        items: [
          { text: 'Windows Payload', link: '/Sample Payloads/windows' },
          { text: 'macOS Payload', link: '/Sample Payloads/macos' },
          { text: 'Linux Payload', link: '/Sample Payloads/linux' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nekrosis-ISS-Capstone/Nekrosis' }
    ]
  },
})
