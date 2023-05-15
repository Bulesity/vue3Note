<template>
    <div>
        <el-input label="原始" v-model="originalValue"></el-input>
        <el-input label="防抖" v-model="prevevtValue"></el-input>
        {{ state01.count }}
        {{ state01.msg.text }}
        <el-button @click="addCount">count++</el-button>
        <el-button @click="changeText">changeText</el-button>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref, shallowReactive,watchEffect } from 'vue'
import {useDebouncedRef} from '@/utils/index'
export default defineComponent({
    setup() {
        const originalValue = ref('');
        const prevevtValue = useDebouncedRef('');
        const state01 = shallowReactive({
            count:1,
            msg:{text:'hello'}
        });
        function addCount(){
            state01.count ++;
        }
        function changeText(){
            state01.msg.text = 'v' + Date.now();
        }
        watchEffect(()=>{
            console.log(state01, 'change')
        })
        return {
            originalValue,
            prevevtValue,
            state01,
            addCount,
            changeText
        }
    },
})
</script>
