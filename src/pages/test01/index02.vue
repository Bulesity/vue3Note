<template>
    <div>用户信息</div>
    <span>姓名：{{ userInfo.name }}</span>
    <span>年龄：{{ userInfo.age }}</span>
    <div>爱好：
        <p v-for="(item,index) in userInfo.habit" :key="index">{{ item }}</p><br/>
    </div>
    <span>地址：{{ userInfo.address }}</span><br/>
    <span>{{ msg }}</span><br/>
    <span>{{ userInfo.other.touchName }}</span><br/>
    <span>{{ state.nested.bar }}</span><br/>
    <el-button type="primary" @click="changeName">改名</el-button>
    <el-button type="primary" @click="changeHabit">改爱好</el-button><br/>
    <!-- <el-button type="primary" @click="">bar ++</el-button> -->

</template>
<script lang="ts">
import { defineComponent, reactive,ref,shallowReactive,readonly,watchEffect } from 'vue'
export default defineComponent({
    setup(){
        const userInfo = shallowReactive({
            name:'zs',
            age:18,
            habit:['抽烟','喝酒','烫头'],
            address:'www.adress.com',
            other:{
                touchName:'kun'
            }
        });
        const otherInfo = reactive(['otherInfo']);
        const msg = reactive([ref('hello')]);
        const state = shallowReactive({
            foo: 1,
            nested: {
                bar: 2
            }
        })
        function changeName(){
            userInfo.name = 'ls';
            otherInfo[0] = 'wwww'
            msg[0].value = 'wwww'
            userInfo.other.touchName = 'kunkio' + state.nested.bar
            state.nested.bar++     
        }
        function changeHabit(){
            userInfo.habit = ['抽烟','喝酒','烫头','开车'];
        }
        const original = reactive({ count: 0 })

        const copy = readonly(original)

        watchEffect(() => {
        // 用来做响应性追踪
        console.log(copy.count)
        })
        // 更改源属性会触发其依赖的侦听器
        original.count++

        // 更改该只读副本将会失败，并会得到一个警告
        //copy.count++ // warning!
        return {
            userInfo,
            changeName,
            changeHabit,
            otherInfo,
            msg,
            state
        }
    }
})
</script>
