<template>
  <div>
    <div>手机</div>
    <div>{{phoneMsg}}</div>
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
        phoneMsg: '手机组件'
      }
    }
  }
</script>
