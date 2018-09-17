<template>
<div class="c-box">
    <div class="circular-box" v-for="(item, index) in noticeArr" @click="openCircular(item.notice_url)" :key="index">
        <div class="circular">
            <div class="circular-left">
                <div class="circular-left-bg" :style="{'backgroundImage': 'url(' + item.list_url + ')'}">

                </div>
                <div v-show="item.is_top === 1" class="placeUp">{{ $t('home.top') }}</div>
            </div>
            <div class="circular-right">
                <p class="circular-title">{{ item.notice_title }}</p>
                <p class="circular-content">{{ item.notice_summary }}</p>
                <p class="circular-time">{{ item.create_time | time }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { getParamsByUrl } from '@/utils/urlFormat';
import { dateFormat  } from '../../utils/dateFormat.js';
export default {
    name: 'Circular',
    props: {
        noticeArr: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            isUp: true,
            time: ''
        }
    },
    methods: {
        openCircular (notice_url) {
            console.log(notice_url)
            var notice_obj;
            if (/^((https?:\/\/)?www\.ono\.chat\/ono\/article|(https?:\/\/)?www\.joinono\.com\/ono\/article)/.test(notice_url)) {
                notice_obj = getParamsByUrl(notice_url);
                // this.JS__methods.JS__openArticle(notice_obj.id, Number(notice_obj.contentType));
                this.JS__methods.JS__openArticle(notice_obj.id, Number(notice_obj.content_type));
            } else if (/http:\/\/47\.93\.241\.33\/ono\/article/.test(notice_url)) {
                notice_obj = getParamsByUrl(notice_url);
                console.log(notice_obj)
                // this.JS__methods.JS__openArticle(notice_obj.id, Number(notice_obj.contentType));
                this.JS__methods.JS__openArticle(notice_obj.id, Number(notice_obj.content_type));
            } else {
                window.location.href = (/^https?/.test(notice_url) ? notice_url : ('https://' + notice_url));
            }
        }
    },
    created () {
        
    },
    filters: {
        time (value) {
            return dateFormat(new Date()-0, value).normalTime;
        }
    },
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.c-box {
    width: 100%;
    .circular-box {
        width: 100%;
        height: auto;
        position: relative;
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 0;
            padding-top: 30%;
            position: relative;
            z-index: 1;
        }
        .circular {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            display: flex;
            justify-content: flex-start;
            padding-left: 4.26%;
            padding-right: 4.26%;
            .circular-left {
                padding: 5.33% 0;
                width: 22.33%;
                height: 100%;
                position: relative;
                margin-right: 16px;
                &-bg {
                    width: 100%;
                    height: 100%;
                    background: #cccccc;
                    border-radius: 10px;
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                .placeUp {
                    width: auto;
                    height: auto;
                    font-size: 10px;
                    line-height: 10px;
                    color: #ffffff;
                    text-align: center;
                    padding-left: 3px;
                    padding-right: 4px;
                    padding-top: 3px;
                    // padding-bottom: 3px;
                    background: #D95E40;
                    border-radius: 4px;
                    position: absolute;
                    top: 10%;
                    white-space: nowrap;
                    right: -8px;
                }
            }
            .circular-right {
                width: 71%;
                height: 100%;
                padding: 6.33% 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .border_1px(#E7EBEE);
                .circular-title {
                    line-height: 1.1;
                    font-size: 18px;
                    color: #000000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: left;
                }
                .circular-content {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 1.2em;
                    font-size: 14px;
                    color: #8D9FAE;
                    margin-bottom: 5%;
                    text-align: left;
                }
                .circular-time {
                    text-align: left;
                    font-size: 14px;
                    color: #8D9FAE;
                }
            }
        }
    }
}
</style>
