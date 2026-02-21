import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container relative z-10 px-6">
        <div className="relative flex min-h-[80vh] items-end pb-16 lg:items-center lg:pb-0">
          
          {/* Large name in the background */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0 select-none"
          >
            <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-bold leading-[0.85] tracking-tight text-foreground/10">
              {t("hero.name").split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
          </motion.div>

          {/* Profile photo - large, no circle, overlapping the text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 lg:left-[30%] lg:-translate-x-1/2"
          >
            <img
              src={profilePhoto}
              alt="Mihály Orsós"
              className="h-[28rem] sm:h-[34rem] lg:h-[40rem] w-auto object-cover object-top drop-shadow-2xl"
            />
            {/* Gradient fade at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </motion.div>

          {/* Text content - positioned to the right */}
          <div className="relative z-20 ml-auto w-full lg:w-[45%] lg:pl-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-2 font-mono text-xs uppercase tracking-widest text-primary"
            >
              {t("hero.title")}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-4 text-2xl font-bold leading-snug text-foreground sm:text-3xl"
            >
              {t("hero.subtitle")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-4"
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
