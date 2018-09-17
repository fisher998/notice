<template>
<i @click.stop="openPersonalCenter" :style="{backgroundImage: 'url('+ avatar_url +')'}"></i>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'avatar',
  props: {
    operator: null,
    img: String
  },
  data () {
    return {
      avatar_url: require('../../assets/img/default_avatar.svg')
    }
  },
  created: function () {
    if(this.img) {
      this.avatar_url = this.img
    }
  },
  methods: {
    openPersonalCenter: function () {
      this.JS__methods.JS__openPersonalCenter(this.operator)
    }
  }
}
</script>

<style scoped>
i{
  position: absolute;
  left: 0;
  top: 21px;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../../assets/img/default_avatar.svg");
}
</style>
