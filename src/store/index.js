import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

const uid = getQueryVariable('uid');
const token = getQueryVariable('token');
const lang = getQueryVariable('lang');
const pos = getQueryVariable('pos');
 
const store = new Vuex.Store({
  state: {
    // 已读数量
    currentMessageCounts: 0,
    uid: uid,
    token: token,
    lang: lang ? lang : 'cn',
    pos: pos ? pos : 'cn',
    FRInfo: '', // 更多 > 折叠、举报受理，保存单个信息，供详情页使用
    message_type: {
      'comment': 1,
      'like': 2,
      'repost': 3,
      'follow': 4,
      'at': 5,
      'more': 6
    }
  },
  mutations: {
    syncMessageCounts: (state, num) => {
      state.currentMessageCounts += num
    },
    commitFRInfo: (state, info) => {
      state.FRInfo = info
    }
  },
  actions: {
    syncMessageCounts ({ commit }, num) {
      commit('syncMessageCounts', num)
    },
    commitFRInfo ({ commit }, info) {
      commit('commitFRInfo', info)
    }
  },
})

export default store;
