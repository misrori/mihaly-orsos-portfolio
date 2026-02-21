import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap } from "lucide-react";

const Teaching = () => {
  const { t } = useLanguage();

  const items = [
    { key: "databricks", badge: "Certified" },
    { key: "ceu", badge: "University" },
  ];

  return (
    <section id="teaching" className="section-padding bg-card/30">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-gradient-gold sm:text-4xl"
        >
          {t("teach.title")}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="card-hover rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap size={22} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`teach.${item.key}.name`)}
                </h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {item.badge}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-secondary-foreground">
                {t(`teach.${item.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;
