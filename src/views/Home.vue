<template>
  <!-- 主页容器：全屏居中布局，使用米色背景营造书卷气 -->
  <div class="home-container">
    <div class="zen-box">
      <!-- 诗句显示行：将诗句分割为两部分，中间插入输入框 -->
      <div class="poem-line">
        <span class="text-part">{{ questionParts[0] }}</span>
        <!-- 填空输入框：根据答案长度动态调整宽度，支持回车提交 -->
        <input 
          v-model="userAnswer" 
          class="inline-input"
          :style="{ width: (currentPoem.answer?.length || 4) + 'em' }"
          @keyup.enter="checkAnswer"
          autofocus
        >
        <span class="text-part">{{ questionParts[1] }}</span>
      </div>
      
      <!-- 诗句出处信息 -->
      <p class="source">—— {{ currentPoem.source }}</p>

      <!-- 操作按钮组：进入、换题、提示 -->
      <div class="action-group">
        <button @click="checkAnswer" class="btn btn-main">进入</button>
        <button @click="refreshPoem" class="btn btn-sub">换题</button>
        <button @click="showAnswer = true" class="btn btn-sub">提示</button>
      </div>

      <!-- 反馈区域：显示答案和答题结果信息 -->
      <div class="feedback-area">
        <!-- 正确答案显示（点击提示后） -->
        <p v-if="showAnswer" class="answer-reveal">正确答案：{{ currentPoem.answer }}</p>
        <!-- 答题结果消息：使用淡入淡出过渡效果 -->
        <transition name="fade">
          <p v-if="msg" :class="['msg', tipClass]">{{ msg }}</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入 Vue 3 Composition API 和路由
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

// 路由实例
const router = useRouter()

// 诗歌题库：包含题目、答案和出处信息
const poemList = [
  { question: "竹杖芒鞋轻胜马，谁怕？______。", answer: "一蓑烟雨任平生", source: "《定风波·莫听穿林打叶声》" },
  { question: "回首向来萧瑟处，归去，______。", answer: "也无风雨也无晴", source: "《定风波·莫听穿林打叶声》" },
  { question: "莫听穿林打叶声，______。", answer: "何妨吟啸且徐行", source: "《定风波·莫听穿林打叶声》" },
  { question: "试问岭南应不好，却道：______。", answer: "此心安处是吾乡", source: "《定风波·南海归赠王定国侍人寓娘》" },
  { question: "小舟从此逝，______。", answer: "江海寄余生", source: "《临江仙·夜归临皋》" },
  { question: "但愿人长久，______。", answer: "千里共婵娟", source: "《水调歌头·明月几时有》" },
  { question: "不识庐山真面目，______。", answer: "只缘身在此山中", source: "《题西林壁》" },
  { question: "欲把西湖比西子，______。", answer: "淡妆浓抹总相宜", source: "《饮湖上初晴后雨·其二》"},
  { question: "日啖荔枝三百颗，______。", answer: "不辞长作岭南人", source: "《惠州一绝》"},
  { question: "寄蜉蝣于天地，______。", answer: "渺沧海之一粟", source: "《赤壁赋》" }
]

// 当前显示的诗歌对象
const currentPoem = ref({})
// 用户输入的答案
const userAnswer = ref('')
// 是否显示正确答案
const showAnswer = ref(false)
// 提示消息内容
const msg = ref('')
// 提示消息样式类名
const tipClass = ref('')

// 计算属性：将诗句分割为前后两部分，用于填空显示
const questionParts = computed(() => {
  if (!currentPoem.value.question) return ['', '']
  return currentPoem.value.question.split('______')
})

// 更换新题目：随机选择不同于当前的诗歌
const refreshPoem = () => {
  const newList = poemList.filter(p => p.question !== currentPoem.value.question)
  currentPoem.value = newList[Math.floor(Math.random() * newList.length)]
  userAnswer.value = ''
  showAnswer.value = false
  msg.value = ''
}

// 组件挂载时初始化：随机选择一首诗歌
onMounted(() => {
  currentPoem.value = poemList[Math.floor(Math.random() * poemList.length)]
})

// 检查答案：比较用户输入与正确答案（忽略标点和空格）
const checkAnswer = () => {
  // 清理用户输入：去除空格和标点符号
  const cleanUser = userAnswer.value.trim().replace(/[，。？！\s]/g, '')
  // 清理正确答案：去除空格和标点符号
  const cleanAns = currentPoem.value.answer.replace(/[，。？！\s]/g, '')

  // 判断答案是否正确
  if (cleanUser === cleanAns) {
    msg.value = "正解，正在入内...";
    tipClass.value = "success"
    // 延迟1秒后跳转到主页面
    setTimeout(() => router.push('/main/life'), 1000)
  } else {
    msg.value = "再思之。";
    tipClass.value = "error"
    // 清空输入框
    userAnswer.value = ''
  }
}
</script>

<style scoped>
/* 主页容器样式：全屏固定定位，居中显示 */
.home-container {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #FAF0E6; /* 米色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 中式字体组合 */
  font-family: "STKaiti", "Kaiti", "Microsoft YaHei", serif;
  margin: 0;
  padding: 0;
}

/* 内容盒子样式：居中对齐 */
.zen-box {
  text-align: center;
  max-width: 900px;
  width: 90%;
  margin-top: 25vh; /* 向上偏移，避免完全居中 */
}

/* 诗句行样式：大号字体，增加字间距 */
.poem-line {
  font-size: 2.2rem; /* 诗句字体大小 */
  line-height: 1.8;
  color: #131940; /* 深蓝色文字 */
  letter-spacing: 2px; /* 增加字间距 */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 0.5rem;
}

/* 填空输入框样式：底部边框，无边框设计 */
.inline-input {
  border: none;
  border-bottom: 2px solid #8B4513; /* 棕色下划线 */
  background: transparent;
  font-size: 2.2rem; /* 与诗句同字号 */
  font-family: inherit;
  color: #8B4513;
  text-align: center;
  outline: none;
  padding: 0 10px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* 平滑过渡效果 */
}

/* 输入框聚焦样式 */
.inline-input:focus {
  border-bottom-color: #131940; /* 聚焦时变为深蓝色 */
  transform: translateY(-2px); /* 轻微上浮效果 */
}

/* 诗句出处样式 */
.source {
  margin-top: 2rem;
  color: #555;
  font-size: 1.2rem;
  opacity: 0.8; /* 降低不透明度 */
}

/* 操作按钮组样式：水平排列，间距均匀 */
.action-group {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}

/* 按钮基础样式 */
.btn {
  padding: 0.7rem 2.2rem;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.1rem;
  transition: all 0.3s ease; /* 平滑过渡效果 */
  border-radius: 4px;
}

/* 主要按钮样式（进入按钮） */
.btn-main {
  background: #131940;
  color: #FAF0E6;
  border: 1px solid #131940;
}

/* 次要按钮样式（换题、提示） */
.btn-sub {
  background: transparent;
  color: #131940;
  border: 1px solid #DBC8B8;
}

/* 按钮悬停效果 */
.btn:hover {
  transform: translateY(-3px); /* 上浮效果 */
  box-shadow: 0 5px 15px rgba(139, 69, 19, 0.15); /* 添加阴影 */
  opacity: 0.9;
}

/* 按钮点击效果 */
.btn:active {
  transform: translateY(-1px); /* 略微下沉 */
}

/* 次要按钮悬停效果 */
.btn-sub:hover {
  border-color: #8B4513; /* 边框颜色变化 */
  color: #8B4513; /* 文字颜色变化 */
}

/* 反馈区域样式：固定高度避免抖动 */
.feedback-area {
  min-height: 8rem; /* 占位避免抖动 */
  margin-top: 2rem;
}

/* 正确答案显示样式 */
.answer-reveal { 
  color: #8B4513; 
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

/* 提示消息基础样式 */
.msg { font-size: 1.4rem; }
/* 成功消息样式 */
.success { color: #2E8B57; }
/* 错误消息样式 */
.error { color: #CD5C5C; }

/* 淡入淡出过渡效果 */
.fade-enter-active { transition: opacity 0.5s; }
.fade-enter-from { opacity: 0; }
</style>

        