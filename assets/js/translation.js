// =============================================================
// 中文翻译（唯一来源）
// 英文内容来自 Jekyll 渲染的 HTML，不在此处重复存储
// =============================================================
const zh = {
  aboutMe:           "关于我",
  aboutMeText:       `我是来自中国的李星宇，目前专注于无人机、自动驾驶、机器学习以及基于机器学习的轻量化建图。在我的硕士研究期间，我的导师是<a href="https://scholar.google.com/citations?user=Ajf_NNsAAAAJ&hl=zh-CN">董久祥教授</a>。 <span style="color: #1976d2;">我正在申请2026年秋季的博士项目。</span>`,
  researchInterests: "研究方向",
  researchIntro:     "通过整合符号规划、概率推理、世界建模和基于学习的方法，使自主机器人能够在真实、开放的环境中做出常识性决策。",
  researchList: `
    <li><strong>机器人机器学习:</strong> 基于机器学习的建图、优化框架、感知意识规划</li>
    <li><strong>环境表征:</strong> 实时占据栅格地图、轻量化建图算法、大规模环境感知</li>
    <li><strong>机器人与自主系统:</strong> 自主飞行规划、多无人机协同系统、自动驾驶系统</li>
  `,
  publications:      "学术出版",
  services:          "学术服务",
};

// =============================================================
// 英文缓存（从 Jekyll 渲染的 HTML 中读取，页面加载时自动填充）
// =============================================================
let en = {};

function cacheEnglish() {
  en.aboutMe          = document.getElementById('about-me').textContent;
  en.aboutMeText      = document.getElementById('about-me-text').innerHTML;
  en.researchInterest = document.getElementById('research-interests').textContent;
  en.researchIntro    = document.getElementById('research-intro').innerHTML;
  en.researchList     = document.getElementById('research-list').innerHTML;
  en.publications     = document.getElementById('publications').textContent;
  en.services         = document.getElementById('services').textContent;
}

// =============================================================
// 语言切换
// =============================================================
function switchLanguage(lang) {
  if (lang === 'zh') {
    // 切换到中文
    document.getElementById('about-me').textContent           = zh.aboutMe;
    document.getElementById('about-me-text').innerHTML        = zh.aboutMeText;
    document.getElementById('research-interests').textContent = zh.researchInterests;
    document.getElementById('research-intro').innerHTML       = zh.researchIntro;
    document.getElementById('research-list').innerHTML        = zh.researchList;
    document.getElementById('publications').textContent       = zh.publications;
    document.getElementById('services').textContent           = zh.services;
    document.querySelectorAll('[data-zh]').forEach(el => {
      el.innerHTML = el.getAttribute('data-zh');
    });
  } else {
    // 切换回英文（从缓存还原 Jekyll 原始内容）
    document.getElementById('about-me').textContent           = en.aboutMe;
    document.getElementById('about-me-text').innerHTML        = en.aboutMeText;
    document.getElementById('research-interests').textContent = en.researchInterest;
    document.getElementById('research-intro').innerHTML       = en.researchIntro;
    document.getElementById('research-list').innerHTML        = en.researchList;
    document.getElementById('publications').textContent       = en.publications;
    document.getElementById('services').textContent           = en.services;
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = el.getAttribute('data-en');
    });
  }
}

// 页面加载：缓存英文原文，默认显示英文（Jekyll 已渲染好，无需额外操作）
document.addEventListener('DOMContentLoaded', () => {
  cacheEnglish();
});
