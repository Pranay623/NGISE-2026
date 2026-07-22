import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";
import UnisysLogo from "../public/unisys.jpeg";
import PlatinumBadge from "../public/platinum.jpeg";

export default function StickySponsorTab() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isManuallyOpened, setIsManuallyOpened] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setIsManuallyOpened(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 300;
      setIsAtTop(atTop);
      if (atTop && isHomePage) {
        setIsManuallyOpened(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const showFullBanner = isManuallyOpened || (isHomePage && isAtTop);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`absolute bottom-0 right-0 bg-white border border-slate-200 transition-shadow flex items-center overflow-hidden ${
          showFullBanner
            ? "shadow-2xl rounded-full p-1.5 pl-2 pr-6 sm:p-2 sm:pl-3 sm:pr-8 gap-2 sm:gap-3 w-max max-w-[calc(100vw-2rem)] cursor-default"
            : "shadow-xl rounded-full justify-center w-12 h-12 sm:w-16 sm:h-16 p-0 cursor-pointer hover:shadow-2xl shrink-0"
        }`}
        onClick={() => {
          if (!showFullBanner) setIsManuallyOpened(true);
        }}
        style={{ originX: 1, originY: 1 }} // Anchors layout animation to bottom-right
      >
        {/* Platinum Badge */}
        <motion.img
          layout
          src={PlatinumBadge}
          alt="Platinum Badge"
          className={
            showFullBanner
              ? "h-7 sm:h-9 w-7 sm:w-9 rounded-full object-contain shrink-0 cursor-pointer"
              : "h-9 w-9 sm:h-12 sm:w-12 object-contain shrink-0 rounded-full"
          }
          onClick={(e) => {
            if (showFullBanner) {
              e.stopPropagation();
              window.open("https://www.unisys.com", "_blank");
            }
          }}
        />

        <AnimatePresence mode="popLayout">
          {showFullBanner && (
            <motion.div
              key="banner-content"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink"
              onClick={() => window.open("https://www.unisys.com", "_blank")}
            >
              {/* Label Tag */}
              <span className="text-[8px] sm:text-[10px] font-extrabold tracking-widest text-slate-500 uppercase bg-slate-100 px-2 py-1 rounded-full shrink-0 hover:bg-slate-200 transition-colors">
                Platinum Sponsor
              </span>

              <div className="h-4 w-px bg-slate-200 shrink-0" />

              {/* Unisys Logo */}
              <img
                src={UnisysLogo}
                alt="Unisys Logo"
                className="h-6 sm:h-9 w-auto object-contain mix-blend-multiply contrast-[1.15] brightness-[1.02] shrink min-w-[70px] max-w-[100px] sm:max-w-[150px]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="popLayout">
          {showFullBanner && (!isHomePage || !isAtTop || isManuallyOpened) && (
            <motion.button
              key="close-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsManuallyOpened(false);
              }}
              className="ml-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full p-1 transition-colors shrink-0 z-10"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
