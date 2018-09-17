<template>
<div class="complaint-container">
  <p>{{$t('complaint.notice.title')}}</p>
  <div class="input-container">
    <textarea :placeholder="$t('complaint.notice.title')" v-model="mask" @input="checkCount()" @porpertychange="checkCount()"></textarea>
  </div>
  <div class="btn-container">
    <button class="" :class="{disable: !maskOk}" v-if="!sended" @click="submit">{{$t('complaint.notice.btnBef')}}</button>
    <button class="disable" v-if="sended" @click="submit">{{$t('complaint.notice.btnEd')}}</button>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import {JS__watchPreventBack, JS__preventBack} from '../../assets/methods/index.js'
export default {
  name: 'complaint',
  data() {
    return {
      sended: false,
      mask: '',
      maskOk: false,
      lang: 'cn',
      id: '',
      masktRule: {
        cn: {
          min: 50,
          max: 500
        },
        en: {
          min: 200,
          max: 2000
        }
      }
    }
  },
  mounted: function () {
    this.id = this.$route.params['id'];
    this.pullMsg()
  },
  created () {
    this.lang = this.$store.state.lang;
    this.initPrevent();
  },
  beforeDestory: function () {
    this.distoryPrevent()
  },
  methods: {
    initPrevent: function () {
      JS__watchPreventBack(true);
      window.JS__preventBack_getState = () => {
        let prevent = false;
        if(this.mask) {
          // 这里加弹窗
          prevent = true;
        }
        return prevent;
      }
      window.JS__preventBack = JS__preventBack;
      window.JS__preventBack_getState()
    },
    distoryPrevent: function () {
      JS__watchPreventBack(false)
      window.JS__preventBack = function () {}
    },
    checkCount: function () {
      this.mask = this.mask.replace(/^\s+/,'').replace(/\s{1,}/g, ' ');
      if (this.mask >= this.masktRule[this.lang].min && this.mask <= this.masktRule[this.lang].max) {
        this.maskOk = true;
      } else {
        this.maskOk = false;
      }
    },
    submit: function () {
      if(this.sended) {
        return false;
      }
      let len = this.mask.length;
      if (len > this.masktRule[this.lang].max) {
        // 输入长度超限
        console.log('输入的太长了')
      } else if (len < this.masktRule[this.lang].min){
        // 输入太短
        console.log('输入的太短了')
      } else {
        // 正好
        console.log('输入的正好')
        this.send()
      }
    },
    pullMsg: function () {
      // 拉取数据，是否申诉过
      let params = {
        id: this.id,
        token: this.token
      }
      if(Number(this.id) < 1000) {
        this.sended = true
        this.mask = ''
      } else {
      }
    },
    send: function () {
      // 发送申诉数据
      console.log('ajax发申诉请求')
      this.$toast.loading({
        mask: true,
        message: '请稍后...'
      })
      setTimeout(() => {
        this.sendSuccess();
      },500)
    },
    sendSuccess: function () {
      this.$toast.success('提交成功');
    },
    sendFail: function (errorCode) {
      switch (errorCode) {
        case 301:
          break;
        case 301:
          break;
        case 301:
          break;
      }
    }

  }
}
</script>

<style lang="less" scoped>
.complaint-container{
  text-align: left;
  padding: 8px 16px 20px;
  p{
    padding:16px 0;
    line-height: 20px;
    font-size: 14px;
    color: #3F3F3F;
  }
  .input-container{
    padding: 16px;
    height: 268px;
    background: #F7F7F7;
    border-radius: 4px;
    textarea{
      width: 100%;
      height:100%;
      resize: none;
      margin: 0;
      padding: 0;
      background: none;
      border:none;
      outline:none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      font-size: 16px;
      color: #000000;
      text-align: justify;
      line-height: 21px;
    }
  }
  .btn-container{
    margin: 48px 0;
    padding:0 16px;
    button{
      width: 100%;
      height: 45px;
      margin: 0;
      padding: 0;
      border:none;
      outline:none;
      font-size: 18px;
      color: #ffffff;
      background-image: linear-gradient(-90deg, #19A5FF 8%, #117BFD 100%);
      border-radius: 36px;
      &.disable{
        background-image: linear-gradient(-145deg, #E1E1E1 0%, #D3D3D3 100%);
      }
    }
  }
}
</style>
