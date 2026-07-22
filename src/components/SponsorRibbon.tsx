import UnisysLogo from "../public/unisys.jpeg";
import PlatinumBadge from "../public/platinum.jpeg";
import { ArrowRight } from "lucide-react";

export default function SponsorRibbon() {
  return (
    <div className="bg-white border-b border-slate-200 py-3 sm:py-4 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 text-sm">
        
        {/* Left Section: Logos and Label */}
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <span className="font-bold tracking-[0.15em] text-slate-400 uppercase text-[10px] sm:text-xs text-center sm:text-left">
              Platinum<br className="hidden sm:block" />Sponsor
            </span>
            <img
              src={PlatinumBadge}
              alt="Platinum Badge"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </div>

          <div className="h-10 w-px bg-slate-200 hidden sm:block" />

          <img
            src={UnisysLogo}
            alt="Unisys Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Right Section: Subtle Link */}
        <div className="hidden md:flex flex-col items-end gap-1">
          <span className="text-slate-500 text-xs sm:text-sm font-medium tracking-wide">
            Empowering NGISE 2026
          </span>
          <a
            href="https://www.unisys.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
          >
            Visit Unisys 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
}
