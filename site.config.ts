import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  timezone: 'Asia/Shanghai',
  url: 'https://blog.adproqwq.top/',
  lang: 'zh-CN',
  mode: 'light',
  title: 'AdproのBlog',
  subtitle: '喵~',
  favicon: 'https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/avatar.3uusvva7na.jpg',
  author: {
    name: 'Adpro',
    avatar: 'https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/avatar.3uusvva7na.jpg',
    email: 'adpro_qwq@qq.com',
    link: 'https://github.com/adproqwq',
    intro: '一个业余开发者，喜欢自己乱写东西。打音游，不过菜菜，街机主中二节奏。',
    status: {
      emoji: '💤',
      message: 'World.execute(me);',
    },
  },
  description: 'Adpro的Blog，可能有有用的东西？',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/adproqwq',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=4003774068',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/590744015',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/adproqwq',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:adpro_qwq@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
    {
      name: '异次元之旅',
      link: 'https://travel.moe/go.html?travel=on',
      icon: 'i-ri-rocket-2-line',
      color: '#FF1585',
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },
  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      ignoreLocation: true,
    },
  },

  comment: {
    enable: true,
  },

  license: {
    enabled: true,
    type: 'by-nc-sa',
  },

  statistics: {
    enable: true,
  },

  lastUpdated: true,

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    description: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/支付宝赞赏.7i0kaqhtga.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/QQ赞赏.4cl2bsja16.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/微信赞赏.6f0uzuhv2p.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
