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
              href="https://www.fenyhozokalapitvany.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              {t("charity.feny.link")} <ExternalLink size={14} />
            </a>
            <div className="mt-4 space-y-2">
              <a
                href="https://www.youtube.com/watch?v=l-rXRCe9RMs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                🎥 Fényhúzók – Bemutatóvideó
                <ExternalLink size={14} className="shrink-0 text-muted-foreground" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=ASU5NwAgj0Y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                🎥 Fényhúzók – Videó 2
                <ExternalLink size={14} className="shrink-0 text-muted-foreground" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=VQoJknN4yfs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                🎥 Fényhúzók – Videó 3
                <ExternalLink size={14} className="shrink-0 text-muted-foreground" />
              </a>
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
            {/* Article links */}
            <div className="space-y-2">
              <a
                href="https://wmn.hu/ugy/58074-az-oroszoknak-tul-ukranok-vagyunk-az-ukranoknak-tul-magyarok-a-magyaroknak-tul-ciganyok--civil-akcioban-segiti-egy-maltai-alapitvany-az-ukran-menekult"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                📰 WMN.hu – „Az oroszoknak túl ukránok vagyunk..."
                <ExternalLink size={14} className="shrink-0 text-muted-foreground" />
              </a>
              <a
                href="https://qubit.hu/2022/07/22/van-koztuk-aki-a-sajat-nevet-sem-ismeri-fel-leirva-de-mar-robotot-programoznak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                📰 Qubit.hu – „Van köztük, aki a saját nevét sem ismeri fel leírva, de már robotot programoznak"
                <ExternalLink size={14} className="shrink-0 text-muted-foreground" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Charity;
