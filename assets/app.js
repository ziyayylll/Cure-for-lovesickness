const zodiacData = {
  aries: {
    name: "白羊座",
    tone: "冲动派的理智补给",
    packages: [
      "倒计时 30 秒后再决定回不回消息，记住“冲动是恋爱脑的燃料”。",
      "用番茄钟专注自己的目标 25 分钟，刷新理智守护星。",
      "今晚联系一个支持你的朋友，分享一件自豪的小事。"
    ],
    mantra: "今日宇宙建议你先冲一杯冷静拿铁，再冲动。"
  },
  taurus: {
    name: "金牛座",
    tone: "慢热稳固能量",
    packages: [
      "列出三件和Ta无关的快乐，提醒自己生活里还有很多宝藏。",
      "给自己买一份小礼物，当作理智守护星送的奖赏。",
      "整理理财/学习计划，把注意力投入长期价值。"
    ],
    mantra: "你的价值远大于一段关系，宇宙希望你好好宠爱自己。"
  },
  gemini: {
    name: "双子座",
    tone: "脑内电台镇静剂",
    packages: [
      "把脑内小剧场写下来，挑出最搞笑的一段读给自己听。",
      "限制社交媒体刷屏时间 15 分钟，给灵魂降噪。",
      "挑一个新话题去探索，扩列你的社交银河。"
    ],
    mantra: "别让八百个念头同时抢话筒，理智台长需要发言权。"
  },
  cancer: {
    name: "巨蟹座",
    tone: "心软星人的防护罩",
    packages: [
      "把想说的话存进“月光瓶”，明早再打开。",
      "写一封给自己的情书，告诉自己值得被温柔以待。",
      "联系一个信任的朋友，安排一次线下或语音陪伴。"
    ],
    mantra: "先照顾好自己的潮汐，再考虑去疗愈别人。"
  },
  leo: {
    name: "狮子座",
    tone: "自信扩音器",
    packages: [
      "大声读出三句夸自己的话，让气场填满房间。",
      "列出今天完成的任务，给自己点一个赞。",
      "把期待Ta回应的注意力，转向一个自己的舞台。"
    ],
    mantra: "今日宇宙提醒：主角是你，别把 spotlight 借出去。"
  },
  virgo: {
    name: "处女座",
    tone: "完美主义的松绑计划",
    packages: [
      "把担心的细节写成待办清单，只保留最重要的三项。",
      "允许自己有 30 分钟随心所欲的“无效率时间”。",
      "练习一次深呼吸冥想，告诉大脑：不需要把所有人照顾好。"
    ],
    mantra: "宇宙也会有星云凌乱的一天，你可以暂时不完美。"
  },
  libra: {
    name: "天秤座",
    tone: "选择困难解除术",
    packages: [
      "给自己设定一个“今日最重要的我”优先级。",
      "写下三个“不为别人妥协的理由”。",
      "尝试独自去咖啡店或散步，练习与自己对话。"
    ],
    mantra: "把天秤的一端装满自信，另一端自然平衡。"
  },
  scorpio: {
    name: "天蝎座",
    tone: "深情守护的界限课",
    packages: [
      "把内心秘密写下来并上锁，只分享给值得的人。",
      "练习一次自我界限宣言：我的情绪由我负责。",
      "挑一个热爱的兴趣，投入 30 分钟全情体验。"
    ],
    mantra: "神秘的你值得把能量留给真正安全的星球。"
  },
  sagittarius: {
    name: "射手座",
    tone: "冒险家的定心丸",
    packages: [
      "规划一次只属于自己的小旅程或学习计划。",
      "把想找Ta的念头换成给自己写明信片。",
      "邀请朋友来一次脑洞之旅，拓展你的宇宙版图。"
    ],
    mantra: "自由需要方向，理智是你最酷的伙伴。"
  },
  capricorn: {
    name: "摩羯座",
    tone: "野心家的能量补给",
    packages: [
      "把感情焦虑转写成职业/成长目标的里程碑。",
      "今日任务：完成一个让未来的自己感谢的行动。",
      "安排身体运动，让理智守护星得到充电。"
    ],
    mantra: "当你把重心放在自己身上，宇宙都会为你鼓掌。"
  },
  aquarius: {
    name: "水瓶座",
    tone: "灵感浪潮导航",
    packages: [
      "记录一个突然冒出的创意，并立刻做一个小实验。",
      "和志同道合的人聊聊你的宇宙理想。",
      "将与Ta的情绪抽离成一个观察者写实剧本。"
    ],
    mantra: "你的灵魂太酷，不该被单一星球困住。"
  },
  pisces: {
    name: "双鱼座",
    tone: "感性海洋的救生圈",
    packages: [
      "把今日情绪画成颜色，告诉自己“我看见你了”。",
      "为自己准备一个柔软的仪式：泡脚、蜡烛或音乐。",
      "睡前写下三句清醒语录，明早醒来先读一遍。"
    ],
    mantra: "浪漫是礼物，但请先把安全感送给自己。"
  }
};

const reportText = document.getElementById("report-text");
const reportBox = document.getElementById("report");
const zodiacGrid = document.getElementById("zodiac-grid");
const supplyTitle = document.getElementById("supply-title");
const supplyContent = document.getElementById("supply-content");
const checklistContainer = document.getElementById("checklist");
const resetChecklistBtn = document.getElementById("reset-checklist");

const scannerForm = document.getElementById("scanner-form");
const STORAGE_KEY = "cure-for-lovesickness-checklist";

function renderZodiacButtons() {
  Object.entries(zodiacData).forEach(([key, data]) => {
    const button = document.createElement("button");
    button.className = "zodiac-btn";
    button.type = "button";
    button.dataset.zodiac = key;
    button.innerHTML = `<span>${data.name}</span><small>${data.tone}</small>`;
    button.addEventListener("click", () => {
      document.querySelectorAll(".zodiac-btn").forEach((btn) => btn.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      renderSupplyCard(key);
    });
    zodiacGrid.appendChild(button);
  });
}

function renderSupplyCard(zodiacKey) {
  const data = zodiacData[zodiacKey];
  if (!data) return;
  supplyTitle.textContent = `${data.name} · ${data.tone}`;
  supplyContent.innerHTML = `
    <p>${data.mantra}</p>
    <ul>
      ${data.packages.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function generateReport({ impulse, selfLove, moodSwing, zodiac }) {
  const data = zodiacData[zodiac];
  const impulseLevel = Number(impulse);
  const selfLoveLevel = Number(selfLove);
  const moodSwingLevel = Number(moodSwing);

  let tone = "";

  if (impulseLevel >= 7 && selfLoveLevel <= 4) {
    tone = "宇宙拉响橙色预警：理智守护星建议你先放下手机，做三个深呼吸。";
  } else if (moodSwingLevel >= 7) {
    tone = "情绪波动有点大，建议开启自爱力场，写下当前最真实的感受。";
  } else if (selfLoveLevel >= 7) {
    tone = "自爱能量在线！继续把注意力放在自己身上，宇宙为你鼓掌。";
  } else {
    tone = "状态稳定，小宇宙建议保持节奏，别忘了为自己安排快乐时光。";
  }

  reportText.innerHTML = `
    <strong>${data ? data.name : "神秘星座"}今日提示：</strong><br />
    ${tone}<br />
    ${data ? data.mantra : "继续关注自己的节奏，你就是答案。"}
  `;
  reportBox.classList.add("report--active");
}

function createChecklistItems() {
  const tasks = [
    "记录一次“想Ta VS 想我”的对话",
    "完成今日自我夸奖练习",
    "和清醒队友完成一次互助打卡"
  ];

  tasks.forEach((task, index) => {
    const item = document.createElement("label");
    item.className = "checklist__item";
    item.innerHTML = `
      <input type="checkbox" data-index="${index}" />
      <span>${task}</span>
    `;
    checklistContainer.appendChild(item);
  });
}

function loadChecklistState() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  checklistContainer.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    const { index } = checkbox.dataset;
    const checked = saved[index];
    checkbox.checked = Boolean(checked);
    toggleChecklistItem(checkbox.closest(".checklist__item"), checked);
  });
}

function saveChecklistState() {
  const state = {};
  checklistContainer.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    state[checkbox.dataset.index] = checkbox.checked;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function toggleChecklistItem(item, isCompleted) {
  if (!item) return;
  item.classList.toggle("completed", Boolean(isCompleted));
}

scannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(scannerForm);
  const payload = Object.fromEntries(formData.entries());
  generateReport(payload);
});

checklistContainer.addEventListener("change", (event) => {
  if (event.target.matches("input[type='checkbox']")) {
    toggleChecklistItem(event.target.closest(".checklist__item"), event.target.checked);
    saveChecklistState();
  }
});

resetChecklistBtn.addEventListener("click", () => {
  checklistContainer.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.checked = false;
    toggleChecklistItem(checkbox.closest(".checklist__item"), false);
  });
  localStorage.removeItem(STORAGE_KEY);
});

renderZodiacButtons();
createChecklistItems();
loadChecklistState();

// 预选默认星座
renderSupplyCard("aries");
document.querySelector(".zodiac-btn")?.setAttribute("aria-pressed", "true");
