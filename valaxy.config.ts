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
      content: '不可測な異端の証明　画面に花が咲いて　現実に社会に反抗する　不完全な、不安定な魔法',
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
