import { motion } from "framer-motion";
import { ExternalLink, Award, Sparkles } from "lucide-react";
import UnisysLogo from "../public/unisys.jpeg";
import PlatinumBadge from "../public/platinum.jpeg";

export default function PlatinumSponsor() {
  return (
    <section className="relative py-10 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 overflow-hidden text-white border-y border-slate-800">
      {/* Background Animated Glows & Shimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-400/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-slate-800/90 via-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden"
        >
          {/* Top Decorative Metallic Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-300 to-indigo-500" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content - Badge & Text */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Premier Conference Partner</span>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Platinum Sponsor
                </h2>
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-60 blur-sm group-hover:opacity-100 transition duration-300" />
                  <img
                    src={PlatinumBadge}
                    alt="Platinum Badge"
                    className="relative h-9 sm:h-11 w-auto object-contain rounded-lg border border-slate-600 bg-white p-1"
                  />
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                NGISE 2026 is proud to present <span className="text-white font-semibold underline decoration-blue-500 underline-offset-4">Unisys</span> as our official Platinum Sponsor, powering innovation and excellence in Information Systems Engineering.
              </p>
            </div>

            {/* Right Side - Logo Card & CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-5 shrink-0">
              {/* Unisys Logo Container with Glass & Glow */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
                className="relative group bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-200 flex items-center justify-center w-56 sm:w-64 h-28"
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-30 transition duration-300 blur-sm" />
                <img
                  src={UnisysLogo}
                  alt="Unisys Logo"
                  className="relative h-14 sm:h-16 w-auto object-contain max-w-full"
                />
              </motion.div>

              {/* Visit Link */}
              <motion.a
                href="https://www.unisys.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg hover:shadow-blue-500/25 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Visit Unisys</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
