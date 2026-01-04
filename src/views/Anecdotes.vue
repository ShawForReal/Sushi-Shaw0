<template>
  <!-- 主容器：东坡轶事页面整体布局 -->
  <div class="anecdotes-container">
    <!-- 页面标题过渡动画：淡入向下效果 -->
    <transition name="fade-down" appear>
      <div class="timeline-header">
        <h1>东坡轶事·趣谈</h1>
        <p>“且将新火试新茶,诗酒趁年华。”</p>
      </div>
    </transition>

    <!-- 轶事卡片网格布局：响应式设计 -->
    <div class="anecdotes-grid">
      <!-- 遍历轶事数据：为每个卡片创建独立的过渡动画容器 -->
      <div v-for="(item, index) in anecdotes" :key="index" class="story-layout-box">
        <!-- 卡片进入动画：依次向上滑动，带延迟效果 -->
        <transition name="slide-up" appear>
          <div 
            class="story-card" 
            :style="{ transitionDelay: `${index * 0.08}s` }" 卡片依次进入的延迟时间
          >
            <!-- 分类标签：垂直显示在卡片右上角 -->
            <div class="category-tag">
              <span class="tag-text">{{ item.category }}</span>
            </div>

            <!-- 故事正文区域 -->
            <div class="story-body">
              <!-- 故事标题 -->
              <h2 class="story-title">{{ item.title }}</h2>
              
              <!-- 故事内容 -->
              <div class="story-content">
                <p>{{ item.content }}</p>
              </div>

              <!-- 底部附加区域：包含诗句和秘方 -->
              <div class="bottom-area">
                <!-- 诗句展示：条件渲染，有诗句时显示 -->
                <div v-if="item.poem" class="story-poem">
                  <span class="poem-mark">「</span>
                  {{ item.poem }}
                  <span class="poem-mark"> 」</span>
                </div>
                
                <!-- 秘方展示：条件渲染，有秘方时显示 -->
                <div v-if="item.recipe" class="recipe-box">
                  <span class="recipe-label">秘方：</span>
                  <span class="recipe-text">{{ item.recipe }}</span>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
// 东坡轶事数据数组：包含8个分类故事
const anecdotes = [
  {
    category: "为官爱民", // 故事分类
    title: "题扇救贫", // 故事标题
    content: "任杭州通判时，苏轼见一卖扇老翁因扇子积压无力还债而在公堂哀求。苏轼取笔在十余把素扇上题写词句或画竹石小景，嘱其半价售卖。百姓闻声抢购东坡真迹，片刻间扇子售罄，翁不仅还清欠款还余钱养家，成就一段爱民美谈。", // 故事内容
    poem: "东坡墨宝，救民于水火" // 相关诗句或点评
  },
  {
    category: "为官爱民",
    title: "惠州推广开水",
    content: "贬居惠州时，苏轼发现当地百姓常饮生水致疾疫频发。他考察水源提议凿井，带头捐俸主持开凿三眼公井，并撰铭推广“煮水而饮”。随着开水普及，惠州疫病大幅下降，他以一己之力改变了岭南卫生习俗，造福万民。",
    poem: "汲井水煮之，甘冽可饮"
  },
  {
    category: "生活雅趣",
    title: "酿酒笑谈",
    content: "谪居黄州时向道士请教蜜酒法，苏轼照做并作《蜜酒歌》夸赞。谁知发酵不足，酒味寡淡且导致他和朋友饮后集体腹泻。他却自嘲：“取能醉人，何足追计味道？” 这种失败中亦能寻乐的性情，正是东坡旷达人生的缩影。",
    poem: "珍珠为浆玉为醴"
  },
  {
    category: "生活雅趣",
    title: "东坡羹智慧",
    content: "贬居黄州肉食难求，苏轼便以蔓菁、萝卜、荠菜搭配黄豆小米慢炖，成品清香，命名为“东坡羹”。他在《颂》中盛赞其有自然之甘，不加鱼肉五味而自成一格。这种在清贫中创造美的智慧，成为了后世素食文化的经典。",
    recipe: "菘菜、萝卜、米二合熟煮，入盐少许。", // 秘方信息
    poem: "自然之甘，素食巅峰"
  },
  {
    category: "交友逸闻",
    title: "河东狮吼",
    content: "好友陈季常生性豪爽但妻柳氏极其剽悍。某次陈家宴客，柳氏怒敲墙壁大声叫骂，惊得宾客面面相觑，陈季常拄杖落手。苏轼写诗调侃，“河东狮吼”从此传开。由于他的幽默，尴尬家事成了后世最生动的文学谈资。",
    poem: "忽闻河东狮子吼，拄杖落手心茫然"
  },
  {
    category: "交友逸闻",
    title: "与王安石和解",
    content: "早年因政见针锋相对，晚年苏轼过金陵，隐居的王安石亲往郊外迎接。二人握手言和，共游钟山，王安石甚至动情劝其留居。苏轼感慨“从公已觉十年迟”，两位奇才在晚年达成了政治和解，留下了相惜共鸣的佳话。",
    poem: "从公已觉十年迟"
  },
  {
    category: "贬谪豁达",
    title: "快活诗引再贬",
    content: "贬居惠州时，苏轼作诗“报道先生春睡美”表达闲适心境。诗传回京，政敌章惇认为其贬谪之苦仍不够，竟还有心思快活，遂将其贬往更偏远的儋州。这一调令成就了文坛历史上因“写诗太快活”而遭贬的趣谈，也彰显了苏轼的乐观。",
    poem: "报道先生春睡美"
  },
  {
    category: "贬谪豁达",
    title: "儋州开化",
    content: "62岁贬至荒凉儋州，苏轼教民耕种造纸，并在“载酒堂”授徒。弟子姜唐佐后成海南首位举人。他将流放变成了文明的迁徙，开启琼南文风，被后人奉为海南文明之父，其强大的生命意志令后世感佩。",
    poem: "沧海何曾断地脉，珠崖从此破天荒"
  }
];
</script>

<style scoped>
/* 主容器样式：米色背景，100%视窗高度 */
.anecdotes-container {
  background-color: #FAF0E6; /* 米色背景，营造书卷氛围 */
  min-height: 100vh; /* 最小高度为视窗高度 */
  padding: 1rem 1rem; /* 内边距 */
  color: #131940; /* 深蓝色文字 */
  font-family: "STKaiti", "Kaiti", serif; /* 中式字体 */
  overflow-x: hidden; /* 隐藏水平滚动条 */
  scrollbar-gutter: stable; /* 稳定的滚动条槽 */
}

/* 页面标题区域样式 */
.timeline-header {
  margin-top: 0.5rem; /* 顶部外边距 */
  padding-bottom: 3.5rem; /* 底部内边距 */
  text-align: center; /* 文字居中 */
  position: relative; /* 相对定位 */
  z-index: 5; /* 层级定位 */
}
.timeline-header h1 {
  font-size: 2.2rem; /* 标题字体大小 */
  letter-spacing: 0.4rem; /* 字间距 */
  color: #8B4513; /* 棕色文字 */
  margin-bottom: 0.3rem; /* 底部外边距 */
}
.timeline-header p {
  font-size: 1.05rem; /* 副标题字体大小 */
  color: #444; /* 灰色文字 */
}

/* 轶事卡片网格布局：响应式设计 */
.anecdotes-grid {
  max-width: 1200px; /* 最大宽度 */
  margin: 0 auto; /* 水平居中 */
  display: grid; /* 网格布局 */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* 响应式列：最小400px，自动填充 */
  gap: 2.5rem; /* 卡片间距 */
  align-items: stretch; /* 确保卡片等高 */
}

/* 卡片布局容器：确保卡片占满父容器 */
.story-layout-box {
  display: flex; /* 弹性布局 */
}

/* 故事卡片基础样式 */
.story-card {
  background: rgba(255, 255, 255, 0.4); /* 半透明白色背景 */
  padding: 2.2rem; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  position: relative; /* 相对定位 */
  border: 1px solid transparent; /* 透明边框：hover时显形 */
  display: flex; /* 弹性布局 */
  flex-direction: column; /* 纵向布局 */
  width: 100%; /* 宽度100% */
  min-height: 320px; /* 最小高度 */
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 平滑过渡效果 */
}

/* 卡片悬浮效果：提升、显示边框、阴影 */
.story-card:hover {
  background: rgba(255, 255, 255, 0.9); /* 更不透明的背景 */
  transform: translateY(-5px); /* 向上移动5px */
  border-color: #DBC8B8; /* 显示边框 */
  box-shadow: 0 10px 20px rgba(139, 69, 19, 0.05); /* 轻微阴影 */
}

/* 分类标签样式：垂直显示 */
.category-tag {
  position: absolute; /* 绝对定位 */
  top: 0; /* 顶部对齐 */
  right: 1.2rem; /* 右侧偏移 */
  background-color: #8B4513; /* 棕色背景 */
  color: #FAF0E6; /* 米色文字 */
  padding: 0.8rem 0.35rem; /* 内边距 */
  writing-mode: vertical-rl; /* 垂直书写模式 */
  font-size: 0.9rem; /* 字体大小 */
  letter-spacing: 3px; /* 字间距 */
}

/* 故事标题样式 */
.story-title {
  font-size: 1.2rem; /* 字体大小 */
  font-weight: bold; /* 粗体 */
  margin-bottom: 0.5rem; /* 底部外边距 */
  color: #131940; /* 深蓝色文字 */
}

/* 故事内容区域：自动填充剩余空间 */
.story-content {
  flex-grow: 1; /* 弹性增长，填充空间 */
}

/* 故事内容文本样式 */
.story-content p {
  font-size: 1.05rem; /* 字体大小 */
  line-height: 1.7; /* 行高 */
  color: #444; /* 灰色文字 */
  text-align: justify; /* 两端对齐 */
}

/* 底部附加区域样式 */
.bottom-area {
  margin-top: 1.5rem; /* 顶部外边距 */
}

/* 诗句展示样式：批语长条效果 */
.story-poem {
  font-family: "STKaiti", "Kaiti", serif; /* 中式字体 */
  font-size: 1.1rem; /* 字体大小 */
  color: #8B4513; /* 棕色文字 */
  text-align: center; /* 文字居中 */
  padding: 0.8rem; /* 内边距 */
  background: rgba(139, 69, 19, 0.05); /* 极浅的棕色背景 */
  border-radius: 4px; /* 圆角 */
  position: relative; /* 相对定位 */
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.02); /* 内阴影，增加纸张质感 */
}

/* 诗句引号样式 */
.poem-mark {
  opacity: 0.6; /* 半透明效果 */
  margin: 0 4px; /* 左右外边距 */
}

/* 秘方展示样式：虚线框效果 */
.recipe-box {
  margin-top: 0.8rem; /* 顶部外边距 */
  font-size: 0.95rem; /* 字体大小 */
  border: 1px dashed #DBC8B8; /* 虚线边框 */
  padding: 0.8rem; /* 内边距 */
  background-color: rgba(255, 255, 255, 0.2); /* 半透明白色背景 */
}

/* 秘方标签样式 */
.recipe-label { 
  font-weight: bold; /* 粗体 */
  color: #8B4513; /* 棕色文字 */
  margin-right: 5px; /* 右侧外边距 */
}

/* 动画效果定义 */
.slide-up-enter-active { transition: all 0.7s ease-out; } /* 卡片进入动画 */
.slide-up-enter-from { opacity: 0; transform: translateY(10px); } /* 卡片初始状态 */
.fade-down-enter-active { transition: all 0.8s ease; } /* 标题进入动画 */
.fade-down-enter-from { opacity: 0; transform: translateY(-10px); } /* 标题初始状态 */

/* 响应式设计：小屏幕时单列布局 */
@media (max-width: 960px) {
  .anecdotes-grid { grid-template-columns: 1fr; }
}
</style>