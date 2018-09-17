<template>
    <div class="bar-box">
        <div class="bar">
            <router-link to="/comment" class="one-type">
                <Tab type="1" :text="$t('notice.comment')" :number="countMap['commentCount']"></Tab>
            </router-link>
            <router-link to="/like" class="one-type">
                <Tab type='2' :text="$t('notice.like')" :number="countMap['loveCount']"></Tab>
            </router-link>
            <router-link to="/repost" class="one-type">
                <Tab type='3' :text="$t('notice.repost')" :number="countMap['transmitCount']"></Tab>
            </router-link>
            <router-link to="/follow" class="one-type">
                <Tab type='4' :text="$t('notice.follow')" :number="countMap['SubCount']"></Tab>
            </router-link>
            <router-link to="/at" class="one-type">
                <Tab type='5' :text="$t('notice.aite')" :number="countMap['mentionCount']"></Tab>
            </router-link>
            <router-link to="/more" class="one-type">
                <Tab type='6' :text="$t('notice.more')" :number="countMap['moreCount']"></Tab>
            </router-link>
        </div>
    </div>
</template>

<script>
import Tab from './Tab';
export default {
    name: 'Tabbar',
    data () {
        return {
            tabBarList: [
                'comment',
                'like',
                'repost',
                'follow'
            ]
        }
    },
    props: {
        countMap: {
            type: Object,
            required: true,
        }
    },
    components: {
        Tab
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.bar-box {
    position: relative;
    width: 100%;
    height: auto;
    background: #F7F7F7;
    &::before {
        content: '';
        width: 100%;
        height: 0;
        padding-top: 62.4%;
        position: relative;
        z-index: 1;
        display: block;
    }
    .bar {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 4% 0;
        .one-type {
            width: 33.3%;
            height: 50%;
        }
    }
}
</style>
