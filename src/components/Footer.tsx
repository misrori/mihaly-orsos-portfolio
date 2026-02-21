import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-border bg-card/50 py-12">
      <div className="container px-6 text-center">
        <h2 className="mb-6 text-2xl font-bold text-gradient-gold">{t("contact.title")}</h2>
        <a href="mailto:ormraat.pte@gmail.com" className="text-lg text-foreground transition-colors hover:text-primary">
          {t("contact.email")}
        </a>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="https://github.com/misrori" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/orsosmihaly/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
          <a href="mailto:ormraat.pte@gmail.com" className="text-muted-foreground hover:text-primary"><Mail size={20} /></a>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mihály Orsós. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
