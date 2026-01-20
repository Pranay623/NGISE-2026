import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "../public/main logo.png";
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "./ui/sheet";
import { Button } from "./ui/button";

export default function Navbar() {
  const location = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [committee, setCommittee] = useState(false);

  // mobile submenu states
  const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false);
  const [mobileLocaleOpen, setMobileLocaleOpen] = useState(false);

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-600 font-medium transition-colors";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Left Logo */}
          <motion.img
            src={Logo}
            alt="NGISE Logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="sm:w-22 sm:h-12 w-21 h-10 ml-5 sm:ml-3"
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/call-for-papers" className={linkClass("/call-for-papers")}>
              Call for Papers
            </Link>
            <Link to="/venue" className={linkClass("/venue")}>
              Venue
            </Link>
            {/* <Link to="/speakers" className={linkClass("/speakers")}>
              Speakers
            </Link> */}

            {/* Committee dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCommittee(true)}
              onMouseLeave={() => setCommittee(false)}
            >
              <button
                className={`flex items-center space-x-1 ${location.pathname.startsWith("/committee")
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  }`}
              >
                <span>Committee</span>
                <ChevronDown className="w-4 h-4 mt-0.5" />
              </button>

              <AnimatePresence>
                {committee && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    <Link
                      to="/committee/oragnizers"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      Organizing Committee
                    </Link>
                    <Link
                      to="/committee/program-committee"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      Technical Program Committee
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* <Link to="/program" className={linkClass("/program")}>
              Program
            </Link> */}
            <Link to="/registrations" className={linkClass("/registrations")}>
              Registration
            </Link>

            {/* Locale dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocaleOpen(true)}
              onMouseLeave={() => setLocaleOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 ${location.pathname.startsWith("/locale")
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  }`}
              >
                <span>Locale</span>
                <ChevronDown className="w-4 h-4 mt-0.5" />
              </button>

              <AnimatePresence>
                {localeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    <Link
                      to="/locale/about-city"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      About The City
                    </Link>
                    <Link
                      to="/locale/hotels"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      Nearby Hotels
                    </Link>
                    <Link
                      to="/locale/visa"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      Visa Information
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Nav (Sheet) */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <img
                    src="https://ucarecdn.com/f601cf8c-0502-43aa-810b-72542ba282c3/-/preview/1000x1000/"
                    className="w-5 h-5"
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full overflow-y-auto">
                <SheetHeader />
                <div className="p-6 flex flex-col gap-y-4 text-left">
                  <Link to="/" onClick={() => setIsSheetOpen(false)}>Home</Link>
                  <Link to="/call-for-papers" onClick={() => setIsSheetOpen(false)}>Call for Papers</Link>
                  <Link to="/venue" onClick={() => setIsSheetOpen(false)}>Venue</Link>
                  {/* <Link to="/speakers" onClick={() => setIsSheetOpen(false)}>Speakers</Link> */}

                  {/* Committee (expandable) */}
                  <button
                    className="flex justify-between items-center"
                    onClick={() => setMobileCommitteeOpen(!mobileCommitteeOpen)}
                  >
                    Committee
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileCommitteeOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileCommitteeOpen && (
                    <div className="ml-4 flex flex-col gap-y-2">
                      <Link to="/committee/oragnizers" onClick={() => setIsSheetOpen(false)}>
                        Organizing Committee
                      </Link>
                      <Link to="/committee/program-committee" onClick={() => setIsSheetOpen(false)}>
                        Technical Program Committee
                      </Link>
                    </div>
                  )}

                  <Link to="/program" onClick={() => setIsSheetOpen(false)}>Program</Link>
                  <Link to="/registrations" onClick={() => setIsSheetOpen(false)}>Registration</Link>

                  {/* Locale (expandable) */}
                  <button
                    className="flex justify-between items-center"
                    onClick={() => setMobileLocaleOpen(!mobileLocaleOpen)}
                  >
                    Locale
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocaleOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileLocaleOpen && (
                    <div className="ml-4 flex flex-col gap-y-2">
                      <Link to="/locale/about-city" onClick={() => setIsSheetOpen(false)}>About The City</Link>
                      <Link to="/locale/hotels" onClick={() => setIsSheetOpen(false)}>Nearby Hotels</Link>
                      <Link to="/locale/visa" onClick={() => setIsSheetOpen(false)}>Visa Information</Link>
                    </div>
                  )}

                  <Link to="/contact" onClick={() => setIsSheetOpen(false)}>Contact Us</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
