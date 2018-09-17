<template>
<div class="page-more page-container">
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
          @click="jumpTo(item)" 
        >
          <div class="item">
            <avatar :img="item.img" :operator="item.operator"/>
            <i class="avatar" :style="{backgroundImage: 'url('+ item.img +')'}"></i>
            <div class="conts">
              <!--  -->
              <h4><nick :nick="item.nick" :operator="item.operator"></nick></h4>
              <p><!--
              --><span v-if="item.type === 1"><!--举报被受理-->{{$t('more.infos.type_repost')}}</span><!--
              --><span v-if="item.type === 2"><!--文章被折叠-->{{$t('more.infos.type_fold')}}</span>
              </p>
              <date :timestamp="item.created_at" :currentTime="status.timestape" />
            </div>
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
import avatar from  '../comps/avatar'
import nick from '../comps/nick'
import defaultNotice from '../comps/default-notice.vue'
import { getUnReadNotify } from '@/assets/api/interface'
export default {
  name: 'more',
  components: {
    pageTitle,
    date,
    defaultNotice,
    avatar,
    nick
  },
  data() {
    return {
      name: 'more',
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
        })
        .catch((error) => {
          this.finished = true;
          console.log(error)
        })
    },
    onRefresh () {
      this.getData('', true,() => {
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
    jumpTo (item) {
      if(item.type === 1) { // 举报被受理
        this.$store.dispatch('commitFRInfo',{
          nick: item.info.nick,
          time: item.info.time,
          title: item.info.title,
          reason: item.info.reason
        })
        this.$router.push({path: 'report/detail/' + item.id})
      } else if (item.type === 2) {
        this.$store.dispatch('commitFoldInfo',{
          nick: item.info.nick,
          time: item.info.time,
          title: item.info.title,
          reason: item.info.reason
        })
        this.$router.push({path: 'fold/detail/' + item.id})
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
.page-follow{
  .item-wrap{
    .conts{
      text-align: left;
      padding:21px 0 8px 0;
    }
  }
}
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
</style>
