<template>
    <School ref="school"></School>
    <div>{{ count }}</div>
    <div>{{ doubleCountOnlyRead }}</div>
    <div>{{ doubleCount }}</div>
    <el-button type="primary" @click="count ++">count加一</el-button>
    <el-button type="primary" @click="doubleCount = 8">doubleCount改成8</el-button>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import School from './components/School.vue'
const school = ref();
onMounted(()=>{
    school.value.showName();
})
const count = ref<number>(0);
const doubleCountOnlyRead = computed<number>(()=>count.value*2);
const doubleCount = computed<number>({
   get:()=>count.value*2,
   set:(value)=>{
      count.value = value;
   }
})
</script>
