<!-- 苏轼生平年谱组件 -->
<template>
  <div class="life-container">
    <div class="timeline-wrapper">
      <!-- 时间线标题区域，使用淡入下滑动画 -->
      <transition name="fade-down" appear>
        <div class="timeline-header">
          <h1>苏轼·生平年谱</h1>
          <p>“回首向来萧瑟处，归去，也无风雨也无晴。”</p>
        </div>
      </transition>

      <!-- 时间线垂直轴线 -->
      <div class="vertical-axis"></div>

      <!-- 遍历生平阶段数据 -->
      <div v-for="(stage, sIdx) in lifeData" :key="sIdx" class="life-stage">
        <!-- 阶段标题横幅 -->
        <div class="stage-banner">
          <span class="stage-name">{{ stage.period }}</span>
        </div>

        <!-- 遍历该阶段下的事件 -->
        <div v-for="(item, iIdx) in stage.events" :key="iIdx" class="event-item">
          <!-- 事件左侧年份 -->
          <div class="event-left">
            <span class="year-text">{{ item.year }}</span>
          </div>

          <!-- 事件中间时间点标记 -->
          <div class="event-middle">
            <div class="dot-outer">
              <div class="dot-inner"></div>
            </div>
          </div>

          <!-- 事件右侧内容卡片，使用上滑渐入动画，每个事件依次延迟出现 -->
          <transition name="slide-up" appear>
            <div class="event-right" :style="{ transitionDelay: `${iIdx * 0.1}s` }">
              <div class="event-card">
                <!-- 事件标题（可选） -->
                <div v-if="item.title" class="card-title">{{ item.title }}</div>
                <!-- 事件内容描述 -->
                <div class="card-content">{{ item.content }}</div>
                <!-- 相关诗句（可选） -->
                <div v-if="item.poem" class="card-poem">
                  <span class="poem-mark">「</span>
                  {{ item.poem }}
                  <span class="poem-mark"> 」</span>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- 时间线结尾 -->
      <div class="timeline-footer">
        <div class="footer-divider"></div>
        <div class="footer-content">
          <h3>1101年 · 常州</h3>
          <p>“着力即差” —— 先生千古</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 苏轼生平数据，按阶段和事件组织
const lifeData = [
  {
    period: "早年与科举",
    events: [
      { year: "1037 年", content: "生于四川眉山书香世家，字子瞻，自号东坡居士，自幼受母程夫人启蒙，聪慧过人。" },
      { year: "1054 年", title: "琴瑟和鸣", content: "19 岁迎娶同乡才女王弗，夫妻二人琴瑟和鸣，王弗以 “幕后听言” 辅助其识人断事。" },
      { year: "1056 年", title: "金榜题名", content: "与父苏洵、弟苏辙结伴赴京应考，次年兄弟同登进士榜。苏轼因文风获主考官欧阳修极力称赞，取为榜眼。" },
      { year: "1057 年", title: "丁忧返乡", content: "中进士后不久，母程夫人病逝于眉山，遵制返乡守丧三年。" },
      { year: "1059 年", title: "仕途起步", content: "守丧期满携家眷返京，授河南福昌县主簿，积累了地方治理经验。" }
    ]
  },
  {
    period: "仕途初期",
    events: [
      { year: "1061 年", title: "百年第一", content: "通过制科考试获 “百年第一” 佳绩，授凤翔府签判，主导疏浚护池、减轻百姓负担。" },
      { year: "1065 年", title: "至亲离世", content: "妻子王弗病逝于京师，年仅 27 岁；次年父苏洵病逝，兄弟二人辞官返乡守丧。" },
      { year: "1068 年", title: "再入宦海", content: "续娶王闰之，陪伴苏轼历经二十五年宦海沉浮。" }
    ]
  },
  {
    period: "变法与贬谪",
    events: [
      { year: "1069 年", title: "外放杭州", content: "王安石变法推行，苏轼上书直言新法弊端遭排挤，外放杭州通判。", poem: "欲把西湖比西子，淡妆浓抹总相宜" },
      { year: "1074 年", title: "密州抒怀", content: "调任密州知州。1076 年中秋挥笔写下《水调歌头》，被誉为 “中秋词千古第一”。", poem: "但愿人长久，千里共婵娟" },
      { year: "1077 年", title: "徐州抗洪", content: "调任徐州。率军民筑堤抗洪两月有余，保全州城，获百姓立生祠感念。" },
      { year: "1079 年", title: "乌台诗案", content: "因《湖州谢上表》被罗织罪名，酿成 “乌台诗案”，贬为黄州团练副使。" },
      { year: "1080-84年", title: "东坡居士", content: "谪居黄州期间开垦东坡自耕，心境沉淀创作出《赤壁赋》等巅峰之作。", poem: "莫听穿林打叶声，何妨吟啸且徐行" }
    ]
  },
  {
    period: "元祐更化与流放",
    events: [
      { year: "1085-89年", title: "苏堤春晓", content: "元祐更化新法废止，召回京复官。再次出知杭州，主持疏浚西湖筑成“苏堤”。" },
      { year: "1094-97年", title: "贬谪岭南", content: "哲宗亲政新党复起，贬谪惠州与儋州。开启当地文风。", poem: "日啖荔枝三百颗，不辞长作岭南人" },
      { year: "1100-01年", title: "北归终老", content: "宋徽宗大赦天下，苏轼北归。1101 年七月病逝于常州，享年 66 岁。" }
    ]
  }
];
</script>

<style scoped>
/* 时间线容器样式 */
.life-container {
  background-color: #FAF0E6; /* 米色背景 */
  min-height: 100vh;
  padding: 1rem 1rem;
  color: #131940; /* 深蓝色文字 */
  font-family: "STKaiti", "Kaiti", serif; /* 楷体字体 */
  overflow-x: hidden;
}

/* 时间线包装器 */
.timeline-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

/* 时间线标题样式 */
.timeline-header {
  margin-top: 0.5rem;
  padding-bottom: 3.5rem; 
  text-align: center;
  position: relative;
  z-index: 5;
}
.timeline-header h1 {
  font-size: 2.2rem;
  letter-spacing: 0.4rem;
  color: #8B4513; /* 棕色标题 */
  margin-bottom: 0.3rem;
}

.timeline-header p {
  font-size: 1.05rem;
  color: #444;
  opacity: 0.8;
}


/* 垂直轴线样式 */
.vertical-axis {
  position: absolute;
  left: 130px; 
  top: 185px; 
  bottom: 180px;
  width: 1.2px;
  background: #DBC8B8; /* 浅棕色轴线 */
  opacity: 0.5;
  z-index: 1;
}

/* 生平阶段样式 */
.life-stage { margin-bottom: 4rem; position: relative; z-index: 2; }
.stage-banner { text-align: left; margin-left: 118px; margin-bottom: 2.5rem; }
.stage-name {
  background-color: #8B4513; /* 棕色背景 */
  color: #FAF0E6; /* 米色文字 */
  padding: 0.3rem 1.2rem;
  font-size: 1.15rem;
  border-radius: 2px;
}

/* 事件项样式 */
.event-item { 
  display: flex; 
  margin-bottom: 2.8rem; 
  position: relative;
  transition: all 0.3s ease; /* 悬停过渡效果 */
}

/* 事件左侧年份样式 */
.event-left { width: 110px; text-align: right; padding-right: 25px; padding-top: 8px; }
.year-text { font-weight: bold; font-size: 1.1rem; color: #8B4513; }

/* 事件中间时间点样式 */
.event-middle { width: 40px; display: flex; justify-content: center; position: relative; z-index: 3; }

/* 时间点外圆样式 */
.dot-outer {
  width: 18px; height: 18px; background-color: #FAF0E6;
  border: 1.5px solid #DBC8B8; border-radius: 50%;
  margin-top: 8px;
  display: flex; /* 新增：使内圆居中 */
  align-items: center; /* 新增：使内圆垂直居中 */
  justify-content: center; /* 新增：使内圆水平居中 */
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* 悬停动画效果 */
}
/* 时间点内圆样式 */
.dot-inner { 
  width: 5px; height: 5px; background-color: #DBC8B8; 
  border-radius: 50%; 
  margin: 0 !important; /* 核心修正：移除旧的 margin，确保居中 */
  transition: all 0.3s ease; /* 颜色过渡效果 */
}

/* 事件项悬停效果 */
.event-item:hover .dot-outer {
  border-color: #8B4513;
  transform: scale(1.3); /* 放大效果 */
  box-shadow: 0 0 8px rgba(139, 69, 19, 0.2); /* 阴影效果 */
}
.event-item:hover .dot-inner {
  background-color: #8B4513; /* 颜色变化 */
}

/* 事件右侧内容样式 */
.event-right { flex: 1; text-align: left; padding-left: 15px; }

/* 事件卡片样式 */
.event-card {
  background: rgba(255, 255, 255, 0.4); /* 半透明白色背景 */
  padding: 1.2rem 1.6rem; 
  border-radius: 4px;
  border-left: 0px solid #8B4513; /* 左侧边框初始宽度为0 */
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 悬停动画 */
}

/* 事件卡片悬停效果 */
.event-item:hover .event-card {
  background: rgba(255, 255, 255, 0.85); /* 增加不透明度 */
  border-left: 4px solid #8B4513; /* 显示左侧边框 */
  transform: translateX(8px); /* 右移效果 */
  box-shadow: 4px 4px 15px rgba(0,0,0,0.05); /* 阴影效果 */
}

/* 事件卡片内容样式 */
.card-title { font-size: 1.2rem; font-weight: bold; margin-bottom: 0.5rem; color: #131940; }
.card-content { font-size: 1.05rem; line-height: 1.7; color: #444; }
.card-poem { margin-top: 1rem; font-family: "STKaiti", "Kaiti", serif; font-size: 1.05rem; color: #8B4513; }

/* 动画过渡效果定义 */
.slide-up-enter-active { transition: all 0.7s ease-out; }
.slide-up-enter-from { opacity: 0; transform: translateY(25px); }
.fade-down-enter-active { transition: all 0.8s ease; }
.fade-down-enter-from { opacity: 0; transform: translateY(-15px); }

/* 时间线结尾样式 */
.timeline-footer {
  margin-top: 4rem; padding-bottom: 6rem;
  display: flex; flex-direction: column; align-items: center;
  width: 100%; text-align: center;
}
.footer-divider { width: 40px; height: 1.5px; background-color: #DBC8B8; margin-bottom: 1.5rem; }
.footer-content h3 { font-size: 1.6rem; color: #131940; margin-bottom: 0.5rem; }
.footer-content p { font-size: 1.05rem; color: #8B4513; font-style: italic; }

/* 响应式设计，适配移动端 */
@media (max-width: 768px) {
  .vertical-axis { left: 30px; } /* 调整轴线位置 */
  .event-left { display: none; } /* 隐藏年份显示 */
  .stage-banner { margin-left: 18px; } /* 调整阶段标题位置 */
}
</style>

