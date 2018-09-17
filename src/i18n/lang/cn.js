// import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
// import auth from './auth/cn/auth';
const cn = {
  // 发起申诉相关
  complaint: {
    pageTitle: '申诉',
    notice: {
      title: '填写你的申述理由：',
      btnBef: '提交',
      btnSucc: '提交成功',
      btnEd: '已提交'
    }
  },
  report: {
    pageTitle: '举报受理通知',
  },
  fold: {
    pageTitle: '内容折叠通知',
  },
  // 评论相关
  comment: {
    pageTitle: '评论',
    notice: {
      title: '还没有收到任何评论',
      desc: '发布更多有趣故事，对你感兴趣的用户将会和你互动',
      reply: '回复',
      more: '展开更多'
    }
  },
  // 喜欢相关
  like: {
    pageTitle: '喜欢',
    notice: {
      title: '还没有收到喜欢',
      desc: '发布更多有趣故事，对你感兴趣的用户将会给你送上小心心',
      story: '喜欢你的故事',
      article: '喜欢你的文章',
      comment: '喜欢你的评论',
      forwarding: '喜欢你的转发'
    }
  },
  // 转发相关
  repost: {
    pageTitle: '转发',
    notice: {
      title: '没有被转发',
      desc: '发布更多有趣故事，对你感兴趣的用户将会转发你的内容',
      article: '转发了你的文章',
      story: '转发了你的故事',
      no: '没有更多'
    }
  },
  // 订阅
  follow: {
    pageTitle: '订阅',
    notice: {
      title: '还没有收到订阅',
      desc: '发布更多有趣故事，对你感兴趣的用户将会订阅你的内容',
      more: '展开更多',
      foryou: '订阅了你',

    }
  },
  // @相关
  at: {
    pageTitle: '提到',
    notice: {
      title: '还没有被提及',
      desc: '发布更多有趣故事，对你感兴趣的用户将会和你互动',
      story: '在故事中提到了你',
      forward: '在转发中提到了你',

    },
    // infos: {
    //   word_1: '在',
    //   word_2: '中提及了你',
    //   type_story: '故事',
    //   type_forward: '转发'
    // }
  },
  // 更多相关
  more: {
    pageTitle: '更多',
    notice: {
      title: '暂无消息通知',
      desc: ''
    },
    infos: {
      type_repost: '你的举报受理通知',
      type_fold: '你的文章已被折叠',
      modified: '文章权限已修改',
      permissions: '对不起，你评论的文章权限已修改，暂时无法访问。',
    }
  },

  // 首页相关
  home: {
    pageTitle: '通知',
    // 置顶
    top: '置顶'
  },
  // 首页 六宫格
  notice: {
    comment: '评论',
    like: '喜欢',
    repost: '转发',
    follow: '订阅',
    aite: '提及我',
    more: '更多'
  },
  // homeTitle: '通知列表',
  homeTitle: '公告',
  // auth: auth,
  // ...zhLocale
  time: {
    moment: '刚刚',
    minAgo: '分钟前',
    hourAgo: '小时前',
    
  },
  pulling: '下拉即可刷新...',
  loosing: '释放即可刷新...',
  loading: '加载中...'
};

export default cn;
