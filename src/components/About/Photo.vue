<template>
  <div>
    <div>图片</div>
    <div>{{photoMsg}}</div>
    <router-link to="/about/phone">手机</router-link>
    <router-link to="/about/photo">图片</router-link>
    <router-link to="/about">关闭</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        photoMsg: '手机组件'
      }
    }
  }
</script>
