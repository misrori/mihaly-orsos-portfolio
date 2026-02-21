import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "hu" ? "en" : "hu")}
      className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
    >
      <span className={lang === "hu" ? "text-primary font-semibold" : ""}>HU</span>
      <span className="text-border">/</span>
      <span className={lang === "en" ? "text-primary font-semibold" : ""}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
