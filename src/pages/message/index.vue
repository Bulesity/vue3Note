<template>
    <div>
        <div>Message 通过路由props选项传递query参数，
            当props为函数类型时将函数的返回值以props的方式传递给目标组件
            params参数同理
        </div>
        <div>{{ props.title }}</div>
        <div>{{ props.from }}</div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title:String,
    from:String
})
</script>