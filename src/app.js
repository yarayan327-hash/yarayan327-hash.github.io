const isDevAssetPreview = new URLSearchParams(window.location.search).get("debug") === "assets";

const assets = {
  backgrounds: {
    welcome: "/assets/backgrounds/desert-adventure.png",
    learning: "/assets/backgrounds/desert-learning.png",
    oasis: "/assets/backgrounds/oasis.png",
    final: "/assets/backgrounds/final-oasis.png",
  },
  objects: {
    sign: "/assets/objects/sign-arrow.png",
    mystery: "/assets/objects/mystery-card.png",
    chest: "/assets/objects/treasure-chest.png",
  },
  rewards: {
    trophy: "/assets/rewards/trophy-large.png",
  },
  characters: {
    neutral: "/assets/characters/camel-neutral.png",
    happy: "/assets/characters/camel-happy.png",
    thinking: "/assets/characters/camel-thinking.png",
    walking: "/assets/characters/camel-walking.png",
    hop: "/assets/characters/camel-hop.png",
    confused: "/assets/characters/camel-confused.png",
    celebrate: "/assets/characters/camel-celebrate.png",
    pointing: "/assets/characters/camel-pointing.png",
  },
};

const camelStateFiles = {
  neutral: "camel-neutral",
  happy: "camel-happy",
  thinking: "camel-thinking",
  walking: "camel-walking",
  hop: "camel-hop",
  confused: "camel-confused",
  celebrate: "camel-celebrate",
  pointing: "camel-pointing",
};

const missingCamelStates = Object.keys(assets.characters).filter((key) => !assets.characters[key]);
if (missingCamelStates.length) {
  console.warn("Missing supplied camel assets:", missingCamelStates.map((key) => camelStateFiles[key]));
}

const translations = {
  ar: {
    dir: "rtl", mission: "المهمة", diagnostic: "تشخيص سريع", discovery: "نكتشف", guided: "مثال", practice: "تدريب", mystery: "بطاقة السر", independent: "تحدي", exit: "خروج", result: "النتيجة",
    numberLine: "خط الأعداد", ready: "جاهز للمغامرة؟", helpCamel: "ساعد الجمل الصغير يوصل إلى الواحة!", start: "ابدأ", previous: "السابق", next: "التالي", restart: "إعادة", step: "خطوة", hint: "تلميح",
    findFive: "وين الرقم ٥؟", startFive: "نبدأ من ٥.", walkThree: "خلينا نمشي ٣ خطوات.", howMuch: "كم يصير؟", moveFour: "حرّك الجمل ٤ خطوات.", whereStarted: "من وين بدأ الجمل؟", solveAlone: "حلها لوحدك.", reachedOasis: "وصلنا إلى الواحة!",
    skillSummary: "ملخص المهارة", excellent: "ممتاز", morePractice: "يحتاج إلى تدريب أكثر", needsSupport: "يحتاج إلى دعم", correctFive: "صحيح! هذا هو الرقم ٥.", closeTry: "قريب. شوف الأرقام اللي حوله وجرب مرة ثانية.",
    stepCount: "خطوة {n}.", reachedEight: "وصل الجمل إلى ٨ بعد ٣ خطوات.", reachedAnswer: "{equation}. وصلنا إلى {answer}.", chooseLanding: "اختر رقم الوصول.", correctLanding: "صحيح. هبط الجمل على الرقم المناسب.", oneMoreStep: "باقي خطوة واحدة.", extraJump: "قفزة زيادة! نرجع خطوة.", tryAgain: "جرّب مرة ثانية بهدوء.", revealLine: "خلينا نكشف خط الأعداد ونعدّ مع بعض.",
    guide: "دليل المعلم", sayReady: "قل: جاهز نبدأ مغامرة خط الأعداد؟", waitReady: "اضغط ابدأ عندما يكون الطالب جاهز.", sayFindFive: "قل: وين الرقم خمسة؟", waitFindFive: "انتظر ضغطة الطالب على مكان الرقم.", sayStartFive: "قل: نبدأ من ٥. خلينا نمشي ٣ خطوات.", waitOneStep: "كل ضغطة تعني خطوة واحدة.", sayGuided: "قل: ابدأ من ٥، وحرّك ٣ خطوات.", waitGuided: "بعد الخطوة الثالثة اسأل: وين وصل؟", sayPractice: "قل: جرّب بنفسك. عد الخطوات بصوتك.", waitPractice: "إذا توقف عند ٩، وضّح أن بقيت خطوة.", sayMystery: "قل: من وين بدأ الجمل؟", waitMystery: "خلي أثر الحركة ظاهر: ٧، ٨، ٩، ١٠.", sayIndependent: "قل: جرّب بدون مساعدة.", waitIndependent: "استخدم التلميح فقط إذا احتاج الطالب.", sayExit: "قل: حلها لوحدك.", waitExit: "لا تعط تلميح تلقائي.", sayResult: "قل: ممتاز، خلينا نشوف مهارة اليوم.", waitResult: "راجع الملخص مع الطالب أو ولي الأمر.",
    recognition: "تمييز الرقم", startPoint: "نقطة البداية", directionMove: "اتجاه الحركة", stepCounting: "عد الخطوات", independentAnswer: "الحل المستقل", hintUsed: "استخدم تلميح", exitAttempts: "محاولات اختبار الخروج", exitTime: "وقت اختبار الخروج", done: "تم", review: "يحتاج مراجعة", clear: "واضحة", forward: "للأمام", correct: "صحيح", incomplete: "غير مكتمل", yes: "نعم", no: "لا", seconds: "ث",
  },
  en: {
    dir: "ltr", mission: "Mission", diagnostic: "Quick Check", discovery: "Discover", guided: "Example", practice: "Practice", mystery: "Mystery Card", independent: "Challenge", exit: "Exit Check", result: "Result",
    numberLine: "Number Line", ready: "Ready for the adventure?", helpCamel: "Help the little camel reach the oasis!", start: "Start", previous: "Previous", next: "Next", restart: "Restart", step: "Step", hint: "Hint",
    findFive: "Where is number 5?", startFive: "We start from 5.", walkThree: "Let's walk 3 steps.", howMuch: "What is the answer?", moveFour: "Move the camel 4 steps.", whereStarted: "Where did the camel start?", solveAlone: "Solve it on your own.", reachedOasis: "We reached the oasis!",
    skillSummary: "Skill Summary", excellent: "Excellent", morePractice: "Needs more practice", needsSupport: "Needs support", correctFive: "Correct! This is number 5.", closeTry: "Close. Look at the nearby numbers and try again.",
    stepCount: "Step {n}.", reachedEight: "The camel reached 8 after 3 steps.", reachedAnswer: "{equation}. We reached {answer}.", chooseLanding: "Choose the landing number.", correctLanding: "Correct. The camel landed on the right number.", oneMoreStep: "One step is still left.", extraJump: "One extra jump. Let's go back.", tryAgain: "Try again calmly.", revealLine: "Let's show the number line and count together.",
    guide: "Teacher Guide", sayReady: "Say: Ready to start the number-line adventure?", waitReady: "Press Start when the student is ready.", sayFindFive: "Say: Where is number five?", waitFindFive: "Wait for the student to tap the number position.", sayStartFive: "Say: Start at 5. Let's walk 3 steps.", waitOneStep: "Each tap is one step.", sayGuided: "Say: Start at 5 and move 3 steps.", waitGuided: "After the third step ask: Where did it land?", sayPractice: "Say: Try it yourself. Count the steps out loud.", waitPractice: "If the student stops at 9, show that one step remains.", sayMystery: "Say: Where did the camel start?", waitMystery: "Keep the trail visible: 7, 8, 9, 10.", sayIndependent: "Say: Try without help.", waitIndependent: "Use the hint only if the student needs it.", sayExit: "Say: Solve it on your own.", waitExit: "Do not give an automatic hint.", sayResult: "Say: Excellent, let's review today's skill.", waitResult: "Review the summary with the student or parent.",
    recognition: "Number recognition", startPoint: "Starting point", directionMove: "Movement direction", stepCounting: "Step counting", independentAnswer: "Independent answer", hintUsed: "Hint used", exitAttempts: "Exit attempts", exitTime: "Exit time", done: "Done", review: "Needs review", clear: "Clear", forward: "Forward", correct: "Correct", incomplete: "Incomplete", yes: "Yes", no: "No", seconds: "s",
  },
  zh: {
    dir: "ltr", mission: "任务", diagnostic: "快速检查", discovery: "发现", guided: "例题", practice: "练习", mystery: "神秘卡片", independent: "挑战", exit: "出口检测", result: "结果",
    numberLine: "数轴", ready: "准备好开始冒险了吗？", helpCamel: "帮助小骆驼到达绿洲！", start: "开始", previous: "上一步", next: "下一步", restart: "重新开始", step: "前进一步", hint: "提示",
    findFive: "数字5在哪里？", startFive: "我们从5开始。", walkThree: "我们走3步。", howMuch: "答案是多少？", moveFour: "让骆驼走4步。", whereStarted: "骆驼从哪里开始？", solveAlone: "自己试试看。", reachedOasis: "我们到达绿洲了！",
    skillSummary: "能力总结", excellent: "优秀", morePractice: "需要多练习", needsSupport: "需要支持", correctFive: "正确！这是数字5。", closeTry: "很接近。看看旁边的数字，再试一次。",
    stepCount: "第{n}步。", reachedEight: "骆驼走3步后到达8。", reachedAnswer: "{equation}。我们到达{answer}。", chooseLanding: "选择到达的数字。", correctLanding: "正确。骆驼落在了正确的数字上。", oneMoreStep: "还差一步。", extraJump: "多跳了一步。我们退回来。", tryAgain: "慢慢再试一次。", revealLine: "我们打开数轴一起数。",
    guide: "教师提示", sayReady: "老师说：准备开始数轴冒险了吗？", waitReady: "学生准备好后点击开始。", sayFindFive: "老师说：数字5在哪里？", waitFindFive: "等待学生点击数字位置。", sayStartFive: "老师说：从5开始，走3步。", waitOneStep: "每点击一次就是一步。", sayGuided: "老师说：从5开始，向前走3步。", waitGuided: "第三步后问：落到哪里了？", sayPractice: "老师说：自己试试，大声数步数。", waitPractice: "如果学生停在9，提示还差一步。", sayMystery: "老师说：骆驼从哪里开始？", waitMystery: "保留路径：7、8、9、10。", sayIndependent: "老师说：先不看提示，自己试试。", waitIndependent: "只有学生需要时才使用提示。", sayExit: "老师说：自己完成这题。", waitExit: "不要自动给提示。", sayResult: "老师说：很好，我们看看今天的技能。", waitResult: "和学生或家长一起看总结。",
    recognition: "数字识别", startPoint: "起点", directionMove: "移动方向", stepCounting: "数步数", independentAnswer: "独立作答", hintUsed: "使用提示", exitAttempts: "出口检测尝试", exitTime: "出口检测用时", done: "完成", review: "需要复习", clear: "清楚", forward: "向前", correct: "正确", incomplete: "未完成", yes: "是", no: "否", seconds: "秒",
  },
};

const lesson = [
  { id: "welcome", label: "mission", type: "welcome", bg: "welcome", camel: "neutral", title: "ready", prompt: "helpCamel", cue: ["sayReady", "waitReady"] },
  { id: "diagnostic", label: "diagnostic", type: "diagnostic", bg: "learning", camel: "pointing", title: "findFive", hidden: [4, 5, 6], target: 5, cue: ["sayFindFive", "waitFindFive"] },
  { id: "discovery", label: "discovery", type: "movement", mode: "discovery", bg: "learning", camel: "neutral", title: "startFive", prompt: "walkThree", start: 5, moves: 3, answer: 8, cue: ["sayStartFive", "waitOneStep"] },
  { id: "guided", label: "guided", type: "movement", mode: "guided", bg: "learning", camel: "pointing", equation: "5 + 3 = ?", title: "howMuch", start: 5, moves: 3, answer: 8, cue: ["sayGuided", "waitGuided"] },
  { id: "practice", label: "practice", type: "practice", bg: "learning", camel: "neutral", equation: "6 + 4 = ?", title: "moveFour", start: 6, moves: 4, answer: 10, choices: [9, 10, 11], cue: ["sayPractice", "waitPractice"] },
  { id: "mystery", label: "mystery", type: "mystery", bg: "oasis", camel: "thinking", equation: "? + 3 = 10", title: "whereStarted", start: 7, moves: 3, answer: 7, choices: [6, 7, 8], cue: ["sayMystery", "waitMystery"] },
  { id: "independent", label: "independent", type: "independent", bg: "oasis", camel: "thinking", equation: "4 + 2 = ?", title: "solveAlone", start: 4, moves: 2, answer: 6, choices: [5, 6, 7], cue: ["sayIndependent", "waitIndependent"] },
  { id: "exit", label: "exit", type: "exit", bg: "learning", camel: "neutral", equation: "8 + 3 = ?", title: "solveAlone", start: 8, moves: 3, answer: 11, choices: [10, 11, 12], cue: ["sayExit", "waitExit"] },
  { id: "result", label: "result", type: "result", bg: "final", camel: "celebrate", title: "reachedOasis", cue: ["sayResult", "waitResult"] },
];

const state = { lang: "ar", screen: 0, currentPosition: null, previousPosition: null, stepsTaken: 0, feedback: null, characterMood: null, rewardKey: 0, rewardStrength: null, selectedAnswer: null, showHint: false, completed: { welcome: false }, stats: {}, exitStart: null };
const app = document.querySelector("#app");

function tr(key, vars = {}) {
  let text = translations[state.lang][key] ?? translations.ar[key] ?? key;
  Object.entries(vars).forEach(([name, value]) => text = text.replaceAll(`{${name}}`, value));
  return formatDisplayText(text);
}

function formatDisplayText(value) {
  const text = String(value);
  if (state.lang !== "ar") return text;
  return text
    .replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])
    .replace(/\?/g, "؟");
}

function formatNumber(value) {
  return formatDisplayText(value);
}

function unknownAnswer() {
  return state.lang === "ar" ? "؟" : "?";
}

function equation(text, answer) {
  const display = formatDisplayText(answer ? text.replace("?", answer) : text);
  return `<div class="equation" aria-label="${display}">${display.split(" ").map((part) => `<span>${part}</span>`).join("")}</div>`;
}

function markAttempt(id, correct, extra = {}) {
  if (!state.stats[id]) state.stats[id] = { attempts: 0, correct: false, hintUsed: false, response: null, completed: false };
  state.stats[id].attempts += 1;
  state.stats[id].correct = correct;
  state.stats[id].response = extra.response ?? state.stats[id].response;
  state.stats[id].completed = correct || state.stats[id].completed;
  Object.assign(state.stats[id], extra);
}

function setFeedback(kind, text) { state.feedback = { kind, text }; }

function setCharacterMood(mood, duration = 1250) {
  state.characterMood = mood;
  window.clearTimeout(state.moodTimer);
  state.moodTimer = window.setTimeout(() => { state.characterMood = null; render(); }, duration);
}

function burst(strength = "small") {
  state.rewardStrength = strength;
  state.rewardKey += 1;
  window.clearTimeout(state.rewardTimer);
  window.setTimeout(render, 0);
  state.rewardTimer = window.setTimeout(() => { state.rewardStrength = null; render(); }, strength === "final" ? 1300 : 950);
}

function resetScreenProgress(screen) {
  state.currentPosition = screen.start ?? null;
  state.previousPosition = null;
  state.stepsTaken = 0;
  state.feedback = null;
  state.characterMood = null;
  state.rewardStrength = null;
  state.selectedAnswer = null;
  state.showHint = false;
  if (screen.id === "exit") state.exitStart = Date.now();
}

function goTo(index) {
  state.screen = Math.max(0, Math.min(index, lesson.length - 1));
  resetScreenProgress(lesson[state.screen]);
  render();
  if (lesson[state.screen].type === "result") window.setTimeout(() => burst("final"), 280);
}

function completeCurrent() { state.completed[lesson[state.screen].id] = true; }
function canAdvance(screen) { return screen.type === "result" || state.completed[screen.id]; }

function render() {
  if (isDevAssetPreview) return renderAssetDebug();
  const screen = lesson[state.screen];
  document.documentElement.lang = state.lang;
  document.documentElement.dir = translations[state.lang].dir;
  app.innerHTML = `
    <section class="lesson-shell" style="--bg: url('${assets.backgrounds[screen.bg]}')" data-screen="${screen.id}" dir="${translations[state.lang].dir}">
      <div class="scene-bg"></div>
      <div class="top-bar">${ProgressBar()}<div class="screen-label">${tr(screen.label)}</div>${LanguageSwitcher()}</div>
      ${renderScreen(screen)}
      ${FeedbackLayer()}${RewardLayer()}${TeacherCue(screen.cue)}
      <div class="nav-controls">
        <button class="secondary-btn" data-action="prev" ${state.screen === 0 ? "disabled" : ""}>${tr("previous")}</button>
        <button class="primary-btn" data-action="next" ${canAdvance(screen) ? "" : "disabled"}>${state.screen === lesson.length - 1 ? tr("restart") : tr("next")}</button>
      </div>
    </section>`;
  bindEvents(screen);
}

function LanguageSwitcher() {
  return `<div class="language-switcher" aria-label="Language">${["ar", "en", "zh"].map((lang) => `<button class="${state.lang === lang ? "active" : ""}" data-lang="${lang}">${lang === "ar" ? "العربية" : lang === "en" ? "EN" : "中文"}</button>`).join("")}</div>`;
}

function ProgressBar() {
  return `<div class="progress" aria-label="${tr("numberLine")}">${lesson.map((item, index) => `<span class="progress-dot ${index < state.screen ? "done" : ""} ${index === state.screen ? "current" : ""}" title="${tr(item.label)}"></span>`).join("")}</div>`;
}

function CamelCharacter(stateName, style = "", motion = "") {
  const requested = state.characterMood ?? stateName;
  const src = assets.characters[requested];
  if (!src) return "";
  return `<div class="character-anchor character-motion-${motion} character-state-${requested}" style="${style}"><img class="camel-image" src="${src}" alt="${tr("helpCamel")}" /></div>`;
}

function TeacherCue(cueKeys) {
  return `<details class="teacher-cue"><summary>${tr("guide")}</summary><div class="teacher-cue-body"><div>${tr(cueKeys[0])}</div><div>${tr(cueKeys[1])}</div></div></details>`;
}

function QuestionCard(screen, extras = "") {
  return `<div class="question-card"><div><p class="kicker">${tr(screen.label)}</p><h2>${tr(screen.title)}</h2></div>${screen.equation ? equation(screen.equation, state.completed[screen.id] ? screen.answer : null) : `<p class="student-prompt">${screen.prompt ? tr(screen.prompt) : ""}</p>`}${extras}</div>`;
}

function FeedbackLayer() { return state.feedback ? `<div class="feedback ${state.feedback.kind}">${state.feedback.text}</div>` : ""; }

function RewardLayer() {
  if (!state.rewardStrength) return "";
  const count = state.rewardStrength === "final" ? 20 : state.rewardStrength === "stage" ? 12 : 7;
  return `<div class="reward-layer reward-${state.rewardStrength}" data-reward-key="${state.rewardKey}">${Array.from({ length: count }, (_, i) => `<span class="reward-particle particle-${i % 8}">${i % 3 === 0 ? "★" : ""}</span>`).join("")}</div>`;
}

function HintLayer(text) { return state.showHint ? `<div class="hint-layer">${text}</div>` : ""; }

function NumberLine({ min = 1, max = 12, start, current, hidden = [], clickable = false, activeNumbers = [], nearNumbers = [], trailStart, trailEnd, badges = [] }) {
  const count = max - min;
  const position = (num) => `${((num - min) / count) * 100}%`;
  const camelNum = current ?? start ?? min;
  const fromNum = state.previousPosition ?? camelNum;
  const movementState = state.stepsTaken > 0 && !state.completed[lesson[state.screen].id] ? "hop" : lesson[state.screen].camel;
  const motion = state.stepsTaken > 0 && !state.completed[lesson[state.screen].id] ? "hop" : movementState;
  const trailLeft = trailStart && trailEnd ? position(Math.min(trailStart, trailEnd)) : "0%";
  const trailWidth = trailStart && trailEnd ? `${(Math.abs(trailEnd - trailStart) / count) * 100}%` : "0%";
  const ticks = [];
  for (let n = min; n <= max; n += 1) {
    const classes = ["tick", hidden.includes(n) ? "hidden-number" : "", clickable ? "clickable" : "", activeNumbers.includes(n) ? "active" : "", current === n ? "landed" : "", nearNumbers.includes(n) ? "near" : ""].filter(Boolean).join(" ");
    ticks.push(`<button class="${classes}" style="left:${position(n)}" data-number="${n}" aria-label="${formatNumber(n)}"><span class="number-label">${formatNumber(n)}</span></button>`);
  }
  return `<div class="numberline-wrap"><div class="number-line"><div class="line-rail"></div><div class="step-trail" style="--trail-left:${trailLeft}; --trail-width:${trailWidth};"></div>${ticks.join("")}${badges.map((num, index) => `<span class="step-arc" style="--arc-left:${position(num - 1)}; --arc-width:${100 / count}%;"></span><span class="movement-badge" style="left:${position(num)}">${formatNumber(index + 1)}</span>`).join("")}<span class="landing-pop" style="left:${position(camelNum)}"></span>${CamelCharacter(movementState, `left:${position(camelNum)}; --from-left:${position(fromNum)}; --to-left:${position(camelNum)}; bottom:58px; --base-y:0%; --hop-lift:96px; --camel-size:var(--character-numberline);`, motion)}</div></div>`;
}

function renderScreen(screen) {
  if (screen.type === "welcome") {
    return `<div class="lesson-content welcome-grid"><div class="journey-art"><img class="asset sign" src="${assets.objects.sign}" alt="" />${CamelCharacter("neutral", "left:92%; --from-left:76%; --to-left:92%; bottom:-7%; --camel-size:clamp(156px, 25vh, 216px);", "idle")}</div><div class="mission-panel"><p class="kicker">${tr("numberLine")}</p><h1>${tr(screen.title)}</h1><p class="student-prompt">${tr(screen.prompt)}</p><button class="primary-btn" data-action="start">${tr("start")}</button></div></div>`;
  }
  if (screen.type === "diagnostic") {
    const correct = state.completed[screen.id];
    return `<div class="lesson-content activity-layout">${QuestionCard(screen)}${NumberLine({ min: 1, max: 10, current: correct ? screen.target : 3, hidden: screen.hidden, clickable: true, activeNumbers: correct ? [screen.target] : [], nearNumbers: state.feedback?.kind === "try" ? [4, 6] : [] })}<div class="controls-row"></div></div>`;
  }
  if (screen.type === "movement") {
    const landed = state.currentPosition ?? screen.start;
    const done = state.stepsTaken >= screen.moves;
    return `<div class="lesson-content activity-layout">${QuestionCard(screen)}${NumberLine({ min: 1, max: 12, start: screen.start, current: landed, activeNumbers: [screen.start], trailStart: screen.start, trailEnd: landed, badges: Array.from({ length: state.stepsTaken }, (_, i) => screen.start + i + 1) })}<div class="controls-row"><button class="move-btn" data-action="move-step" ${done ? "disabled" : ""}>${tr("step")}</button><span class="answer-slot">${done ? formatNumber(screen.answer) : `${formatNumber(state.stepsTaken)} / ${formatNumber(screen.moves)}`}</span></div></div>`;
  }
  if (screen.type === "practice") {
    const landed = state.currentPosition ?? screen.start;
    const canChoose = state.stepsTaken >= 3;
    const canMove = state.stepsTaken < screen.moves + 1;
    return `<div class="lesson-content activity-layout">${QuestionCard(screen, `<div class="answer-slot" data-answer-slot>${state.selectedAnswer ? formatNumber(state.selectedAnswer) : unknownAnswer()}</div>`)}${NumberLine({ min: 1, max: 12, start: screen.start, current: landed, activeNumbers: [screen.start], trailStart: screen.start, trailEnd: landed, badges: Array.from({ length: state.stepsTaken }, (_, i) => screen.start + i + 1) })}<div class="controls-row"><button class="move-btn" data-action="move-step" ${canMove ? "" : "disabled"}>${tr("step")}</button>${AnswerCards(screen.choices, screen.answer, canChoose)}</div></div>${HintLayer(state.stepsTaken === 3 ? tr("oneMoreStep") : tr("extraJump"))}`;
  }
  if (screen.type === "mystery") {
    return `<div class="lesson-content activity-layout">${QuestionCard(screen, `<img class="mystery-card ${state.completed[screen.id] ? "reveal" : ""}" src="${assets.objects.mystery}" alt="" />`)}${NumberLine({ min: 5, max: 12, start: screen.start, current: 10, hidden: state.completed[screen.id] ? [] : [screen.start], activeNumbers: [10], trailStart: screen.start, trailEnd: 10, badges: [8, 9, 10] })}<div class="controls-row"><div class="answer-slot" data-answer-slot>${state.selectedAnswer ? formatNumber(state.selectedAnswer) : unknownAnswer()}</div>${AnswerCards(screen.choices, screen.answer, true)}</div></div>`;
  }
  if (screen.type === "independent" || screen.type === "exit") {
    const landed = state.currentPosition ?? screen.start;
    const showLine = screen.type === "exit" || state.showHint || state.stepsTaken > 0;
    const movedEnough = state.stepsTaken >= screen.moves;
    const standalone = `<div class="numberline-wrap character-only-zone">${CamelCharacter("thinking", "left:50%; --from-left:50%; --to-left:50%; bottom:10%; --base-y:0%; --camel-size:var(--character-normal);", "thinking")}</div>`;
    return `<div class="lesson-content activity-layout">${QuestionCard(screen, `<div class="answer-slot" data-answer-slot>${state.selectedAnswer ? formatNumber(state.selectedAnswer) : unknownAnswer()}</div>`)}${showLine ? NumberLine({ min: 1, max: 12, start: screen.start, current: landed, activeNumbers: [screen.start], trailStart: screen.start, trailEnd: landed, badges: Array.from({ length: state.stepsTaken }, (_, i) => screen.start + i + 1) }) : standalone}<div class="controls-row"><button class="move-btn" data-action="move-step" ${movedEnough ? "disabled" : ""}>${tr("step")}</button>${screen.type === "independent" ? `<button class="hint-btn" data-action="hint">${tr("hint")}</button>` : ""}${AnswerCards(screen.choices, screen.answer, movedEnough)}</div></div>${HintLayer(tr("revealLine"))}`;
  }
  return `<div class="lesson-content result-layout"><div class="final-trophy-wrap"><img class="final-trophy" src="${assets.rewards.trophy}" alt="" /></div><div class="final-body"><div class="final-camel">${CamelCharacter("celebrate", "left:50%; --from-left:50%; --to-left:50%; bottom:0%; --base-y:0%; --camel-size:var(--character-celebration);", "celebrate")}</div><div class="result-summary-zone">${ResultPanel(screen)}</div></div></div>`;
}

function AnswerCards(choices, answer, enabled) {
  return choices.map((choice) => {
    const selected = state.selectedAnswer === choice;
    const cls = ["choice-card", selected ? "selected" : "", state.completed[lesson[state.screen].id] && choice === answer ? "correct" : ""].filter(Boolean).join(" ");
    return `<button class="${cls}" data-answer="${choice}" draggable="${enabled ? "true" : "false"}" ${enabled ? "" : "disabled"}>${formatNumber(choice)}</button>`;
  }).join("");
}

function ResultPanel(screen) {
  const get = (id) => state.stats[id] ?? {};
  const exit = get("exit");
  const hintsUsed = Object.values(state.stats).filter((item) => item.hintUsed).length;
  const correctCount = ["diagnostic", "guided", "practice", "mystery", "independent", "exit"].filter((id) => get(id).correct).length;
  const category = correctCount >= 5 && hintsUsed === 0 ? tr("excellent") : correctCount >= 4 ? tr("morePractice") : tr("needsSupport");
  return `<div class="result-card"><p class="kicker">${tr("skillSummary")}</p><h1>${category}</h1><p class="student-prompt">${tr(screen.title)}</p><ul class="result-list"><li><span>${tr("recognition")}</span><strong>${get("diagnostic").correct ? tr("done") : tr("review")}</strong></li><li><span>${tr("startPoint")}</span><strong>${get("mystery").correct ? tr("clear") : tr("needsSupport")}</strong></li><li><span>${tr("directionMove")}</span><strong>${get("guided").correct || get("practice").correct ? tr("forward") : tr("review")}</strong></li><li><span>${tr("stepCounting")}</span><strong>${get("practice").correct ? `${formatNumber(4)} ${tr("step")}` : tr("needsSupport")}</strong></li><li><span>${tr("independentAnswer")}</span><strong>${exit.correct ? tr("correct") : tr("incomplete")}</strong></li><li><span>${tr("hintUsed")}</span><strong>${hintsUsed ? tr("yes") : tr("no")}</strong></li><li><span>${tr("exitAttempts")}</span><strong>${formatNumber(exit.attempts ?? 0)}</strong></li><li><span>${tr("exitTime")}</span><strong>${exit.timeSeconds ? `${formatNumber(exit.timeSeconds)} ${tr("seconds")}` : "-"}</strong></li></ul></div>`;
}

function bindEvents(screen) {
  document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", () => handleAction(button.dataset.action, screen)));
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => { state.lang = button.dataset.lang; render(); }));
  document.querySelectorAll("[data-number]").forEach((button) => button.addEventListener("click", () => handleNumber(Number(button.dataset.number), screen)));
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(Number(button.dataset.answer), screen));
    button.addEventListener("dragstart", (event) => { event.dataTransfer.setData("text/plain", button.dataset.answer); event.dataTransfer.effectAllowed = "move"; });
  });
  document.querySelectorAll("[data-answer-slot]").forEach((slot) => {
    slot.addEventListener("dragover", (event) => { event.preventDefault(); event.dataTransfer.dropEffect = "move"; });
    slot.addEventListener("drop", (event) => { event.preventDefault(); const answer = Number(event.dataTransfer.getData("text/plain")); if (Number.isFinite(answer)) handleAnswer(answer, screen); });
  });
}

function handleAction(action, screen) {
  if (action === "prev") return goTo(state.screen - 1);
  if (action === "next") {
    if (state.screen === lesson.length - 1) {
      Object.assign(state, { screen: 0, currentPosition: null, previousPosition: null, stepsTaken: 0, feedback: null, characterMood: null, rewardStrength: null, selectedAnswer: null, showHint: false, completed: { welcome: false }, stats: {}, exitStart: null });
      return render();
    }
    return goTo(state.screen + 1);
  }
  if (action === "start") { completeCurrent(); return goTo(1); }
  if (action === "move-step") return moveStep(screen);
  if (action === "hint") {
    state.showHint = true;
    if (!state.stats[screen.id]) state.stats[screen.id] = { attempts: 0, correct: false, hintUsed: false, completed: false };
    state.stats[screen.id].hintUsed = true;
    return render();
  }
}

function handleNumber(number, screen) {
  if (screen.type !== "diagnostic") return;
  if (number === screen.target) {
    completeCurrent(); markAttempt(screen.id, true, { response: number }); setCharacterMood("happy"); burst("small"); setFeedback("good", tr("correctFive"));
  } else {
    markAttempt(screen.id, false, { response: number }); setCharacterMood("confused"); setFeedback("try", tr("closeTry"));
  }
  render();
}

function moveStep(screen) {
  if (!("moves" in screen)) return;
  if (state.currentPosition === null) state.currentPosition = screen.start;
  const maxMoves = screen.type === "practice" ? screen.moves + 1 : screen.moves;
  if (state.stepsTaken >= maxMoves) return;
  state.previousPosition = state.currentPosition;
  state.stepsTaken += 1;
  state.currentPosition += 1;
  state.selectedAnswer = null;
  if (screen.type === "practice" && state.stepsTaken === screen.moves + 1) {
    state.showHint = true; state.previousPosition = state.currentPosition; state.currentPosition -= 1; state.stepsTaken -= 1; setCharacterMood("confused"); setFeedback("try", tr("extraJump")); return render();
  }
  if (state.stepsTaken === screen.moves) {
    if (screen.type === "movement") {
      markAttempt(screen.id, true, { response: state.currentPosition }); setCharacterMood("happy"); burst("small");
      const text = screen.mode === "discovery" ? tr("reachedEight") : tr("reachedAnswer", { equation: screen.equation.replace("?", screen.answer), answer: formatNumber(screen.answer) });
      setFeedback("good", text);
      window.setTimeout(() => { completeCurrent(); render(); }, 950);
    } else {
      setFeedback("good", tr("chooseLanding"));
    }
  } else {
    setFeedback("good", tr("stepCount", { n: formatNumber(state.stepsTaken) }));
  }
  render();
}

function handleAnswer(answer, screen) {
  state.selectedAnswer = answer;
  const correct = answer === screen.answer;
  if (correct) {
    completeCurrent(); setCharacterMood("happy"); burst(screen.id === "exit" ? "stage" : "small");
    const extra = { response: answer };
    if (screen.id === "exit" && state.exitStart) extra.timeSeconds = Math.max(1, Math.round((Date.now() - state.exitStart) / 1000));
    markAttempt(screen.id, true, extra); setFeedback("good", tr("correctLanding"));
  } else {
    markAttempt(screen.id, false, { response: answer }); setCharacterMood("confused");
    if (screen.id === "practice" && answer === 9) { state.showHint = true; setFeedback("try", tr("oneMoreStep")); }
    else if (screen.id === "practice" && answer === 11) { state.showHint = true; setFeedback("try", tr("extraJump")); }
    else if (screen.id === "independent") { state.showHint = true; state.stats[screen.id].hintUsed = true; setFeedback("try", tr("revealLine")); }
    else setFeedback("try", tr("tryAgain"));
  }
  render();
}

function renderAssetDebug() {
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";
  app.innerHTML = `<section class="asset-debug"><h1>Camel Asset Preview</h1><p>Development-only view. The mapped supplied camel assets below must all load without stretching.</p><div class="asset-grid">${Object.keys(camelStateFiles).map((stateName) => {
    const src = assets.characters[stateName];
    return `<article class="asset-tile"><h2>${stateName}</h2>${src ? `<img src="${src}" alt="${stateName}" />` : `<div class="asset-missing">Missing: ${camelStateFiles[stateName]}</div>`}</article>`;
  }).join("")}</div></section>`;
}

resetScreenProgress(lesson[0]);
render();
