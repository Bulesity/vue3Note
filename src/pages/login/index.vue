<template>
    <div class="box">
        <div>
            <el-form :model="formData"  label-width="80px" ref="loginForm" :rules="rules">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="formData.name" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formData.password" type="password"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="toHomePage">登入</el-button>
                    <el-button type="primary" @click="resetForm(loginForm)">重置</el-button>
                </el-form-item>
            </el-form>
            
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive,ref } from 'vue'
import {useRouter} from 'vue-router'
import type { FormInstance,FormRules  } from 'element-plus';
const router = useRouter() 
const loginForm = ref<FormInstance>();
const formData = reactive({
    name:'',
    password:''
})
const rules:FormRules = reactive({
   name:[{ required: true, message: 'Please input Activity name', trigger: 'blur'}],
   password:[{ required: true, message: 'Please input Activity password', trigger: 'blur'}]
})
function toHomePage(){
    const userInfo = {name:formData.name || '',password:formData.password || ''}
    localStorage.setItem('userInfo',JSON.stringify(userInfo));
    router.replace({ path: '/home' })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
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
    height: 180px;
    width: 400px;
    margin: auto;
}
</style>
