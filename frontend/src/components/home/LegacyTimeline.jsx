import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/motion";

const points = [
  { year: "2003", title: "Founding", subtitle: "A Vision Begins" },
  { year: "2010", title: "Excellence Award", subtitle: "National Recognition" },
  { year: "2024", title: "Present", subtitle: "Future-Ready Learning" },
];

function LegacyTimeline() {
  return (
    <section className="bg-oakridge-charcoal py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <motion.p
          className="text-xs tracking-[0.26em] text-oakridge-gold"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          OUR HERITAGE
        </motion.p>
        <motion.h2
          className="mt-4 font-serif text-3xl text-oakridge-offwhite md:text-5xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={1}
        >
          A Legacy of Distinction
        </motion.h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {points.map((point, index) => (
            <motion.article
              key={point.year}
              className="relative border-l border-oakridge-gold/35 pl-8 md:border-l-0 md:pl-0"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={index + 1}
            >
              <span className="absolute -left-[6px] top-2 h-3 w-3 rounded-full border border-oakridge-gold bg-oakridge-charcoal md:left-0 md:top-auto md:mb-5 md:block md:translate-y-0" />
              <div className="mb-5 hidden h-px w-full bg-oakridge-gold/25 md:block" />
              <p className="text-sm tracking-[0.2em] text-oakridge-gold">{point.year}</p>
              <h3 className="mt-2 font-serif text-2xl text-oakridge-offwhite">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-oakridge-offwhite/65">{point.subtitle}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LegacyTimeline;
