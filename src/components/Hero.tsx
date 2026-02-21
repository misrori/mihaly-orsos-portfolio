import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import profileCutout from "@/assets/profile-cutout.png";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="relative grid min-h-[85vh] grid-cols-1 items-center lg:grid-cols-12">
          
          {/* Large name in the background - spans full width behind everything */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="pointer-events-none absolute inset-0 flex items-center justify-start select-none overflow-hidden"
          >
            <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold leading-[0.85] tracking-tight text-foreground/[0.07]">
              {t("hero.name").split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
          </motion.div>

          {/* Profile photo - centered, large, no circle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex items-end justify-center lg:col-span-5 lg:col-start-2"
          >
            <div className="relative">
              <img
                src={profileCutout}
                alt="Mihály Orsós"
                className="h-[24rem] sm:h-[30rem] lg:h-[36rem] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              />
            </div>
          </motion.div>

          {/* Text content - right side */}
          <div className="relative z-20 lg:col-span-5 lg:col-start-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              {t("hero.name")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4 text-lg font-medium text-gradient-gold"
            >
              {t("hero.title")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                <a href="https://github.com/misrori" target="_blank" rel="noopener noreferrer"
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/orsosmihaly/" target="_blank" rel="noopener noreferrer"
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary">
                  <Linkedin size={16} />
                </a>
                <a href="mailto:ormraat.pte@gmail.com"
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary">
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
