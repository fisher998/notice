<template>
<div class="notice">
  <div class="inner">
    <h1>{{noticeSet.title}}</h1>
    <p>{{noticeSet.desc}}</p>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'defaultNotice',
  props: {
    notice: {
      type: String,
    }
  },
  data () {
    return {
      noticeSet: {
        title: '',
        desc: ''
      },
      noticeList: {
        comment: {
          title: this.$t('comment.notice.title'),
          desc: this.$t('comment.notice.desc')
        },
        like: {
          title: this.$t('like.notice.title'),
          desc: this.$t('like.notice.desc')
        },
        repost: {
          title: this.$t('repost.notice.title'),
          desc: this.$t('repost.notice.desc')
        },
        follow: {
          title: this.$t('follow.notice.title'),
          desc: this.$t('follow.notice.desc')
        },
        at: {
          title: this.$t('at.notice.title'),
          desc: this.$t('at.notice.desc')
        },
        more: {
          title: this.$t('more.notice.title'),
          desc: this.$t('more.notice.desc')
        }
      }
    }
  },
  mounted: function () {
    this.noticeSet = this.noticeList[this.notice];
  }
}
</script>

<style scoped lang="less">
.notice{
  padding: 35% 58px 0;
  text-align: center;
  h1{
    font-size: 20px;
    color: #000;
    line-height: 20px;
    margin-bottom: 12px;
    font-weight: bold;
  }
  p{
    font-size: 14px;
    color: #D3D6D9;
    line-height: 21px;
  }
}
</style>
