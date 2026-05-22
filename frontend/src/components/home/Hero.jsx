import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp } from "../../lib/motion";

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-oakridge-charcoal editorial-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,64,43,0.35),transparent_35%),radial-gradient(circle_at_15%_70%,rgba(197,160,89,0.12),transparent_40%)]" />
      <div className="absolute inset-0 opacity-40 [background:linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:100%_52px]" />

      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-7xl items-center px-5 py-24 md:px-10">
        <motion.div
          className="max-w-3xl text-oakridge-offwhite"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <p className="mb-4 text-xs tracking-[0.28em] text-oakridge-gold">
            ARADHANA PUBLIC SCHOOL
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Inspiring Excellence, Cultivating Character.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-oakridge-offwhite/70 md:text-base">
            A premium learning environment where scholarship meets spirit, and
            every learner develops with purpose, poise, and possibility.
          </p>
          <Link
            to="/admissions"
            className="mt-10 inline-flex border border-oakridge-gold bg-oakridge-gold px-7 py-3 text-xs tracking-[0.15em] text-oakridge-charcoal transition hover:bg-[#d3ae67]"
          >
            BEGIN APPLICATION
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
