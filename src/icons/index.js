import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'
import FontIcon from '@/components/FontIcon'
// register globally
Vue.component('svg-icon', SvgIcon)
Vue.component('font-icon', FontIcon)

// require.context(directory, useSubdirectories = false, regExp = /^\.\//);
// require.context('../', true, /\.stories\.js$/);
// （创建出）一个 context，其中所有文件都来自父文件夹及其所有子级文件夹，request 以 `.stories.js` 结尾。

const req = require.context('../', true, /\.svg$/)

const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
