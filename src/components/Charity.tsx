import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, ExternalLink } from "lucide-react";

const Charity = () => {
  const { t } = useLanguage();

  return (
    <section id="charity" className="section-padding">
      <div className="container px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-gradient-gold sm:text-4xl"
        >
          {t("charity.title")}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Fényhúzók */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-hover rounded-xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <Heart size={22} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {t("charity.feny.name")}
              </h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-secondary-foreground">
              {t("charity.feny.desc")}
            </p>
            <a
              href="https://fényhúzókalapítvány.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              {t("charity.feny.link")} <ExternalLink size={14} />
            </a>
            {/* YouTube placeholder */}
            <div className="mt-4 flex h-40 items-center justify-center rounded-lg border border-border bg-secondary text-sm text-muted-foreground">
              📺 YouTube videó helye
            </div>
          </motion.div>

          {/* Ukraine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-hover rounded-xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <Heart size={22} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {t("charity.ukraine.name")}
              </h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-secondary-foreground">
              {t("charity.ukraine.desc")}
            </p>
            {/* Article links placeholder */}
            <div className="space-y-2">
              <div className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
                📰 Cikk #1 – placeholder
              </div>
              <div className="rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
                📰 Cikk #2 – placeholder
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Charity;
