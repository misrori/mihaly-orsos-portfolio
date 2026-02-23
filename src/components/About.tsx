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
          <h3 className="mb-6 text-2xl font-bold text-foreground">{t("edu.title")}</h3>
          <div className="space-y-4">
            <div className="card-hover rounded-xl border border-border bg-card px-6 py-5">
              <p className="text-lg font-semibold text-foreground">🎓 Master of Business Analytics</p>
              <p className="mt-1 text-base text-secondary-foreground">Central European University (2015-2016)</p>
            </div>
            <div className="card-hover rounded-xl border border-border bg-card px-6 py-5">
              <p className="text-lg font-semibold text-foreground">🎓 {t("edu.pte").split(" - ")[0]}</p>
              <p className="mt-1 text-base text-secondary-foreground">{t("edu.pte").split(" - ")[1]}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
