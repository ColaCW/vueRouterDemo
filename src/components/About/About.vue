<template>
  <div>
      <div>个人</div>
    <div>{{aboutMsg}}</div>
    <router-link to="/about/phone">手机</router-link>
    <router-link to="/about/photo">图片</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '我个人组件'
      }
    }
  }
</script>
