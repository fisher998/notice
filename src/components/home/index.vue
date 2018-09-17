<template>
  <div class="home-container" id="home-container" >
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :pulling-text="$t('pulling')" :loosing-text="$t('loosing')" :loading-text="$t('loading')">
      <van-list v-model="loading" :finished="finished" @load="onLoad" :loading-text="$t('loading')">
        <div class="home">
          <Tabbar title="first" :countMap="countMap"></Tabbar>
          <div class="notice-title-box">
            <div class="notice-title">
              {{ $t('homeTitle') }}
            </div>
          </div>
          <Circular v-if="noticeArr.length > 0" :noticeArr="noticeArr"></Circular>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script type="text/ecmascript-6">
import Tabbar from '../Tabbar';
import Circular from '../Circular';
import { unreadNotify } from '@/assets/api/interface.js';
export default {
  name: 'home',
  data () {
    return {
      isLoading: false,
      loading: false,
      finished: false,
      paging: 20,
      countMap: {},
      noticeArr: [],
    }
  },
  components: {
    Tabbar,
    Circular
  },
  created () {
    this.JS__methods.JS__changeTitle(this.$t('home.pageTitle'));
  },
  mounted () {
    const hc = document.getElementById('home-container');
    const top = document.getElementsByClassName('notice-title-box')[0].offsetTop + document.getElementsByClassName('notice-title-box')[0].clientHeight;
    let state = false;  // state: false 通知， true： 公告
    const _this = this;
    hc.onscroll = function () {
      if(hc.scrollTop > top && !state) {
        state = true;
        _this.JS__methods.JS__changeTitle(_this.$t('homeTitle'))
        
      } else if (hc.scrollTop <= top && state) {
        state = false;
        _this.JS__methods.JS__changeTitle(_this.$t('home.pageTitle'))
      }
    }
  },
  methods: {
    getData (last_id, isRefresh, callback) {
      unreadNotify(this.$store.state.token,this.$store.state.lang === 'cn' ? 1 : 2, last_id, this.paging).then((res, req) => {
        const data = res.data;
        if(data.status.code === 0) {
          this.countMap = res.data.data.countMap;
          if(isRefresh) {
              this.noticeArr = res.data.data.noticeArr;
            } else {
              this.noticeArr = this.noticeArr.concat(data.data.noticeArr);
            }
            if(data.data.noticeArr.length < this.paging) {
              this.finished = true;
            } else {
              this.finished = false;
            }
          if(callback) callback(data);
        } else {
          // 处理其他错误
        }
      }).catch(error => {
        console.log(error)
      })
    },
    onRefresh() {
      this.getData('', true, (data) => {
        this.isLoading = false;
      })
    },
    onLoad() {
      this.getData(this.noticeArr[this.noticeArr.length - 1] ? this.noticeArr[this.noticeArr.length - 1].id : '', false, (data) => {
        this.loading = false;
        if(data.data.noticeArr.length > 0) {
          this.noticeArr.concat(data.data.noticeArr);
        }
        if(data.data.noticeArr.length < this.paging) {
          this.finished = true;
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import '../../styles/index.less';
.home-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  .van-pull-refresh {
    height: auto;
    min-height: 100%;
  }
  .home {
    width: 100%;
    height: 100%;
    .notice-title-box {
      width: 100%;
      position: relative;
      height: auto;
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 0;
        // padding-top: 15%;
        padding-top: 24%;
        position: relative;
        z-index: 1;
      }
      .notice-title {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        // padding: 9.66% 0 0 4.26%;
        padding: 10.66% 0 0 4.26%;
        text-align: left;
        font-family: PingFangSC-Semibold;
        // font-size: 16px;
        font-size: 34px;
        // color: #8D9FAE;
        color: #000000;
        .border_1px(#E7EBEE;);
      }
    }
  }
}
</style>
