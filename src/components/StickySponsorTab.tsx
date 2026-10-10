import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UnisysLogo from "../public/unisys.jpeg";
import PlatinumBadge from "../public/platinum.jpeg";
import CSIRLogo from "../public/csir.jpg";

const MOBILE_QUERY = "(max-width: 639px)";
const ROTATE_MS = 2200;
const MOBILE_BAR_MAX_WIDTH = 330;
const MOBILE_CIRCLE_SIZE = 52;
const MORPH_SECONDS = 1.1;
const COLLAPSE_SCROLL_DELTA = 40;

const rotatingSponsors = [
  { name: "Unisys", href: "https://www.unisys.com", logo: UnisysLogo, title: "Visit Platinum Sponsor - Unisys", blend: true },
  { name: "CSIR India", href: "https://www.csir.res.in", logo: CSIRLogo, title: "Visit CSIR India", blend: false },
];

// What the collapsed circle cycles through, one at a time
const circleItems = [
  { name: "Platinum Sponsor Badge", logo: PlatinumBadge, className: "h-8 w-8 rounded-full" },
  { name: "Unisys", logo: UnisysLogo, className: "h-6 w-9 mix-blend-multiply contrast-[1.1]" },
  { name: "CSIR India", logo: CSIRLogo, className: "h-8 w-8" },
];

export default function StickySponsorTab() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
  );
  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [circleIndex, setCircleIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 375
  );
  const scrollBaseline = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => {
      setIsMobile(mq.matches);
      setViewportWidth(window.innerWidth);
    };
    onChange();
    mq.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  // Mobile: alternate between sponsors while the bar is expanded
  useEffect(() => {
    if (!isMobile || collapsed) return;
    const id = window.setInterval(
      () => setActiveIndex((i) => (i + 1) % rotatingSponsors.length),
      ROTATE_MS
    );
    return () => window.clearInterval(id);
  }, [isMobile, collapsed]);

  // Mobile: while collapsed, the circle cycles badge -> Unisys -> CSIR
  useEffect(() => {
    if (!isMobile || !collapsed) return;
    setCircleIndex(0);
    const id = window.setInterval(
      () => setCircleIndex((i) => (i + 1) % circleItems.length),
      ROTATE_MS
    );
    return () => window.clearInterval(id);
  }, [isMobile, collapsed]);

  // Mobile: collapse into a circle once the user scrolls away from where the bar was opened
  useEffect(() => {
    if (!isMobile || collapsed) return;
    const onScroll = () => {
      if (Math.abs(window.scrollY - scrollBaseline.current) > COLLAPSE_SCROLL_DELTA) {
        setCollapsed(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, collapsed]);

  const expand = () => {
    scrollBaseline.current = window.scrollY;
    setActiveIndex(0);
    setCollapsed(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMobile) {
    const active = rotatingSponsors[activeIndex];
    const circleItem = circleItems[circleIndex];
    const barWidth = Math.min(viewportWidth - 32, MOBILE_BAR_MAX_WIDTH);
    // The bar and the circle are one element whose width animates, so it glides between both states
    const morph = { duration: MORPH_SECONDS, ease: [0.65, 0, 0.35, 1] as const };
    return (
      <aside aria-label="Sponsor tab" className="fixed bottom-4 right-4 z-40">
        <motion.div
          initial={{ opacity: 0, y: 30, width: barWidth }}
          animate={{ opacity: 1, y: 0, width: collapsed ? MOBILE_CIRCLE_SIZE : barWidth }}
          transition={{ ...morph, opacity: { duration: 0.3 }, y: { duration: 0.4 } }}
          onClick={collapsed ? expand : undefined}
          onKeyDown={(e) => {
            if (collapsed && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              expand();
            }
          }}
          role={collapsed ? "button" : undefined}
          tabIndex={collapsed ? 0 : undefined}
          aria-label={collapsed ? "Show sponsors" : undefined}
          style={{ height: MOBILE_CIRCLE_SIZE }}
          className={`relative ml-auto flex items-center overflow-hidden rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl ${
            collapsed ? "cursor-pointer" : ""
          }`}
        >
          <motion.img
            src={PlatinumBadge}
            alt="Platinum Sponsor Badge"
            animate={{ opacity: collapsed ? 0 : 1 }}
            transition={{ duration: 0.4, delay: collapsed ? 0.3 : 0.5 }}
            className="ml-[11px] h-7 w-7 shrink-0 rounded-full object-contain"
          />

          {/* Collapsed circle: badge and sponsors fade in and out one at a time */}
          <motion.div
            animate={{ opacity: collapsed ? 1 : 0 }}
            transition={{ duration: collapsed ? 0.5 : 0.3, delay: collapsed ? 0.6 : 0 }}
            className="pointer-events-none absolute right-0 top-0 flex h-full items-center justify-center"
            style={{ width: MOBILE_CIRCLE_SIZE - 2 }}
            aria-hidden
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={circleItem.name}
                src={circleItem.logo}
                alt={circleItem.name}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`object-contain ${circleItem.className}`}
              />
            </AnimatePresence>
          </motion.div>

          <motion.div
            animate={{ opacity: collapsed ? 0 : 1 }}
            transition={{ duration: collapsed ? 0.35 : 0.5, delay: collapsed ? 0 : 0.5 }}
            className={`flex min-w-0 flex-1 items-center gap-2.5 pl-2.5 pr-4 ${collapsed ? "pointer-events-none" : ""}`}
            aria-hidden={collapsed}
          >
            <span className="shrink-0 whitespace-nowrap rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-600">
              Platinum Sponsor
            </span>

            <div className="h-3.5 w-px shrink-0 bg-slate-200" />

            {/* One sponsor at a time: the current one fades out before the next fades in */}
            <div className="relative h-8 min-w-[72px] flex-1">
              <AnimatePresence mode="wait" initial={false}>
                <motion.a
                  key={active.name}
                  href={active.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={active.title}
                  tabIndex={collapsed ? -1 : undefined}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={active.logo}
                    alt={active.name}
                    className={`h-8 w-auto max-w-full object-contain ${active.blend ? "mix-blend-multiply contrast-[1.1]" : ""}`}
                  />
                </motion.a>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </aside>
    );
  }

  return (
    <aside aria-label="Sponsor tab" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-[calc(100vw-2rem)]">
      <motion.div
        layout
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className={`bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-full flex items-center transition-all duration-300 ${
          isScrolled
            ? "p-1.5 pl-2.5 pr-3 sm:pr-4 gap-2 shadow-lg hover:shadow-xl"
            : "p-2 pl-3 pr-4 sm:pr-5 gap-2.5 sm:gap-3 shadow-2xl"
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

        </a>

        <div className="h-3.5 w-px bg-slate-200 shrink-0" />

        {/* CSIR Logo */}
        <a
          href="https://www.csir.res.in"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center shrink-0"
          title="Visit CSIR India"
        >
          <img
            src={CSIRLogo}
            alt="CSIR India"
            className={`w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0 ${
              isScrolled ? "h-6 sm:h-7" : "h-7 sm:h-9"
            }`}
          />
        </a>
      </motion.div>
    </aside>
  );
}
