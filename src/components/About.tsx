import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Database, Brain, BarChart3 } from "lucide-react";

const skills = [
  { icon: Code, label: "Python, R, Streamlit, Shiny" },
  { icon: Database, label: "SQL, Apache Spark, Big Data" },
  { icon: Brain, label: "LLM, AI, Machine Learning" },
  { icon: BarChart3, label: "Stock & Crypto Analytics" },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-gradient-gold sm:text-4xl"
        >
          {t("about.title")}
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base leading-relaxed text-secondary-foreground sm:text-lg"
          >
            {t("about.description")}
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i }}
                className="card-hover flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <skill.icon size={24} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="mb-6 text-xl font-semibold text-foreground">{t("edu.title")}</h3>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card px-5 py-4 text-sm text-secondary-foreground">
              🎓 {t("edu.ceu")}
            </div>
            <div className="rounded-lg border border-border bg-card px-5 py-4 text-sm text-secondary-foreground">
              🎓 {t("edu.pte")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
