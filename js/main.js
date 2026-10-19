/* ============================================================
   main.js —— 单窗口内容切换 + 主题/音效切换（零依赖）
   ============================================================ */

/* ---------- SVG 图标库（线性 1.5px，贴近 sharyap 手绘感） ---------- */
const ICONS = {
  about: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6C13 6 5 13 5 22c0 5 2.6 9.4 6.8 12.3L10 42l8.6-3.4c1.7.4 3.5.7 5.4.7 11 0 19-7 19-16S35 6 24 6z"/><circle cx="24" cy="18" r="2.4" fill="currentColor" stroke="none"/><path d="M24 24v8"/></svg>`,
  link: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 28l8-8"/><path d="M26 14l3-3a7.6 7.6 0 0 1 10.8 10.8l-3 3"/><path d="M22 34l-3 3A7.6 7.6 0 0 1 8.2 26.2l3-3"/></svg>`,
  work: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14a3 3 0 0 1 3-3h9l4 5h17a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"/><path d="M6 22h36"/></svg>`,
  camera: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 14l3.2-4h9.6l3.2 4h8.2a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3z"/><circle cx="24" cy="26.5" r="7"/><circle cx="37.5" cy="20" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  murmur: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4H19l-9 8v-8h-.2A3.9 3.9 0 0 1 6 28z"/><circle cx="16" cy="20.5" r="1.7" fill="currentColor" stroke="none"/><circle cx="24" cy="20.5" r="1.7" fill="currentColor" stroke="none"/><circle cx="32" cy="20.5" r="1.7" fill="currentColor" stroke="none"/></svg>`,
  book: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M24 12c-3.8-2.8-8.6-3.8-14-3.8V37c5.4 0 10.2 1 14 3.8 3.8-2.8 8.6-3.8 14-3.8V8.2c-5.4 0-10.2 1-14 3.8z"/><path d="M24 12v28.8"/></svg>`,
  faq: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5h18l8 8v28a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><path d="M30 5v8h8"/><path d="M20.5 20a4 4 0 1 1 5.6 3.7c-1.3.6-2.1 1.4-2.1 2.8v.9"/><circle cx="24" cy="32.5" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  contact: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="38" height="27" rx="3"/><path d="M5 14l19 13 19-13"/><circle cx="36" cy="30" r="5.5" fill="#fff" stroke="currentColor"/><path d="M33.8 30l1.6 1.6 2.8-3" /></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.5.1.7-.2.7-.5v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.6.7.5A11.2 11.2 0 0 0 12 .8z"/></svg>`,
  bilibili: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="3"/><path d="M7 3.5 10 7M17 3.5 14 7"/><path d="M9 12.5v2.5M15 12.5v2.5"/></svg>`,
  douyin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3v11.8a3.6 3.6 0 1 1-3.6-3.6c.3 0 .6 0 .9.1"/><path d="M13.5 3c.4 2.6 2.1 4.4 4.8 4.7"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 7l9 6 9-6"/></svg>`,
  wechat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 4C5.4 4 2 6.8 2 10.2c0 1.9 1 3.6 2.7 4.7L4 17.5l2.9-1.5c.8.3 1.7.4 2.6.4h.4"/><path d="M15 9c3.9 0 7 2.5 7 5.6 0 1.6-.9 3.1-2.3 4.1l.6 2.3-2.5-1.3c-.8.2-1.8.4-2.8.4-3.9 0-7-2.5-7-5.5S11.1 9 15 9z"/><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="12.5" cy="12.5" r="1" fill="currentColor" stroke="none"/><circle cx="17.5" cy="12.5" r="1" fill="currentColor" stroke="none"/></svg>`,
};

/* ---------- 工具 ---------- */
const $ = (s) => document.querySelector(s);
const winBody = $("#win-body");
const winTitle = $("#win-title");
const winClose = $("#win-close");

/* ---------- 音效（WebAudio，无外部文件） ---------- */
let audioCtx = null;
function ensureCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {}
  }
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function playPop() {
  if (document.body.classList.contains("muted")) return;
  const ctx = ensureCtx();
  if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(520, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(760, ctx.currentTime + 0.07);
  g.gain.setValueAtTime(0.06, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
  o.connect(g).connect(ctx.destination);
  o.start();
  o.stop(ctx.currentTime + 0.13);
}
function playChime() {
  if (document.body.classList.contains("muted")) return;
  const ctx = ensureCtx();
  if (!ctx) return;
  [[659.25, 0], [987.77, 0.09]].forEach(([f, d]) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "triangle";
    o.frequency.value = f;
    const t = ctx.currentTime + d;
    g.gain.setValueAtTime(0.001, t);
    g.gain.exponentialRampToValueAtTime(0.07, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    o.connect(g).connect(ctx.destination);
    o.start(t);
    o.stop(t + 0.4);
  });
}

/* ---------- 视图渲染 ---------- */
function renderHome(body) {
  body.innerHTML = `
    <div class="view">
      <h1 class="hero-title">嗨！<span class="accent">我是${SITE.owner}</span></h1>
      <p class="hero-sub">${SITE.tagline}</p>
      <nav class="icon-nav">
        ${SITE.nav.map(n => `
          <button class="icon-nav__item" data-view="${n.id}" aria-label="${n.label}">
            ${ICONS[n.icon] || ""}
            <span>${n.label}</span>
          </button>`).join("")}
      </nav>
    </div>`;
  bindNav(body);
}

/* 头像：治愈系漫画头像 assets/avatar.png */

function renderAbout(body) {
  const a = SITE.about;
  body.innerHTML = `
    <div class="view view--page view--about">
      <div class="about-head">
        <div class="avatar"><img src="assets/avatar.png?v=5" alt="庄沅霖的头像"></div>
        <div class="about-id">
          <div class="about-name"><span class="name-ico" aria-hidden="true"><i></i><i></i></span>${a.name}</div>
          <p class="about-role">${a.role1}</p>
          <p class="about-role">${a.role2pre}<a href="#" data-goto="${a.role2view}">${a.role2link}</a>${a.role2post}</p>
        </div>
      </div>
      <div class="about-scroll">
        <hr class="about-hr">
        <h3 class="about-hi">嗨！我是<span class="accent">${a.hi}</span></h3>
        <p class="about-intro">${a.intro}</p>
        <ul class="about-list">
          ${a.facts.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>
    </div>`;
  bindGoto(body);
}

function renderLinks(body) {
  body.innerHTML = `
    <div class="view view--page">
      <h2>我的<span class="accent">链接</span></h2>
      <div class="link-list">
        ${SITE.links.map(l => `
          <a class="link-item" href="${l.url}" target="_blank" rel="noopener">
            ${ICONS[l.icon] || ICONS.link}
            <span>${l.name}</span><small>${l.note}</small>
          </a>`).join("")}
      </div>
    </div>`;
}

function renderWorks(body) {
  body.innerHTML = `
    <div class="view view--page">
      <h2>我的<span class="accent">作品</span></h2>
      <div class="work-list">
        ${SITE.works.map(w => `
          <div class="work-card">
            <b>${w.name}</b><span>${w.desc}</span>
          </div>`).join("")}
      </div>
    </div>`;
}

function renderPhotos(body) {
  body.innerHTML = `
    <div class="view view--page">
      <h2>我的<span class="accent">摄影</span></h2>
      <p class="muted" style="margin-bottom:16px">随手记录的光影，慢慢更新。</p>
      <div class="photo-grid">
        ${SITE.photos.map(p => `
          <figure class="photo-card">
            <div class="photo-ph" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="17" r="5"/><path d="M8 38l10-12 7 8 6-6 9 10"/><rect x="5" y="8" width="38" height="32" rx="4"/></svg>
            </div>
            <figcaption><b>${p.title}</b><span>${p.note}</span></figcaption>
          </figure>`).join("")}
      </div>
    </div>`;
}

function renderMurmurs(body) {
  body.innerHTML = `
    <div class="view view--page">
      <h2>碎碎<span class="accent">念</span></h2>
      <div class="murmur-list">
        ${SITE.murmurs.map(m => `
          <div class="murmur-item">
            <small>${m.date}</small>
            <p>${m.text}</p>
          </div>`).join("")}
      </div>
    </div>`;
}

function renderExp(body) {
  body.innerHTML = `
    <div class="view view--page">
      <h2>我的<span class="accent">经验</span></h2>
      <div class="work-list">
        ${SITE.exp.map(w => `
          <div class="work-card">
            <b>${w.name}</b><span>${w.desc}</span>
          </div>`).join("")}
      </div>
    </div>`;
}

function renderFaq(body) {
  body.innerHTML = `
    <div class="view view--page">
      <h2>常见<span class="accent">问题</span></h2>
      <div class="faq-list">
        ${SITE.faq.map((f, i) => `
          <div class="faq-item" data-faq="${i}">
            <button class="faq-q">${f.q}</button>
            <div class="faq-a"><p>${f.a}</p></div>
          </div>`).join("")}
      </div>
    </div>`;
  body.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-q").addEventListener("click", () => {
      item.classList.toggle("open");
      playPop();
    });
  });
}

function renderContact(body) {
  body.innerHTML = `
    <div class="view view--page">
      <h2>联系<span class="accent">我</span></h2>
      <p class="muted" style="margin-bottom:16px">${SITE.contact.note}</p>
      <div class="link-list">
        <a class="link-item" href="mailto:${SITE.contact.email}">
          ${ICONS.mail}<span>${SITE.contact.email}</span><small>邮箱</small>
        </a>
        <div class="link-item">
          ${ICONS.wechat}<span>${SITE.contact.wechat}</span><small>微信</small>
        </div>
      </div>
    </div>`;
}

const VIEWS = {
  home: renderHome, about: renderAbout, links: renderLinks,
  works: renderWorks, photos: renderPhotos, murmurs: renderMurmurs,
  exp: renderExp, faq: renderFaq, contact: renderContact,
};

/* ---------- 窗口拖动：按住标题栏拖动（仅子窗口；首页主窗口固定居中不拖） ---------- */
function makeDraggable(winEl, barEl) {
  if (!winEl || !barEl) return;
  let sx = 0, sy = 0, baseLeft = 0, baseTop = 0, dragging = false;

  barEl.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".win__close")) return;      // [x] 不触发拖动
    dragging = true;
    winEl.classList.add("dragging");
    winEl.style.animation = "none";                   // 取消入场动画，避免覆盖位移
    void winEl.offsetWidth;                           // 强制重排，保证测量到最终尺寸
    const rect = winEl.getBoundingClientRect();
    const sub = winEl.classList.contains("win--sub");
    baseLeft = rect.left; baseTop = rect.top;
    sx = e.clientX; sy = e.clientY;
    if (sub) {                                        // 子窗口：left 记中心点，配 translateX(-50%)
      winEl.style.left = (rect.left + rect.width / 2) + "px";
      winEl.style.transform = "translateX(-50%)";
    } else {                                          // 主窗口：脱离文档流，直接定位
      winEl.style.position = "fixed";
      winEl.style.left = rect.left + "px";
      winEl.style.marginTop = "0";
      winEl.style.transform = "none";
    }
    winEl.style.top = rect.top + "px";
    try { barEl.setPointerCapture(e.pointerId); } catch (err) {}
  });

  barEl.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const rect = winEl.getBoundingClientRect();
    let nx = baseLeft + (e.clientX - sx);
    let ny = baseTop + (e.clientY - sy);
    // 边界：始终留一段窗口在视口内，底部不越过社交圆钮
    nx = Math.max(nx, -rect.width + 140);
    nx = Math.min(nx, window.innerWidth - 140);
    ny = Math.max(ny, 10);
    ny = Math.min(ny, window.innerHeight - 90);
    const sub = winEl.classList.contains("win--sub");
    winEl.style.left = (sub ? nx + rect.width / 2 : nx) + "px";
    winEl.style.top = ny + "px";
  });

  const end = () => { if (!dragging) return; dragging = false; winEl.classList.remove("dragging"); };
  barEl.addEventListener("pointerup", end);
  barEl.addEventListener("pointercancel", end);
}

/* ---------- 多窗口：点图标弹出独立窗口，可同时层叠多个（原站交互） ---------- */
let zTop = 100;
const openWins = new Map();               // view id -> 窗口元素

function openWindow(id) {
  if (!id || id === "home") return;
  if (openWins.has(id)) {                 // 已打开：置顶 + 弹一下
    const el = openWins.get(id);
    el.style.zIndex = ++zTop;
    el.classList.remove("pop");
    void el.offsetWidth;
    el.classList.add("pop");
    playPop();
    return;
  }
  const meta = SITE.nav.find(n => n.id === id);
  const w = document.createElement("div");
  w.className = "win win--sub";
  w.style.zIndex = ++zTop;
  // 层叠横向错位：窄屏（手机）错位点循环复用，否则越开越往右，
  // 窗口会被推出屏幕、右上角 [x] 点不到
  const narrow = window.innerWidth <= 640;
  const off = narrow ? ((openWins.size % 3) * 10 - 10) : (openWins.size * 28 - 42);
  w.style.left = `calc(50% + ${off}px)`;
  w.innerHTML = `
    <div class="win__bar"><span>${meta ? meta.label : id}</span><button class="win__close" aria-label="关闭窗口">[x]</button></div>
    <div class="win__body"></div>`;
  document.body.appendChild(w);
  const body = w.querySelector(".win__body");
  (VIEWS[id] || renderAbout)(body);
  bindGoto(body);
  w.addEventListener("pointerdown", () => { w.style.zIndex = ++zTop; });   // 点窗口置顶
  w.querySelector(".win__close").addEventListener("click", () => {
    w.remove();
    openWins.delete(id);
    playPop();
  });
  makeDraggable(w, w.querySelector(".win__bar"));
  openWins.set(id, w);
  playPop();
}

/* ---------- 事件绑定 ---------- */
function bindNav(root) {
  root.querySelectorAll(".icon-nav__item").forEach(b => {
    b.addEventListener("click", () => openWindow(b.dataset.view));
  });
}
function bindGoto(root) {
  root.querySelectorAll("[data-goto]").forEach(b => {
    b.addEventListener("click", (e) => { e.preventDefault(); openWindow(b.dataset.goto); });
  });
}

/* 底部社交 */
$("#socials").innerHTML = SITE.socials.map(s => `
  <a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}">
    ${ICONS[s.icon] || ICONS.link}
  </a>`).join("");
$("#copyright").textContent = SITE.copyright;

/* ---------- 背景音乐：优先 assets/bgm.mp3，否则 WebAudio 合成轻快循环 ---------- */
const blob = document.getElementById("blob");
const notesBox = document.getElementById("blob-notes");
let bgmMode = "none";       // "file" | "synth" | "none"
let bgmAudio = null;
let synthTimer = null;
let noteTimer = null;
let stepIdx = 0;

const SCALE = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25]; // C 大调五声扩展

function synthNote(freq, t, dur, vol, type) {
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type || "triangle";
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(audioCtx.destination);
  o.start(t);
  o.stop(t + dur + 0.05);
}

function startSynth() {
  ensureCtx();
  const beat = 60 / 96 / 2;                 // 八分音符 @96bpm
  const melody = [0, 2, 4, 7, 4, 2, 5, 4, 2, 0, 2, 4, 3, 1, 0, 2];
  let next = audioCtx.currentTime + 0.1;
  synthTimer = setInterval(() => {
    while (next < audioCtx.currentTime + 0.5) {
      synthNote(SCALE[melody[stepIdx % melody.length]], next, beat * 0.9, 0.032);
      if (stepIdx % 8 === 0) {              // 低音铺底
        synthNote(SCALE[0] / 2, next, beat * 7, 0.018, "sine");
        synthNote(SCALE[4] / 2, next + beat * 4, beat * 6, 0.014, "sine");
      }
      next += beat;
      stepIdx++;
    }
  }, 200);
}
function stopSynth() { clearInterval(synthTimer); synthTimer = null; }

/* 团子唱歌：冒音符（原站：音符从身体左右两侧飘出） */
const NOTE_CHARS = ["♪", "♫", "♩", "♬"];
function spawnNote() {
  const s = document.createElement("span");
  s.className = "note";
  s.textContent = NOTE_CHARS[Math.floor(Math.random() * NOTE_CHARS.length)];
  const leftSide = Math.random() < 0.5;
  s.style.left = leftSide ? (0 + Math.random() * 14) + "%" : (80 + Math.random() * 16) + "%";
  s.style.top = (10 + Math.random() * 35) + "%";
  s.style.setProperty("--dx", (leftSide ? -1 : 1) * (8 + Math.random() * 16) + "px");
  s.style.fontSize = (12 + Math.random() * 7).toFixed(0) + "px";
  notesBox.appendChild(s);
  setTimeout(() => s.remove(), 2300);
}
function startSinging() {
  blob.classList.add("singing");
  spawnNote();
  noteTimer = setInterval(spawnNote, 550);
}
function stopSinging() {
  blob.classList.remove("singing");
  clearInterval(noteTimer);
  notesBox.innerHTML = "";
}

function tryFileBgm() {
  return new Promise((resolve) => {
    let done = false;
    const finish = (v) => { if (!done) { done = true; resolve(v); } };
    const guard = setTimeout(() => finish(null), 1500);
    try {
      const a = new Audio("assets/bgm.mp3");
      a.loop = true;
      a.volume = 0.35;
      a.addEventListener("canplaythrough", () => { clearTimeout(guard); finish(a); }, { once: true });
      a.addEventListener("error", () => { clearTimeout(guard); finish(null); }, { once: true });
      a.load();
    } catch (e) { clearTimeout(guard); finish(null); }
  });
}

async function startBgm() {
  if (bgmMode !== "none") return;
  const a = await tryFileBgm();
  if (a) {
    bgmAudio = a;
    bgmMode = "file";
    a.play().catch(() => {});
  } else if (ensureCtx()) {
    bgmMode = "synth";
    startSynth();
  } else {
    return; // 完全无音频环境
  }
  startSinging();
}
function stopBgm() {
  if (bgmMode === "file" && bgmAudio) bgmAudio.pause();
  if (bgmMode === "synth") stopSynth();
  bgmMode = "none";
  stopSinging();
}

/* ---------- 星星彩蛋：点击弹随机趣事 + 发光 + 窗口彩色描边 ---------- */
const FACTS = [
  "你知道吗？章鱼有三个心脏",
  "蜂蜜是几乎不会变质的食物",
  "海獭睡觉时会手牵手防止漂散",
  "香蕉在植物学上是浆果，草莓不是",
  "银河系估计有一两千亿颗恒星",
  "猫咪每天要睡 12 到 16 个小时",
  "今天也是适合写代码的一天",
  "眨一次眼的肌肉运动，比微笑省力得多",
];
const star = document.getElementById("star");
const bubble = document.getElementById("star-bubble");
const win = document.getElementById("win");

star.addEventListener("click", () => {
  bubble.textContent = FACTS[Math.floor(Math.random() * FACTS.length)];
  star.classList.remove("lit");
  void star.offsetWidth;                    // 重启动画
  star.classList.add("lit");
  win.classList.add("glow");
  playChime();
  clearTimeout(star._t1);
  clearTimeout(star._t2);
  star._t1 = setTimeout(() => star.classList.remove("lit"), 1300);
  star._t2 = setTimeout(() => win.classList.remove("glow"), 3600);
});

/* ---------- 主题切换：幕布转场（色布从上扫到下，盖满瞬间切主题） ---------- */
const wipe = document.getElementById("wipe");
let wiping = false;
$("#btn-theme").addEventListener("click", () => {
  if (wiping) return;
  wiping = true;
  wipe.classList.remove("run");
  void wipe.offsetWidth;                    // 重启动画
  wipe.classList.add("run");
  setTimeout(() => {                        // 幕布盖满时切换（对应 45% 关键帧）
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    try { localStorage.setItem("site-theme", next); } catch (e) {}
  }, 430);
  setTimeout(() => { wipe.classList.remove("run"); wiping = false; }, 980);
  playPop();
});
try {
  const saved = localStorage.getItem("site-theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
} catch (e) {}

/* ---------- 音效/BGM 切换 ---------- */
$("#btn-sound").addEventListener("click", () => {
  const muted = document.body.classList.toggle("muted");
  if (muted) stopBgm();
  else startBgm();
  playPop();
});

/* 浏览器自动播放限制：首次手势后自动开 BGM（默认不静音时） */
(function bindFirstGesture() {
  const kick = () => {
    if (!document.body.classList.contains("muted")) startBgm();
    window.removeEventListener("pointerdown", kick);
    window.removeEventListener("keydown", kick);
  };
  window.addEventListener("pointerdown", kick);
  window.addEventListener("keydown", kick);
})();

/* ---------- 夜间星空：随机撒一片会眨眼的星星 ---------- */
(function initStars() {
  const box = document.getElementById("stars");
  if (!box) return;
  const N = 96;
  let html = "";
  for (let i = 0; i < N; i++) {
    const x = (Math.random() * 100).toFixed(2);
    const y = (Math.random() * 62).toFixed(2);              // 集中在上半天空
    const s = (Math.random() * 1.8 + 1).toFixed(2);         // 1~2.8px
    const delay = (Math.random() * 4).toFixed(2);
    const dur = (Math.random() * 3 + 2.2).toFixed(2);
    const warm = Math.random() < 0.22 ? " star--warm" : ""; // 少量暖黄星
    html += `<i class="star${warm}" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;`
          + `animation-delay:${delay}s;animation-duration:${dur}s"></i>`;
  }
  box.innerHTML = html;
})();

/* 启动 */
renderHome(winBody);
// 首页主窗口不绑定拖动：固定在页面中央，只有点图标弹出的子窗口可拖
// （若以后想让主窗口也能拖，把下面这行注释放开即可）
// makeDraggable(win, win.querySelector(".win__bar"));
