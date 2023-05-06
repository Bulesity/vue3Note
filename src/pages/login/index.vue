<template>
    <div class="box">
        <div>
            <el-form :model="form" label-width="80px" ref="loginForm">
                <el-form-item label="用户名">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="toHomePage">登入</el-button>
                    <el-button type="primary" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
            
        </div>
    </div>
</template>
<script setup>
import { reactive,ref } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter() 
const loginForm = ref(null);
const form = reactive({
    name:'',
    password:''
})
function toHomePage(){
    router.replace({ path: '/home' })
}
function reset(){
   
}
</script>
<style scoped>
.box{
    height: 100vh;
    display: flex;
    align-content: center;
    align-items: center;
}
.box>div{
    background-color: aliceblue;
    padding: 20px;
    height: 120px;
    width: 400px;
    margin: auto;
}
</style>
