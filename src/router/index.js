import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import comment from '@/components/comment/index'
import like from '@/components/like/index'
import repost from '@/components/repost/index'
import follow from '@/components/follow/index'
import at from '@/components/at/index'
import more from '@/components/more/index'
import complaint from '@/components/complaint/index'
import report from '@/components/report/index'
import fold from '@/components/fold/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        index: 0
      }
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment,
      meta: {
        index: 1
      }
    },
    {
      path: '/like',
      name: 'like',
      component: like,
      meta: {
        index: 1
      }
    },
    {
      path: '/repost',
      name: 'repost',
      component: repost,
      meta: {
        index: 1
      }
    },
    {
      path: '/follow',
      name: 'follow',
      component: follow,
      meta: {
        index: 1
      }
    },
    {
      path: '/at',
      name: 'at',
      component: at,
      meta: {
        index: 1
      }
    },
    {
      path: '/more',
      name: 'more',
      component: more,
      meta: {
        index: 1
      }
    },
    {
      path: '/complaint/:id',
      name: 'complaint',
      component: complaint,
      meta: {
        index: 3
      }
    },
    {
      path: '/report/detail/:id',
      name: 'report',
      component: report,
      meta: {
        index: 2
      }
    },
    {
      path: '/fold/detail/:id',
      name: 'fold',
      component: fold,
      meta: {
        index: 2
      }
    }
  ]
})
