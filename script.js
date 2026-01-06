document.addEventListener("DOMContentLoaded", () => {

  // TABS
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // CONTACTS CARD
  const btn = document.getElementById('contactsBtn');
  const card = document.getElementById('contactsCard');
  btn.addEventListener('click', () => card.classList.toggle('show'));

  // LANGUAGE TOGGLE
  const langBtn = document.getElementById("langToggle");
  let currentLang = localStorage.getItem("lang") || "en";

  const translations = {
    ru: {
      contacts: "Контакты",
      works: "Работы",
      sketches: "Эскизы",
      info: "Информация",
      instagram: "Instagram",
      telegram: "Telegram",
      contra_title: "Противопоказания",
      contra_text: "Текст противопоказаний...",
      session_title: "Информация о сеансе",
      session_text: "Текст про сеанс...",
      prep_title: "Рекомендации перед сеансом",
      prep_text: "Текст рекомендаций...",
      healing_title: "Процесс заживления",
      healing_text: "Текст заживления..."
    },
    en: {
      contacts: "Contacts",
      works: "Works",
      sketches: "Sketches",
      info: "Info",
      instagram: "Instagram",
      telegram: "Telegram",
      contra_title: "Contraindications",
      contra_text: "Here you can describe medical conditions or situations that prevent tattooing.",
      session_title: "Session Information",
      session_text: "Details about the tattoo session, including duration, what to expect, and equipment used.",
      prep_title: "Before the Session",
      prep_text: "Recommendations for preparation before getting a tattoo, such as hydration and skin care.",
      healing_title: "Healing Process",
      healing_text: "Instructions on how to take care of the tattoo during the healing period."
    }
  };

  function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    langBtn.textContent = lang === "ru" ? "EN" : "RU";
    localStorage.setItem("lang", lang);
  }

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "ru" ? "en" : "ru";
    applyLanguage(currentLang);
  });

  applyLanguage(currentLang);
});