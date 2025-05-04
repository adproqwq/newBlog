import type { UserThemeConfig } from 'valaxy-theme-yun';
import { defineValaxyConfig } from 'valaxy';
import { addonTwikoo } from 'valaxy-addon-twikoo';
import { addonFace } from 'valaxy-addon-face';
import { addonMeting } from 'valaxy-addon-meting';
import { addonVercount } from 'valaxy-addon-vercount';

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'AdproのBlog',
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
      content: '背景图现在每次刷新都是不一样的咯！',
    },

    fireworks: {
      enable: false,
    },

    pages: [
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
        icp: '苏ICP备17038157号',
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
        id: '8881355236',
        server: 'tencent',
        type: 'playlist',
        auto: 'tencent',
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
