<template>
    <Editor v-model="content" :api-key="apiKey" :init="init" />
  </template>
  
  <script setup>
  import Editor from '@tinymce/tinymce-vue';
  import { reactive, ref } from 'vue';
  
  const apiKey = ref('ebdf0ca2f5150a9147286ff77a51c9e4b6b8ddaf0c7304a8426d62c5c87550f7')
  const content = ref('');
  const init = reactive({
    language: "zh_CN", //语言类型
    placeholder: "在这里输入文字",
    min_width: 300,
    min_height: 200,
    height: 400, //注：引入autoresize插件时，此属性失效
    resize: "both", //编辑器宽高是否可变，false-否,true-高可变，'both'-宽高均可，注意引号
    branding: false, //tiny技术支持信息是否显示
    // statusbar: false,  //最下方的元素路径和字数统计那一栏是否显示
    elementpath: false, //元素路径是否显示
  
    // 字体样式
    font_size_formats: '11px 12px 14px 16px 18px 24px 36px 48px',
    font_family_formats: "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",
    // 插件配置 axupimgs indent2em
    plugins: "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount autosave emoticons",
    //工具栏配置，设为false则隐藏
    toolbar: [
      "fullscreen undo redo restoredraft | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat ",
      "fontfamily fontsize styles | table image axupimgs media emoticons charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter ",
      "testBtn"
    ],
    //菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置--查看 http://tinymce.ax-z.cn/configure/editor-appearance.php --搜索“自定义菜单”
    // menubar: "file edit my1",
    // menubar: false,
  
    setup: (editor) => {
        // 自定义toolbar按钮，需要在toolbar添加
      editor.ui.registry.addButton('testBtn', {
        text: `按钮文字`,
        tooltip: '按钮提示',
        onAction: () => editor.insertContent('<a href="https://www.baidu.com" target="_blank">test text</a>')
      })
    },
  
  })
  
  </script>
  
  <style lang='scss' scoped>
  </style>
  
  