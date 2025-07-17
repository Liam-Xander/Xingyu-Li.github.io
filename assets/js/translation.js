

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
    pub1Title: "Real-Time Occupancy Grid Mapping Using RMM on Large-scale and Unstructured Environments",
    pub1Authors: "<strong>Xingyu Li</strong>, Hongyu Nie*, Xu Liu, Haoxuan Xu, Xingrui Liu, Zhaotong Tan (*Corresponding authors)",
    pub1Conference: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025.",
    pub2Title: "GeoSafe: A Unified Unconstrained Multi-DOF Optimization Framework for Multi-UAV Cooperative Hoisting and Obstacle Avoidance",
    pub2Authors: "<strong>Xingyu Li</strong>, Hongyu Nie, Xu Liu, Haoxuan Xu, Xingrui Liu, Zhaotong Tan, Chunyu Jiang, Yang Feng, Sen Mei* (*Corresponding authors)",
    pub2Conference: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025.",
    pub3Title: "FELP: Fast and Effective Autonomous Flight on Large-scale and Cluttered Environments Based on Unified Linear Parametric Map",
    pub3Authors: "<strong>Hongyu Nie*†</strong>, <strong>Xingyu Li†</strong>, Xu Liu, Decai Li, Yuqing He",
    pub3Conference: "IEEE Robotics and Automation Letters, 2025",
    pub4Title: "Unified Linear Parametric Map Modeling and Perception-aware Trajectory Planning for Mobile Robotics",
    pub4Authors: "<strong>Hongyu Nie†</strong>, <strong>Xingyu Li†</strong>, Xu Liu*, Zhaotong Tan, Sen Mei, Wenbo Su",
    pub4Conference: "Submitted to IEEE Transactions on Robotics (TRO), July 2025",
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
    pub1Title: "在大型非结构化环境中使用RMM进行实时占据栅格建图",
    pub1Authors: "<strong>李星宇</strong>, 聂宏宇*, 刘旭, 徐浩轩, 刘兴瑞, 谭朝勇 (*通讯作者)",
    pub1Conference: "IEEE/RSJ 智能机器人与系统国际会议 (IROS), 2025.",
    pub2Title: "GeoSafe: 一种用于多无人机协同吊装和避障的统一无约束多自由度优化框架",
    pub2Authors: "<strong>李星宇</strong>, 聂宏宇, 刘旭, 徐浩轩, 刘兴瑞, 谭朝勇, 蒋春余, 冯旸, 梅森* (*通讯作者)",
    pub2Conference: "IEEE/RSJ 智能机器人与系统国际会议 (IROS), 2025.",
    pub3Title: "FELP: 基于统一线性参数化地图的大规模复杂环境下快速高效的自主飞行",
    pub3Authors: "<strong>聂宏宇*†</strong>, <strong>李星宇†</strong>, 刘旭, 李德才, 何玉庆",
    pub3Conference: "IEEE 机器人与自动化快报, 2025",
    pub4Title: "面向移动机器人的统一线性参数化地图建模与感知-规划一体化",
    pub4Authors: "<strong>聂宏宇†</strong>, <strong>李星宇†</strong>, 刘旭*, 谭朝勇, 梅森, 苏文博",
    pub4Conference: "投稿至 IEEE Transactions on Robotics (TRO), 2025年7月",
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

  const pubs = document.querySelectorAll('.pub-row');
  pubs[0].querySelector('.title').innerText = t.pub1Title;
  pubs[0].querySelector('.author').innerHTML = t.pub1Authors;
  pubs[0].querySelector('.periodical em').innerText = t.pub1Conference;
  pubs[1].querySelector('.title').innerText = t.pub2Title;
  pubs[1].querySelector('.author').innerHTML = t.pub2Authors;
  pubs[1].querySelector('.periodical em').innerText = t.pub2Conference;
  pubs[2].querySelector('.title').innerText = t.pub3Title;
  pubs[2].querySelector('.author').innerHTML = t.pub3Authors;
  pubs[2].querySelector('.periodical em').innerText = t.pub3Conference;
  pubs[3].querySelector('.title').innerText = t.pub4Title;
  pubs[3].querySelector('.author').innerHTML = t.pub4Authors;
  pubs[3].querySelector('.periodical em').innerText = t.pub4Conference;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'en';
  applyTranslations(savedLang);
});
