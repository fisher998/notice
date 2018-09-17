<template>
  <div class="page-fold">
    <div class="inner">
      <p>
        你好，你于{{arti.time}}发布的<span>{{arti.title}}</span>已被折叠，原因是{{arti.reason}}，违反《ONO共同纲领》。
        <!--如果你对该处理结果存在疑问，<a @click="jumpToComplaint">立即申诉</a>。-->
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
    name: 'fold',
    data() {
      return {
        name: 'fold',
        id: '',
        reportTime: '2018-07-29 10:29:00',
        arti: {
          nick: '',
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
        this.$router.push({
          path: '/complaint/' + this.id
        })
      }
    }
  }
</script>

<style scoped lang="less">
.page-fold{
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
