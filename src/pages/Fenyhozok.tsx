import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sun, BatteryFull, Zap, Lightbulb, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Lang = "hu" | "en";

/* ──────────────────────────── Bilingual content ──────────────────────────── */

const ui = {
  hu: { prev: "Előző dia", next: "Következő dia", goTo: "Ugrás a diára", openYT: "Megnyitás YouTube-on" },
  en: { prev: "Previous slide", next: "Next slide", goTo: "Go to slide", openYT: "Open on YouTube" },
};

const videoData = [
  {
    hu: { title: "Naplopók táborozás, Nagyecsed (2014)", desc: "A Zöld Akadémia a Roma Versitas Alapítvány szervezésében. Itt Daróczi Gábor a kezembe nyomott egy OBI-ban található kerti lámpát: 'Rakj erre egy kapcsolót.' Innen indult minden." },
    en: { title: "Naplopók camp, Nagyecsed (2014)", desc: "The Green Academy organized by the Roma Versitas Foundation. Here Gábor Daróczi handed me a garden lamp from an OBI store: 'Put a switch on this.' This is where everything started." },
    embedUrl: "https://www.youtube.com/embed/OHzBTgARycA",
    watchUrl: "https://www.youtube.com/watch?v=OHzBTgARycA",
  },
  {
    hu: { title: "Sörös napkollektor prototípus", desc: "Gyakorlatias és olcsó fenntarthatósági kísérlet, ami az alapítvány tudásának részévé vált." },
    en: { title: "Beer solar collector prototype", desc: "A practical and low-cost sustainability experiment that became part of the foundation's know-how." },
    embedUrl: "https://www.youtube.com/embed/V8cXke9Aaf0",
    watchUrl: "https://www.youtube.com/watch?v=V8cXke9Aaf0",
  },
  {
    hu: { title: "Első telepítés Bakson (2014. október)", desc: "Az első valós telepítés dokumentálása. Ez volt a legelső alkalom, amikor a rendszert éles környezetben kipróbáltuk." },
    en: { title: "First installation in Baks (October 2014)", desc: "Documenting the very first real installation. This was the first time the system was tested in a live environment." },
    embedUrl: "https://www.youtube.com/embed/l-rXRCe9RMs",
    watchUrl: "https://www.youtube.com/watch?v=l-rXRCe9RMs",
  },
  {
    hu: { title: "Tudásátadás a telepítésről", desc: "A következő lépés: nem mi telepítettünk, hanem átadtuk a közösségnek a tudást, hogy ők maguk is tudjanak ilyen rendszereket építeni és karbantartani." },
    en: { title: "Knowledge transfer about installation", desc: "The next step: we didn't install ourselves, but transferred the knowledge to the community so they could build and maintain these systems on their own." },
    embedUrl: "https://www.youtube.com/embed/ASU5NwAgj0Y",
    watchUrl: "https://www.youtube.com/watch?v=ASU5NwAgj0Y",
  },
];

const solarLabels = {
  hu: {
    title: "Hogyan működik a rendszer",
    solar: "Napelem", solarDesc: "Gyűjti a napenergiát",
    charge: "Töltésvezérlő", chargeDesc: "Szabályozza a töltést, védi az akkumulátort",
    battery: "Akkumulátor", batteryDesc: "Tárolja az energiát éjszakai használatra",
    led: "LED szalag", ledDesc: "Világítja meg az otthont",
  },
  en: {
    title: "How the system works",
    solar: "Solar Panel", solarDesc: "Collects energy from sunlight",
    charge: "Charge Controller", chargeDesc: "Regulates charging, protects the battery",
    battery: "Battery", batteryDesc: "Stores energy for nighttime use",
    led: "LED Strip", ledDesc: "Provides light to the home",
  },
};

const slides_t = {
  hu: {
    // Slide 0 - Title
    s0_title: "Fényhozók Alapítvány",
    s0_subtitle: "Közösségvezérelt fellépés a magyarországi energiaszegénység ellen.",
    s0_desc: "Ez a prezentáció bemutatja, hogyan indult a kezdeményezés, hogyan fejlődött 2014-ben, és hogyan adtuk át a gyakorlati tudást telepítéseken és helyi együttműködésen keresztül.",
    // Slide 1 - How it started
    s1_title: "Hogyan indult",
    s1_p1: "2014-ben a Roma Versitas Alapítvány szervezésében egy Zöld Akadémia programon vettem részt Nagyecseden.",
    s1_p2: "Daróczi Gábor odaadott egy kerti lámpát: 'Rakj erre egy kapcsolót!' – és innen indult el az egész.",
    s1_p3: "Hazamentem és elgondolkodtam: hogyan lehetne ezt nagyobb léptékben megvalósítani? Így kezdődött a Fényhozók történetem.",
    // Slide 7 - Birth of foundation
    s7_title: "Így született a Fényhozók Alapítvány",
    s7_p1: "A gyakorlati tapasztalat megmutatta, hogy helyi, egyszerű megoldások valós hatást érhetnek el, ha a technikai tudás és a közösségi elkötelezettség találkozik.",
    s7_p2: "A hosszú távú cél nem csak a telepítés, hanem a tudásépítés: hogy az emberek megértsék, használják és továbbadják a megfizethető energiamegoldásokat.",
    // Research slides
    s8_title: "Mi az energiaszegénység?",
    s8_quote: "Amikor a háztartások nem képesek megfizetni a megfelelő fűtést vagy az alapvető energiafelhasználás költségét.",
    s8_c1_title: "Magas energiaköltségek",
    s8_c1_desc: "Az energiakiadások aránytalanul magasak a jövedelemhez képest",
    s8_c2_title: "Rossz hatékonyságú lakások",
    s8_c2_desc: "Elavult épületek, rossz szigetelés, korszerűtlen fűtésrendszer",
    s8_c3_title: "Alacsony jövedelem",
    s8_c3_desc: "A családok nem tudják fizetni a rezsit és a megélhetésüket is",
    // Stats
    s9_title: "A számok",
    s9_sub: "Magyarországi energiaszegénység alakulása",
    s9_y1: "2014", s9_v1: "21%", s9_d1: "~800 ezer háztartás",
    s9_y2: "2022", s9_v2: "4.7%", s9_d2: "~180 ezer háztartás",
    s9_y3: "2023", s9_v3: "7.2%", s9_d3: "~700 ezer ember",
    s9_note: "A trend javuló, de százezrek vannak még veszélyben.",
    // Who affected
    s10_title: "Kiket érint leginkább?",
    s10_c1: "Vidéki családok", s10_c1d: "Rosszul szigetelt önálló családi házakban élő, alacsony jövedelmű családok",
    s10_c2: "Északkelet-Magyarország", s10_c2d: "Kistelepülések, ahol a rossz épületállomány és a fafűtés dominál",
    s10_c3: "Nagycsaládok, egyedül nevelők", s10_c3d: "Az átlagosnál gyakoribb a fűtéshiány és a komforthiány",
    s10_c4: "54–60% nem számít szegénynek", s10_c4d: "Papíron nem jövedelmi szegény, mégis nem tudják fizetni a fűtést",
    // Why persists
    s11_title: "Miért marad fenn a probléma?",
    s11_p1: "Változékony energiaárak és stagnáló jövedelmek",
    s11_p2: "A rezsicsökkentés nem ösztönözte a takarékoskodást: 2013–2021 között +34% energiafogyasztás",
    s11_p3: "Elavult épületek, korszerűtlen kályhák, fatüzelés-függőség",
    s11_p4: "Az energiaszegénység az energiaköltségek, alacsony jövedelem és rossz háztartási energiahatékonyság kombinációja (EU Bizottság)",
    // Impact
    s12_title: "Hatás az emberekre",
    s12_c1: "Egészségromlás", s12_c1d: "Légzőszervi betegségek, nedves tűzifa és műanyag égetése, keringési problémák",
    s12_c2: "Szegénységi csapda", s12_c2d: "Adósság, csökkent munkaképesség, ismétlődő vészhelyzeti kiadások",
    s12_c3: "Gyerekek esélyei", s12_c3d: "Fagyos lakásban kevesebbet tanulnak, iskolai lemorzsolódás nő, szegregáció erősödik",
    // Organizations
    s13_title: "Szervezetek az energiaszegénység ellen",
    // What works
    s14_title: "Mi működik?",
    s14_c1: "Állami eszközök", s14_c1d: "Rezsicsökkentés, szociális juttatások, tűzifa-programok rövid távú védelmet nyújtanak",
    s14_c2: "Civil szervezetek", s14_c2d: "Célzott segítségnyújtás: házlátogatás, energiatanácsadás, kis felújítási csomagok",
    s14_c3: "Partnerségi modell", s14_c3d: "A legjobb eredmények az önkormányzatok, NGO-k és támogatók együttműködéséből születnek",
    // Recommendations
    s15_title: "Javaslatok",
    s15_short: "Rövid táv", s15_short_items: "Célzott vészhelyzeti támogatás | Tartozáskezelés | Helyi energiatanácsadás",
    s15_long: "Hosszú táv", s15_long_items: "Épületfelújítás (szigetelés, nyílászárócsere, fűtéskorszerűsítés) | Szociális célzás",
    s15_fin: "Finanszírozás", s15_fin_items: "Vegyes támogatások | Megfizethető zöld hitelek | Közösségi pilot projektek",
    s15_principle: "Alapelv: A válságkezelés helyett kapacitásépítés, hogy a háztartások ellenállóképesek maradjanak.",
    // Study
    s16_title: "Tanulmány letöltés",
    s16_desc: "A magyarországi energiaszegénységről készült részletes tanulmány letölthető magyar és angol nyelven.",
    s16_hu: "Magyar változat (PDF)",
    s16_en: "Angol változat (PDF)",
  },
  en: {
    s0_title: "Fényhozók Foundation",
    s0_subtitle: "Community-driven action against energy poverty in Hungary.",
    s0_desc: "This presentation shows how the initiative started, how it evolved in 2014, and how practical knowledge was transferred through real installations and local collaboration.",
    s1_title: "How it started",
    s1_p1: "In 2014, I participated in a Green Academy program organized by the Roma Versitas Foundation in Nagyecsed.",
    s1_p2: "Gábor Daróczi handed me a garden lamp: 'Put a switch on this!' - and that's where everything began.",
    s1_p3: "I went home and thought: how could this be done at a larger scale? This is how the Fényhozók story started.",
    s7_title: "The birth of Fényhozók Foundation",
    s7_p1: "Practical experience showed that local, simple solutions can create real impact when technical know-how and community commitment come together.",
    s7_p2: "The long-term goal is not just installation, but capacity building: enabling people to understand, use, and further spread affordable energy solutions.",
    s8_title: "What is energy poverty?",
    s8_quote: "When households cannot afford adequate heating or basic energy services.",
    s8_c1_title: "High energy costs",
    s8_c1_desc: "Energy expenditure is disproportionately high relative to income",
    s8_c2_title: "Poor housing efficiency",
    s8_c2_desc: "Outdated buildings, poor insulation, non-modern heating systems",
    s8_c3_title: "Low income",
    s8_c3_desc: "Families cannot pay utilities and cover basic living costs",
    s9_title: "The numbers",
    s9_sub: "Energy poverty trends in Hungary",
    s9_y1: "2014", s9_v1: "21%", s9_d1: "~800,000 households",
    s9_y2: "2022", s9_v2: "4.7%", s9_d2: "~180,000 households",
    s9_y3: "2023", s9_v3: "7.2%", s9_d3: "~700,000 people",
    s9_note: "The trend shows improvement, but hundreds of thousands remain at risk.",
    s10_title: "Who is most affected?",
    s10_c1: "Rural families", s10_c1d: "Low-income families in poorly insulated detached houses",
    s10_c2: "Northeast Hungary", s10_c2d: "Small settlements where poor buildings and wood heating dominate",
    s10_c3: "Large families, single parents", s10_c3d: "Higher-than-average heating and comfort deficiency",
    s10_c4: "54–60% not classified as poor", s10_c4d: "Not income-poor on paper, yet cannot afford heating",
    s11_title: "Why the problem persists",
    s11_p1: "Volatile energy prices and stagnating incomes",
    s11_p2: "Utility cost reduction didn't incentivize savings: +34% energy consumption 2013–2021",
    s11_p3: "Aging buildings, outdated stoves, firewood dependence",
    s11_p4: "Energy poverty is the combination of energy costs, low income, and poor household energy efficiency (EU Commission)",
    s12_title: "Human impact",
    s12_c1: "Health damage", s12_c1d: "Respiratory diseases, wet firewood and plastic burning, circulatory problems",
    s12_c2: "Poverty trap", s12_c2d: "Debt, reduced work capacity, repeated emergency spending",
    s12_c3: "Children's outcomes", s12_c3d: "Less learning in cold homes, higher dropout rates, deeper segregation",
    s13_title: "Organizations fighting energy poverty",
    s14_title: "What works?",
    s14_c1: "Government tools", s14_c1d: "Utility cost reduction, social benefits, firewood programs provide short-term protection",
    s14_c2: "Civil organizations", s14_c2d: "Targeted outreach: home visits, energy counseling, small retrofit kits",
    s14_c3: "Partnership model", s14_c3d: "Best results come from municipalities, NGOs, and donors working together",
    s15_title: "Recommendations",
    s15_short: "Short term", s15_short_items: "Targeted emergency support | Arrears management | Local energy coaching",
    s15_long: "Long term", s15_long_items: "Building renovation (insulation, windows, heating upgrades) | Social targeting",
    s15_fin: "Financing", s15_fin_items: "Blended grants | Affordable green loans | Community pilot projects",
    s15_principle: "Core principle: Move from crisis relief to capacity building so households can stay resilient.",
    s16_title: "Download the study",
    s16_desc: "The detailed study on energy poverty in Hungary is available in Hungarian and English.",
    s16_hu: "Hungarian version (PDF)",
    s16_en: "English version (PDF)",
  },
};

const orgData = {
  hu: [
    { name: "Fényhozók Alapítvány", focus: "DIY napelem mélyszegénységben", scale: "Közösségi, helyi" },
    { name: "Habitat for Humanity HU", focus: "Lakásfelújítás, energiahatékonyság", scale: "Nagymértékű, országos" },
    { name: "Energiaklub", focus: "Kutatás, energiatanácsadás", scale: "Közepes, szakpolitikai" },
    { name: "Katolikus Karitász (LAK6)", focus: "Krízistámogatás, közüzemi tartozások", scale: "Nagymértékű, egyházi" },
    { name: "Magyar Vöröskereszt", focus: "Energiatanácsadás, segélycsomagok", scale: "Közepes, országos" },
    { name: "Magyar Máltai Szeretetszolgálat", focus: "Szociális segély, lakásfelújítás", scale: "Nagymértékű, országos" },
  ],
  en: [
    { name: "Fényhozók Foundation", focus: "DIY solar for deep poverty", scale: "Community-based, local" },
    { name: "Habitat for Humanity HU", focus: "Housing renovation, energy efficiency", scale: "Large-scale, nationwide" },
    { name: "Energiaklub", focus: "Research, energy counseling", scale: "Medium, policy-focused" },
    { name: "Catholic Caritas (LAK6)", focus: "Crisis support, utility debts", scale: "Large-scale, church network" },
    { name: "Hungarian Red Cross", focus: "Energy counseling, emergency kits", scale: "Medium, nationwide" },
    { name: "Hungarian Maltese Charity", focus: "Social aid, housing renovation", scale: "Large-scale, nationwide" },
  ],
};

/* ──────────────────────────── Solar Diagram ──────────────────────────── */

const SolarDiagram = ({ lang }: { lang: Lang }) => {
  const t = solarLabels[lang];
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 1200),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => setStep(4), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [lang]);

  const box = (visible: boolean, icon: React.ReactNode, label: string, desc: string, color: string) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col items-center gap-1 rounded-xl border-2 px-4 py-3 sm:px-6 sm:py-4 ${color}`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-base font-bold sm:text-lg">{label}</span>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-xs text-muted-foreground sm:text-sm"
      >
        {desc}
      </motion.span>
    </motion.div>
  );

  const wire = (visible: boolean) => (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={visible ? { scaleY: 1 } : { scaleY: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto h-8 w-0.5 origin-top bg-primary/60 sm:h-10"
    />
  );

  return (
    <div className="flex flex-col items-center gap-0">
      {box(step >= 2, <Sun className="h-6 w-6 text-amber-400" />, t.solar, t.solarDesc, "border-amber-400/50 bg-amber-400/5")}
      {wire(step >= 2)}
      {box(step >= 1, <Zap className="h-6 w-6 text-blue-400" />, t.charge, t.chargeDesc, "border-blue-400/50 bg-blue-400/5")}
      <div className="flex w-full max-w-md items-start justify-center gap-4 sm:gap-12">
        <div className="flex flex-col items-center">
          {wire(step >= 3)}
          {box(step >= 3, <BatteryFull className="h-6 w-6 text-green-400" />, t.battery, t.batteryDesc, "border-green-400/50 bg-green-400/5")}
        </div>
        <div className="flex flex-col items-center">
          {wire(step >= 4)}
          {box(step >= 4, <Lightbulb className="h-6 w-6 text-yellow-300" />, t.led, t.ledDesc, "border-yellow-300/50 bg-yellow-300/5")}
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────── Reusable components ──────────────────────────── */

const StatBlock = ({ year, value, desc, delay }: { year: string; value: string; desc: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-5 py-6 shadow-sm sm:px-8"
  >
    <span className="text-sm font-medium text-muted-foreground">{year}</span>
    <span className="text-4xl font-extrabold text-primary sm:text-5xl">{value}</span>
    <span className="text-sm text-secondary-foreground sm:text-base">{desc}</span>
  </motion.div>
);

const InfoCard = ({ title, desc, delay }: { title: string; desc: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="rounded-xl border border-border bg-card p-5 text-left shadow-sm sm:p-6"
  >
    <h3 className="mb-2 text-lg font-bold text-foreground sm:text-xl">{title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{desc}</p>
  </motion.div>
);

/* ──────────────────────────── Main Component ──────────────────────────── */

const Fenyhozok = () => {
  const { lang, setLang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const t = slides_t[lang as Lang] || slides_t.hu;
  const uiT = ui[lang as Lang] || ui.hu;
  const orgs = orgData[lang as Lang] || orgData.hu;

  const slides = [
    // 0 - Title
    {
      title: t.s0_title,
      content: (
        <div className="flex flex-col items-center gap-6">
          <p className="text-xl text-secondary-foreground sm:text-3xl">{t.s0_subtitle}</p>
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.s0_desc}</p>
        </div>
      ),
    },
    // 1 - How it started
    {
      title: t.s1_title,
      content: (
        <div className="flex max-w-3xl flex-col gap-6 text-left">
          {[t.s1_p1, t.s1_p2, t.s1_p3].map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3, duration: 0.5 }}
              className="text-lg leading-relaxed text-secondary-foreground sm:text-xl"
            >
              {p}
            </motion.p>
          ))}
        </div>
      ),
    },
    // 2-5 - Videos
    ...videoData.map((video) => {
      const vt = video[lang as Lang] || video.hu;
      return {
        title: vt.title,
        content: (
          <div className="flex w-full flex-col gap-5">
            <p className="text-base text-secondary-foreground sm:text-lg">{vt.desc}</p>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <iframe
                className="h-[220px] w-full sm:h-[420px]"
                src={video.embedUrl}
                title={vt.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href={video.watchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5" /> {uiT.openYT}
            </a>
          </div>
        ),
      };
    }),
    // 6 - Solar system diagram
    {
      title: solarLabels[lang as Lang]?.title || solarLabels.hu.title,
      content: <SolarDiagram lang={(lang as Lang) || "hu"} />,
    },
    // 7 - Birth of foundation
    {
      title: t.s7_title,
      content: (
        <div className="flex max-w-3xl flex-col gap-6 text-left">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed text-secondary-foreground sm:text-xl">
            {t.s7_p1}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg leading-relaxed text-secondary-foreground sm:text-xl">
            {t.s7_p2}
          </motion.p>
        </div>
      ),
    },
    // 8 - Definition
    {
      title: t.s8_title,
      content: (
        <div className="flex flex-col items-center gap-8">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5 text-left text-lg font-medium italic text-foreground sm:text-2xl"
          >
            &ldquo;{t.s8_quote}&rdquo;
          </motion.blockquote>
          <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-3">
            <InfoCard title={t.s8_c1_title} desc={t.s8_c1_desc} delay={0.3} />
            <InfoCard title={t.s8_c2_title} desc={t.s8_c2_desc} delay={0.5} />
            <InfoCard title={t.s8_c3_title} desc={t.s8_c3_desc} delay={0.7} />
          </div>
        </div>
      ),
    },
    // 9 - Statistics
    {
      title: t.s9_title,
      content: (
        <div className="flex flex-col items-center gap-6">
          <p className="text-base text-muted-foreground sm:text-lg">{t.s9_sub}</p>
          <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-3">
            <StatBlock year={t.s9_y1} value={t.s9_v1} desc={t.s9_d1} delay={0.2} />
            <StatBlock year={t.s9_y2} value={t.s9_v2} desc={t.s9_d2} delay={0.5} />
            <StatBlock year={t.s9_y3} value={t.s9_v3} desc={t.s9_d3} delay={0.8} />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="max-w-2xl text-center text-sm text-muted-foreground sm:text-base"
          >
            {t.s9_note}
          </motion.p>
        </div>
      ),
    },
    // 10 - Who affected
    {
      title: t.s10_title,
      content: (
        <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2">
          <InfoCard title={t.s10_c1} desc={t.s10_c1d} delay={0.1} />
          <InfoCard title={t.s10_c2} desc={t.s10_c2d} delay={0.3} />
          <InfoCard title={t.s10_c3} desc={t.s10_c3d} delay={0.5} />
          <InfoCard title={t.s10_c4} desc={t.s10_c4d} delay={0.7} />
        </div>
      ),
    },
    // 11 - Why persists
    {
      title: t.s11_title,
      content: (
        <div className="flex max-w-3xl flex-col gap-5 text-left">
          {[t.s11_p1, t.s11_p2, t.s11_p3].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.25, duration: 0.4 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 sm:p-5"
            >
              <span className="mt-0.5 text-2xl text-primary">&#x2022;</span>
              <p className="text-base leading-relaxed text-secondary-foreground sm:text-lg">{p}</p>
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-2 rounded-xl border-l-4 border-primary bg-primary/5 px-5 py-4 text-sm italic text-muted-foreground sm:text-base"
          >
            {t.s11_p4}
          </motion.p>
        </div>
      ),
    },
    // 12 - Human impact
    {
      title: t.s12_title,
      content: (
        <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          <InfoCard title={t.s12_c1} desc={t.s12_c1d} delay={0.1} />
          <InfoCard title={t.s12_c2} desc={t.s12_c2d} delay={0.3} />
          <InfoCard title={t.s12_c3} desc={t.s12_c3d} delay={0.5} />
        </div>
      ),
    },
    // 13 - Organizations
    {
      title: t.s13_title,
      content: (
        <div className="grid w-full max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {orgs.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="rounded-xl border border-border bg-card p-4 text-left shadow-sm sm:p-5"
            >
              <h3 className="mb-1 text-base font-bold text-foreground sm:text-lg">{org.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">{org.focus}</p>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">{org.scale}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    // 14 - What works
    {
      title: t.s14_title,
      content: (
        <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          <InfoCard title={t.s14_c1} desc={t.s14_c1d} delay={0.1} />
          <InfoCard title={t.s14_c2} desc={t.s14_c2d} delay={0.3} />
          <InfoCard title={t.s14_c3} desc={t.s14_c3d} delay={0.5} />
        </div>
      ),
    },
    // 15 - Recommendations
    {
      title: t.s15_title,
      content: (
        <div className="flex w-full max-w-4xl flex-col gap-4">
          {[
            { label: t.s15_short, items: t.s15_short_items, color: "border-amber-400/50 bg-amber-400/5" },
            { label: t.s15_long, items: t.s15_long_items, color: "border-blue-400/50 bg-blue-400/5" },
            { label: t.s15_fin, items: t.s15_fin_items, color: "border-green-400/50 bg-green-400/5" },
          ].map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.25, duration: 0.4 }}
              className={`rounded-xl border-2 p-4 text-left sm:p-5 ${row.color}`}
            >
              <h3 className="mb-2 text-lg font-bold text-foreground sm:text-xl">{row.label}</h3>
              <div className="flex flex-wrap gap-2">
                {row.items.split(" | ").map((item) => (
                  <span key={item} className="rounded-lg bg-background/80 px-3 py-1 text-sm text-secondary-foreground sm:text-base">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-2 text-center text-base font-medium italic text-muted-foreground sm:text-lg"
          >
            {t.s15_principle}
          </motion.p>
        </div>
      ),
    },
    // 16 - Study download
    {
      title: t.s16_title,
      content: (
        <div className="flex flex-col items-center gap-6">
          <p className="max-w-2xl text-center text-base text-muted-foreground sm:text-lg">{t.s16_desc}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/energy_poverty_hungary_hu.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/5 px-6 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/60 hover:bg-primary/10 sm:text-lg"
            >
              <Download className="h-5 w-5 text-primary" /> {t.s16_hu}
            </a>
            <a
              href="/energy_poverty_hungary.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-400/30 bg-blue-400/5 px-6 py-4 text-base font-semibold text-foreground transition-all hover:border-blue-400/60 hover:bg-blue-400/10 sm:text-lg"
            >
              <Download className="h-5 w-5 text-blue-400" /> {t.s16_en}
            </a>
          </div>
        </div>
      ),
    },
  ];

  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : slides.length - 1));
  const next = () => setCurrent((c) => (c < slides.length - 1 ? c + 1 : 0));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" className="text-xl font-bold text-gradient-gold">MO</a>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "hu" ? "en" : "hu")}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <span className={lang === "hu" ? "font-semibold text-primary" : ""}>HU</span>
            <span className="text-border">/</span>
            <span className={lang === "en" ? "font-semibold text-primary" : ""}>EN</span>
          </button>
          <span className="font-mono text-sm text-muted-foreground">
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Slide content */}
      <div className="flex flex-1 items-center justify-center overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current}-${lang}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-5xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gradient-gold sm:mb-8 sm:text-5xl">
              {slides[current].title}
            </h2>
            <div className="mx-auto">{slides[current].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 border-t border-border px-4 py-4 sm:gap-6 sm:px-6 sm:py-6">
        <button
          onClick={prev}
          className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary sm:p-3"
          aria-label={uiT.prev}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-primary sm:w-8" : "w-2 bg-border hover:bg-muted-foreground/30"
              }`}
              aria-label={`${uiT.goTo} ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary sm:p-3"
          aria-label={uiT.next}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Fenyhozok;
