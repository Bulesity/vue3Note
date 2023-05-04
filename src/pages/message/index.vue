<template>
    <div>
        <!-- <div>Message 通过路由props选项传递query参数，
            当props为函数类型时将函数的返回值以props的方式传递给目标组件
            params参数同理
        </div>s
        <div>{{ props.title }}</div>
        <div>{{ props.from }}</div> -->
        <div class="serch">
            <el-input v-model="loginName" placeholder="输入用户名"></el-input>
            <el-button type="primary" @click="serch" icon="Search">查询</el-button>
        </div>
        <div v-show="showUserInfo" class="container">        
            <div v-for="item in UserInfoList.value" 
                :key="item.node_id" >
                <UserInfoVue               
                :user-name="item.login" 
                :avatar-url="item.avatar_url"
                @show-name="showName">
                </UserInfoVue>
            </div>
        </div>      
    </div>
</template>
<script setup>
import { computed, reactive,ref } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus'
import UserInfoVue from '../../components/UserInfo.vue'
const props = defineProps({
    title:String,
    from:String
});
const UserInfoList = reactive([]);
console.log(UserInfoList)
const showUserInfo = computed(()=>{
    if(!UserInfoList.value){
        console.log('ffff')
        return false
    }
    console.log('vvvvv')
    return UserInfoList.value.length > 0;
})
const loginName = ref('');
function serch(){
   axios(`https://api.github.com/users`).then(res=>{    
      UserInfoList.value = res.data;
      loginName.value = '';  
      console.log(UserInfoList.value,UserInfoList.value.length > 0,showUserInfo)  
   }).catch(error=>{
      ElMessage.error(`请求错误，错误信息：${error.message}`)
   })
}
function showName(data){
    ElMessage.info(data) 
}
</script>
<style scoped lang="scss">
$serch-input-width:50vh;
.serch{
    width: $serch-input-width;
    display: flex;
    margin: auto;
}
.container{
    margin-top:100px;  
    height: 600px;
    width: 100vh;
    margin: auto;
    /* 设置容器布局为grid布局 */
    display: grid;
        /* 指定每一行的宽度 每个宽度中间用空格隔开 */
    grid-template-rows:150px 150px 150px 150px 150px 150px 150px 150px 150px;
    /* 指定每一列的宽度 每个宽度中间用空格隔开 */
    grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px;
}
</style>