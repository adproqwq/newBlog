import type { UserThemeConfig } from 'valaxy-theme-yun';
import { defineValaxyConfig } from 'valaxy';
import { addonTwikoo } from 'valaxy-addon-twikoo';
import { addonFace } from 'valaxy-addon-face';
import { addonMeting } from 'valaxy-addon-meting';
import { addonVercount } from 'valaxy-addon-vercount';

// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-ri-money-cny-circle-line',
];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'AoneのBlog',
    },

    bg_image: {
      enable: true,
      url: 'https://t.alcy.cc/ycy',
      dark: 'https://t.alcy.cc/ycy',
      opacity: 0.5,
    },

    notice: {
      enable: true,
      hideInPages: true,
      content: '世界平和なんて噓だ 皆一人ぼっちだ',
    },

    fireworks: {
      enable: false,
    },

    nav: [
      {
        link: '/sponsor/',
        text: '捐赠',
        icon: 'i-ri-money-cny-circle-line',
      },
      {
        link: '/links/',
        text: '友链',
        icon: 'i-ri-genderless-line',
      },
    ],

    pages: [
      {
        name: '我很可爱，请给我钱～',
        url: '/sponsor/',
        icon: 'i-ri-money-cny-circle-line',
        color: '#39C5BB',
      },
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
    ],

    footer: {
      since: 2023,
      powered: true,
      beian: {
        enable: false,
        icp: '粤ICP备不知道多少号',
      },
    },
  },

  addons: [
    addonTwikoo({
      envId: 'https://twikoo.adproqwq.top',
    }),
    addonMeting({
      global: true,
      props: {
        id: '13761781950',
        server: 'netease',
        type: 'playlist',
        auto: 'netease',
        theme: '#39C5BB',
      },
    }),
    addonVercount({
      api: 'cn',
    }),
    addonFace(),
  ],

  unocss: { safelist },
})
