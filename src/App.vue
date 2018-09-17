<template>
  <div id="app" class="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      device: '',
      transitionNameHold: {
        andr: {
          left: 'a-slide-left',
          right: 'a-slide-right'
        },
        ios: {
          left: 'slide-left',
          right: 'slide-right',
        }
      },
      transitionName: '',
      hold: ''
    }
  },
  created: function () {
    this.device = /android/i.test(navigator.userAgent);
    this.hold = this.device ? this.transitionNameHold.andr : this.transitionNameHold.ios;
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = this.hold.left;
      }else{
        this.transitionName = this.hold.right;
      }
    }
  }
}
</script>

<style>

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  -ms-transform: translate3d(100%, 0, 0);
  -o-transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  -ms-transform: translate3d(100%, 0, 0);
  -o-transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
}


.a-slide-right-enter-active,
.a-slide-right-leave-active,
.a-slide-left-enter-active,
.a-slide-left-leave-active {
  will-change: transform;
  transition: all 300ms 50ms;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.a-slide-right-enter {
  transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
}
.a-slide-right-leave-active {
  transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  -ms-transform: translate3d(100%, 0, 0);
  -o-transform: translate3d(100%, 0, 0);
}
.a-slide-left-enter {
  transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  -ms-transform: translate3d(100%, 0, 0);
  -o-transform: translate3d(100%, 0, 0);
}
.a-slide-left-leave-active {
  transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
}


.hightLight {
  animation:fadeBg 3s ease-out;
}
@keyframes fadeBg {
  0%,70%{
    background-color: #F8F8F8;
  }
  100%{
    background-color: #ffffff;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  min-height: 100%;
}
</style>
