import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter',{  //选项式store
   state:()=>{
    return {count:0}
   },
   getters:{
     double(state){
        return state.count * 2;
     }
   },
   actions:{
     increment(){
       this.count ++ ;
     }
   }
})