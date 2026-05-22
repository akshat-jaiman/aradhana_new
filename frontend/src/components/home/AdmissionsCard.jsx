import { Link } from "react-router-dom";

const steps = [
  { id: "01", label: "Inquiry", note: "Share your interest with our admissions desk." },
  { id: "02", label: "Visit", note: "Experience the campus and meet our educators." },
  { id: "03", label: "Apply", note: "Submit your child profile and required documents." },
];

function AdmissionsCard() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.26em] text-oakridge-gold">ADMISSIONS</p>
            <h2 className="mt-4 font-serif text-4xl">The Path to Aradhana</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-oakridge-charcoal/70">
              A curated and transparent admissions process designed to honor each
              learner&apos;s potential while ensuring readiness for our academic culture.
            </p>
          </div>

          <article className="rounded-sm border border-black/10 bg-oakridge-offwhite p-7 shadow-premium md:p-10">
            <h3 className="font-serif text-3xl text-oakridge-charcoal">Start Your Journey</h3>
            <p className="mt-2 text-sm text-oakridge-charcoal/60">
              Complete this three-step process to begin your application.
            </p>

            <ol className="mt-8 space-y-6">
              {steps.map((step) => (
                <li key={step.id} className="flex gap-4 border-l border-oakridge-gold/45 pl-4">
                  <span className="mt-1 text-xs tracking-[0.2em] text-oakridge-gold">
                    {step.id}
                  </span>
                  <div>
                    <p className="font-medium text-oakridge-charcoal">{step.label}</p>
                    <p className="text-sm text-oakridge-charcoal/65">{step.note}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              to="/admissions"
              className="mt-8 inline-flex border border-oakridge-gold bg-oakridge-gold px-6 py-3 text-xs tracking-[0.16em] text-oakridge-charcoal transition hover:bg-[#d3ae67]"
            >
              APPLY NOW
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsCard;
