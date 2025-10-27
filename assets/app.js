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

const loveTestForm = document.getElementById("love-test-form");
const loveTestResult = document.getElementById("love-test-result");
const dailyAlertText = document.getElementById("daily-alert-text");
const refreshAlertBtn = document.getElementById("refresh-alert");
const symptomInput = document.getElementById("symptom-input");
const symptomSubmit = document.getElementById("symptom-submit");
const symptomLog = document.getElementById("symptom-log");
const markClearDayBtn = document.getElementById("mark-clear-day");
const resetStreakBtn = document.getElementById("reset-streak");
const streakCount = document.getElementById("streak-count");
const streakProgress = document.getElementById("streak-progress");
const streakMessage = document.getElementById("streak-message");
const ideaAnswerField = document.getElementById("idea-answer");
const copyIdeaBtn = document.getElementById("copy-idea");

const LOVE_TEST_QUESTIONS = [
  {
    id: "q1",
    text: "当 Ta 消息延迟时，你的内心戏上演速度有多快？",
    options: [
      { value: 0, label: "无感，继续做自己的事" },
      { value: 1, label: "会想几种可能，但还能冷静" },
      { value: 2, label: "忍不住刷聊天框" },
      { value: 3, label: "脑内已经排练 10 集分手大戏" }
    ]
  },
  {
    id: "q2",
    text: "你每天花在关注 Ta 的时间和关注自己的时间比例？",
    options: [
      { value: 0, label: "2:8，自我优先" },
      { value: 1, label: "4:6，偶尔被带跑" },
      { value: 2, label: "7:3，总想黏住" },
      { value: 3, label: "9:1，几乎满脑子都是 Ta" }
    ]
  },
  {
    id: "q3",
    text: "朋友提醒你放慢脚步时，你的第一反应是？",
    options: [
      { value: 0, label: "谢谢提醒，会好好调整" },
      { value: 1, label: "嘴上答应，心里还是想见 Ta" },
      { value: 2, label: "辩解几句：他只是暂时忙" },
      { value: 3, label: "防御心爆棚：你们都不懂" }
    ]
  },
  {
    id: "q4",
    text: "睡前最后一件事通常是？",
    options: [
      { value: 0, label: "写今日感恩或计划" },
      { value: 1, label: "刷一会儿兴趣内容" },
      { value: 2, label: "等 Ta 回消息" },
      { value: 3, label: "反复看 Ta 的动态或聊天记录" }
    ]
  }
];

const LOVE_TEST_PROFILES = [
  {
    min: 0,
    max: 4,
    title: "理智星人",
    message: "大脑防护罩在线，偶尔的小情绪也能被你温柔接住。",
    prescription: "继续维持自我关照的节奏，让兴趣和成长填满宇宙。"
  },
  {
    min: 5,
    max: 7,
    title: "轻度恋爱脑",
    message: "偶尔被粉色泡泡带跑，但你很快能拉回专注力。",
    prescription: "给自己设定消息回复冷静期，练习在行动前倒数 30 秒。"
  },
  {
    min: 8,
    max: 10,
    title: "中度恋爱脑",
    message: "小剧场有点多，宇宙建议你强化自我陪伴与社交支持。",
    prescription: "每天完成一项清醒练习：自我表扬、约见朋友或兴趣探索。"
  },
  {
    min: 11,
    max: 12,
    title: "重度恋爱脑",
    message: "警报拉响！说明你正在把对方放在“宇宙中心”。",
    prescription: "立即执行“放下手机三步走”：深呼吸、写下当下感受、给自己安排一个理智奖励。"
  }
];

const DAILY_ALERTS = [
  "你以为是全体奔赴，其实是你单方面狂奔。",
  "他不是忙，只是不够喜欢。",
  "放下手机的第一秒，你就已经赢了。",
  "别把冷淡解读成考验，宇宙不安排这种剧本。",
  "你的心动值得被认真回应，而不是被已读忽略。",
  "把想说的话发给自己，清醒的你更懂得安抚自己。",
  "别再围着旧行星转圈，探索自己的新银河。",
  "被秒回的不是消息，是你的底线被看见。"
];

const DAILY_ALERT_STORAGE_KEY = "cure-for-lovesickness-daily-alert";
const SYMPTOM_STORAGE_KEY = "cure-for-lovesickness-symptoms";
const STREAK_KEY = "cure-for-lovesickness-streak";
const STREAK_LAST_DATE_KEY = "cure-for-lovesickness-streak-last";
const IDEA_TEMPLATE = `产品 Idea：恋爱脑检查中心 · 你的清醒自救指挥舱\n\n1. 核心描述：打造一个集恋爱脑指数测试、每日清醒提醒、症状记录与处方建议于一体的渐变宇宙风应用。用户可以通过兴趣问答生成专属恋爱脑等级，记录情绪瞬间并收到 AI 风格的处方提示，同时在清醒成就墙追踪连续自我关照天数。\n2. 关键 API：\n   - OpenAI GPT-4o mini API：用于生成陶白白式扎心语录、个性化处方文案。\n   - Google Calendar API / Notion API（二选一）：同步 21 天清醒计划与里程碑提醒，确保跨设备可追踪。`;

let symptomEntries = [];

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

function renderLoveTest() {
  if (!loveTestForm) return;
  loveTestForm.innerHTML = "";

  LOVE_TEST_QUESTIONS.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "love-test__question";

    const legend = document.createElement("legend");
    legend.textContent = `Q${index + 1}. ${question.text}`;
    fieldset.appendChild(legend);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "love-test__options";

    question.options.forEach((option) => {
      const optionId = `${question.id}-${option.value}`;
      const label = document.createElement("label");
      label.setAttribute("for", optionId);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = question.id;
      input.value = option.value;
      input.id = optionId;
      input.required = true;

      const span = document.createElement("span");
      span.textContent = option.label;

      label.appendChild(input);
      label.appendChild(span);
      optionsWrapper.appendChild(label);
    });

    fieldset.appendChild(optionsWrapper);
    loveTestForm.appendChild(fieldset);
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "cta";
  submitButton.textContent = "生成我的指数";
  loveTestForm.appendChild(submitButton);
}

function getLoveTestProfile(score) {
  return (
    LOVE_TEST_PROFILES.find((profile) => score >= profile.min && score <= profile.max) ||
    LOVE_TEST_PROFILES[LOVE_TEST_PROFILES.length - 1]
  );
}

function updateLoveTestResult(score) {
  if (!loveTestResult) return;
  const profile = getLoveTestProfile(score);

  loveTestResult.innerHTML = `
    <p><span class="love-test__score">${score}</span> 分 · ${profile.title}</p>
    <p>${profile.message}</p>
    <p><strong>宇宙处方：</strong>${profile.prescription}</p>
  `;
}

function handleLoveTestSubmit(event) {
  event.preventDefault();
  const formData = new FormData(loveTestForm);
  const totalScore = LOVE_TEST_QUESTIONS.reduce((sum, question) => {
    const value = Number(formData.get(question.id) || 0);
    return sum + value;
  }, 0);
  updateLoveTestResult(totalScore);
}

function selectDailyAlert(forceNew = false) {
  if (!dailyAlertText) return;
  const todayKey = new Date().toISOString().slice(0, 10);
  const stored = JSON.parse(localStorage.getItem(DAILY_ALERT_STORAGE_KEY) || "{}");
  const current = stored[todayKey];

  if (current && !forceNew) {
    dailyAlertText.textContent = current;
    return;
  }

  const previous = current || dailyAlertText.textContent;
  const pool = DAILY_ALERTS.filter((alert) => alert !== previous);
  const next = pool[Math.floor(Math.random() * pool.length)] || DAILY_ALERTS[0];
  stored[todayKey] = next;
  localStorage.setItem(DAILY_ALERT_STORAGE_KEY, JSON.stringify(stored));
  dailyAlertText.textContent = next;
}

function analyzeSymptom(text) {
  if (!text) {
    return "把情绪写出来就是第一步，继续记录你真实的想法。";
  }

  const strategies = [];
  if (/(秒回|回消息|等消息|等他)/.test(text)) {
    strategies.push("设置 30 分钟理智倒计时，把注意力转向一项个人目标。");
  }
  if (/(社交媒体|朋友圈|刷|动态)/.test(text)) {
    strategies.push("限时 15 分钟刷手机，剩下时间写下三件和 Ta 无关的快乐。");
  }
  if (/(梦|幻想|脑补|小剧场)/.test(text)) {
    strategies.push("把小剧场写成段子读给自己听，幽默感能中断过度沉浸。");
  }
  if (/(委屈|失落|哭|难受)/.test(text)) {
    strategies.push("联系一位“清醒队友”分享感受，让支持系统上线。");
  }
  if (/(想见|见面|约|想他|控制不住)/.test(text)) {
    strategies.push("把想见的冲动换成自我约会计划，安排一个只属于你的仪式感。");
  }

  const fallback = [
    "写下“我现在的感受是…我想要的是…”帮助情绪被看见。",
    "把手机放进抽屉 15 分钟，做三次深呼吸再决定下一步。",
    "完成清醒打卡：夸自己今天做得好的三件小事。"
  ];

  if (!strategies.length) {
    strategies.push(fallback[Math.floor(Math.random() * fallback.length)]);
  }

  return strategies.join("\n");
}

function saveSymptoms() {
  localStorage.setItem(SYMPTOM_STORAGE_KEY, JSON.stringify(symptomEntries));
}

function renderSymptoms() {
  if (!symptomLog) return;
  symptomLog.innerHTML = "";

  if (!symptomEntries.length) {
    const empty = document.createElement("li");
    empty.className = "symptom-log__empty";
    empty.textContent = "记录会显示在这里，给自己一次倾诉的空间。";
    symptomLog.appendChild(empty);
    return;
  }

  symptomEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "symptom-entry";
    item.dataset.id = entry.id;

    const textParagraph = document.createElement("p");
    textParagraph.className = "symptom-entry__text";
    textParagraph.textContent = entry.text;

    const prescription = document.createElement("p");
    prescription.className = "symptom-entry__rx";
    prescription.innerHTML = `<strong>宇宙处方：</strong>${entry.prescription.replace(/\n/g, "<br>")}`;

    const meta = document.createElement("div");
    meta.className = "symptom-entry__meta";
    const time = document.createElement("span");
    time.textContent = new Date(entry.timestamp).toLocaleString("zh-CN", {
      hour12: false
    });

    const actions = document.createElement("div");
    actions.className = "symptom-entry__actions";
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "symptom-entry__remove";
    removeBtn.dataset.id = entry.id;
    removeBtn.textContent = "移除这条记录";
    actions.appendChild(removeBtn);

    meta.appendChild(time);
    meta.appendChild(actions);

    item.appendChild(meta);
    item.appendChild(textParagraph);
    item.appendChild(prescription);
    symptomLog.appendChild(item);
  });
}

function loadSymptoms() {
  const stored = JSON.parse(localStorage.getItem(SYMPTOM_STORAGE_KEY) || "[]");
  symptomEntries = Array.isArray(stored) ? stored : [];
  renderSymptoms();
}

function updateStreakUI(count, messageOverride) {
  if (!streakCount || !streakProgress || !streakMessage) return;
  streakCount.textContent = count;
  const progress = Math.min(count / 21, 1) * 100;
  streakProgress.style.width = `${progress}%`;

  const defaultMessage = (() => {
    if (!count) return "点击“我今天很清醒”开始打卡。";
    if (count < 3) return "觉察之芽正在发芽，坚持写下你的情绪观察。";
    if (count < 7) return "清醒能量在攀升，快接近自洽月光里程碑了！";
    if (count < 21) return "保持节奏，距离 21 天清醒飞行员只差最后冲刺。";
    return "你已经成为宇宙级清醒飞行员，继续照顾好自己！";
  })();

  streakMessage.textContent = messageOverride || defaultMessage;
}

function loadStreak() {
  const count = Number(localStorage.getItem(STREAK_KEY)) || 0;
  updateStreakUI(count);
}

function markClearDay() {
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  const lastDate = localStorage.getItem(STREAK_LAST_DATE_KEY);
  let count = Number(localStorage.getItem(STREAK_KEY)) || 0;

  if (lastDate === todayKey) {
    updateStreakUI(count, "今天已经打卡过啦，去奖励自己一杯清醒拿铁！");
    return;
  }

  if (lastDate) {
    const diff = Math.floor((today - new Date(lastDate)) / (1000 * 60 * 60 * 24));
    if (diff === 1) {
      count += 1;
    } else {
      count = 1;
    }
  } else {
    count = 1;
  }

  localStorage.setItem(STREAK_KEY, count);
  localStorage.setItem(STREAK_LAST_DATE_KEY, todayKey);

  let message = "清醒力+1，保持把注意力放在自己身上！";
  if (count === 1) message = "第一天就勇敢选择了自己，继续走下去！";
  if (count === 3) message = "觉察之芽达成！奖励自己一场独处仪式。";
  if (count === 7) message = "自洽月光亮起，清醒状态稳步提升。";
  if (count === 21) message = "恭喜成为清醒飞行员，恋爱脑再也追不上你！";

  updateStreakUI(count, message);
}

function resetStreak() {
  localStorage.removeItem(STREAK_KEY);
  localStorage.removeItem(STREAK_LAST_DATE_KEY);
  updateStreakUI(0, "记录已重置，随时可以重新起飞。");
}

function populateIdeaTemplate() {
  if (!ideaAnswerField) return;
  ideaAnswerField.value = IDEA_TEMPLATE;
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

loveTestForm?.addEventListener("submit", handleLoveTestSubmit);

refreshAlertBtn?.addEventListener("click", () => {
  selectDailyAlert(true);
});

symptomSubmit?.addEventListener("click", () => {
  const value = symptomInput?.value.trim();
  if (!value) {
    if (symptomInput) {
      symptomInput.focus();
    }
    return;
  }

  const entry = {
    id: Date.now(),
    text: value,
    prescription: analyzeSymptom(value),
    timestamp: new Date().toISOString()
  };

  symptomEntries.unshift(entry);
  if (symptomEntries.length > 20) {
    symptomEntries = symptomEntries.slice(0, 20);
  }
  saveSymptoms();
  renderSymptoms();
  if (symptomInput) {
    symptomInput.value = "";
  }
});

symptomLog?.addEventListener("click", (event) => {
  const button = event.target.closest(".symptom-entry__remove");
  if (!button) return;
  const { id } = button.dataset;
  symptomEntries = symptomEntries.filter((entry) => String(entry.id) !== id);
  saveSymptoms();
  renderSymptoms();
});

markClearDayBtn?.addEventListener("click", markClearDay);
resetStreakBtn?.addEventListener("click", resetStreak);

copyIdeaBtn?.addEventListener("click", async () => {
  if (!ideaAnswerField) return;
  const originalText = copyIdeaBtn.textContent;
  try {
    await navigator.clipboard.writeText(ideaAnswerField.value);
    copyIdeaBtn.textContent = "已复制到剪贴板";
  } catch (error) {
    copyIdeaBtn.textContent = "复制失败，请手动复制";
  }

  setTimeout(() => {
    copyIdeaBtn.textContent = originalText;
  }, 2000);
});

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

renderLoveTest();
selectDailyAlert();
loadSymptoms();
loadStreak();
populateIdeaTemplate();

renderZodiacButtons();
createChecklistItems();
loadChecklistState();

// 预选默认星座
renderSupplyCard("aries");
document.querySelector(".zodiac-btn")?.setAttribute("aria-pressed", "true");
