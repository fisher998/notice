<template>
<div class="thum" @click.stop="jumpArticle">
  <div class="img" v-if="cover" :style="{backgroundImage: 'url('+ cover +')'}"></div>
  <div class="text" v-if="!cover && summary"><span>{{summary}}</span></div>
  <div class="default" v-if="!cover && !summary"></div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'thum',
  props: {
    thum: {
      type: Object,
    },
  },
  data () {
    return {
      cover: '', // 要显示的图片
      summary: ''//摘要
    }
  },
  created () {
    
  },
  mounted: function () {
    if(this.thum.content_type === 2) { // 长文
      this.cover = this.thum.cover
    } else if (this.thum.content_type === 1) { // 短故事
      if(this.thum.img_urls) {
        this.cover = this.thum.img_urls.split(',')[0];
      } else if(this.thum.title) {
        this.summary = this.thum.title;
      } else {
        this.summary = this.thum.summary;
      }
    } else {
      // 其他类型，暂时还没有
    }
  },
  methods: {
    jumpArticle () {
      if(this.thum.notice_type &&  this.thum.notice_type === 2) {
        this.JS__methods.JS__openArticle(this.$props.thum.original_feed_id, this.$props.thum.content_type);
      } else {
        this.JS__methods.JS__openArticle(this.$props.thum.feed_id, this.$props.thum.content_type);
      }
      
    }
  }
}
</script>

<style scoped lang="less">
.thum{
  position: absolute;
  right: 0;
  top:21px;
  width: 60px;
  height:60px;
  border-radius: 4px;
  overflow: hidden;
  .img, .text,.default{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    font-size: 14px;
    color: #000000;
    letter-spacing: 0;
    text-align: justify;
    line-height:15px;
    background-color: #F7F7F7;
  }
}
.page-container{
   .item-wrap{
      .item-box{
        .text{
          background-color: transparent;
          display: flex;
          display: -webkit-flex;
          align-items:center;
          justify-content: center;
          span{
            display: inline-block;
            max-height: 100%;
            display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:4;-webkit-box-orient:vertical;
          }
        }
      }
   }
}
</style>
