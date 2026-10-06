import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "../public/main logo.png";
import RightLogo from "../public/WhatsApp Image 2026-04-02 at 6.36.14 PM.jpeg";
import RightLogo2 from "../public/WhatsApp Image 2026-04-02 at 7.35.40 PM.jpeg";
import CSIRLogo from "../public/csir.jpg";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [committee, setCommittee] = useState(false);
  const [speakersOpen, setSpeakersOpen] = useState(false);
  const [ngiseOpen, setNgiseOpen] = useState(false);

  // mobile submenu states
  const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false);
  const [mobileLocaleOpen, setMobileLocaleOpen] = useState(false);
  const [mobileSpeakersOpen, setMobileSpeakersOpen] = useState(false);
  const [mobileNgiseOpen, setMobileNgiseOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path: string) =>
    `whitespace-nowrap transition-all duration-200 px-2 py-1 border-b-2 ${location.pathname === path
      ? "text-blue-600 font-semibold border-blue-600"
      : "text-gray-600 hover:text-blue-600 font-medium border-transparent"
    }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-white/98 backdrop-blur-md shadow-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-3 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col xl:flex-row justify-between items-center transition-all duration-300 gap-2 ${
            isScrolled ? "py-1.5 xl:h-20" : "py-2 xl:h-24"
          }`}
        >
          {/* Logo & Mobile Sponsors Section */}
          <div className="flex items-center justify-between w-full xl:flex-1 gap-2 sm:gap-4 shrink-0">
            <Link to="/" className="shrink-0">
              <motion.img
                src={Logo}
                alt="NGISE Logo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-8 xs:h-9 sm:h-10 xl:h-11 w-auto object-contain transition-all"
              />
            </Link>

            {/* Mobile Logos & Menu (Visible only on mobile/tablet) */}
            <div className="flex xl:hidden items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Responsive Mobile Sponsor Strip */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 bg-slate-50/90 border border-slate-200/80 rounded-lg px-1.5 py-1 sm:px-2.5 sm:py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] shrink-0">
                <a
                  href="https://www.springer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
                  title="Springer - Publication Partner"
                >
                  <img
                    src={RightLogo}
                    alt="Springer"
                    className="h-5 sm:h-7 w-auto max-w-[55px] sm:max-w-[75px] object-contain shrink-0"
                  />
                </a>

                <div className="h-4 sm:h-5 w-px bg-slate-200 shrink-0" />

                <a
                  href="https://www.springer.com/series/7899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
                  title="CCIS Series"
                >
                  <img
                    src={RightLogo2}
                    alt="CCIS"
                    className="h-5 sm:h-7 w-auto max-w-[20px] sm:max-w-[28px] object-contain shrink-0"
                  />
                </a>

                <div className="h-4 sm:h-5 w-px bg-slate-200 shrink-0" />

                <a
                  href="https://www.csir.res.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
                  title="CSIR India"
                >
                  <img
                    src={CSIRLogo}
                    alt="CSIR India"
                    className="h-6 sm:h-8 w-auto max-w-[24px] sm:max-w-[32px] object-contain shrink-0"
                  />
                </a>
              </div>

              {/* Mobile Drawer Trigger */}
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-blue-50 h-9 w-9 sm:h-10 sm:w-10 ml-0.5 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 sm:w-7 sm:h-7">
                      <line x1="3" x2="21" y1="12" y2="12" />
                      <line x1="3" x2="21" y1="6" y2="6" />
                      <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] sm:w-[400px] overflow-y-auto pt-8 pb-10 flex flex-col justify-between">
                  <nav className="flex flex-col gap-5">
                    <Link to="/" onClick={() => setIsSheetOpen(false)} className="text-xl font-semibold hover:text-blue-600 transition-colors">Home</Link>
                    <Link to="/call-for-papers" onClick={() => setIsSheetOpen(false)} className="text-xl font-semibold hover:text-blue-600 transition-colors">Call for Papers</Link>
                    <Link to="/venue" onClick={() => setIsSheetOpen(false)} className="text-xl font-semibold hover:text-blue-600 transition-colors">Venue</Link>

                    {/* Mobile Expandable Sections */}
                    {[
                      {
                        title: "Programme",
                        isOpen: mobileSpeakersOpen,
                        setOpen: setMobileSpeakersOpen,
                        links: [
                          { to: "/programme/keynote-speakers", label: "Keynote Speakers" },
                          { to: "/programme/industrial-speaker", label: "Industrial Speaker" },
                          { to: "/programme/panel", label: "Panel" },
                          { to: "/programme/tutorial", label: "Tutorial" },
                          { to: "/programme/conference-dinner", label: "Conference Dinner" },
                          { to: "/programme/best-paper-award", label: "Best Paper Award" },
                          { to: "/programme/student-best-paper-award", label: "Student Best Paper Award" },
                        ]
                      },
                      {
                        title: "Committees",
                        isOpen: mobileCommitteeOpen,
                        setOpen: setMobileCommitteeOpen,
                        links: [
                          { to: "/committee/steeringcommittee", label: "Steering Committee" },
                          { to: "/committee/programme-committee", label: "Programme Committee" },
                        ]
                      },
                      {
                        title: "Locale",
                        isOpen: mobileLocaleOpen,
                        setOpen: setMobileLocaleOpen,
                        links: [
                          { to: "/locale/about-city", label: "About The City" },
                          { to: "/locale/hotels", label: "Nearby Hotels" },
                          { to: "/locale/visa", label: "Visa Information" },
                        ]
                      },
                      {
                        title: "NGISE",
                        isOpen: mobileNgiseOpen,
                        setOpen: setMobileNgiseOpen,
                        links: [
                          { to: "/ngise/history", label: "History" },
                          { to: "/ngise/statutes", label: "Statutes" },
                          { to: "/ngise/previous-editions", label: "Previous Editions" },
                          { to: "/ngise/future-editions", label: "Future Editions" },
                          { to: "/ngise/hall-of-fame", label: "Hall of Fame" },
                        ]
                      }
                    ].map((section) => (
                      <div key={section.title} className="flex flex-col gap-2">
                        <button
                          className="flex justify-between items-center text-xl font-semibold hover:text-blue-600 transition-colors"
                          onClick={() => section.setOpen(!section.isOpen)}
                        >
                          {section.title}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${section.isOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence mode="wait">
                          {section.isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-3 flex flex-col gap-2.5 overflow-hidden border-l-2 border-blue-100 pl-4 py-1.5"
                            >
                              {section.links.map((link) => (
                                <Link
                                  key={link.to}
                                  to={link.to}
                                  onClick={() => setIsSheetOpen(false)}
                                  className="text-gray-600 hover:text-blue-600 transition-colors py-0.5 text-base"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}

                    <Link to="/registrations" onClick={() => setIsSheetOpen(false)} className="text-xl font-semibold hover:text-blue-600 transition-colors">Registration</Link>
                    <Link to="/contact" onClick={() => setIsSheetOpen(false)} className="text-xl font-semibold hover:text-blue-600 transition-colors">Contact Us</Link>
                  </nav>

                  {/* Mobile Drawer Official Partners Section */}
                  <div className="mt-8 pt-5 border-t border-slate-200">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Official Partners & Publications
                    </p>
                    <div className="grid grid-cols-3 gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <a
                        href="https://www.springer.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-2 rounded-lg bg-white shadow-xs hover:shadow-md transition-all gap-1.5 text-center group"
                      >
                        <img src={RightLogo} alt="Springer" className="h-6 w-auto object-contain transition-transform group-hover:scale-105" />
                        <span className="text-[10px] text-slate-500 font-medium leading-tight">Springer</span>
                      </a>
                      <a
                        href="https://www.springer.com/series/7899"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-2 rounded-lg bg-white shadow-xs hover:shadow-md transition-all gap-1.5 text-center group"
                      >
                        <img src={RightLogo2} alt="CCIS" className="h-6 w-auto object-contain transition-transform group-hover:scale-105" />
                        <span className="text-[10px] text-slate-500 font-medium leading-tight">CCIS</span>
                      </a>
                      <a
                        href="https://www.csir.res.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-2 rounded-lg bg-white shadow-xs hover:shadow-md transition-all gap-1.5 text-center group"
                      >
                        <img src={CSIRLogo} alt="CSIR India" className="h-7 w-auto object-contain transition-transform group-hover:scale-105" />
                        <span className="text-[10px] text-slate-500 font-medium leading-tight">CSIR India</span>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex shrink-0 justify-center items-center px-1">
            <div className="flex items-center gap-x-1 xl:gap-x-2 bg-gray-50/80 rounded-full px-4 py-1.5 border border-gray-100/50 shadow-inner">
              <Link to="/" className={`${linkClass("/")} text-[13px] xl:text-[14px] 2xl:text-[15px]`}>Home</Link>
              <Link to="/call-for-papers" className={`${linkClass("/call-for-papers")} text-[13px] xl:text-[14px] 2xl:text-[15px]`}>Call for Papers</Link>
              <Link to="/venue" className={`${linkClass("/venue")} text-[13px] xl:text-[14px] 2xl:text-[15px]`}>Venue</Link>

              {/* Dropdowns for Desktop */}
              {[
                {
                  title: "Programme",
                  isOpen: speakersOpen,
                  setOpen: setSpeakersOpen,
                  pathPrefix: "/programme",
                  links: [
                    { to: "/programme/keynote-speakers", label: "Keynote Speakers" },
                    { to: "/programme/industrial-speaker", label: "Industrial Speaker" },
                    { to: "/programme/panel", label: "Panel" },
                    { to: "/programme/tutorial", label: "Tutorial" },
                    { to: "/programme/conference-dinner", label: "Conference Dinner" },
                    { to: "/programme/best-paper-award", label: "Best Paper Award" },
                    { to: "/programme/student-best-paper-award", label: "Student Best Paper Award" },
                  ]
                },
                {
                  title: "Committees",
                  isOpen: committee,
                  setOpen: setCommittee,
                  pathPrefix: "/committee",
                  links: [
                    { to: "/committee/steeringcommittee", label: "Steering Committee" },
                    { to: "/committee/programme-committee", label: "Programme Committee" },
                  ]
                },
                {
                  title: "Locale",
                  isOpen: localeOpen,
                  setOpen: setLocaleOpen,
                  pathPrefix: "/locale",
                  links: [
                    { to: "/locale/about-city", label: "About the City" },
                    { to: "/locale/hotels", label: "Nearby Hotels" },
                    { to: "/locale/visa", label: "Visa Information" },
                  ]
                },
                {
                  title: "NGISE",
                  isOpen: ngiseOpen,
                  setOpen: setNgiseOpen,
                  pathPrefix: "/ngise",
                  links: [
                    { to: "/ngise/history", label: "History" },
                    { to: "/ngise/statutes", label: "Statutes" },
                    { to: "/ngise/previous-editions", label: "Previous Editions" },
                    { to: "/ngise/future-editions", label: "Future Editions" },
                    { to: "/ngise/hall-of-fame", label: "Hall of Fame" },
                  ]
                }
              ].map((dropdown) => (
                <div
                  key={dropdown.title}
                  className="relative group"
                  onMouseEnter={() => dropdown.setOpen(true)}
                  onMouseLeave={() => dropdown.setOpen(false)}
                >
                  <button className={`flex items-center gap-1 text-[13px] xl:text-[14px] 2xl:text-[15px] px-1.5 py-1 whitespace-nowrap transition-colors border-b-2 ${location.pathname.startsWith(dropdown.pathPrefix) ? "text-blue-600 font-semibold border-blue-600" : "text-gray-600 hover:text-blue-600 font-medium border-transparent"}`}>
                    {dropdown.title}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdown.isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdown.isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 overflow-hidden"
                      >
                        {dropdown.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="block px-5 py-2.5 text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={() => dropdown.setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link to="/registrations" className={`${linkClass("/registrations")} text-[13px] xl:text-[14px] 2xl:text-[15px]`}>Registration</Link>
              <Link to="/contact" className={`${linkClass("/contact")} text-[13px] xl:text-[14px] 2xl:text-[15px]`}>Contact Us</Link>
            </div>
          </div>

          {/* Right Section — Sponsor Logos (Desktop Only) */}
          <div className="hidden xl:flex xl:flex-1 justify-end items-center shrink-0 pl-4">
            <div className="flex items-center gap-4 2xl:gap-5 bg-slate-50/70 hover:bg-slate-50/95 transition-colors border border-slate-200/60 rounded-xl px-3 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <a
                href="https://www.springer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-all duration-200 hover:opacity-80 hover:scale-105"
                title="Springer - Publication Partner"
              >
                <img
                  src={RightLogo}
                  alt="Springer"
                  className="h-8 xl:h-9 2xl:h-10 w-auto object-contain shrink-0"
                />
              </a>

              <div className="h-6 w-px bg-slate-200" />

              <a
                href="https://www.springer.com/series/7899"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-all duration-200 hover:opacity-80 hover:scale-105"
                title="Communications in Computer and Information Science (CCIS)"
              >
                <img
                  src={RightLogo2}
                  alt="CCIS"
                  className="h-8 xl:h-9 2xl:h-10 w-auto object-contain shrink-0"
                />
              </a>

              <div className="h-6 w-px bg-slate-200" />

              <a
                href="https://www.csir.res.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-all duration-200 hover:opacity-80 hover:scale-105"
                title="Council of Scientific & Industrial Research (CSIR) - India"
              >
                <img
                  src={CSIRLogo}
                  alt="CSIR India"
                  className="h-10 xl:h-11 2xl:h-12 w-auto object-contain shrink-0"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}
