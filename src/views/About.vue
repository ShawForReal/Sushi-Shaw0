<template>
  <div class="about-container">
    <transition name="fade-up" appear>
      <div class="content-wrapper">
        <h2 class="section-title">关于本页 · 数字人文实践</h2>
        
        <div class="about-section">
          <p class="intro-p">
            本项目是一个面向苏轼（苏东坡）生平与文学创作的数字人文展示平台。
            通过空间叙事与交互地图的方式，试图重现东坡先生南迁万里的心路历程，
            实现文学作品、历史年谱与地理空间的深度互联。
          </p>
        </div>

        <!-- 调整后：分“苏轼”“开发者”两个区块，各实现左图右文+顶端对齐 -->
        <div class="about-section">
          <!-- 苏轼信息区块 -->
          <div class="bio-block">
            <div class="bio-img-box">
              <img src="../components/sushi.png" alt="苏轼简笔画" class="profile-img sushi-sketch">
              <p class="img-label">东坡简笔画像</p>
            </div>
            <div class="bio-text">
              <p><strong>苏轼（1037—1101）</strong>，字子瞻、和仲，号铁冠道人、东坡居士，世称苏东坡，眉州眉山人。他是北宋中期文坛领袖，“唐宋八大家” 之一，亦是历史治水名人。</p>
              <p>嘉祐二年登进士第，仕途几经沉浮。曾先后在杭州、密州等地任职，政绩颇丰。虽因“乌台诗案”受挫，流放黄州、惠州、儋州，但他始终保持乐天旷达。南宋朝廷追赠其太师，谥号“文忠”。</p>
              <p>苏轼在诗、词、文、书、画领域均成就斐然。更令人称道的是他的人生态度。贬谪黄州时写下“谁怕？一蓑烟雨任平生”；流放惠州时笑谈“日啖荔枝三百颗”。他把逆境之涩熬成烟火暖意，这份智慧让他的才华更添温度。</p>
            </div>
          </div>

          <!-- 开发者信息区块 -->
          <div class="bio-block">
            <div class="bio-img-box">
              <img src="../components/wx.jpg" alt="我的头像" class="profile-img my-avatar">
              <p class="img-label">开发者</p>
            </div>
            <div class="bio-text">
              <div class="developer-info">
                <span class="dev-tag">关于我</span>
                <p><strong>WX</strong>，华南师范大学 2023 级地理信息科学专业本科生。正在努力寻找人生意义与前进方向。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 调整结束 -->

        <div class="about-section">
          <h3 class="sub-title">技术实现 / Technical Stack</h3>
          <div class="tech-grid">
            <div class="tech-card">
              <span class="tech-tag">核心框架</span>
              <strong class="tech-name">Vue 3 (Composition API)</strong>
              <p class="tech-desc">构建响应式单页面应用，确保流畅的交互体验。</p>
            </div>
            <div class="tech-card">
              <span class="tech-tag">构建工具</span>
              <strong class="tech-name">Vite</strong>
              <p class="tech-desc">极速的热更新与现代化的前端构建流程。</p>
            </div>
            <div class="tech-card">
              <span class="tech-tag">空间地图</span>
              <strong class="tech-name">GeoScene Online</strong>
              <p class="tech-desc">基于 Esri 技术架构，承载《苏轼南迁故事地图》的地理空间数据与叙事。</p>
            </div>
          </div>
        </div>

        <div class="about-section references">
          <h3 class="sub-title">参考文献 / References</h3>
          <ul class="ref-list">
            <li>《苏轼词编年校注》<span class="ref-author">（邹同庆、王宗堂，中华书局 2002 年版）</span></li>
            <li>《东坡先生年谱》<span class="ref-author">（王宗稷撰）</span></li>
            <li>《苏轼诗集》<span class="ref-author">（王文诰辑注、孔凡礼点校，中华书局 1982 年版）</span></li>
            <li>《东坡乐府》<span class="ref-author">（朱孝臧《彊村丛书》本）</span></li>
            <li>《苏东坡传》<span class="ref-author">（陈鹏，中国友谊出版社 2017年版）</span></li>
          </ul>
        </div>

        <div class="about-footer">
          <p class="quote">“人生到处知何似，应似飞鸿踏雪泥。”</p>
          <p class="date">更新于：2025年12月</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* 全局字体定义：优先楷体，营造人文气息 */
.about-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0 5rem;
  /* 字体族：楷体 -> 仿宋 -> 衬线宋体 */
  font-family: "Xingkai SC", "STKaiti", "Kaiti", "STFangsong", "FangSong", "SimSun", serif;
  background-color: #FAF0E6; 
}

.content-wrapper {
  max-width: 850px; 
  width: 90%;
  background: rgba(255, 255, 255, 0.75); /* 稍微降低透明度，更清透 */
  padding: 4.5rem 5rem;
  border-radius: 2px;
  border: 1px solid #DBC8B8; 
  box-shadow: 0 10px 30px rgba(139, 69, 19, 0.05);
  text-align: left;
}

/* 标题样式：增加字间距，更有石刻感 */
.section-title {
  font-size: 2.4rem;
  color: #131940;
  margin-bottom: 4rem;
  text-align: center;
  letter-spacing: 0.3rem;
  border-bottom: 1.5px solid #8B4513;
  padding-bottom: 1.5rem;
  font-weight: 500;
}

.sub-title {
  font-size: 1.35rem;
  color: #8B4513;
  margin-bottom: 2rem;
  border-left: 4px solid #8B4513;
  padding-left: 1.2rem;
  letter-spacing: 0.1rem;
}

/* 简介文字：行高从 2 提升到 2.2，增加阅读舒缓感 */
.intro-p {
  font-size: 1.25rem;
  line-height: 2.2;
  color: #2c3e50;
  margin-bottom: 4rem;
  text-indent: 2.5rem;
  text-align: justify;
}

/* 调整后：每个区块独立左图右文+顶端对齐 */
.bio-block {
  display: flex;
  gap: 2rem;
  align-items: flex-start; /* 强制图片与文字顶端对齐 */
  margin-bottom: 3rem; /* 两个区块之间的间距 */
}
.bio-img-box {
  width: 120px; /* 统一图片容器宽度 */
  text-align: center;
  flex-shrink: 0; /* 防止容器被压缩 */
}
.profile-img {
  width: 120px; /* 固定宽度，与容器一致 */
  height: 120px; /* 固定高度，确保两个图片大小完全统一 */
  object-fit: cover; /* 保持图片比例，裁剪多余部分 */
  border: 1px solid #DBC8B8;
  border-radius: 2px;
}
.img-label {
  font-size: 0.9rem;
  color: #8B4513;
  margin-top: 0.5rem;
  margin-bottom: 0; /* 消除默认间距 */
}
.bio-text {
  flex: 1; /* 文字区域占剩余宽度 */
}
.bio-text p {
  font-size: 1.1rem;
  line-height: 2.2;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  margin-top: 0; /* 消除文字顶部默认外边距，确保顶端对齐 */
  text-align: justify;
}
.developer-info {
  padding-top: 0.5rem; /* 微调开发者信息的上边距 */
}
.dev-tag {
  display: inline-block;
  font-size: 0.85rem;
  color: #8B4513;
  border-left: 2px solid #8B4513;
  padding-left: 0.8rem;
  margin-bottom: 0.8rem;
  margin-top: 0; /* 消除默认间距 */
}

/* 技术卡片排版优化 */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 4.5rem;
}

.tech-card {
  padding: 0 0.5rem 1.5rem;
  border-bottom: 1px solid rgba(219, 200, 184, 0.5);
  transition: all 0.3s ease;
}

.tech-tag {
  display: block;
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 0.8rem;
  font-family: sans-serif; /* 标签用无衬线体，现代感对比 */
}

.tech-name {
  display: block;
  font-size: 1.15rem;
  color: #131940;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.tech-desc {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

/* 参考文献：区分书名与作者信息颜色 */
.ref-list {
  list-style: none;
  padding: 0;
}

.ref-list li {
  font-size: 1.15rem;
  color: #333;
  line-height: 2.4;
  padding: 0.6rem 0;
  border-bottom: 1px dashed rgba(219, 200, 184, 0.6);
}

.ref-author {
  font-size: 1rem;
  color: #7f8c8d;
}

.ref-list li:last-child {
  border-bottom: none;
}

/* 页脚：落款感 */
.about-footer {
  margin-top: 5rem;
  text-align: center;
  border-top: 1px solid #DBC8B8;
  padding-top: 3rem;
}

.quote {
  font-size: 1.2rem;
  color: #8B4513;
  letter-spacing: 0.15rem;
  margin-bottom: 1rem;
}

.date {
  font-size: 0.9rem;
  color: #95a5a6;
  font-family: sans-serif;
}

/* 动画 */
.fade-up-enter-active {
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>