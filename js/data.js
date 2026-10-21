/* ============================================================
   data.js —— 全站内容都在这里，改这个文件即可，无需构建
   ============================================================ */

const SITE = {
  owner: "庄沅霖",
  tagline: "独立开发者",
  copyright: "© 2026年 庄沅霖",

  // 底部社交圆钮（换成你自己的链接）
  socials: [
    { name: "GitHub", url: "https://github.com/", icon: "github" },
    { name: "哔哩哔哩", url: "https://www.bilibili.com/", icon: "bilibili" },
    { name: "邮箱", url: "mailto:hi@example.com", icon: "mail" },
  ],

  // 首页图标导航
  nav: [
    { id: "about",    label: "关于",         icon: "about" },
    { id: "links",    label: "链接",         icon: "link" },
    { id: "works",    label: "作品",         icon: "work" },
    { id: "photos",   label: "摄影",         icon: "camera" },
    { id: "murmurs",  label: "碎碎念",       icon: "murmur" },
    { id: "exp",      label: "经验",         icon: "book" },
    { id: "faq",      label: "常见问题解答", icon: "faq" },
    { id: "contact",  label: "联系方式",     icon: "contact" },
  ],

  works: [
    { name: "谧记", desc: "单文件 HTML 个人效率 PWA：每日计划、任务打卡、学习记录，Supabase 云端同步。" },
    { name: "到没到", desc: "班级扫码签到微信小程序，已发布 v1.0.2，管理员白名单权限控制。" },
    { name: "树洞日记", desc: "个人日记微信小程序，树洞 / 躺平 / 学习三分区，每区专属 AI 伴写。" },
    { name: "黄金价格预测", desc: "扣子智能体 + Python 机器学习双轨方案，跟踪黄金 ETF 行情并输出研判。" },
    { name: "校园易援", desc: "大学生创业孵化平台，中国国际大学生创新大赛职教赛道参赛项目。" },
  ],

  // 「摄影」页：占位卡片，之后把照片放 assets/photos/ 换掉即可
  photos: [
    { title: "随手拍 · 一", note: "占位，等照片" ,img:"assets/"},
    { title: "随手拍 · 二", note: "占位，等照片" ,img:""},
    { title: "随手拍 · 三", note: "占位，等照片" ,img:""},
    { title: "随手拍 · 四", note: "占位，等照片" ,img:""},
    { title: "随手拍 · 五", note: "占位，等照片" ,img:""},
    { title: "随手拍 · 六", note: "占位，等照片" ,img:""},
  ],

  // 「碎碎念」页：想到什么写什么，短句即可
  murmurs: [
    { date: "2026-10-18", text: "今天也在适合写代码的一天。" },
    { date: "2026-10-15", text: "把想法做成能用的东西，比想一百遍都痛快。" },
    { date: "2026-10-11", text: "秋天了，适合拍照的光越来越多了。" },
  ],

  // 「经验」页：踩坑总结 / 教程，条目随意加
  exp: [
    { name: "微信小程序云函数部署踩坑记录", desc: "权限、自定义 _id、重新上传部署的那些坑。" },
    { name: "Python 机器学习入门路线", desc: "从数据清洗到模型训练，我走过的最短路径。" },
    { name: "纯静态个人站怎么搭", desc: "HTML/CSS/JS 零构建，FTP 丢服务器就能跑。" },
  ],

  links: [
    { name: "GitHub", url: "https://github.com/ZYL-0124",        note: "代码与开源项目" },
    { name: "抖音",   url: "https://v.douyin.com/b3Y6rf0E52o/",  note: "日常与视频" },
  ],

  faq: [
    { q: "这些项目都是你自己做的吗？", a: "是的，从产品设计、前端开发到云函数部署都是独立完成，正在持续迭代中。" },
    { q: "可以用到你的项目代码吗？", a: "部分项目计划开源，具体 license 会写在对应仓库里，使用前请留意说明。" },
    { q: "有合作或开发需求怎么联系？", a: "可以通过「联系方式」里的邮箱找到我，一般 48 小时内回复。" },
    { q: "这个网站是怎么做的？", a: "纯静态站（HTML / CSS / 原生 JS），零构建零依赖，直接部署在任意服务器上。" },
  ],

  contact: {
    email: "hi@example.com",
    wechat: "zhuangyuanlin_dev",
    note: "合作、交流或只是打个招呼，都欢迎。",
  },

  // 「关于」页（布局对照 sharyap：头像 + 橙色名字 + 身份行 + 简介 + 要点列表）
  about: {
    name: "庄沅霖",
    role1: "独立开发者、业余小程序作者",
    role2pre: "，作品都收在",
    role2link: "「作品」页",
    role2view: "works",
    role2post: "里",
    hi: "庄沅霖",
    intro: "一名独立开发者。喜欢把想法快速做成能用的东西，这个站是我的小角落，放作品、写点东西，也方便大家找到我。",
    facts: [
      "做微信小程序，",
      "写 Web 应用和各种小工具，",
      "折腾机器学习模型，",
      "记录开发日常。",
    ],
  },
};
