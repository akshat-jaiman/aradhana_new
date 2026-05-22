import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BRANDING } from "../../assets/branding";

const navItems = [
  { label: "About Us", href: "#about-us" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-oakridge-charcoal/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-10">
        <Link
          to="/"
          className="inline-flex items-center"
          aria-label={BRANDING.schoolName}
        >
          <img
            src={BRANDING.logo}
            alt={BRANDING.schoolName}
            className={`h-10 w-auto object-contain ${
              scrolled ? "rounded-sm bg-white/95 px-2 py-1" : ""
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={isHome ? item.href : `/${item.href}`}
                className={`text-sm tracking-[0.15em] transition-colors ${
                  scrolled
                    ? "text-oakridge-offwhite/75 hover:text-oakridge-offwhite"
                    : "text-oakridge-charcoal/70 hover:text-oakridge-charcoal"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/admissions"
            className="hidden border border-oakridge-gold bg-oakridge-gold px-5 py-2 text-xs tracking-[0.16em] text-oakridge-charcoal transition hover:bg-[#d3ae67] md:inline-flex"
          >
            APPLY NOW
          </Link>
          <button
            className={`md:hidden ${scrolled ? "text-oakridge-offwhite" : "text-oakridge-charcoal"}`}
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
