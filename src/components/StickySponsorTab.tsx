import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ExternalLink } from "lucide-react";
import UnisysLogo from "../public/unisys.jpeg";
import PlatinumBadge from "../public/platinum.jpeg";
import CSIRLogo from "../public/csir.jpg";

const OPEN_BY_DEFAULT_QUERY = "(min-width: 1024px)";
const SPRING = { type: "spring", stiffness: 140, damping: 20 } as const;

// Entrance choreography for the cards inside the rail
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.94 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
} as const;

export default function StickySponsorTab() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(OPEN_BY_DEFAULT_QUERY).matches,
  );

  // Follow the breakpoint when the window crosses it, so small screens don't get a rail covering content
  useEffect(() => {
    const mq = window.matchMedia(OPEN_BY_DEFAULT_QUERY);
    const onChange = (e: MediaQueryListEvent) => setOpen(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const float = (delay: number) =>
    reduceMotion
      ? undefined
      : {
          y: [0, -6, 0],
          transition: {
            duration: 4.5,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <aside
      aria-label="Sponsors"
      className="fixed right-0 top-1/2 z-40 -translate-y-1/2"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={SPRING}
        className="relative"
      >
        {/* Handle: always peeks out from the screen edge */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Hide sponsors" : "Show sponsors"}
          className="absolute -left-9 top-1/2 flex h-28 w-9 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-l-2xl border border-r-0 border-slate-200 bg-white/95 text-slate-600 shadow-[-6px_0_20px_-8px_rgba(15,23,42,0.35)] backdrop-blur-md transition-colors hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.span>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.25em]"
            style={{ writingMode: "vertical-rl" }}
          >
            Sponsors
          </span>
          {!open && !reduceMotion && (
            <span className="absolute right-1.5 top-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
          )}
        </button>

        {/* Rail */}
        <div className="relative w-[168px] overflow-hidden rounded-l-3xl border border-r-0 border-slate-200/90 bg-white/90 shadow-[-12px_0_40px_-12px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:w-[200px] xl:w-[230px]">
          {/* Drifting colour wash behind everything */}
          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-10 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 20% 15%, rgba(59,130,246,0.14), transparent 45%), radial-gradient(circle at 80% 85%, rgba(168,85,247,0.12), transparent 45%)",
              }}
              animate={{ rotate: [0, 12, 0, -12, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate={open ? "show" : "hidden"}
            className="relative flex max-h-[calc(100vh-8rem)] flex-col gap-3 overflow-y-auto p-3 xl:gap-4 xl:p-4"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-1"
            >
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Our Sponsors
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
            </motion.div>

            {/* Platinum sponsor: animated gradient border */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://www.unisys.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Platinum Sponsor - Unisys"
                animate={float(0)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative block overflow-hidden rounded-2xl p-[2px] shadow-lg"
              >
                {!reduceMotion && (
                  <motion.span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #e2e8f0, #60a5fa, #a78bfa, #f0abfc, #e2e8f0, #38bdf8, #e2e8f0)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                {reduceMotion && (
                  <span aria-hidden className="absolute inset-0 bg-slate-300" />
                )}

                <div className="relative flex flex-col items-center gap-2 overflow-hidden rounded-[14px] bg-white px-3 py-4">
                  <img
                    src={PlatinumBadge}
                    alt="Platinum Sponsor Badge"
                    className="h-14 w-14 rounded-full object-contain xl:h-16 xl:w-16"
                  />
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                    Platinum Sponsor
                  </span>
                  <img
                    src={UnisysLogo}
                    alt="Unisys"
                    className="h-12 w-auto max-w-full object-contain mix-blend-multiply contrast-[1.1] xl:h-14"
                  />
                  <ExternalLink className="absolute right-2 top-2 h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-blue-500" />

                  {/* Light sweep on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
                  />
                </div>
              </motion.a>
            </motion.div>

            {/* Supporting sponsor */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://www.csir.res.in"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit CSIR India"
                animate={float(1.2)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 py-4 shadow-md transition-colors hover:border-blue-300"
              >
                <img
                  src={CSIRLogo}
                  alt="CSIR India"
                  className="h-16 w-auto object-contain xl:h-[4.5rem]"
                />
                <ExternalLink className="absolute right-2 top-2 h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-blue-500" />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-blue-100/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </aside>
  );
}
