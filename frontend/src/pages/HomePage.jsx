import AdmissionsCard from "../components/home/AdmissionsCard";
import AboutUsSection from "../components/home/AboutUsSection";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import LegacyTimeline from "../components/home/LegacyTimeline";
import Navbar from "../components/home/Navbar";

function HomePage() {
  return (
    <div className="min-h-screen bg-oakridge-offwhite">
      <Navbar />
      <main>
        <Hero />
        <AboutUsSection />
        <LegacyTimeline />
        <section id="admissions">
          <AdmissionsCard />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
