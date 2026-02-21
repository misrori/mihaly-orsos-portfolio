import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();

  const jobs = [
    { key: "databricks", color: "border-l-primary" },
    { key: "mnb", color: "border-l-gold-glow" },
    { key: "ceu", color: "border-l-primary" },
    { key: "otp", color: "border-l-gold-dim" },
  ];

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-gradient-gold sm:text-4xl"
        >
          {t("exp.title")}
        </motion.h2>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`card-hover rounded-xl border border-border bg-card p-6 border-l-4 ${job.color}`}
            >
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <Briefcase size={18} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`exp.${job.key}.role`)}
                </h3>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm font-medium text-primary">
                  {t(`exp.${job.key}.company`)}
                </span>
              </div>
              <p className="mb-2 font-mono text-xs text-muted-foreground">
                {t(`exp.${job.key}.period`)}
              </p>
              <p className="text-sm leading-relaxed text-secondary-foreground">
                {t(`exp.${job.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
