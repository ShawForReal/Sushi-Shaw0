<!-- 留言板组件 -->
<template>
  <div class="guestbook-container">
    <!-- 页面标题区域，使用淡入下滑动画 -->
    <transition name="fade-down" appear>
      <div class="header-section">
        <h1 class="title">鸿爪留泥</h1>
        <p class="subtitle">“人生到处知何似，应似飞鸿踏雪泥。”</p>
      </div>
    </transition>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 留言输入面板 -->
      <section class="input-panel">
        <div class="input-card">
          <!-- 姓名输入框 -->
          <input v-model="newGuest" type="text" placeholder="雅号" class="name-input" />
          <!-- 留言内容输入框 -->
          <textarea v-model="newMessage" placeholder="留下你的片言只语..." rows="3" class="content-input"></textarea>
          <!-- 提交按钮 -->
          <button @click="submitMessage" class="submit-btn">落款</button>
        </div>
      </section>

      <!-- 留言列表区域 -->
      <section class="message-list">
        <!-- 留言列表过渡动画组 -->
        <transition-group name="list-fade">
          <!-- 遍历留言列表 -->
          <div v-for="(item, index) in messages" :key="item.id" class="msg-card">
            <!-- 删除按钮 -->
            <button class="delete-btn" @click="deleteMessage(item.id)">抹去</button>
            
            <!-- 留言头部信息：姓名和时间 -->
            <div class="msg-header">
              <span class="msg-name">{{ item.name }}</span>
              <span class="msg-time">{{ item.time }}</span>
            </div>
            <!-- 留言内容 -->
            <p class="msg-content">{{ item.content }}</p>
            <!-- 留言序号 -->
            <div class="msg-index">#{{ messages.length - index }}</div>
          </div>
        </transition-group>
      </section>
    </div>
  </div>
</template>

<script setup>
// 导入Vue 3 Composition API
import { ref, onMounted } from 'vue';

// 新留言者姓名
const newGuest = ref('');
// 新留言内容
const newMessage = ref('');
// 留言列表数据
const messages = ref([]);

// 组件挂载时从localStorage加载保存的留言数据
onMounted(() => {
  const saved = localStorage.getItem('donpo_guestbook');
  if (saved) {
    messages.value = JSON.parse(saved);
  }
});

// 提交留言函数
const submitMessage = () => {
  // 表单验证：姓名和内容不能为空
  if (!newGuest.value || !newMessage.value) return alert('请填写雅号与留言');

  // 获取当前时间
  const now = new Date();
  // 创建新留言对象
  const newItem = {
    id: Date.now(), // 使用时间戳作为唯一ID
    name: newGuest.value, // 留言者姓名
    content: newMessage.value, // 留言内容
    time: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`, // 留言日期
  };

  // 将新留言添加到列表开头
  messages.value.unshift(newItem);
  // 将留言数据保存到localStorage
  localStorage.setItem('donpo_guestbook', JSON.stringify(messages.value));

  // 清空输入框
  newGuest.value = '';
  newMessage.value = '';
};

// 删除留言函数
const deleteMessage = (id) => {
  // 过滤掉要删除的留言
  messages.value = messages.value.filter(m => m.id !== id);
  // 更新localStorage中的数据
  localStorage.setItem('donpo_guestbook', JSON.stringify(messages.value));
};
</script>

<style scoped>
/* 留言板容器样式 */
.guestbook-container {
  background-color: #FAF0E6; /* 米色背景 */
  min-height: 100vh;
  padding: 1rem 1rem;
  font-family: "STKaiti", "Kaiti", serif; /* 楷体字体 */
}

/* 标题区域样式 */
.header-section {
  margin-top: 0.5rem;
  padding-bottom: 3.5rem;
  text-align: center;
}
.title {
  font-size: 2.2rem;
  letter-spacing: 0.4rem;
  color: #8B4513; /* 棕色标题 */
  margin-bottom: 0.3rem;
}
.subtitle {
  font-size: 1.05rem;
  color: #444;
  opacity: 0.8; /* 降低不透明度 */
}

/* 主要内容区域样式 */
.main-content {
  max-width: 850px; /* 精确宽度要求 */
  margin: 0 auto; /* 居中显示 */
}

/* 输入面板样式 */
.input-panel {
  margin-bottom: 4rem;
}
.input-card {
  background: rgba(255, 255, 255, 0.5); /* 半透明白色背景 */
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px dashed #DBC8B8; /* 虚线边框 */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 元素间距 */
}
.name-input, .content-input {
  background: transparent; /* 透明背景 */
  border: none;
  border-bottom: 1px solid rgba(139, 69, 19, 0.2); /* 底部边框 */
  padding: 0.5rem;
  font-family: inherit; /* 继承字体 */
  outline: none; /* 去掉默认聚焦边框 */
  color: #131940; /* 深蓝色文字 */
}
.submit-btn {
  align-self: flex-end; /* 右对齐 */
  background: #8B4513; /* 棕色按钮 */
  color: #FAF0E6; /* 米色文字 */
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.3s; /* 透明度过渡效果 */
  outline: none; /* 去掉聚焦黑框 */
}
.submit-btn:hover {
  opacity: 0.9; /* 悬停时降低透明度 */
}

/* 留言列表样式 */
.message-list {
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 留言卡片间距 */
}
.msg-card {
  background: #FFF; /* 白色背景 */
  padding: 1.5rem;
  border-radius: 2px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.03); /* 轻微阴影 */
  position: relative; /* 相对定位，用于子元素绝对定位 */
  border-left: 3px solid #DBC8B8; /* 左侧边框 */
}

/* 删除按钮样式 */
.delete-btn {
  position: absolute; /* 绝对定位 */
  top: 10px; /* 距离顶部10px */
  right: 10px; /* 距离右侧10px */
  background: rgba(139, 69, 19, 0.1); /* 浅棕色背景 */
  color: #8B4513; /* 棕色文字 */
  border: none;
  padding: 2px 8px;
  font-size: 0.8rem;
  cursor: pointer;
  opacity: 0; /* 默认隐藏 */
  transition: all 0.2s ease; /* 加快过渡响应 */
  font-family: inherit; /* 继承字体 */
  outline: none; /* 去掉聚焦黑框 */
}
/* 鼠标悬停留言卡片时显示删除按钮 */
.msg-card:hover .delete-btn {
  opacity: 1; /* 完全显示 */
}
/* 删除按钮点击动画 */
.delete-btn:active {
  transform: scale(0.9); /* 缩小效果 */
  opacity: 0.6; /* 降低不透明度 */
}

/* 留言头部信息样式 */
.msg-header {
  display: flex;
  justify-content: space-between; /* 两端对齐 */
  margin-bottom: 1rem;
  border-bottom: 1px solid #F5F5F5; /* 底部边框 */
  padding-bottom: 0.5rem; /* 底部内边距 */
}
.msg-name {
  color: #8B4513; /* 棕色姓名 */
  font-weight: bold; /* 加粗 */
}
.msg-time {
  font-size: 0.8rem; /* 小号字体 */
  color: #999; /* 灰色时间 */
}
/* 留言内容样式 */
.msg-content {
  line-height: 1.7; /* 行高 */
  color: #444; /* 深灰色文字 */
}
/* 留言序号样式 */
.msg-index {
  position: absolute; /* 绝对定位 */
  bottom: 0.5rem; /* 距离底部0.5rem */
  right: 1rem; /* 距离右侧1rem */
  font-size: 1.5rem; /* 大号字体 */
  color: rgba(139, 69, 19, 0.05); /* 极低透明度棕色 */
  font-style: italic; /* 斜体 */
}

/* 留言列表过渡动画 */
.list-fade-enter-active, .list-fade-leave-active {
  transition: all 0.5s ease; /* 进入和离开动画 */
}
.list-fade-enter-from {
  opacity: 0; /* 初始透明度 */
  transform: translateX(-20px); /* 初始位置 */
}
.list-fade-leave-to {
  opacity: 0; /* 结束透明度 */
  transform: translateX(20px); /* 结束位置 */
}

/* 标题区域过渡动画 */
.fade-down-enter-active { transition: all 0.8s ease; }
.fade-down-enter-from { opacity: 0; transform: translateY(-15px); }
</style>