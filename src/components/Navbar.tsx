import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X, Download } from "lucide-react";

const navKeys = ["about", "experience", "projects", "teaching", "charity", "contact"] as const;

const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-gradient-gold">MO</a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <a href="/intro" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            {t("nav.intro")}
          </a>
          <a
            href="/Curriculum_Vitae_Mihaly_Orsos.pdf"
            download
            className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <Download size={14} />
            {t("nav.downloadCV")}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
            <a href="/intro" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {t("nav.intro")}
            </a>
            <a
              href="/Curriculum_Vitae_Mihaly_Orsos.pdf"
              download
              className="flex w-fit items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Download size={14} />
              {t("nav.downloadCV")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
