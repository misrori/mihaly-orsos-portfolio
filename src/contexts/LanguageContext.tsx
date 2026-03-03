import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "hu" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  hu: {
    // Nav
    "nav.about": "Rólam",
    "nav.experience": "Tapasztalat",
    "nav.projects": "Projektek",
    "nav.teaching": "Oktatás",
    "nav.charity": "Jótékonyság",
    "nav.contact": "Kapcsolat",
    "nav.intro": "Intro",
    "nav.downloadCV": "CV letöltése",

    // Hero
    "hero.badge": "Elérhető oktatásra & konzultációra",
    "hero.greeting": "Szia, én vagyok",
    "hero.name": "Orsós Mihály",
    "hero.title": "Data Scientist & Databricks Instructor",
    "hero.subtitle": "Adat-vezérelt megoldásokat építek, tőzsdei algoritmusokat fejlesztek, és a következő generáció programozóit képzem. Hivatalos Databricks oktató, AI rajongó és vízi sportos.",
    "hero.cta": "Ismerd meg a munkáimat",

    // About
    "about.title": "Rólam",
    "about.description": "Magasan motivált adatelemző és programozó vagyok, Python és R szakértelemmel. Az OTP Banknál szerzett tapasztalatommal adatelemzésre, vizualizációra és web scraping-re specializálódtam. A CEU-n programozást, API-kat, adatkinyerési technikákat, valamint mesterséges intelligenciát és nagy nyelvi modelleket tanítok. Szenvedélyem az innováció, folyamatosan keresem a lehetőségeket tudásom bővítésére és adatvezérelt, AI-alapú megoldások alkalmazására.",

    // Experience
    "exp.title": "Munkatapasztalat",
    "exp.databricks.role": "AI és Data Engineering oktatás",
    "exp.databricks.company": "Databricks & Datapao",
    "exp.databricks.period": "2025 - Jelenleg",
    "exp.databricks.desc": "Databricks alapú Data Engineering és Python oktatás tartása. Apache Spark, elosztott adatfeldolgozás és analitikai munkafolyamatok tanítása valós használati esetekkel.",
    "exp.mnb.role": "Kriptoeszköz szakértő",
    "exp.mnb.company": "Magyar Nemzeti Bank",
    "exp.mnb.period": "2024",
    "exp.mnb.desc": "Kriptoeszközökkel kapcsolatos szakmai segítségnyújtás jogászoknak. Szabályozási kérdések elemzése és technikai konzultáció.",
    "exp.ceu.role": "Előadó & IT fejlesztő",
    "exp.ceu.company": "Central European University",
    "exp.ceu.period": "2016 - Jelenleg",
    "exp.ceu.desc": "Python, adatgyűjtés, web scraping és automatizáció oktatása. API-k, JSON, HTML és Git technológiák tanítása gyakorlati megközelítéssel.",
    "exp.otp.role": "IT fejlesztő",
    "exp.otp.company": "OTP Bank",
    "exp.otp.period": "2016 - 2020",
    "exp.otp.desc": "Big data ökoszisztémák fejlesztése és tesztelése. JIRA ticket-ek elemzése a fejlesztési hatékonyság javítása érdekében.",

    // Projects
    "proj.title": "Projektek",
    "proj.goldhand.name": "Goldhand.space",
    "proj.goldhand.desc": "Tőzsdei indikátorok, backtest modul és minden, ami tőzsde. Valós idejű részvény- és kriptoanalízis dinamikusan frissülő grafikonokkal.",
    "proj.felhok.name": "Felhők.hu",
    "proj.felhok.desc": "Repülőjegy-kereső platform, amely naponta gyűjti a legolcsóbb járatokat budapesti indulással. Szűrés, rendezés és keresés különböző szempontok alapján.",
    "proj.quiz.name": "Quiz.goldhand.space",
    "proj.quiz.desc": "Kahoot-szerű online kvíz alkalmazás, amely interaktív, valós idejű kvízeket tesz lehetővé oktatási és szórakoztatási célokra.",
    "proj.news.name": "News.goldhand.space",
    "proj.news.desc": "Személyre szabott hírösszefoglaló platform. Állítsd be a figyelni kívánt tartalmakat, és az AI összefoglalót küld neked.",
    "proj.ai-academy.name": "AI Akadémia",
    "proj.ai-academy.desc": "Megtanítalak, hogyan építs fel egy működő AI alapú MVP-t (Minimum Viable Product) lépésről lépésre, az ötlettől a megvalósításig.",
    "proj.youtube.name": "Goldhand Finance YouTube",
    "proj.youtube.desc": "YouTube csatorna a pénzügyi piacokról, tőzsdei stratégiákról, kriptovalutákról és algoritmikus kereskedésről.",
    "proj.podcast.name": "Blockchain Stories Podcast",
    "proj.podcast.desc": "Spotify podcast sorozat a blockchain technológiáról, kriptovalutákról és a decentralizált pénzügyi világ történeteiről.",

    // Teaching
    "teach.title": "Oktatás",
    "teach.databricks.name": "Databricks Certified Instructor",
    "teach.databricks.desc": "A Databricks hivatalos oktatójaként Data Engineering és Python képzéseket tartok vállalati környezetben.",
    "teach.ceu.name": "CEU - Programozás & Web Scraping",
    "teach.ceu.desc": "Programozás, web scraping, API-k és adatkinyerési technikák oktatása a Central European University-n.",

    // Charity
    "charity.title": "Jótékonyság",
    "charity.feny.name": "Fényhozók Alapítvány",
    "charity.feny.desc": "Napenergiával világítunk olyan hátrányos helyzetű településeken lévő házakban, ahol egyáltalán nincs áram.",
    "charity.feny.link": "fenyhozokalapitvany.hu",
    "charity.ukraine.name": "Ukrán menekült gyerekek oktatása",
    "charity.ukraine.desc": "Programozás és technológia oktatása ukrán menekült gyerekeknek Magyarországon.",

    // Education
    "edu.title": "Végzettség",
    "edu.ceu": "Master of Business Analytics - Central European University (2015-2016)",
    "edu.pte": "Fizikus BSc - Pécsi Tudományegyetem (2009-2012)",

    // Contact
    "contact.title": "Kapcsolat",
    "contact.email": "goldhand@goldhand.space",

    // Footer
    "footer.rights": "Minden jog fenntartva.",

    // Intro
    "intro.slide1.title": "Szia! 👋",
    "intro.slide1.subtitle": "Orsós Mihály vagyok",
    "intro.slide2.title": "Érdekességek rólam",
    "intro.slide2.item1": "🤖 Van egy tőzsdei robotom, ami több pénzt veszít, mint amennyit nyer",
    "intro.slide2.item2": "📈 Nagy fanatikusa vagyok a kriptónak és a részvényeknek",
    "intro.slide2.item3": "🏄 Imádom a vízisportokat — wing foil, surf és minden, ami víz",
    "intro.slide2.item4": "🎬 Van egy YouTube csatornám: @goldhandfinance",
    "intro.slide3.title": "Amit csinálok",
    "intro.slide3.item1": "🎓 Databricks Certified Instructor",
    "intro.slide3.item2": "💻 Data Scientist & fejlesztő",
    "intro.slide3.item3": "🌍 Jótékonysági projektek — napenergia hátrányos helyzetűeknek",
    "intro.slide3.item4": "🤖 AI evangelista — mindenhol azt tanítom, hogyan használjuk a mesterséges intelligenciát, mert képes vagy rá!",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.teaching": "Teaching",
    "nav.charity": "Charity",
    "nav.contact": "Contact",
    "nav.intro": "Intro",
    "nav.downloadCV": "Download CV",

    "hero.badge": "Available for training & consulting",
    "hero.greeting": "Hi, I'm",
    "hero.name": "Mihály Orsós",
    "hero.title": "Data Scientist & Databricks Instructor",
    "hero.subtitle": "I build data-driven solutions, develop trading algorithms, and train the next generation of programmers. Official Databricks instructor, AI enthusiast, and water sports lover.",
    "hero.cta": "Explore my work",

    "about.title": "About Me",
    "about.description": "I am a highly motivated data analyst and programmer with expertise in Python and R. With experience at OTP Bank, I specialize in data analysis, visualization, and web scraping. As a lecturer at CEU, I teach programming, APIs, data extraction techniques, as well as AI and large language models. Passionate about innovation, I continuously seek opportunities to expand my skill set and apply data-driven, AI-powered solutions.",

    "exp.title": "Work Experience",
    "exp.databricks.role": "AI & Data Engineering Instructor",
    "exp.databricks.company": "Databricks & Datapao",
    "exp.databricks.period": "2025 - Present",
    "exp.databricks.desc": "Delivering Databricks-based Data Engineering and Python training. Teaching Apache Spark, distributed data processing, and analytics workflows with real-world use cases.",
    "exp.mnb.role": "Crypto Asset Specialist",
    "exp.mnb.company": "Hungarian National Bank (MNB)",
    "exp.mnb.period": "2024",
    "exp.mnb.desc": "Provided technical expertise on crypto assets to legal professionals. Analysis of regulatory questions and technical consultation.",
    "exp.ceu.role": "Lecturer & IT Developer",
    "exp.ceu.company": "Central European University",
    "exp.ceu.period": "2016 - Present",
    "exp.ceu.desc": "Teaching Python, data collection, web scraping, and automation. Covering APIs, JSON, HTML, and Git with hands-on, practical approach.",
    "exp.otp.role": "IT Developer",
    "exp.otp.company": "OTP Bank",
    "exp.otp.period": "2016 - 2020",
    "exp.otp.desc": "Developed and tested big data ecosystems. Analyzed JIRA tickets to improve development efficiency.",

    "proj.title": "Projects",
    "proj.goldhand.name": "Goldhand.space",
    "proj.goldhand.desc": "Stock market indicators, backtesting modules, and everything related to trading. Real-time stock and crypto analysis with dynamic charts.",
    "proj.felhok.name": "Felhők.hu",
    "proj.felhok.desc": "Flight search platform collecting the cheapest flights daily from Budapest. Filter, sort, and search based on various criteria.",
    "proj.quiz.name": "Quiz.goldhand.space",
    "proj.quiz.desc": "Kahoot-like online quiz application enabling interactive, real-time quizzes for educational and entertainment purposes.",
    "proj.news.name": "News.goldhand.space",
    "proj.news.desc": "Personalized news summary platform. Set up the content you want to follow, and AI sends you curated summaries.",
    "proj.ai-academy.name": "AI Academy",
    "proj.ai-academy.desc": "I will teach you how to build a working AI-powered MVP (Minimum Viable Product) step-by-step, from idea to implementation.",
    "proj.youtube.name": "Goldhand Finance YouTube",
    "proj.youtube.desc": "YouTube channel about financial markets, trading strategies, cryptocurrencies, and algorithmic trading.",
    "proj.podcast.name": "Blockchain Stories Podcast",
    "proj.podcast.desc": "Spotify podcast series about blockchain technology, cryptocurrencies, and stories from the decentralized finance world.",

    "teach.title": "Teaching",
    "teach.databricks.name": "Databricks Certified Instructor",
    "teach.databricks.desc": "As an official Databricks instructor, I deliver Data Engineering and Python training in enterprise environments.",
    "teach.ceu.name": "CEU - Programming & Web Scraping",
    "teach.ceu.desc": "Teaching programming, web scraping, APIs, and data extraction techniques at Central European University.",

    "charity.title": "Charity",
    "charity.feny.name": "Fényhozók Foundation",
    "charity.feny.desc": "Bringing solar-powered lighting to homes in disadvantaged communities with no electricity.",
    "charity.feny.link": "fenyhozokalapitvany.hu",
    "charity.ukraine.name": "Teaching Ukrainian Refugee Children",
    "charity.ukraine.desc": "Programming and technology education for Ukrainian refugee children in Hungary.",

    "edu.title": "Education",
    "edu.ceu": "Master of Business Analytics - Central European University (2015-2016)",
    "edu.pte": "BSc in Physics - University of Pécs (2009-2012)",

    "contact.title": "Contact",
    "contact.email": "goldhand@goldhand.space",

    "footer.rights": "All rights reserved.",

    "intro.slide1.title": "Hey there! 👋",
    "intro.slide1.subtitle": "I'm Mihály Orsós",
    "intro.slide2.title": "Fun facts about me",
    "intro.slide2.item1": "🤖 I have a trading bot that loses more money than it makes",
    "intro.slide2.item2": "📈 I'm a huge fan of crypto and stocks",
    "intro.slide2.item3": "🏄 I love water sports — wing foiling, surfing, everything water",
    "intro.slide2.item4": "🎬 I have a YouTube channel: @goldhandfinance",
    "intro.slide3.title": "What I do",
    "intro.slide3.item1": "🎓 Databricks Certified Instructor",
    "intro.slide3.item2": "💻 Data Scientist & Developer",
    "intro.slide3.item3": "🌍 Charity projects — solar energy for the disadvantaged",
    "intro.slide3.item4": "🤖 AI evangelist — I teach everyone how to use AI, because you CAN do amazing things with it!",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("hu");

  const t = useCallback(
    (key: string) => translations[lang][key] || key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
