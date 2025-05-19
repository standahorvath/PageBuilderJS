import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PageBuilderJs",
  description: "Documentation for page builder js.",
  base: '/PageBuilderJS/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/getting-started' },
      { text: 'View demo', link: '/demo' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Define Modules', link: '/modules' },
          { text: 'Define Toolbar', link: '/toolbar' },
          { text: 'Listen to events', link: '/events' },
          { text: 'Icon List', link: '/icons' },
          { text: 'Demo', link: '/demo' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/standahorvath/PageBuilderJS' }
    ]
  }
})
