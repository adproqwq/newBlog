import type { UserThemeConfig } from 'valaxy-theme-yun';
import { defineValaxyConfig } from 'valaxy';
import { addonTwikoo } from 'valaxy-addon-twikoo';
import { addonFace } from 'valaxy-addon-face';

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
      url: 'https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/Miku.86tu4zvtyj.jpg',
      dark: 'https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/Miku.86tu4zvtyj.jpg',
      opacity: 0.5,
    },

    notice: {
      enable: true,
      hideInPages: true,
      content: '换了新背景图，但感觉夜间差点，谁给张适合夜间的？',
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
    addonFace(),
  ],

  unocss: { safelist },
})
