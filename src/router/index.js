import { createRouter, createWebHashHistory } from 'vue-router'

// 导入所有页面（测试版）
import Home from '../views/Home.vue'       // 诗词对答页
import MainPage from '../views/MainPage.vue' // 主页面（固定导航）
import Life from '../views/Life.vue'       // 生平年谱
import Anecdotes from '../views/Anecdotes.vue' // 人生轶事
import Relationships from '../views/Relationships.vue' // 人物关系
import Message from '../views/Message.vue' // 留言板
import About from '../views/About.vue'     // 关于本页
import Map from '../views/Map.vue'         // 故事地图（仅占位）

// 路由规则：核心是「Home→MainPage」，MainPage内嵌套子页面
const routes = [
  // 1. 进入页：诗词对答（默认首页）
  { path: '/', component: Home },
  // 2. 主页面：固定导航栏（嵌套所有子页面）
  { 
    path: '/main', 
    component: MainPage,
    // 嵌套子路由：MainPage内的内容切换
    children: [
      { path: 'life', component: Life },                 // /main/life
      { path: 'anecdotes', component: Anecdotes },       // /main/anecdotes
      { path: 'relationships', component: Relationships }, // /main/relationships
      { path: 'message', component: Message },           // /main/message
      { path: 'about', component: About },               // /main/about
      { path: 'map', component: Map }                    // /main/map（仅占位）
    ]
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式，部署无问题
  routes
})

export default router