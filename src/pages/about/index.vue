<template>
    <!-- <div>About通过路径传递query参数</div>
    <div>{{ route.query.id }}</div>
    <div>{{ route.query.name }}</div> -->
    <div>
       <Tinymce></Tinymce>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import Tinymce from '@/components/Tinymce'
let content = ref('')
const disabled = ref(false);
function onClick (item) {
    console.log('change', item)
}
// import { useRoute } from 'vue-router';
// const route = useRoute();
</script>