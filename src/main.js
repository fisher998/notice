// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index'
import { Button, Cell, CellGroup, Row, Col, PullRefresh, Toast, List, Loading } from 'vant';
import i18n from './i18n/i18n.js';
import './styles/index.less';
import {JS__getCurrentCount, JS__openArticle,  JS__openComment, JS__watchPreventBack, JS__preventBack, JS__openPersonalCenter, JS__openLike, JS__changeTitle, JS__tokenError} from './assets/methods/index.js';
import vueTouch from './assets/touch/index';
// import vConsole from 'vconsole'

// new vConsole()

Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(PullRefresh);
Vue.use(Toast);
Vue.use(List);
Vue.use(Loading);

Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.prototype.JS__methods = {
  JS__getCurrentCount: JS__getCurrentCount,
  JS__openArticle: JS__openArticle,
  JS__openComment: JS__openComment,
  JS__watchPreventBack: JS__watchPreventBack,
  JS__preventBack: JS__preventBack,
  JS__openPersonalCenter: JS__openPersonalCenter,
  JS__openLike: JS__openLike,
  JS__changeTitle: JS__changeTitle,
  JS__tokenError: JS__tokenError
}
const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
  watch: {
    $route: {
      handler: function (value, oldValue) {
        let keys = value.name + '.pageTitle';
        this.JS__methods.JS__changeTitle(i18n.t(keys))
      },
      // 深度观察监听
      deep: true
    }
  }
});

new vueTouch(document.getElementById('app'), 'item-box', 'grew')

window.JS__getCurrentCount = function () {
  if (/android/i.test(navigator.userAgent)) {
      try {
        return app.$store.state.currentMessageCounts;
      } catch (e) {
          console.log(e)
      }
  } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
      try {
        return {count: app.$store.state.currentMessageCounts};
      } catch (e) {
          console.log(e)
      }
  }
}