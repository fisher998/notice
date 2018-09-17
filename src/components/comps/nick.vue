<template>
    <div class="nick" @click.stop="openPersonalCenter">
        {{ nick }}
    </div>
</template>

<script>
export default {
    name: 'nick',
    props: {
        operator: null,
        nick: ''
    },
    data () {
        return {
            
        }
    },
    methods: {
        openPersonalCenter () {
            this.JS__methods.JS__openPersonalCenter(this.operator)
        }
    }
}
</script>

<style lang="less" scoped>
.nick {
    display: inline-block;
    &:hover {
        // color: #d8d8d8;
    }
}
</style>
