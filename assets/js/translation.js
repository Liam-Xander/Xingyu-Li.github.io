// =============================================================
// 中文翻译（唯一来源）
// 英文内容来自 Jekyll 渲染的 HTML，不在此处重复存储
// =============================================================
const zh = {
  aboutMe: "关于我",
  aboutMeText: `我是来自中国的李星宇，目前专注于无人机、自动驾驶、机器学习以及基于机器学习的轻量化建图。在我的硕士研究期间，我的导师是<a href="https://scholar.google.com/citations?user=Ajf_NNsAAAAJ&hl=zh-CN">董久祥教授</a>。 <span style="color: #1976d2;">我正在申请博士项目。</span>`,
  researchInterests: "研究兴趣",
  researchAreas: "研究方向",
  researchIntro: "在硕士阶段，我完成了完整的无人机系统，涵盖感知建图、规划与控制全流程。我发现在非结构化和动态环境下，传统规划模块的瓶颈本质上源于感知表示的局限性。我希望利用学习方法替换或增强规划前端的场景表示与决策模块，在保留系统可靠性的同时提升泛化能力。",
  researchList: `
    <li>
      <strong>基于学习的感知与建图</strong><br>
      基于机器学习的占据栅格建图、轻量化环境表征、大规模非结构化场景建模
    </li>
    <li>
      <strong>学习增强的规划与决策</strong><br>
      用学习模型替换规划前端场景表示、感知规划一体化、动态环境下的泛化能力
    </li>
    <li>
      <strong>无人机与自主系统</strong><br>
      自主飞行规划、多无人机协同系统、全栈无人机系统开发
    </li>
  `,
  publications: "学术出版",
  undergradWork: "研究生前的工作",
  services: "学术服务",
};

// =============================================================
// 英文缓存（从 Jekyll 渲染的 HTML 中读取，页面加载时自动填充）
// =============================================================
let en = {};

function cacheEnglish() {
  en.aboutMe = document.getElementById('about-me').textContent;
  en.aboutMeText = document.getElementById('about-me-text').innerHTML;
  en.researchInterest = document.getElementById('research-interests').textContent;
  en.researchAreas = document.getElementById('research-areas').textContent;
  en.researchIntro = document.getElementById('research-intro').innerHTML;
  en.researchList = document.getElementById('research-list').innerHTML;
  en.publications = document.getElementById('publications').textContent;
  en.undergradWork = document.getElementById('undergrad-work').textContent;
  en.services = document.getElementById('services').textContent;
}

// =============================================================
// 语言切换
// =============================================================
function switchLanguage(lang) {
  if (lang === 'zh') {
    // 切换到中文
    document.getElementById('about-me').textContent = zh.aboutMe;
    document.getElementById('about-me-text').innerHTML = zh.aboutMeText;
    document.getElementById('research-interests').textContent = zh.researchInterests;
    document.getElementById('research-areas').textContent = zh.researchAreas;
    document.getElementById('research-intro').innerHTML = zh.researchIntro;
    document.getElementById('research-list').innerHTML = zh.researchList;
    document.getElementById('publications').textContent = zh.publications;
    document.getElementById('undergrad-work').textContent = zh.undergradWork;
    document.getElementById('services').textContent = zh.services;
    document.querySelectorAll('[data-zh]').forEach(el => {
      el.innerHTML = el.getAttribute('data-zh');
    });
  } else {
    // 切换回英文（从缓存还原 Jekyll 原始内容）
    document.getElementById('about-me').textContent = en.aboutMe;
    document.getElementById('about-me-text').innerHTML = en.aboutMeText;
    document.getElementById('research-interests').textContent = en.researchInterest;
    document.getElementById('research-areas').textContent = en.researchAreas;
    document.getElementById('research-intro').innerHTML = en.researchIntro;
    document.getElementById('research-list').innerHTML = en.researchList;
    document.getElementById('publications').textContent = en.publications;
    document.getElementById('undergrad-work').textContent = en.undergradWork;
    document.getElementById('services').textContent = en.services;
    document.querySelectorAll('[data-en]').forEach(el => {
      el.innerHTML = el.getAttribute('data-en');
    });
  }
}

// 页面加载：缓存英文原文，默认显示英文（Jekyll 已渲染好，无需额外操作）
document.addEventListener('DOMContentLoaded', () => {
  cacheEnglish();
});
