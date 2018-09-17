<template>
<div class="page-repost page-container">
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
            <div class="conts" @click.stop="jumpTo(item)">
              <h4><p class="nick"><nick :nick="item.nick" :operator="item.operator"></nick></p><p class="content">{{ item.content_type === 1 ? $t('repost.notice.story') : $t('repost.notice.article') }}</p></h4>
              <p class="item-content">
                {{ item.content }}
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
  name: 'repost',
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
      name: 'repost',
      isLoading: false,
      loading: false,
      finished: true,
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
    getData: function (last_id, isRefresh, callback) {
      getUnReadNotify(this.$store.state.token, this.$store.state.message_type[this.name], last_id, this.paging)
        .then((res, req) => {
          const data = res.data;
          if(data.status.code === 0) {
            this.$store.dispatch('syncMessageCounts', data.data.total);
            if(isRefresh) {
              this.arr = data.data.arr;
            } else {
              this.arr = this.arr.concat(data.data.arr);
            }
            this.status = data.status;
            this.last_time = data.data.last_time;
            if(data.data.arr.length < this.paging) {
              this.finished = true;
            } else {
              this.finished = false;
            }
            this.isFinish = true;
            if(callback) callback(data);
          } else {
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.finished = true;
          console.log(error)
        })
    },
    onRefresh () {
      this.getData('', true,(data) => {
        this.isLoading = false;
        // this.$toast.success('刷新成功');
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
    jumpTo (item) {
      // if (item.target_type === 1) {
        this.JS__methods.JS__openArticle(item.comment_id, item.content_type);
      // } else if (item.target_id === item.feed_id && item.target_type === 2) {
      //   this.JS__methods.JS__openComment(item.feed_id, item.content_type, item.owner_id, item.comment_id);
      // } else {
        // this.JS__methods.JS__openComment(item.feed_id, item.content_type, item.owner_id, item.target_id, item.comment_id);
      // }
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
.page-container{
  .item-wrap{
    .item-box {
      h4{
        overflow: visible;
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        p{
          overflow: visible;
        }
        .nick{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .content{
          margin-left: 10px;
          color: #8D9FAE;
        }
      }
    }
  }
}


.fead-out-enter-active, .fead-out-leave-active {
  transition: opacity 0.5s;
}
.fead-out-enter, .fead-out-leave-to {
  opacity: 0;
}
</style>
