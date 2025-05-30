import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/image/favicon.ico',
  // your git repo url
  docsRepo: 'https://github.com/ShaddockWong',
  docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: '/image/avatar.jpg',
    name: '一个柚子',
    description: '打肿脸充柚子',
    location: '西安-长安',
    // organization: '',
    // circle: true,
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/ShaddockWong' },
  ],

})
