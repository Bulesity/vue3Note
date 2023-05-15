<template>
    <div class="box">
        <div>这是学校组件</div>
        <div>{{ name }}</div>
    </div>
</template>
<script  lang="ts">
import { defineComponent  } from 'vue';
export default defineComponent ({
    name:'School',
    data() {
        return {
            name:'HQU'
        }
    },
    methods:{
        showName(){
            console.log(this.name)
        }
    }
})

</script>
<style scoped lang="scss">
.box{
    background-color: aquamarine;
    padding: 10px;
}
</style>