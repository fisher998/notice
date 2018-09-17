<template>
<div class="page-report">
  <div class="inner">
    <p>
      你好，你举报{{arti.nick}}发布的文章《文章标题》已被折叠，原因是XXX，违反《ONO共同纲领》。
    </p>
    <p>
      感谢你对ONO社交网络繁荣做出的贡献，你的参与和支持让ONO更美好。
    </p>
    <div class="fall">
      <h6>ONO小秘书</h6>
      <span>{{reportTime}}</span>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'report',
  data() {
    return {
      name: 'report',
      id: '',
      reportTime: '2018-07-29 10:29:00',
      arti: {
        nick: 'XX',
        time: '2018年5月11日',
        title: '《文章标题》',
        reason: 'XXXX'
      }
    }
  },
  created () {
    this.id = this.$route.params['id']
    this.arti = this.$store.state.FRInfo
  },
  methods: {
    jumpToComplaint () {
    }
  }
}
</script>

<style scoped lang="less">
.page-report{
  padding: 50px 16px 20px;
  text-align: left;
  color: #000000;
  font-size: 14px;
  line-height: 24px;
  p{
    text-indent: 1.2em;
  }
  span.blue{
    color: #117bfd;
  }
  .fall{
    margin-top: 50px;
    line-height: 1;
    text-align: right;
    h6{
      margin-bottom: 8px;
    }
    span{
      font-size: 12px;
      line-height: 20px;
    }
  }
  a{
    text-decoration: underline;
  }
}

</style>
