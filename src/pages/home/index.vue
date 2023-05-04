<template>
    <!-- <div>Home通过路径传递params参数</div>
    <div>{{ route.params.id }}</div>
    <div>{{ route.params.name }}</div> -->
    <div>   
        <el-table :data="homeTableData" border style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
        <div class="echart-view">
           <div ref="pieDom"></div>
           <div ref="barDom"></div>
        </div>
    </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import { homeTableData } from '../../data/tabledata';
import {homePieOption,homeBarOption} from '../../data/echartOptions'
import  * as echarts from 'echarts';
const pieDom = ref(null);
const barDom = ref(null);
onMounted(()=>{      
    const pieEchart = echarts.init(pieDom.value);
    const barEchart = echarts.init(barDom.value);
    const pieOption = homePieOption;
    const barOption = homeBarOption;
    pieEchart.setOption(pieOption);
    barEchart.setOption(barOption);
});

// const testObj = reactive({num:0,childObj:{num:0}})
// function add(){
//     testObj.num ++;
// }
// function addChild(){
//     testObj.childObj.num ++;
// }
// function showNum(){
//     console.log(testObj)
// }
// import { onMounted } from 'vue';
// import {useRoute} from 'vue-router'
// const route = useRoute()
// onMounted(()=>{
   
// })

</script>
<style scoped>
.echart-view{
    display: flex;
    width: 100%;
    height: 50vh;
    margin-top: 20px;
}
.echart-view>div{
    flex: 1;
}
</style>