import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, FileText, GraduationCap, School } from "lucide-react";
import { fadeInUp } from "../lib/motion";
import { BRANDING } from "../assets/branding";

const stages = [
  {
    step: "Step 1",
    title: "Student Profile Form",
    duration: "10-12 minutes",
    fields: [
      "Student full name, date of birth, and grade applying for",
      "Parent/guardian contact information",
      "Current school and language preference",
      "Special learning support requirements (if any)",
    ],
  },
  {
    step: "Step 2",
    title: "Academic & Document Uploads",
    duration: "15-20 minutes",
    fields: [
      "Previous two years academic records",
      "Birth certificate and Aadhaar/passport copy",
      "Transfer certificate (if applicable)",
      "Recent passport-size photographs",
    ],
  },
  {
    step: "Step 3",
    title: "Campus Visit & Interaction Booking",
    duration: "5 minutes",
    fields: [
      "Select preferred visit date and slot",
      "Choose in-person or virtual campus walkthrough",
      "Confirm student interaction availability",
      "Add notes for admissions counselor",
    ],
  },
  {
    step: "Step 4",
    title: "Final Review & Application Submission",
    duration: "5-8 minutes",
    fields: [
      "Verify all details and uploaded documents",
      "Read admission terms and declaration",
      "Pay application fee securely",
      "Submit and receive confirmation ID",
    ],
  },
];

const faqs = [
  "Application window: November to March",
  "Average admission decision timeline: 7-10 working days",
  "Admissions office support: Monday to Saturday, 9 AM to 4 PM",
];

function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-oakridge-offwhite text-oakridge-charcoal">
      <header className="border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-10">
          <Link to="/" aria-label={BRANDING.schoolName}>
            <img
              src={BRANDING.logo}
              alt={BRANDING.schoolName}
              className="h-11 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-oakridge-charcoal/70 hover:text-oakridge-charcoal"
          >
            BACK TO HOME <ChevronRight size={14} />
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-oakridge-charcoal py-16 text-oakridge-offwhite md:py-20">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
            <motion.p
              className="text-xs tracking-[0.24em] text-oakridge-gold"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              ADMISSIONS GUIDE
            </motion.p>
            <motion.h1
              className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Complete Your Application with a Clear, Guided Process.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-sm leading-7 text-oakridge-offwhite/70 md:text-base"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              This page outlines each form and document needed for admission so families
              can submit confidently without missing any step.
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:grid-cols-3 md:px-10">
            <article className="border border-black/10 bg-white p-6">
              <School className="text-oakridge-gold" />
              <h2 className="mt-3 font-serif text-2xl">Who Can Apply</h2>
              <p className="mt-2 text-sm leading-7 text-oakridge-charcoal/70">
                Admissions are open for Kindergarten to Grade 12, subject to seat
                availability and grade-level readiness assessment.
              </p>
            </article>
            <article className="border border-black/10 bg-white p-6">
              <GraduationCap className="text-oakridge-gold" />
              <h2 className="mt-3 font-serif text-2xl">Assessment Model</h2>
              <p className="mt-2 text-sm leading-7 text-oakridge-charcoal/70">
                Junior grades are assessed through interaction-based evaluation.
                Middle and senior grades include academic diagnostics.
              </p>
            </article>
            <article className="border border-black/10 bg-white p-6">
              <FileText className="text-oakridge-gold" />
              <h2 className="mt-3 font-serif text-2xl">Documents</h2>
              <p className="mt-2 text-sm leading-7 text-oakridge-charcoal/70">
                Keep all mandatory documents ready in PDF/JPG format under 5 MB per
                file to ensure smooth submission.
              </p>
            </article>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
            <h2 className="font-serif text-4xl">Step-by-Step Form Guide</h2>
            <p className="mt-3 max-w-2xl text-sm text-oakridge-charcoal/70">
              Follow these steps in sequence. Each stage lists the exact details you
              need to fill before moving to the next form.
            </p>

            <div className="mt-10 space-y-6">
              {stages.map((stage, idx) => (
                <motion.article
                  key={stage.title}
                  className="border border-black/10 bg-white p-6 md:p-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={idx + 1}
                >
                  <div className="flex flex-col justify-between gap-2 border-b border-black/10 pb-4 md:flex-row md:items-center">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-oakridge-gold">{stage.step}</p>
                      <h3 className="mt-1 font-serif text-3xl">{stage.title}</h3>
                    </div>
                    <p className="text-sm text-oakridge-charcoal/60">Estimated time: {stage.duration}</p>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {stage.fields.map((field) => (
                      <li key={field} className="flex items-start gap-3 text-sm leading-7 text-oakridge-charcoal/80">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-oakridge-green" />
                        <span>{field}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:grid-cols-2 md:px-10">
            <div>
              <p className="text-xs tracking-[0.24em] text-oakridge-gold">IMPORTANT NOTES</p>
              <h2 className="mt-3 font-serif text-4xl">Before You Submit</h2>
              <ul className="mt-5 space-y-3">
                {faqs.map((faq) => (
                  <li key={faq} className="text-sm leading-7 text-oakridge-charcoal/75">
                    - {faq}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-black/10 bg-oakridge-offwhite p-6">
              <h3 className="font-serif text-3xl">Ready to Begin?</h3>
              <p className="mt-3 text-sm leading-7 text-oakridge-charcoal/70">
                Start the admissions application now. You can save progress and resume
                later using your registered email and mobile number.
              </p>
              <button className="mt-6 border border-oakridge-gold bg-oakridge-gold px-6 py-3 text-xs tracking-[0.16em] text-oakridge-charcoal transition hover:bg-[#d3ae67]">
                START APPLICATION FORM
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdmissionsPage;
