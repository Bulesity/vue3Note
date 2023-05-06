<template>
    <div class="common-layout">
     <el-container>
       <el-header>
         <!-- <div>{{ store.count }}</div>
         <div>{{ store.double }}</div>
         <div>{{ store1.name }}</div> -->
       </el-header>
       <el-container>
         <el-aside width="200px" style="background-color:#545c64;">
           <el-menu
         active-text-color="#ffd04b"
         background-color="#545c64"
         :collapse="isCollapse"
         :router="true"     
         class="el-menu-vertical-demo"
         default-active="/"
         text-color="#fff"
         @open="handleOpen"
         @close="handleClose"
       >      
         <el-menu-item index="/home/echart/myID/myName">
           <el-icon><Picture /></el-icon>
           <span>视图统计</span>
         </el-menu-item>
         <el-menu-item index="/home/about?id=cid&name=cname">
           <el-icon><document /></el-icon>
           <span>添加笔记</span>
         </el-menu-item>
         <el-menu-item index="/home/message" :route="{
           path:'/home/message',
           query:{title:'中将了',from:'App'}
         }">
           <el-icon><User /></el-icon>
           <span>用户信息</span>
         </el-menu-item>   
         <el-menu-item index="/home/form">
           <el-icon><document /></el-icon>
           <span>印象表单</span>
         </el-menu-item>  
         </el-menu>
         </el-aside>
         <el-main>
           <router-view></router-view>
         </el-main>
       </el-container>
     </el-container>
   </div>
 </template>
 
 <script setup>
 import {ref} from 'vue'
 // import { useCounterStore } from './stores/useCounterStore'
 // import {useProductStore} from './stores/useProductStore'
 // const store = useCounterStore();
 // const store1 = useProductStore()
 // store.count++
 // store.increment();
 //store.$reset(); 重置state
 
 const isCollapse = ref(false);
 function handleOpen(){
 
 }
 function handleClose(){
   
 }
 </script>
 
 <style>
 .el-container {
     display: flex;
     flex-direction: row;
     flex: 1;
     flex-basis: auto;
     box-sizing: border-box;
     min-width: 0;
     height: 100vh;
 }
 </style>
 