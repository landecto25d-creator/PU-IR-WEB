let totalScore = 0;
let historyStack = [];
let availableQuestions = ["q2", "q3", "q4", "q5"]; // q1 is start
let currentQuestionId = "q1";
let currentLang = "id"; // Default

const translations = {
  id: {
    landing: {
      how_title: "Cara Main",
      step1: "1. Kamu akan menghadapi 5 situasi terkait isu global",
      step2: "2. Pilih respons yang paling sesuai dengan kamu",
      step3: "3. Dapatkan skor kecocokan kamu masuk Hubungan Internasional!",
      start: "MULAI",
    },
    progress: "Soal {current} dari {total}",
    result: {
      back_home: "Kembali ke Halaman Depan",
      score_label: "Total Skor",
      title: "Hasil Tes Kecocokan",
      recommendation_title: "Saran Pengembangan",
    },
    questions: {
      q1: {
        title: "Isu Global yang Menarik Perhatianmu",
        desc: "Kamu lagi scrolling berita. Topik mana yang paling bikin kamu penasaran dan pengen tau lebih dalam?",
        options: [
          "Konflik internasional & diplomasi antar negara",
          "Krisis iklim & kebijakan lingkungan global",
          "Perkembangan teknologi & inovasi",
          "Tren fashion & lifestyle selebriti",
        ],
      },
      q2: {
        title: "Kemampuan Bahasa Asing",
        desc: "Gimana pendapat kamu tentang belajar bahasa asing?",
        options: [
          "Excited banget! Pengen bisa banyak bahasa",
          "Tertarik, terutama bahasa yang banyak dipake global",
          "Oke aja, tapi gak terlalu passionate",
          "Susah & males, prefer bahasa Indonesia aja",
        ],
      },
      q3: {
        title: "Diskusi & Debat",
        desc: "Teman-teman lagi debat seru soal kebijakan pemerintah. Reaksi kamu?",
        options: [
          "Ikut nimbrung & kasih argumen yang well-researched",
          "Dengerin dulu semua sudut pandang, baru kasih pendapat",
          "Kadang ikut, tapi lebih suka jadi pendengar",
          "Menghindari, takut konflik & perdebatan",
        ],
      },
      q4: {
        title: "Kebiasaan Mengikuti Berita",
        desc: "Seberapa sering kamu update berita dunia & politik internasional?",
        options: [
          "Hampir tiap hari, dari berbagai sumber",
          "Kalau ada isu besar yang viral",
          "Jarang, cuma kalau muncul di timeline",
          "Gak pernah, gak tertarik sama politik",
        ],
      },
      q5: {
        title: "Minat Bekerja Internasional",
        desc: "Bayangin 10 tahun ke depan, kamu pengen karirnya gimana?",
        options: [
          "Kerja di organisasi internasional atau kedutaan",
          "Kerja di perusahaan multinasional atau NGO global",
          "Kerja di Indonesia tapi punya koneksi internasional",
          "Kerja lokal aja, gak suka traveling atau pindah-pindah",
        ],
      },
    },
    results: {
      very_suitable: {
        title: "SANGAT COCOK (Very Suitable)",
        message:
          "Kamu punya potensi BESAR untuk sukses di Hubungan Internasional! Passion kamu terhadap isu global, kemampuan komunikasi, dan minat pada diplomasi sangat sesuai dengan jurusan ini.",
        prep_title: "Yang Perlu Disiapkan:",
        prep_list: [
          "Tingkatkan kemampuan Bahasa Inggris (TOEFL/IELTS)",
          "Pelajari bahasa asing kedua (Mandarin, Arab, Prancis, Jepang)",
          "Ikuti Model United Nations (MUN) atau organisasi internasional",
          "Baca buku tentang geopolitik & hubungan internasional",
          "Follow isu-isu global terkini",
        ],
      },
      suitable: {
        title: "COCOK (Suitable)",
        message:
          "Kamu punya karakteristik yang cocok untuk IR! Mungkin masih ada beberapa area yang perlu dikembangkan, tapi kamu punya foundation yang kuat.",
        prep_title: "Yang Perlu Disiapkan:",
        prep_list: [
          "Tingkatkan kemampuan Bahasa Inggris (TOEFL/IELTS)",
          "Pelajari bahasa asing kedua (Mandarin, Arab, Prancis, Jepang)",
          "Ikuti Model United Nations (MUN) atau organisasi internasional",
          "Baca buku tentang geopolitik & hubungan internasional",
          "Follow isu-isu global terkini",
        ],
      },
      moderate: {
        title: "LUMAYAN COCOK (Moderately Suitable)",
        message:
          "Kamu punya potensi di bidang sosial, tapi mungkin IR bukan yang paling pas. Pertimbangkan jurusan sosial lainnya yang lebih sesuai dengan minat kamu.",
        prep_title: "Saran:",
        prep_list: [
          "Explorasi jurusan sosial lain seperti Psikologi atau Komunikasi.",
        ],
      },
      less_suitable: {
        title: "KURANG COCOK (Less Suitable)",
        message:
          "Sepertinya minat kamu lebih cocok ke jurusan sosial lain yang gak terlalu fokus ke isu internasional. Dan itu totally fine!",
        prep_title: "Saran:",
        prep_list: [
          "Coba cari tahu tentang jurusan Manajemen, Psikologi, atau Seni.",
        ],
      },
    },
  },
  en: {
    landing: {
      how_title: "How to Play",
      step1: "1. You will face 5 situations related to global issues",
      step2: "2. Choose the response that suits you best",
      step3: "3. Get your compatibility score for International Relations!",
      start: "START",
    },
    progress: "Question {current} of {total}",
    result: {
      back_home: "Back to Home Page",
      score_label: "Total Score",
      title: "Compatibility Test Result",
      recommendation_title: "Recommendations",
    },
    questions: {
      q1: {
        title: "Global Issues That Catch Your Interest",
        desc: "You are scrolling through the news. Which topic makes you most curious?",
        options: [
          "International conflict & diplomacy between countries",
          "Climate crisis & global environmental policies",
          "Technological developments & innovation",
          "Fashion trends & celebrity lifestyle",
        ],
      },
      q2: {
        title: "Foreign Language Ability",
        desc: "What is your opinion on learning foreign languages?",
        options: [
          "Very excited! Want to learn many languages",
          "Interested, especially globally used languages",
          "It's okay, but not too passionate",
          "Difficult & lazy, prefer Indonesian only",
        ],
      },
      q3: {
        title: "Discussion & Debate",
        desc: "Friends are debating a government policy. Your reaction?",
        options: [
          "Join in & give well-researched arguments",
          "Listen to all viewpoints first, then give an opinion",
          "Sometimes join, but prefer listening",
          "Avoid it, afraid of conflict & debate",
        ],
      },
      q4: {
        title: "News Consumption Habits",
        desc: "How often do you update yourself on world news & international politics?",
        options: [
          "Almost every day, from various sources",
          "Only when there is a big viral issue",
          "Rarely, only if it appears on timeline",
          "Never, not interested in politics",
        ],
      },
      q5: {
        title: "Interest in Working Internationally",
        desc: "Imagine 10 years from now, how do you see your career?",
        options: [
          "Work at an international organization or embassy",
          "Work at a multinational company or global NGO",
          "Work in Indonesia but have international connections",
          "Work locally, don't like traveling or moving around",
        ],
      },
    },
    results: {
      very_suitable: {
        title: "VERY SUITABLE",
        message:
          "You have HUGE potential to succeed in International Relations! Your passion for global issues, communication skills, and interest in diplomacy fit perfectly.",
        prep_title: "What to Prepare:",
        prep_list: [
          "Improve English skills (TOEFL/IELTS)",
          "Learn a second foreign language (Mandarin, Arab, French, Japanese)",
          "Join Model United Nations (MUN) or international organizations",
          "Read books on geopolitics & international relations",
          "Follow current global issues",
        ],
      },
      suitable: {
        title: "SUITABLE",
        message:
          "You have characteristics suitable for IR! There might be some areas to develop, but you have a strong foundation.",
        prep_title: "What to Prepare:",
        prep_list: [
          "Improve English skills (TOEFL/IELTS)",
          "Learn a second foreign language (Mandarin, Arab, French, Japanese)",
          "Join Model United Nations (MUN) or international organizations",
          "Read books on geopolitics & international relations",
          "Follow current global issues",
        ],
      },
      moderate: {
        title: "MODERATELY SUITABLE",
        message:
          "You have potential in social fields, but IR might not be the best fit. Consider other social majors that suit your interests better.",
        prep_title: "Suggestion:",
        prep_list: [
          "Explore other social majors like Psychology or Communication.",
        ],
      },
      less_suitable: {
        title: "LESS SUITABLE",
        message:
          "It seems your interests are better suited for other social majors not focused on international issues. And that is totally fine!",
        prep_title: "Suggestion:",
        prep_list: ["Try finding out about Management, Psychology, or Arts."],
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // Show Modal, Hide everything else is handled by CSS (landing hidden by default)
  // Wait for setLanguage call
});

function setLanguage(lang) {
  currentLang = lang;

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  applyTranslations();

  const modal = document.getElementById("language-modal");
  const landing = document.getElementById("landing-page");

  // Ensure landing page is visible behind the modal before fading out
  landing.style.display = "block";

  // Trigger exit animation
  modal.classList.add("closing");

  // Wait for animation to finish
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing");
  }, 280);
}

function openLanguageModal() {
  document.getElementById("language-modal").style.display = "flex";
  // Show back button because we are coming from the app
  const backBtn = document.getElementById("modal-back-btn");
  if (backBtn) backBtn.style.display = "flex";
}

function closeLanguageModal() {
  const modal = document.getElementById("language-modal");
  modal.classList.add("closing");

  // Wait for animation to finish (300ms matches CSS)
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing");
  }, 280); // Slightly less than 300ms to avoid flicker
}

function applyTranslations() {
  const t = translations[currentLang];

  // Landing Page
  document.querySelector('[data-i18n="landing.how_title"]').innerText =
    t.landing.how_title;
  document.querySelector('[data-i18n="landing.step1"]').innerText =
    t.landing.step1;
  document.querySelector('[data-i18n="landing.step2"]').innerText =
    t.landing.step2;
  document.querySelector('[data-i18n="landing.step3"]').innerText =
    t.landing.step3;
  document.querySelector('[data-i18n="landing.start"]').innerText =
    t.landing.start;

  // Questions (Iterate through IDs)
  for (let i = 1; i <= 5; i++) {
    const qId = `q${i}`;
    const qEl = document.getElementById(qId);
    if (qEl && t.questions[qId]) {
      const qData = t.questions[qId];
      qEl.querySelector(".boxTitle").innerText = qData.title;
      const descEl = qEl.querySelector(".textBox p:nth-child(2)"); // 2nd p in textBox
      if (descEl) descEl.innerText = qData.desc;

      const btnTexts = qEl.querySelectorAll(".buttonText");
      if (btnTexts.length >= 4) {
        // The options array in translation maps to button order in HTML
        // Ensure HTML buttons are in same order as options array
        if (qData.options && qData.options.length === 4) {
          btnTexts[0].innerText = qData.options[0];
          btnTexts[1].innerText = qData.options[1];
          btnTexts[2].innerText = qData.options[2];
          btnTexts[3].innerText = qData.options[3];
        }
      }
    }
  }

  // Result Page Button
  const resBtn = document.querySelector("#result .buttonText");
  if (resBtn) resBtn.innerText = t.result.back_home;
}

function startQuiz() {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "block";

  showQuestion("q1");
}

function showQuestion(id) {
  const mainContainer = document.querySelector(".main");
  if (mainContainer) mainContainer.style.height = "";

  const allQuestions = document.querySelectorAll(".question-container");
  allQuestions.forEach((q) => (q.style.display = "none"));

  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
    currentQuestionId = id;
  }

  // Progress Bar Logic
  const progressContainer = document.getElementById("progress-container");
  const backBtn = document.querySelector(".btn-back");

  if (id === "result") {
    if (progressContainer) progressContainer.style.display = "none";
    if (backBtn) backBtn.style.display = "none"; // Hide back button on result
  } else {
    if (progressContainer) progressContainer.style.display = "block";
    if (backBtn) backBtn.style.display = "flex"; // Show back button on questions
    updateProgressBar();
  }
}

function updateProgressBar() {
  const allQs = 5;
  let currentNum = historyStack.length + 1;
  if (currentNum > allQs) currentNum = allQs;

  const barInner = document.getElementById("progress-bar-inner");
  const textLabel = document.getElementById("progress-text");

  if (barInner) {
    barInner.innerHTML = "";
    for (let i = 1; i <= allQs; i++) {
      const seg = document.createElement("div");
      seg.style.flex = "1";
      seg.style.height = "4px";
      seg.style.borderRadius = "2px";
      seg.style.transition = "all 0.3s ease";

      if (i === currentNum) {
        // Active Question: Glowing/Lit
        seg.style.background = "#ffffff";
        seg.style.boxShadow = "0 0 8px rgba(255, 255, 255, 0.8)";
        seg.style.opacity = "1";
      } else if (i < currentNum) {
        // Past Questions: Semi-lit/completed
        seg.style.background = "rgba(255, 255, 255, 0.5)";
        seg.style.boxShadow = "none";
      } else {
        // Future Questions: Darker/Idle
        seg.style.background = "rgba(255, 255, 255, 0.1)";
        seg.style.boxShadow = "none";
      }
      barInner.appendChild(seg);
    }
  }

  // Translate Progress Text
  const t = translations[currentLang];
  if (textLabel)
    textLabel.innerText = t.progress
      .replace("{current}", currentNum)
      .replace("{total}", allQs);
}

function selectAnswer(questionNum, points) {
  totalScore += points;
  console.log("Score updated:", totalScore);

  historyStack.push({
    questionId: currentQuestionId,
    points: points,
  });

  if (availableQuestions.length > 0) {
    // Linear order for this quiz seems better to match the story flow provided?
    // But original code was random. The user inputs are Question 1 to 5.
    // I will use linear order to be safe since I mapped them q1, q2...
    // Logic: q1 -> q2 -> ...
    // Wait, availableQuestions init was ['q2','q3','q4','q5'].
    // So I can just shift() or find the next one.

    // Actually, let's keep it linear: 1->2->3->4->5.
    // My availableQuestions logic in original code was random splicing.
    // I'll change it to linear pop or shift.

    // Let's use shift to get the next one in order.
    const nextId = availableQuestions.shift();

    showQuestion(nextId);
  } else {
    showResult();
  }
}

function handleBack(e) {
  e.preventDefault();

  if (historyStack.length === 0) {
    // Go back to landing page
    document.getElementById("landing-page").style.display = "block";
    document.getElementById("quiz-page").style.display = "none";
    return;
  }
  const lastAction = historyStack.pop();

  totalScore -= lastAction.points;
  console.log("Rollback score:", totalScore);

  // Push back the current question to available (at the start) if it wasn't result
  if (currentQuestionId !== "result") {
    availableQuestions.unshift(currentQuestionId);
  }

  showQuestion(lastAction.questionId);
}

function showResult() {
  const mainContainer = document.querySelector(".main");
  if (mainContainer) mainContainer.style.height = "";

  const allQuestions = document.querySelectorAll(".question-container");
  allQuestions.forEach((q) => (q.style.display = "none"));

  const resDiv = document.getElementById("result");

  // Hide Progress Bar and Back Button
  const progressContainer = document.getElementById("progress-container");
  if (progressContainer) progressContainer.style.display = "none";
  const backBtn = document.querySelector(".btn-back");
  if (backBtn) backBtn.style.display = "none";

  if (resDiv) {
    resDiv.style.display = "block";
    currentQuestionId = "result";

    const t = translations[currentLang];
    let resultData;
    let scoreClass = "";

    // Scoring Logic
    // 12-15: Cocok Bgt (Very Suitable)
    // 8-11: Cocok (Suitable)
    // 5-7: Lumayan (Moderate)
    // 0-4: Kurang (Less)

    if (totalScore >= 12) {
      resultData = t.results.very_suitable;
    } else if (totalScore >= 8) {
      resultData = t.results.suitable;
    } else if (totalScore >= 5) {
      resultData = t.results.moderate;
    } else {
      resultData = t.results.less_suitable;
    }

    const display = document.getElementById("score-display");
    display.innerHTML = `
            <div class="mb-4">
                <h2 style="font-size: 32px; margin-bottom: 20px;">${resultData.title}</h2>
                <div style="font-size: 48px; font-weight: bold; margin-bottom: 20px;">${totalScore} / 15</div>
                <p style="font-size: 18px; margin-bottom: 0;">${resultData.message}</p>
            </div>

            <div class="text-start" style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                <strong style="font-size: 18px;">${resultData.prep_title}</strong>
                <ul style="margin: 0; padding-left: 20px; font-size: 16px; margin-top: 10px;">
                    ${resultData.prep_list.map((item) => `<li class="mb-2">${item}</li>`).join("")}
                </ul>
            </div>
            
            <p style="font-size: 14px; opacity: 0.6; margin: 0;">
                ${t.result.score_label}: ${totalScore}
            </p>
        `;
  }
}

function resetQuiz() {
  // Reset Variables
  totalScore = 0;
  historyStack = [];
  availableQuestions = ["q2", "q3", "q4", "q5"];
  currentQuestionId = "q1";

  // Switch Views
  document.getElementById("quiz-page").style.display = "none";
  document.getElementById("result").style.display = "none";

  // Trigger Landing Animation
  const landing = document.getElementById("landing-page");
  landing.style.display = "block";
  // Reset animation
  landing.classList.remove("animate-pop");
  void landing.offsetWidth; // Force reflow
  landing.classList.add("animate-pop");
}
