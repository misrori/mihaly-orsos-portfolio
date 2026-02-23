import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, TrendingUp, Plane, HelpCircle, Newspaper, Youtube, Podcast } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    { key: "goldhand", icon: TrendingUp, url: "https://goldhand.space", tag: "Trading & Analytics" },
    { key: "felhok", icon: Plane, url: "https://felhok.hu", tag: "Travel" },
    { key: "quiz", icon: HelpCircle, url: "https://quiz.goldhand.space", tag: "Education" },
    { key: "news", icon: Newspaper, url: "https://news.goldhand.space", tag: "AI & News" },
    { key: "youtube", icon: Youtube, url: "https://www.youtube.com/@goldhandfinance", tag: "YouTube" },
    { key: "podcast", icon: Podcast, url: "https://open.spotify.com/show/4vYHW2unj3heoa34nbHmIj", tag: "Podcast" },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-gradient-gold sm:text-4xl"
        >
          {t("proj.title")}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.key}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="group card-hover flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <proj.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t(`proj.${proj.key}.name`)}
                  </h3>
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground transition-colors group-hover:text-primary"
                />
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-secondary-foreground">
                {t(`proj.${proj.key}.desc`)}
              </p>
              <span className="w-fit rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {proj.tag}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
