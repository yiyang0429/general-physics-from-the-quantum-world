(() => {
  "use strict";
  const config = window.BOOK_SITE_CONFIG || {};
  const strings = {
    zh: {
      skip:"跳到正文",brandSub:"一部普通物理教材",navLabel:"主要導覽",navApproach:"教學路徑",navContents:"全書內容",navRead:"閱讀與下載",navAbout:"關於",
      heroEyebrow:"大學普通物理 · 第一版 2026",titleLine1:"從量子出發的",titleLine2:"普通物理",heroSubtitle:"從微觀結構到人類尺度與宇宙",
      heroDescription:"如果我們先熟悉量子的世界，會如何理解一顆球、一條電路，乃至整個宇宙？跟著「量子人」，學會在不同尺度選擇模型、理解近似，並親手算出答案。",
      authorName:"楊毅 Yi Yang",authorAffiliationShort:"中央研究院物理研究所",readFree:"免費閱讀與下載",explore:"看看這條學習路徑",heroNote:"中英雙語 · 公開版本 v1 · CC BY-NC 4.0",coverCaption:"第一版 · v1 · 免費閱讀",
      statChapters:"章完整內容",statExamples:"個編號例題",statExercises:"道練習題",statLanguages:"種語言版本",
      approachEyebrow:"THE LEARNING ROUTE",approachTitle:"尺度變了，物理怎麼接下去？",approachIntro:"把量子章節放在前面，只是起點。更重要的是看清楚：微觀機制如何成為平均回應，又在什麼條件下，讓熟悉的巨觀模型成立。",
      tabsLabel:"跨尺度例子",tabMaterial:"原子 → 材料",tabThermal:"能階 → 熱容",tabCircuit:"載子 → 電路",tabOptics:"振幅 → 光學",routeNote:"一路追問同一件事：我們保留了哪些資訊？忽略了什麼？這個近似何時可信？",
      contentsEyebrow:"INSIDE THE BOOK",contentsTitle:"七部，走向更大的世界。",contentsIntro:"從原子與基本交互作用，走到日常力學、電磁與熱學，再抬頭看向重力、星系與宇宙。",topicsNote:"四個專題：量子計算、核分裂與核融合、半導體與人工智慧，以及太空科技。",
      part1:"微觀世界與基本交互作用",part2:"牛頓力學與振盪",part3:"相對論、反物質與核能",part4:"電磁學與電路",part5:"連續介質、波與熱學",part6:"光學",part7:"重力、天文與宇宙",
      range1:"第 1–5 章 · 專題 Q",range2:"第 6–14 章",range3:"第 15–16 章 · 專題 N",range4:"第 17–24 章 · 專題 S",range5:"第 25–28 章",range6:"第 29–31 章",range7:"第 32–34 章 · 專題 T",
      part1Detail:"尺度與測量、波與機率振幅、原子結構、基本交互作用，以及從量子狀態到可追蹤物體的近似。專題延伸至量子計算與量子資訊。",
      part2Detail:"運動、力、能量、動量、轉動、彈性、重力與軌道，以及振盪與共振。建立能用於實際解題的巨觀語言。",
      part3Detail:"狹義相對論、質能關係、狄拉克方程、自旋與反物質，再連到核分裂、核融合與能源系統。",
      part4Detail:"電場、電位、電流與量測、磁場、感應、交流與電磁波。半導體專題連接能帶、電子元件與人工智慧硬體。",
      part5Detail:"從平均後的密度、壓力與流速，到流體、機械波、溫度、熱傳、熱力學與熵。",
      part6Detail:"光線、透鏡與成像、干涉、繞射、解析度，以及光學儀器與偏振。回看機率振幅、累積計數與平均強度之間的連接。",
      part7Detail:"時空與重力、黑洞、恆星與星系、宇宙演化。太空科技專題整合軌道、推進、電力、熱控、通訊與相對論。",
      editionsEyebrow:"READ THE FIRST EDITION",editionsTitle:"選一種語言，開始閱讀。",editionsIntro:"兩種語言版本皆可免費閱讀。完整書檔與版本紀錄存放於 Zenodo；引用時，請使用相應版本的 DOI。",pagesCn:"中文版 · 522 頁",pagesEn:"英文版 · 532 頁",readOnZenodo:"閱讀與下載",copyCitation:"複製引用",copied:"引用已複製",copyManually:"請選取下方文字並複製：",close:"關閉",
      aboutEyebrow:"THE AUTHOR",authorAffiliation:"中央研究院物理研究所\n國立成功大學物理學系",aboutBody:"研究領域涵蓋實驗高能物理、高能核物理與重力。這本書從一個教學問題開始：如果學生先建立微觀的直覺，我們能否更清楚地說明，人類尺度的物理模型為何有效？",aboutAim:"目標是讓一般大學生在公式之外，也能看見問題從何而來、實驗如何作答，以及不同尺度的描述如何銜接。",aiTitle:"關於 AI 協作",aiBody:"楊毅提出教學觀點與課程方向，並負責內容選擇、審閱與最終編輯決定。ChatGPT 協助草稿、計算檢查、翻譯、插圖與排版；Gemini 提供額外審閱建議。書內記錄相關貢獻。",
      supportEyebrow:"KEEP THE QUESTIONS GOING",supportTitle:"免費閱讀，歡迎分享。",supportBody:"如果這本書對你有幫助，歡迎分享給需要的同學、老師與好奇的讀者。每一次討論，都能讓下一次修訂更好。",supportActiveTitle:"如果這本書對你有幫助。",supportActiveBody:"中英文版本都可免費閱讀。你也可以自願支持後續修訂與教材製作，或把這本書分享給更多好奇的讀者。",supportButton:"自願支持這本書",supportDisclaimer:"贊助完全自願，不影響免費閱讀、下載與既有授權。",feedbackButton:"提供閱讀建議 ↗",shareBook:"取得書籍連結 ↗",footerEdition:"楊毅 Yi Yang · 第一版 v1 · 2026",sourceLink:"網站原始碼 ↗",licenseText:"除另有註明外，本書與本站的原創內容採 CC BY-NC 4.0 授權。第三方素材保留各自授權或公眾領域狀態，詳見書內圖片來源與授權說明。",privacyText:"本站不設廣告或追蹤分析；外部網站依其各自政策運作。"
    },
    en: {
      skip:"Skip to content",brandSub:"A university physics textbook",navLabel:"Main navigation",navApproach:"The approach",navContents:"Contents",navRead:"Read the book",navAbout:"About",
      heroEyebrow:"UNIVERSITY PHYSICS · FIRST EDITION 2026",titleLine1:"General Physics",titleLine2:"from the Quantum World",heroSubtitle:"From microscopic structure to human scales and the universe",
      heroDescription:"What if the quantum world felt familiar first? Follow a “quantum inhabitant” from atoms to everyday objects, circuits, and the cosmos—learning how to choose models, understand approximations, and work out the answers.",
      authorName:"Yi Yang 楊毅",authorAffiliationShort:"Institute of Physics, Academia Sinica",readFree:"Read the book for free",explore:"Explore the learning route",heroNote:"Chinese & English · Public release v1 · CC BY-NC 4.0",coverCaption:"FIRST EDITION · v1 · FREE TO READ",
      statChapters:"chapters",statExamples:"worked examples",statExercises:"exercises",statLanguages:"languages",
      approachEyebrow:"THE LEARNING ROUTE",approachTitle:"When the scale changes, what connects?",approachIntro:"Starting with quantum physics is only the beginning. The next step is to see how microscopic mechanisms become average responses, and under what conditions familiar macroscopic models apply.",
      tabsLabel:"Connections across scales",tabMaterial:"Atoms → Materials",tabThermal:"Levels → Heat capacity",tabCircuit:"Carriers → Circuits",tabOptics:"Amplitudes → Optics",routeNote:"Keep asking: What information do we retain? What do we leave out? When can we trust the approximation?",
      contentsEyebrow:"INSIDE THE BOOK",contentsTitle:"Seven parts. A wider view of the world.",contentsIntro:"Begin with atoms and fundamental interactions. Build the language of mechanics, electromagnetism, and thermal physics. Then look outward to gravity, galaxies, and the universe.",topicsNote:"Four special topics: quantum computing, fission and fusion, semiconductors and AI, and space technology.",
      part1:"The microscopic world & fundamental interactions",part2:"Newtonian mechanics & oscillations",part3:"Relativity, antimatter & nuclear energy",part4:"Electromagnetism & circuits",part5:"Continua, waves & thermal physics",part6:"Optics",part7:"Gravity, astronomy & the universe",
      range1:"CHAPTERS 1–5 · TOPIC Q",range2:"CHAPTERS 6–14",range3:"CHAPTERS 15–16 · TOPIC N",range4:"CHAPTERS 17–24 · TOPIC S",range5:"CHAPTERS 25–28",range6:"CHAPTERS 29–31",range7:"CHAPTERS 32–34 · TOPIC T",
      part1Detail:"Scale and measurement, waves and probability amplitudes, atomic structure, fundamental interactions, and the approximations that connect quantum states to trackable objects. Topic Q introduces quantum computing and information.",
      part2Detail:"Motion, forces, energy, momentum, rotation, elasticity, gravitation, orbits, oscillations, and resonance. Develop macroscopic models that can be used to solve problems.",
      part3Detail:"Special relativity, mass and energy, the Dirac equation, spin, and antimatter, followed by nuclear fission, fusion, and energy systems.",
      part4Detail:"Electric fields and potential, currents and measurements, magnetism, induction, AC circuits, and electromagnetic waves. Topic S connects energy bands and electronic devices to AI hardware.",
      part5Detail:"From averaged density, pressure, and flow velocity to fluids, mechanical waves, temperature, heat transfer, thermodynamics, and entropy.",
      part6Detail:"Rays, lenses, imaging, interference, diffraction, resolution, optical instruments, and polarization. Revisit the connection between probability amplitudes, accumulated counts, and average intensity.",
      part7Detail:"Spacetime and gravity, black holes, stars and galaxies, and cosmic evolution. Topic T brings together orbits, propulsion, power, thermal control, communication, and relativity.",
      editionsEyebrow:"READ THE FIRST EDITION",editionsTitle:"Choose a language. Start exploring.",editionsIntro:"Both language editions are free to read. Book files and version records are hosted on Zenodo. When citing the book, use the DOI for the relevant edition.",pagesCn:"Chinese edition · 522 pages",pagesEn:"English edition · 532 pages",readOnZenodo:"Read & download",copyCitation:"Copy citation",copied:"Citation copied",copyManually:"Select and copy the citation below:",close:"Close",
      aboutEyebrow:"THE AUTHOR",authorAffiliation:"Institute of Physics, Academia Sinica\nDepartment of Physics, National Cheng Kung University",aboutBody:"Yi Yang works in experimental high-energy physics, high-energy nuclear physics, and gravitation. This book began with a teaching question: if students develop microscopic intuition first, can we make it clearer why physics at human scales works?",aboutAim:"The aim is to help university students see beyond the formulas: how questions arise, how experiments answer them, and how descriptions at different scales connect.",aiTitle:"About AI collaboration",aiBody:"Yi Yang developed the pedagogical perspective and curricular direction and is responsible for content selection, review, and final editorial decisions. ChatGPT assisted with drafting, numerical checks, translation, illustrations, and layout; Gemini supplied additional review suggestions. These contributions are documented in the book.",
      supportEyebrow:"KEEP THE QUESTIONS GOING",supportTitle:"Free to read. Welcome to share.",supportBody:"If this book helps you, share it with students, teachers, and curious readers. Each conversation can help make the next revision better.",supportActiveTitle:"If this book helped you.",supportActiveBody:"Both editions are free to read. You can also support future revisions and teaching materials with a voluntary contribution, or share the book with another curious reader.",supportButton:"Support this book",supportDisclaimer:"Support is entirely optional. Reading, downloads, and the existing license do not depend on payment.",feedbackButton:"Share reading feedback ↗",shareBook:"Get the book links ↗",footerEdition:"Yi Yang · First edition v1 · 2026",sourceLink:"Website source ↗",licenseText:"Unless otherwise indicated, original content in the book and on this site is licensed under CC BY-NC 4.0. Third-party materials retain their own licenses or public domain status; see the image credits and license information in the book.",privacyText:"This site has no ads or analytics. External sites follow their own policies."
    }
  };
  const connections = {
    material: { chapters:"3 · 12",zh:["原子間的鍵結，如何變成一條金屬線的彈性？","從原子間距與鍵結的有效剛性出發，在明確的鍵結網絡假設下建立材料模數，再用它預測金屬線的伸長。","原子間距與鍵剛性","鍵結網絡與材料模數","受力後的巨觀伸長"],en:["How do atomic bonds become a wire’s elasticity?","Start with atomic spacing and effective bond stiffness. Under stated assumptions about the bond network, build a material modulus and use it to predict how much a wire stretches.","Atomic spacing & bond stiffness","Bond network & material modulus","Macroscopic extension under load"] },
    thermal: { chapters:"3 · 27",zh:["量子能階，何時會改變物體的熱容？","比較振動能階間距與熱能尺度，檢查哪些模態能被激發，以及古典均分近似何時合理。","振動模態的能階間距","與熱能尺度 kBT 比較","可激發模態與巨觀熱容"],en:["When do quantum levels change a solid’s heat capacity?","Compare vibrational level spacing with the thermal energy scale. Check which modes are excited and when classical equipartition is a reasonable approximation.","Vibrational energy-level spacing","Comparison with thermal energy kBT","Accessible modes & heat capacity"] },
    circuit: { chapters:"19 · 24",zh:["電子移動很慢，電路為什麼回應得快？","區分載子的平均漂移與電磁訊號的傳播，再從平均運動建立導電率與整根導線的電阻。","載子的平均漂移","導電率與導線電阻","電磁訊號與電路回應"],en:["Why does a circuit respond when electrons drift slowly?","Distinguish the average drift of charge carriers from electromagnetic signal propagation. Connect carrier motion to conductivity and the resistance of a whole wire.","Average carrier drift","Conductivity & wire resistance","Signals & circuit response"] },
    optics: { chapters:"2 · 30",zh:["一次一個光子，如何累積成干涉條紋？","在明確的光源與偵測條件下，連接機率振幅、偵測機率、累積計數與平均強度，也區分哪些統計仍需要量子描述。","振幅疊加與偵測機率","多次偵測的累積計數","平均強度與干涉條紋"],en:["How do single detections build an interference pattern?","Under stated source and detection conditions, connect amplitudes to detection probabilities, accumulated counts, and average intensity—while distinguishing statistics that require a quantum description.","Amplitudes & detection probabilities","Counts accumulated over detections","Average intensity & interference"] }
  };
  function httpsURL(value) {
    if (typeof value !== "string" || !value.trim()) return "";
    try { const url = new URL(value); return url.protocol === "https:" && !url.username && !url.password ? url.href : ""; } catch { return ""; }
  }
  const dois = {
    cn:httpsURL(config.doiCN) || "https://doi.org/10.5281/zenodo.24122647",
    en:httpsURL(config.doiEN) || "https://doi.org/10.5281/zenodo.24122845"
  };
  const supportURL = httpsURL(config.supportURL);
  const feedbackURL = httpsURL(config.feedbackURL);
  const repositoryURL = httpsURL(config.repositoryURL);
  let language = "zh";
  let topic = "material";
  let toastTimer;
  function setText(element, value) {
    const lines = value.split("\n");
    element.replaceChildren();
    lines.forEach((line,index) => { if(index) element.append(document.createElement("br")); element.append(document.createTextNode(line)); });
  }
  function renderConnection() {
    const active = connections[topic];
    const values = active[language];
    document.getElementById("connection-title").textContent = values[0];
    document.getElementById("connection-body").textContent = values[1];
    document.getElementById("connection-chapters").textContent = (language === "zh" ? "章節 " : "CHAPTERS ") + active.chapters;
    [1,2,3].forEach(i => document.getElementById("step-"+i).textContent = values[i+1]);
    document.getElementById("connection-panel").setAttribute("aria-labelledby","tab-"+topic);
    document.querySelectorAll("[data-topic]").forEach(button => {
      const selected = button.dataset.topic === topic;
      button.setAttribute("aria-selected",String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
  }
  function renderLanguage(next) {
    language = next === "en" ? "en" : "zh";
    const text = strings[language];
    document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-i18n]").forEach(element => {
      if (text[element.dataset.i18n] !== undefined) setText(element,text[element.dataset.i18n]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => element.setAttribute("aria-label",text[element.dataset.i18nAria]));
    document.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed",String(button.dataset.lang === language)));
    const cover = document.getElementById("hero-cover");
    cover.src = language === "zh" ? "./assets/cover-cn.webp" : "./assets/cover-en.webp";
    cover.alt = language === "zh" ? "《從量子出發的普通物理》中文封面" : "Cover of General Physics from the Quantum World, English edition";
    document.title = language === "zh" ? "從量子出發的普通物理｜楊毅 · v1" : "General Physics from the Quantum World | Yi Yang · v1";
    document.querySelector('meta[name="description"]').content = language === "zh" ? "楊毅的中英雙語大學普通物理教材。從微觀結構到人類尺度與宇宙，免費閱讀第一版 v1。" : "A university physics textbook by Yi Yang. From microscopic structure to human scales and the universe. Read the Chinese and English editions for free.";
    if (supportURL) {
      document.getElementById("support-title").textContent = text.supportActiveTitle;
      document.getElementById("support-body").textContent = text.supportActiveBody;
    }
    renderConnection();
    try { localStorage.setItem("quantum-book-language",language); } catch { /* Storage is optional. */ }
    try { const url = new URL(location.href); url.searchParams.set("lang",language); history.replaceState(null,"",url); } catch { /* file:// previews remain usable. */ }
  }
  document.querySelectorAll("[data-doi]").forEach(anchor => {
    anchor.href = dois[anchor.dataset.doi];
    if (anchor.classList.contains("doi-link")) anchor.textContent = new URL(anchor.href).pathname.slice(1);
  });
  for (const [id,url] of [["support-button",supportURL],["feedback-link",feedbackURL],["repository-link",repositoryURL]]) {
    const element = document.getElementById(id);
    element.hidden = !url;
    if(url) element.href = url;
  }
  document.getElementById("support-disclaimer").hidden = !supportURL;
  document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click",() => renderLanguage(button.dataset.lang)));
  const tabs = [...document.querySelectorAll("[data-topic]")];
  tabs.forEach((button,index) => {
    button.addEventListener("click",() => {topic = button.dataset.topic;renderConnection();});
    button.addEventListener("keydown",event => {
      const directions = {ArrowRight:(index+1)%tabs.length,ArrowLeft:(index+tabs.length-1)%tabs.length,Home:0,End:tabs.length-1};
      if(Object.hasOwn(directions,event.key)) {
        event.preventDefault();
        const next = tabs[directions[event.key]];
        topic = next.dataset.topic;renderConnection();next.focus();
      }
    });
  });
  document.querySelectorAll("[data-citation]").forEach(button => button.addEventListener("click",async () => {
    const edition = button.dataset.citation;
    const citation = edition === "cn" ? `Yang, Y. (2026). 從量子出發的普通物理 (中文版, v1). Zenodo. ${dois.cn}` : `Yang, Y. (2026). General Physics from the Quantum World (English edition, v1). Zenodo. ${dois.en}`;
    try {
      if(!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(citation);
      const toast = document.getElementById("toast");toast.textContent = strings[language].copied;toast.classList.add("visible");
      clearTimeout(toastTimer);toastTimer = setTimeout(() => toast.classList.remove("visible"),2600);
    } catch {
      const fallback = document.getElementById("citation-fallback");
      const field = document.getElementById("citation-text");
      fallback.hidden = false;field.value = citation;field.focus();field.select();
    }
  }));
  document.getElementById("close-citation").addEventListener("click",() => document.getElementById("citation-fallback").hidden = true);
  let initial = "zh";
  try { initial = localStorage.getItem("quantum-book-language") || initial; } catch { /* Storage is optional. */ }
  const queryLanguage = new URLSearchParams(location.search).get("lang");
  if(queryLanguage === "en" || queryLanguage === "zh") initial = queryLanguage;
  renderLanguage(initial);
})();
