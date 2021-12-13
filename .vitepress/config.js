const getPages = require('../theme/utils/pages')
const getConfig = async() => {
  return {
    head: [
      [
        'meta',
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
      ['meta', { name: 'keywords', content: '释晨的小屋' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    title: '释晨的小屋',
    themeConfig: {
      displayAllHeaders: true,
      logo: '/favicon.ico',
      pages: await getPages(),
      author: '释晨的小屋',
      search: true,
      nav: [
        { text: '🏠 首页', link: '/' },
        { text: '📅 归档', link: '/more/docs' },
        { text: '📂 分类', link: '/more/tags' },
        // {
        //   text: "🔨 关于",
        //   items: [
        //     { text: "📜 README", link: "/README" },
        //     { text: "📫 订阅我", link: "/more/subscribe" },
        //     { text: "📝 建站日志", link: "/more/update-log" },
        //   ],
        // },
      ],
    },
    dest: 'public',
  }
}
export default getConfig()
