import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute left-1/4 bottom-1/4 h-48 w-48 rounded-full bg-primary/8 blur-2xl" />

      <div className="container relative z-10 px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-primary">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              {t("hero.name")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 text-xl font-medium text-gradient-gold sm:text-2xl"
            >
              {t("hero.title")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
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

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
              <img
                src={profilePhoto}
                alt="Mihály Orsós"
                className="relative h-64 w-64 rounded-full border-4 border-primary/20 object-cover shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              />
              {/* Decorative accent */}
              <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-primary/80 sm:h-24 sm:w-24" />
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary/60" />
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
