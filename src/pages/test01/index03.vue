<template>
    <div>响应式工具</div>
    <div>
        isRef <br/>  
        {{ states.count }}
    </div>
    <div></div>
    <div></div>
    <div></div>
    <el-button type="primary" @click="changeStates('A')">jj</el-button>
    <el-button type="primary" @click="changeStates('B')">ww</el-button>
</template>
<script lang="ts">
import { defineComponent,isRef,reactive,ref, toRef, toRefs, unref,shallowRef, watchEffect,triggerRef } from 'vue';
export default defineComponent({
    setup(){
        const isRefStr = ref('y');
        const xi = 'w';
        console.log(isRef(isRefStr),isRef(xi)) //return true/false
        console.log(unref(isRefStr), unref(xi)) //val = isRef(val) ? val.value : val
        const state = reactive({
            name:'zs',
            age:18
        })
        const newState = toRef(state,'name');
        //基于响应式对象上的一个属性，创建一个对应的 ref。
        //这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。
        newState.value = 'ls';
        console.log(state)
        state.name = 'ww';
        console.log(state);
        const vState = toRefs(state);
        //将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。
        //每个单独的 ref 都是使用 toRef() 创建的。
        vState.name.value = 'zl';
        console.log(state);
        const {name,age} = vState;//用于解构
        age.value = 99;
        console.log(state);
        const states = shallowRef({ count: 1})     
        // 不会触发更改
        function changeStates(type:string){
          if(type == 'A'){
            states.value.count = 9;   
            triggerRef(states);//强制触发依赖于一个浅层 ref 的副作用，这通常在对浅引用的内部值进行深度变更后使用。       
          }else{
            states.value = {count:7}
          }      
        }
        watchEffect(()=>{
                console.log(states.value)
            })
        // 会触发更改
       
        if(isRef(isRefStr)){
            isRefStr.value = 'x';
        }
        return {
            isRefStr,
            states,
            changeStates
        }
    }
})
</script>