<template>
  <div class="relations-container">
    <!-- 统一头部fade-down动画参数，与趣事组件完全一致 -->
    <transition name="fade-down" appear>
      <div class="header-section">
        <h1 class="title">苏轼·众生相</h1>
        <p class="subtitle">“吾上可以陪玉皇大帝，下可以陪卑田院乞儿。”</p>
      </div>
    </transition>

    <div class="relations-grid">
      <div v-for="(group, gIndex) in groupedRelations" :key="gIndex" class="relation-group">
        <h3 class="group-title">{{ group.title }}</h3>
        <div class="cards-list">
          <!-- 为每个卡片添加与趣事组件一致的slide-up入场动画 + 延迟 -->
          <div v-for="(item, index) in group.members" :key="item.name" class="person-card-wrap">
            <transition name="slide-up" appear>
              <div 
                class="person-card" 
                :style="{ transitionDelay: `${(gIndex * group.members.length + index) * 0.08}s` }"
              >
                <div class="side-tag">{{ item.tag }}</div>
                
                <div class="card-content">
                  <h4 class="person-name">{{ item.name }}</h4>
                  <p class="person-bio">{{ item.bio }}</p>
                  
                  <div class="quote-area">
                    <span class="mark">「</span>
                    {{ item.quote }}
                    <span class="mark"> 」</span>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 文字内容完全未动，保留原始数据
const groupedRelations = [
  {
    title: "至亲骨肉",
    members: [
      { 
        name: "苏辙", tag: "手足", 
        bio: "苏轼胞弟与精神知己，患难相随。乌台诗案中愿纳官赎兄，两人更有“风雨对床”的归隐之约，情谊超越血缘，乃士林典范。", 
        quote: "与君世世为兄弟，更结来生未了因" 
      },
      { 
        name: "王弗", tag: "原配", 
        bio: "苏轼原配，聪慧贤淑，常在帘后助夫分析人情世故。其早逝令苏轼哀思十年，写下千古悼亡巅峰《江城子·十年生死两茫茫》。", 
        quote: "十年生死两茫茫，不思量，自难忘" 
      },
      { 
        name: "王闰之", tag: "续弦", 
        bio: "王弗堂妹，二十七岁嫁苏轼，伴其走过乌台诗案与黄州低谷。十五载贫富不改色声，死后依遗嘱与苏轼合葬于汝州郏县。", 
        quote: "生不同归，死当同穴" 
      },
      { 
        name: "王朝云", tag: "知己", 
        bio: "苏轼晚年侍妾与灵魂伴侣，唯她能识苏轼“一肚子不合时宜”。随其贬谪惠州而不离不弃，病逝后苏轼建六如亭以示永久纪念。", 
        quote: "不似杨枝别乐天，恰如灯下见安禅" 
      }
    ]
  },
  {
    title: "师友知己",
    members: [
      { 
        name: "欧阳修", tag: "伯乐", 
        bio: "北宋文坛领袖，科举中惊叹苏轼才华，预言其“当避路，放他出一头地”。两人共同引领北宋文风革新，苏轼始终以师礼事之。", 
        quote: "老夫当避路，放他出一头地" 
      },
      { 
        name: "秦观", tag: "门生", 
        bio: "苏门四学士之一，婉约词宗。苏轼对其才华极度赏识，两人虽为师生，情感却如亲人。秦观遭贬谪时，苏轼曾多次写信慰藉其愁苦。", 
        quote: "山抹微云，君之词格" 
      },
      { 
        name: "黄庭坚", tag: "门生", 
        bio: "苏门四学士之首，诗歌、书法自成一家。虽名义为门生，实则与苏轼双峰并峙、亦师亦友，共同开创了宋诗的崭新格局。", 
        quote: "超逸绝尘，独立万物之表" 
      },
      { 
        name: "王缄", tag: "挚友", 
        bio: "苏轼挚友，曾不远万里探望贬谪杭州的苏轼，临别时苏轼作《临江仙・送王缄》，抒发 “此身如传舍，何处是吾乡” 的漂泊之叹。", 
        quote: "此身如传舍，何处是吾乡" 
      },
      { 
        name: "陈襄", tag: "知己", 
        bio: "苏轼为官期间的知己，两人政治立场相近，常以诗文唱和。陈襄调任时，苏轼送至临平，作《南乡子・送述古》以寄离别之情。", 
        quote: "回头望，低叹息，处处有情" 
      },
      { 
        name: "佛印", tag: "禅友", 
        bio: "通透豁达的禅门挚友，常与苏轼诗文唱和、机锋对辩。其方外之交的幽默与智慧，为苏轼坎坷的人生提供了深厚的精神慰藉。", 
        quote: "稽首天中天，毫光照大千" 
      }
    ]
  },
  {
    title: "政敌纠葛",
    members: [
      { 
        name: "王安石", tag: "对手", 
        bio: "虽因新法政见针锋相对，保持文人风骨。乌台诗案中王安石冒死营救苏轼，晚年两人江宁同游，达成跨越党争的相惜。", 
        quote: "从公已觉十年迟" 
      },
      { 
        name: "章惇", tag: "宿敌", 
        bio: "早年挚友，晚年却因政见沦为仇敌。任宰相后将苏轼连续贬至惠州、儋州，意图使其老死荒蛮，见证了苏轼晚年最惨烈的仕途。", 
        quote: "报道先生春睡美，引来再贬儋州荒" 
      }
    ]
  }
];
</script>

<style scoped>
/* 严格复刻你发给我的所有 CSS 参数，仅调整动画和标题位置 */
.relations-container {
  background-color: #FAF0E6;
  min-height: 100vh;
  padding: 1rem 1rem;
  font-family: "STKaiti", "Kaiti", serif;
  overflow-x: hidden;
}

/* 对齐主标题位置：与趣事组件的timeline-header样式完全一致 */
.header-section {
  margin-top: 0.5rem;       /* 统一顶部间距 */
  padding-bottom: 3.5rem;   /* 统一底部间距 */
  text-align: center;
  position: relative;
  z-index: 5;
}

.title { 
  font-size: 2.2rem; 
  letter-spacing: 0.4rem; 
  color: #8B4513; 
  margin-bottom: 0.3rem;    /* 与趣事组件标题下间距一致 */
}

.subtitle {
  font-size: 1.05rem;       /* 与趣事组件副标题字号一致 */
  color: #444;
  opacity: 0.8;
}

.relations-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.relation-group {
  margin-bottom: 4rem;
}
.group-title {
  border-left: 4px solid #8B4513;
  padding-left: 1rem;
  margin-bottom: 2rem;
  color: #8B4513;
  font-size: 1.5rem;
}

.cards-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

/* 新增卡片包裹层，不影响原有布局 */
.person-card-wrap {
  display: flex;
}

.person-card {
  background: rgba(255, 255, 255, 0.4);
  padding: 2rem;
  border-radius: 4px;
  position: relative;
  transition: all 0.4s ease;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  width: 100%; /* 确保宽度填满，与趣事组件卡片一致 */
}

.person-card:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
  border-color: #DBC8B8;
  box-shadow: 0 10px 20px rgba(139, 69, 19, 0.05);
}

.side-tag {
  position: absolute;
  top: 0; right: 1.5rem;
  background: #8B4513;
  color: #FAF0E6;
  padding: 0.5rem 0.2rem;
  writing-mode: vertical-rl;
  font-size: 0.8rem;
}

.person-name { font-size: 1.3rem; margin-bottom: 1rem; color: #131940; }
.person-bio { 
  font-size: 1.05rem; 
  line-height: 1.7; 
  color: #444; 
  flex-grow: 1;
  text-align: justify;
}

.quote-area {
  margin-top: 1.5rem;
  background: rgba(139, 69, 19, 0.05);
  padding: 0.8rem;
  color: #8B4513;
  text-align: center;
  border-radius: 4px;
}

.mark { opacity: 0.5; margin: 0 5px; }

/* 统一入场动画：与趣事组件的动画参数完全一致 */
.fade-down-enter-active { transition: all 0.8s ease; }
.fade-down-enter-from { 
  opacity: 0; 
  transform: translateY(-10px); /* 统一为趣事组件的-10px（原-15px） */
}

/* 新增slide-up动画：与趣事组件完全一致 */
.slide-up-enter-active { transition: all 0.7s ease-out; }
.slide-up-enter-from { 
  opacity: 0; 
  transform: translateY(10px); 
}
</style>