<template>
<div class="pageTitle">
  <p>{{title}}</p>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageTitle',
  props: {
    notice: {
      type: String,
      default: 'like'
    }
  },
  data () {
    return {
      title: '',
      titleList: {
        comment: this.$t('notice.comment'),
        like: this.$t('notice.like'),
        repost: this.$t('notice.repost'),
        follow: this.$t('notice.follow'),
        at: this.$t('notice.aite'),
        more: this.$t('notice.more')
      }
    }
  },
  created: function () {
    this.title = this.titleList[this.notice]
  }
}
</script>

<style scoped lang="less">
.pageTitle{
  padding: 16px;
  font-size: 34px;
  font-weight: bold;
  color: #000000;
  letter-spacing: 0;
  text-align: justify;
  line-height: 34px;
  border-bottom:1px solid #E7EBEE;
}
</style>
