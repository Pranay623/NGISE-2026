import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import UnisysLogo from "../public/unisys.jpeg";
import PlatinumBadge from "../public/platinum.jpeg";

export default function StickySponsorTab() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <aside aria-label="Sponsor tab" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-[calc(100vw-2rem)]">
      <motion.div
        layout
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className={`bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-full flex items-center transition-all duration-300 ${
          isScrolled
            ? "p-1.5 pl-2.5 pr-2.5 sm:pr-3 gap-2 shadow-lg hover:shadow-xl"
            : "p-2 pl-3 pr-3 sm:pr-4 gap-2.5 sm:gap-3 shadow-2xl"
        }`}
      >
        {/* Clickable Sponsor Content */}
        <a
          href="https://www.unisys.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 sm:gap-2.5 text-left"
          title="Visit Platinum Sponsor - Unisys"
        >
          {/* Badge */}
          <div className="relative shrink-0 flex items-center justify-center">
            <img
              src={PlatinumBadge}
              alt="Platinum Sponsor Badge"
              className={`rounded-full object-contain transition-transform duration-200 group-hover:scale-105 ${
                isScrolled ? "h-6 w-6 sm:h-7 sm:w-7" : "h-7 w-7 sm:h-9 sm:w-9"
              }`}
            />
          </div>

          {/* Platinum Sponsor Label */}
          <span
            className={`font-bold tracking-wider uppercase text-slate-600 bg-slate-100 rounded-full px-2 py-0.5 shrink-0 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700 ${
              isScrolled ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[10px]"
            }`}
          >
            Platinum Sponsor
          </span>

          <div className="h-3.5 w-px bg-slate-200 shrink-0" />

          {/* Unisys Logo */}
          <img
            src={UnisysLogo}
            alt="Unisys"
            className={`w-auto object-contain mix-blend-multiply contrast-[1.1] transition-transform duration-200 group-hover:scale-105 shrink-0 ${
              isScrolled ? "h-5 sm:h-6 max-w-[70px] sm:max-w-[90px]" : "h-6 sm:h-8 max-w-[85px] sm:max-w-[120px]"
            }`}
          />

          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-colors hidden sm:block shrink-0" />
        </a>

        {/* Dismiss Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="ml-0.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full p-1 transition-colors shrink-0"
          title="Dismiss sponsor banner"
          aria-label="Dismiss sponsor banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </aside>
  );
}

