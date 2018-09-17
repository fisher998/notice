// import enLocale from 'element-ui/lib/locale/lang/en';
// import auth from './auth/en/auth';
const en = {
  // 发起申诉相关
  complaint: {
    pageTitle: 'Appeal',
    notice: {
      title: 'Fill in your reason for the appeal:',
      btnBef: 'submit',
      btnSucc: 'Submitted successfully',
      btnEd: 'submitted'
    }
  },
  report: {
    pageTitle: 'Your report acceptance notice',
  },
  fold: {
    pageTitle: 'Content folding notice',
  },
  // 评论相关
  comment: {
    pageTitle: 'Comments',
    notice: {
      title: 'Haven\'t received any comments yet',
      desc: 'Post more interesting stories, and users who are interested in you will interact with you',
      reply: 'Reply',
      more: 'More'
    }
  },
  // 喜欢相关
  like: {
    pageTitle: 'Like',
    notice: {
      title: 'Haven\'t received it yet',
      desc: 'Post more interesting stories, and users who are interested in you will be careful',
      story: 'Liked your story',
      article: 'Like your article',
      comment: 'Like your comment',
      forwarding: 'Like your forwarding',
    }
  },
  // 转发相关
  repost: {
    pageTitle: 'Repost',
    notice: {
      title: 'Not forwarded',
      desc: 'Post more interesting stories, users who are interested in you will forward your content',
      article: 'Forwarded your article',
      story: 'Forwarded your story',
      no: 'no more'
    }
  },
  // 订阅
  follow: {
    pageTitle: 'Follow',
    notice: {
      title: 'Haven\'t received a subscription yet',
      desc: 'Post more interesting stories, users interested in you will subscribe to your content',
      more: 'More',
      foryou: 'Subscribed to you',

    }
  },
  // @相关
  at: {
    pageTitle: 'Mention',
    notice: {
      title: 'Not mentioned yet',
      desc: 'Post more interesting stories, and users who are interested in you will interact with you',
      story: 'Mentioned you in the story',
      forward: 'Mentioned you in the forwarding',

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
    pageTitle: 'More',
    notice: {
      title: 'No news notification',
      desc: ''
    },
    infos: {
      type_repost: 'Your report acceptance notice',
      type_fold: 'Your article has been folded',
      modified: 'Article permissions have been modified',
      permissions: 'Sorry, the article permissions you commented on have been modified and are temporarily unavailable.'
    }
  },
  // 首页相关
  home: {
    pageTitle: 'Notice',
    top: 'Topping'
  },
  // 首页 六宫格
  notice: {
    comment: 'Comments',
    like: 'Like',
    repost: 'Repost',
    follow: 'Follow',
    aite: '@',
    more: 'More'
  },
  // homeTitle: 'Notification list',
  homeTitle: 'Notice',
  time: {
    moment: ' 1 minute ago',
    minAgo: ' minutes ago',
    hourAgo: ' hours ago',
  },
  // auth: auth,
  // ...enLocale
  pulling: 'Pull down to refresh...',
  loosing: 'Release to refresh...',
  loading: 'Loading...'
};

export default en;
