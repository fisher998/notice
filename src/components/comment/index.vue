<template>
  <div class="page-comment page-container">
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
            <div class="conts" @click.stop="jumpComment(item)">
              <h4><nick :nick="item.nick" :operator="item.operator"></nick></h4>
              <p>
                <span v-if="item.type === 8"><!--回复-->{{$t('comment.notice.reply')}}</span><!--
                -->{{ item.content }}
              </p>
              <date :timestamp="item.created_at" :currentTime="status.timestape"/>
            </div>
            <thum :thum="item"/>
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
import defaultNotice from '../comps/default-notice.vue'
import nick from '../comps/nick'
import { getUnReadNotify } from '@/assets/api/interface'
export default {
  name: 'comment',
  components: {
    pageTitle,
    date,
    thum,
    avatar,
    defaultNotice,
    nick
  },
  data() {
    return {
      name: 'comment',
      isLoading: false,
      loading: false,
      isFinish: false,
      finished: true,
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
    getData: function (last_id, isRefresh,callback) {
      getUnReadNotify(this.$store.state.token, this.$store.state.message_type[this.name], last_id, this.paging)
        .then((res, req) => {
          const data = res.data;
          if(data.status.code === 0) {
            this.$store.dispatch('syncMessageCounts', data.data.total);
            console.log('coment: ' + data.data.total)
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
            console.log(this.arr)
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
      // 刷新
      this.getData('', true,(data) => {
        this.isLoading = false;
        // this.$toast.success('刷新成功');
      })
    },
    onLoad (){
      this.getData(this.arr[this.arr.length - 1] ? this.arr[this.arr.length - 1].id : '', false,(data) => {
        this.loading = false;
        if(data.data.arr.length > 0) {
          this.arr.concat(data.data.arr);
        }
        if(data.data.arr.length < this.paging) {
          this.finished = true;
        }
      })
    },
    jumpComment (item) {
      if (item.target_id === item.feed_id && item.target_type === 1) {
        this.JS__methods.JS__openComment(item.feed_id, item.content_type, item.owner_id, item.comment_id);
      } else {
        this.JS__methods.JS__openComment(item.feed_id, item.content_type, item.owner_id, item.target_id, item.comment_id);
      }
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
.fead-out-enter-active, .fead-out-leave-active {
  transition: opacity 0.5s;
}
.fead-out-enter, .fead-out-leave-to {
  opacity: 0;
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