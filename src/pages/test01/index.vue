<template>
    <div ref="ev">
       {{ state.title }}
       <el-button @click="btnCilck">btnCilck</el-button>
    </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUpdate, onMounted,onUnmounted,onUpdated,ref, shallowReactive } from 'vue'

export default defineComponent({
    setup() {
        const ev = ref<any>();
        const state = shallowReactive({
            title:'have a dinner',
            id:'wwwww'
        });
        // const timeId = setInterval(()=>{
        //     console.log('start !')
        // },500)
        onMounted(()=>{  //注册一个回调函数，在组件挂载完成后执行。
            console.log(ev.value)
            console.info('组件挂载完成')
        });
        onUpdated(()=>{ //注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。
           console.log(state.title);
           console.info('组件状态更新完成')
        });
        onUnmounted(()=>{  //注册一个回调函数，在组件实例被卸载之后调用。
           //clearInterval(timeId);
           console.info('组件卸载之后')
        });
        onBeforeMount(()=>{
            console.info('组件挂载之前')
        });
        onBeforeUpdate(()=>{
            console.log(state.title);
            console.info('组件状态更新之前')
        })
        function btnCilck(){
            state.title = 'have a langch'
        }
        return {
            ev,
            state,
            btnCilck
        }
    },
})
</script>
