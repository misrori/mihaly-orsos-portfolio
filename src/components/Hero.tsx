import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container relative z-10 px-6">
        {/* Name as large background text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <span className="whitespace-nowrap font-bold text-foreground text-[8rem] sm:text-[12rem] lg:text-[16rem] leading-none select-none">
            {t("hero.name")}
          </span>
        </motion.div>

        <div className="relative flex flex-col items-center text-center">
          {/* Profile photo - prominent, no background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />
              <img
                src={profilePhoto}
                alt="Mihály Orsós"
                className="relative h-56 w-56 rounded-full border-4 border-primary/20 object-cover shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {t("hero.name")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-xl font-medium text-gradient-gold sm:text-2xl"
          >
            {t("hero.title")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              {t("hero.cta")}
              <ChevronRight size={16} />
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/misrori"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/orsosmihaly/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:ormraat.pte@gmail.com"
                className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12 flex justify-center animate-bounce text-muted-foreground lg:mt-16"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
