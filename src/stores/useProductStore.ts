import { defineStore } from "pinia";
import {computed, ref} from 'vue'
export const useProductStore = defineStore('product',()=>{
    const name = ref('apple14plusmax');
    const price = ref(5999);
    const size = ref('6.7');
    const two = computed(()=>price.value * 2);
    function getProductInfo(){
        return {name,price,size}
    }
    return {name,price,size,two,getProductInfo}
})