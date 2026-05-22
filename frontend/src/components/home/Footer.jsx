import { BRANDING } from "../../assets/branding";

function Footer() {
  return (
    <footer className="bg-oakridge-charcoal py-12 text-oakridge-offwhite/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 px-5 text-sm md:flex-row md:items-center md:px-10">
        <img
          src={BRANDING.logo}
          alt={BRANDING.schoolName}
          className="h-16 w-auto rounded-sm bg-white/95 p-1 object-contain"
        />
        <p>© {new Date().getFullYear()} {BRANDING.schoolName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
