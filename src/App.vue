<!-- src/App.vue -->
<template>
  <!-- 总路由出口：要么显示Home，要么显示MainPage -->
  <router-view />
</template>

<script setup>
// 无逻辑，仅占位
</script>

<style>
/* 全局基础样式：避免页面留白 */
body {
  margin: 0;
  padding: 0;
  background-color: #FAF0E6; /* 宣纸色，仅测试 */
}
</style>