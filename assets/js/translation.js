const translations = {
  en: {
    aboutMe: "About Me",
    aboutMeText: "I'm Xingyu Li (李星宇) from China, and I'm currently focusing on UAVs, autonomous vehicles, machine learning, and lightweight mapping based on ML. <span style=\"color: #1976d2;\">I am applying for a Ph.D. program for Fall 2026.</span>",
    researchInterests: "Research Interests",
    researchInterestsText: `
      <li><strong>Machine Learning for Robotics:</strong> ML-based mapping, optimization frameworks, large-scale environment perception</li>
      <li><strong>Mapping and Localization:</strong> Real-time occupancy grid mapping, lightweight mapping algorithms, perception-aware trajectory planning</li>
      <li><strong>Robotics and Autonomous Systems:</strong> Autonomous flight planning, multi-UAV cooperative systems, autonomous vehicle systems</li>
    `,
    publications: "Publications",
    services: "Services",
  },
  zh: {
    aboutMe: "关于我",
    aboutMeText: "我是来自中国的李星宇，目前专注于无人机、自动驾驶、机器学习以及基于机器学习的轻量化建图。 <span style=\"color: #1976d2;\">我正在申请2026年秋季的博士项目。</span>",
    researchInterests: "研究方向",
    researchInterestsText: `
      <li><strong>机器人机器学习:</strong> 基于机器学习的建图、优化框架、大场景环境感知</li>
      <li><strong>建图与定位:</strong> 实时占据栅格地图、轻量化建图算法、感知-规划一体化</li>
      <li><strong>机器人与自主系统:</strong> 自主飞行规划、多无人机协同系统、自动驾驶系统</li>
    `,
    publications: "学术出版",
    services: "学术服务",
  }
};

function switchLanguage(lang) {
  localStorage.setItem('language', lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelector('h2').innerText = t.aboutMe;
  document.querySelector('p').innerHTML = t.aboutMeText;
  document.querySelectorAll('h2')[1].innerText = t.researchInterests;
  document.querySelector('ul').innerHTML = t.researchInterestsText;
  document.querySelectorAll('h2')[2].innerText = t.publications;
  document.querySelectorAll('h2')[3].innerText = t.services;

  const translatableElements = document.querySelectorAll('[data-en], [data-zh]');
  translatableElements.forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation) {
      el.innerHTML = translation;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'en';
  const langToggle = document.getElementById('lang-toggle');

  if (savedLang === 'zh') {
    langToggle.checked = true;
  }

  applyTranslations(savedLang);

  langToggle.addEventListener('change', () => {
    const lang = langToggle.checked ? 'zh' : 'en';
    switchLanguage(lang);
  });
});
