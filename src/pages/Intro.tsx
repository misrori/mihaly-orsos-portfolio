import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Intro = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: t("intro.slide1.title"),
      content: (
        <div className="flex flex-col items-center gap-6">
          <p className="text-2xl font-medium text-foreground sm:text-4xl">
            {t("intro.slide1.subtitle")}
          </p>
          <p className="text-lg text-primary sm:text-xl">Data Scientist & Instructor</p>
        </div>
      ),
    },
    {
      title: t("intro.slide2.title"),
      content: (
        <div className="flex flex-col gap-6 text-left">
          {["item1", "item2", "item3", "item4"].map((key) => (
            <motion.p
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * parseInt(key.slice(-1)) }}
              className="text-lg text-secondary-foreground sm:text-xl"
            >
              {t(`intro.slide2.${key}`)}
            </motion.p>
          ))}
        </div>
      ),
    },
    {
      title: t("intro.slide3.title"),
      content: (
        <div className="flex flex-col gap-6 text-left">
          {["item1", "item2", "item3", "item4"].map((key) => (
            <motion.p
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * parseInt(key.slice(-1)) }}
              className="text-lg text-secondary-foreground sm:text-xl"
            >
              {t(`intro.slide3.${key}`)}
            </motion.p>
          ))}
        </div>
      ),
    },
  ];

  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : slides.length - 1));
  const next = () => setCurrent((c) => (c < slides.length - 1 ? c + 1 : 0));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <a href="/" className="text-xl font-bold text-gradient-gold">MO</a>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            {current + 1} / {slides.length}
          </span>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Slide */}
      <div className="flex flex-1 items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl text-center"
          >
            <h2 className="mb-10 text-4xl font-bold text-gradient-gold sm:text-5xl">
              {slides[current].title}
            </h2>
            <div className="mx-auto">{slides[current].content}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 border-t border-border px-6 py-6">
        <button
          onClick={prev}
          className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Intro;
