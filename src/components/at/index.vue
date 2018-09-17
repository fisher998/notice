<template>
<div class="page-at page-container">
  <!-- <pageTitle :notice="name"></pageTitle> -->
  <transition name="fead-out">
    <div class="loading" v-if="!isFinish"  >
      <van-loading type="spinner" color="black" />
    </div>
  </transition>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" v-show="isFinish" :pulling-text="$t('pulling')" :loosing-text="$t('loosing')" :loading-text="$t('loading')">
    <van-list v-model="loading" :finished="finished" @load="onLoad" :loading-text="$t('loading')">
      <default-notice :notice="name" v-if="!(isFinish && arr.length > 0)"></default-notice>
      <div class="item-wrap" v-else>
        <div class="item-box" 
          :class="{ 'hightLight': item.created_at > last_time }" 
          v-for="(item, index) in arr" 
          :key="index"
        >
          <div class="item">
            <avatar :img="item.img" :operator="item.operator"/>
            <!--<i class="avatar" :style="{backgroundImage: 'url('+ item.img +')'}"></i>-->
            <div class="conts" @click="jumpTo(item)">
              <h4><nick :nick="item.nick" :operator="item.operator"></nick></h4>
              <p>
                <!-- {{$t('at.infos.word_1')}} --><!--
                --><span v-if="item.notice_type === 1"><!--故事-->{{$t('at.notice.story')}}</span><!--
                --><span v-if="item.notice_type === 2"><!--转发-->{{$t('at.notice.forward')}}</span><!--
                --><!-- {{$t('at.infos.word_2')}} -->
              </p>
              <date :timestamp="item.created_at" :currentTime="status.timestape" />
            </div>
            <thum class="item-thum" :thum="item"/>
          </div>
        </div>
      </div>

    </van-list>
  </van-pull-refresh>
</div>
</template>

<script type="text/ecmascript-6">
import pageTitle from '../comps/pageTitle'
import date from '../comps/date'
import thum from '../comps/thum'
import avatar from  '../comps/avatar'
import nick from '../comps/nick'
import defaultNotice from '../comps/default-notice.vue'
import { getUnReadNotify } from '@/assets/api/interface'
export default {
  name: 'at',
  components: {
    pageTitle,
    date,
    thum,
    defaultNotice,
    avatar,
    nick
  },
  data() {
    return {
      name: 'at',
      isLoading: false,
      loading: false,
      finished: false,
      isFinish: false,
      paging: 20,
      arr: [],
      last_time: null,
      status: {},
    }
  },
  created () {
    let delay =/android/i.test(navigator.userAgent) ? 350 : 0;
    setTimeout(() => {
      this.getData('', true, (data) => {
        if(data.data.arr.length < this.paging) {
          this.finished = true;
        }
      })
    }, delay)
  },
  methods: {
    getData (last_id, isRefresh, callback) {
      getUnReadNotify(this.$store.state.token, this.$store.state.message_type[this.name], last_id, this.paging)
      .then(res => {
        const data = res.data;
        if(data.status.code === 0) {
          this.$store.dispatch('syncMessageCounts', data.data.total);
          if(isRefresh) {
            this.arr = data.data.arr;
          } else {
            this.arr = this.arr.concat(data.data.arr);
          }
          this.last_time = data.data.last_time;
          this.status = data.status;
          if(data.data.arr.length < this.paging) {
              this.finished = true;
            } else {
              this.finished = false;
            }
          this.isFinish = true;
          if(callback) callback(data);
        } else {
        }
      }).catch(error => {
        this.finished = true;
        console.log(error)
      })
    },
    onRefresh () {
      this.getData ('', true, () => {
        this.isLoading = false;
        // this.$toast('刷新成功');
      })
    },
    onLoad (){
      this.getData(this.arr[this.arr.length - 1] ? this.arr[this.arr.length - 1].id : '', false, (data) => {
        this.loading = false;
        if(data.data.arr.length > 0) {
          this.arr.concat(data.data.arr);
        }
        if(data.data.arr.length < this.paging) {
          this.finished = true;
        }
      })
    },
    jumpTo: function (item) {
      this.JS__methods.JS__openArticle(item.feed_id, item.content_type)
    },
    start (e) {
      e.path.forEach(ele => {
        if (ele.className === 'item-box') {
          ele.className = 'item-box grew';
          return;
        }
      });
    },
    end (e) {
      e.path.forEach(ele => {
        if (ele.className === 'item-box grew') {
          ele.className = 'item-box';
          return;
        }
      });
    }
  }
}
</script>

<style scoped lang="less">
.page-container .item-wrap .item-box p span{
  margin-right: 0;
}
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.loading {
    padding-top: 42%;
    div:first-child {
      margin: 0 auto;
    }
  }
</style>
