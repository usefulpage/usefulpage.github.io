import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Useful Tools Documentation',
  description: 'Документация по сайту полезных инструментов',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: 'https://useful.page.gd/assets/favicon/favicon.svg' }],
    ['link', { rel: 'alternate icon', href: 'https://useful.page.gd/assets/favicon/favicon.ico' }]
  ],

  // Настройка языковых версий (локалей)
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Инструменты', items: [
            { text: 'Генераторы', link: '/guide/generators' },
            { text: 'Minecraft инструменты', link: '/guide/minecraft' },
            { text: 'Python игра', link: '/guide/python-game' }
          ]},
          { text: 'Разработчикам', items: [
            { text: 'Логирование', link: '/dev/logging' },
            { text: 'Админ-панель', link: '/dev/admin' },
            { text: 'PWA', link: '/dev/pwa' }
          ]},
          { text: 'Политики', items: [
            { text: 'Условия использования', link: '/legal/terms' },
            { text: 'Политика конфиденциальности', link: '/legal/privacy' },
            { text: 'Политика Cookies', link: '/legal/cookies' }
          ]}
        ],
        sidebar: {
          '/': [
            {
              text: 'Руководство пользователя',
              items: [
                { text: 'Введение', link: '/guide/' },
                { text: 'Генераторы', link: '/guide/generators' },
                { text: 'Minecraft инструменты', link: '/guide/minecraft' },
                { text: 'Python игра', link: '/guide/python-game' },
                { text: 'Версия для слабовидящих', link: '/guide/bvi' }
              ]
            },
            {
              text: 'Разработчикам',
              items: [
                { text: 'Логирование', link: '/dev/logging' },
                { text: 'Админ-панель', link: '/dev/admin' },
                { text: 'PWA', link: '/dev/pwa' }
              ]
            },
            {
              text: 'Юридическая информация',
              items: [
                { text: 'Условия использования', link: '/legal/terms' },
                { text: 'Политика конфиденциальности', link: '/legal/privacy' },
                { text: 'Политика Cookies', link: '/legal/cookies' }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Tools', items: [
            { text: 'Generators', link: '/en/guide/generators' },
            { text: 'Minecraft Tools', link: '/en/guide/minecraft' },
            { text: 'Python Game', link: '/en/guide/python-game' }
          ]},
          { text: 'Developers', items: [
            { text: 'Logging', link: '/en/dev/logging' },
            { text: 'Admin Panel', link: '/en/dev/admin' },
            { text: 'PWA', link: '/en/dev/pwa' }
          ]},
          { text: 'Legal', items: [
            { text: 'Terms of Use', link: '/en/legal/terms' },
            { text: 'Privacy Policy', link: '/en/legal/privacy' },
            { text: 'Cookie Policy', link: '/en/legal/cookies' }
          ]}
        ],
        sidebar: {
          '/en/': [
            {
              text: 'User Guide',
              items: [
                { text: 'Introduction', link: '/en/guide/' },
                { text: 'Generators', link: '/en/guide/generators' },
                { text: 'Minecraft Tools', link: '/en/guide/minecraft' },
                { text: 'Python Game', link: '/en/guide/python-game' },
                { text: 'Visually Impaired Version', link: '/en/guide/bvi' }
              ]
            },
            {
              text: 'For Developers',
              items: [
                { text: 'Logging', link: '/en/dev/logging' },
                { text: 'Admin Panel', link: '/en/dev/admin' },
                { text: 'PWA', link: '/en/dev/pwa' }
              ]
            },
            {
              text: 'Legal Info',
              items: [
                { text: 'Terms of Use', link: '/en/legal/terms' },
                { text: 'Privacy Policy', link: '/en/legal/privacy' },
                { text: 'Cookie Policy', link: '/en/legal/cookies' }
              ]
            }
          ]
        }
      }
    }
  },

  // Общие настройки (глобальные)
  themeConfig: {
    logo: 'https://useful.page.gd/assets/favicon/favicon.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/usefulpage/usefulpage.github.io' }
    ],
    footer: {
      message: 'Документация сайта Useful Tools',
      copyright: '© 2026 Useful Tools. Все права защищены.'
    },
    editLink: {
      pattern: 'https://github.com/usefulpage/usefulpage.github.io/edit/main/docs/:path',
      text: 'Редактировать эту страницу на GitHub'
    },
    lastUpdated: {
      text: 'Обновлено',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    }
  }
})