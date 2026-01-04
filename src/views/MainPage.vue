<template>
  <!-- 主页面布局容器 -->
  <div class="main-layout">
    <!-- 导航栏：固定在页面顶部 -->
    <nav class="navbar">
      <router-link to="/main/life" class="nav-item">生平年谱</router-link>
      <a href="https://www.geosceneonline.cn/geoscene/apps/storymaps/stories/39d88207b6684aca9d0bc86bcf08e201" target="_blank" class="nav-item">故事地图</a>
      <router-link to="/main/anecdotes" class="nav-item">人生轶事</router-link>
      <router-link to="/main/relationships" class="nav-item">人物关系</router-link>
      <router-link to="/main/message" class="nav-item">留言板</router-link>
      <router-link to="/main/about" class="nav-item">关于本页</router-link>
    </nav>

    <!-- 内容区域：根据路由动态加载不同页面 -->
    <div 
      class="content" 
      :class="{ 'is-map-view': route.path === '/main/map' }"
    >
      <!-- 路由视图：显示当前路由对应的组件 -->
      <router-view /> 
    </div>
  </div>
</template>

<script setup>
// 导入 Vue Router 的路由信息钩子
import { useRoute } from 'vue-router';

// 获取当前路由实例，用于判断当前页面路径
const route = useRoute(); 
</script>

<style scoped>
/* 定义 CSS 变量：导航栏高度，方便统一管理和修改 */
.main-layout {
  --navbar-height: 62px; /* 导航栏的精确高度 */
}

/* 导航栏样式 */
.navbar {
  position: fixed; /* 固定定位，始终显示在页面顶部 */
  top: 0; left: 0; right: 0; /* 占据整个页面宽度 */
  height: var(--navbar-height); /* 使用 CSS 变量定义高度 */
  background-color: #f7e3cfd7; /* 半透明的米黄色背景 */
  border-bottom: 1.5px solid #DBC8B8; /* 底部边框 */
  padding: 0 2rem; /* 左右内边距 */
  display: flex; /* 弹性布局，使导航项水平排列 */
  gap: 2.5rem; /* 导航项之间的间距 */
  justify-content: center; /* 水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
  z-index: 1000; /* 高优先级，确保显示在其他内容之上 */
  font-family: "SimSun", "FangSong", serif; /* 宋体、仿宋等中文字体 */
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* 轻微阴影效果 */
  box-sizing: border-box; /* 盒模型包含内边距和边框 */
}

/* 导航项基础样式 */
.nav-item {
  color: #131940; /* 深蓝色文字 */
  text-decoration: none; /* 去除下划线 */
  font-size: 1.2rem; /* 字体大小 */
  padding: 0.2rem 0; /* 上下内边距 */
  border-bottom: 2px solid transparent; /* 透明底部边框 */
  transition: all 0.3s ease; /* 平滑过渡效果 */
}

/* 导航项交互样式：鼠标悬停和当前激活项 */
.nav-item:hover, .router-link-active {
  color: #8B4513; /* 棕色文字 */
  border-bottom-color: #8B4513; /* 棕色底部边框 */
}

/* --- 内容区域布局逻辑 --- */

/* 内容区域基础样式 */
.content {
  position: relative; /* 相对定位 */
  margin-top: var(--navbar-height); /* 顶部外边距，避开固定的导航栏 */
  padding: 3rem 4rem; /* 内边距 */
  min-height: calc(100vh - var(--navbar-height)); /* 最小高度为视窗高度减去导航栏高度 */
  background-color: #FAF0E6; /* 米黄色背景 */
  font-family: "SimSun", "FangSong", serif; /* 宋体、仿宋等中文字体 */
  color: #131940; /* 深蓝色文字 */
  box-sizing: border-box; /* 盒模型包含内边距和边框 */
  text-align: center; /* 文字居中 */
  transition: all 0.2s ease; /* 平滑过渡效果 */
}

/* 地图页面特殊样式：全屏显示 */
.content.is-map-view {
  padding: 0; /* 去除内边距 */
  margin-top: var(--navbar-height); /* 顶部外边距，避开固定的导航栏 */
  height: calc(100vh - var(--navbar-height)); /* 高度为视窗高度减去导航栏高度 */
  min-height: auto; /* 重置最小高度 */
  overflow: hidden; /* 隐藏溢出内容，防止双滚动条 */
  background-color: #fff; /* 白色背景，地图加载前使用 */
}

/* 地图页面中的 iframe 样式：全屏显示 */
:deep(.is-map-view iframe) {
  width: 100%; /* 宽度 100% */
  height: 100%; /* 高度 100% */
  border: none; /* 去除边框 */
  display: block; /* 块级元素 */
}

/* 页面标题样式 */
.content h2 {
  font-size: 2.2rem; /* 字体大小 */
  margin-bottom: 2rem; /* 底部外边距 */
  border-bottom: 1px solid #DBC8B8; /* 底部边框 */
  padding-bottom: 1rem; /* 底部内边距 */
  display: inline-block; /* 行内块级元素 */
}
</style>