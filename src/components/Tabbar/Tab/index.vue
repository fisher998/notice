<template>
    <div class="tab">
        <div class="tab-bg-box">
            <div class="tab-bg" :class="'tab-bg' + type">
                <div v-if="number > 0" class="tab-bg-notice">{{ number > 99 ? '99+' : number }}</div>
            </div>
        </div>
        <p class="tab-text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    data () {
        return {

        }
    },
    props: {
        type: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        number: {
            type: Number,
        }
    }
}
</script>

<style lang="less" scoped>
.tab {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .tab-bg-box {
        width: 40%;
        height: auto;
        position: relative;
        margin: 0 auto;
        &::before {
            content: '';
            width: 100%;
            display: block;
            height: 0;
            padding-top: 100%;
            position: relative;
            z-index: 1;
        }
        .tab-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: 0 0;
            .tab-bg-notice {
                font-size: 12px;
                position: absolute;
                top: -5px;
                left: 70%;
                color: #ffffff;
                background: #D95E40;
                padding: 2px 5px;
                border-radius: 8px;
                text-align: center;
                box-shadow: 1px 1px 4px #888888;
            }
        }
        .tab-bg1 {
            background-image: url('../../../images/通知评论.svg');
        }
        .tab-bg2 {
            background-image: url('../../../images/通知喜欢.svg');
        }
        .tab-bg3 {
            background-image: url('../../../images/通知转发.svg');
        }
        .tab-bg4 {
            background-image: url('../../../images/通知订阅.svg');
        }
        .tab-bg5 {
            background-image: url('../../../images/通知提到.svg');
        }
        .tab-bg6 {
            background-image: url('../../../images/通知更多.svg');
        }
    }
    .tab-text {
        color: #8D9FAE;
    }
}
</style>
