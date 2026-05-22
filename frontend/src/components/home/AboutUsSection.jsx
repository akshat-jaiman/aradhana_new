import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/motion";

const values = [
  {
    title: "Academic Rigor",
    description:
      "A structured curriculum that develops critical thinking, creativity, and confidence across foundational and advanced levels.",
  },
  {
    title: "Character Formation",
    description:
      "Daily school life is rooted in integrity, empathy, and responsibility so students grow into principled citizens.",
  },
  {
    title: "Future Readiness",
    description:
      "Technology-enabled classrooms, project-based learning, and mentorship prepare students for modern global pathways.",
  },
];

function AboutUsSection() {
  return (
    <section id="about-us" className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <motion.p
          className="text-xs tracking-[0.26em] text-oakridge-gold"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          ABOUT US
        </motion.p>
        <motion.h2
          className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={1}
        >
          Building Scholars with Purpose, Leadership, and Compassion.
        </motion.h2>

        <motion.p
          className="mt-6 max-w-3xl text-sm leading-7 text-oakridge-charcoal/70 md:text-base"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={2}
        >
          Aradhana Public School (Estd. 2003) is a premier co-educational institution dedicated to providing  
          value-based education in a healthy environment of equality and mutual respect. Affiliated with RBSE, Rajasthan, 
          Our mission is to instill a spirit of service and a deep sense of social responsibility, 
          preparing our students to be confident global citizens with an indomitable spirit.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              className="border border-black/10 bg-white p-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={index + 1}
            >
              <h3 className="font-serif text-2xl text-oakridge-charcoal">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-oakridge-charcoal/70">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          id="academics"
          className="mt-12 grid gap-6 border border-black/10 bg-oakridge-offwhite p-6 md:grid-cols-4 md:p-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={3}
        >
          <div>
            <p className="text-xs tracking-[0.2em] text-oakridge-gold">FOUNDED</p>
            <p className="mt-2 font-serif text-3xl">2003</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-oakridge-gold">GRADES</p>
            <p className="mt-2 font-serif text-3xl">K-12</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-oakridge-gold">STUDENT-TEACHER RATIO</p>
            <p className="mt-2 font-serif text-3xl">18:1</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-oakridge-gold">CO-CURRICULAR CLUBS</p>
            <p className="mt-2 font-serif text-3xl">40+</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUsSection;
