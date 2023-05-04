<template>
  <div>
    <div class="p20 box" @click="showName(props.userName)">
        <div class="header">{{ props.userName }}</div>
        <img :src="props.avatarUrl"/>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  userName:{
    type:String,
    default:'mojombo'
  },
  avatarUrl:{
    type:String,
    default:'https://avatars.githubusercontent.com/u/1?v=4'
  }
})
const emits = defineEmits(['showName']);
function showName(data){
  emits('showName',data)
}
</script>
<style scoped lang="scss">
$textCenter:center;
.box{
  text-align: $textCenter;
  width: 100px;
}
.box>img{
  width: 100%;
}
</style>