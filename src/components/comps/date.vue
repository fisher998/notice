<template>
<span>{{time}}</span>
</template>

<script type="text/ecmascript-6">
import { dateFormat } from '../../utils/dateFormat.js';
export default {
  name: 'date',
  props: {
    timestamp: {
      type: Number,
    },
    currentTime: {
      type: Number
    }
  },
  data () {
    return {
      time: '',
      interval: null,
      reTime: ''
    }
  },
  created () {
    this.reTime = dateFormat(this.$props.currentTime, this.$props.timestamp, this);
    this.time = this.reTime.list
  },
  mounted () {

  },
  beforeDestory () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
span{
  display: inline-block;
  font-size: 12px;
  color: #8D9FAE;
  line-height: 1;
  height: 1em;
}
</style>
