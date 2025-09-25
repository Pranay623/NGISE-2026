import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "../public/main logo.png";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
// import IEEE from "../public/IEEE.png"; // if you decide to use again

export default function Navbar() {
  const location = useLocation();
  const [isSheetOpen,setIsSheetOpen]=useState(false)

  // Function to handle active link styling
  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1" // Active state
      : "text-gray-600 hover:text-blue-600 font-medium transition-colors";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: ["easeOut"] }}
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
            className="w-22 h-12"
          />

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/venue" className={linkClass("/venue")}>
              Venue
            </Link>
            <Link to="/call-for-papers" className={linkClass("/call-for-papers")}>
              Call for Papers
            </Link>
            <Link to="/speakers" className={linkClass("/speakers")}>
              Speakers
            </Link>
            <Link to="/committee" className={linkClass("/committee")}>
              Committee
            </Link>
            <Link to="/program" className={linkClass("/program")}>
              Program
            </Link>
            <Link to="/registrations" className={linkClass("/registrations")}>
              Registration
            </Link>
            <Link to="/locale" className={linkClass("/locale")}>
              Locale
            </Link>
            <Link to="/venue" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </div>

      <div className='lg:hidden mb-4'>
        <div className='flex items-center'>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
  <SheetTrigger asChild>
    <Button variant="outline" className="flex items-center gap-2 mt-2">
        <img src="https://ucarecdn.com/f601cf8c-0502-43aa-810b-72542ba282c3/-/preview/1000x1000/" className="w-5 h-5"/>
      



      
    </Button>
  </SheetTrigger>
  <SheetContent side="top" className="w-full overflow-y-auto">
    <SheetHeader>
 
      
    </SheetHeader>

    <div className='p-6 flex flex-col gap-y-5 text-center ' onClick={()=>setIsSheetOpen(false)}>
         <Link to="/" >
              Home
            </Link>
            <Link to="/venue" >
              Venue
            </Link>
            <Link to="/call-for-papers" >
              Call for Papers
            </Link>
            <Link to="/speakers" >
              Speakers
            </Link>
            <Link to="/committee" >
              Committee
            </Link>
            <Link to="/program" >
              Program
            </Link>
            <Link to="/registrations" >
              Registration
            </Link>
            <Link to="/locale" >
              Locale
            </Link>
            <Link to="/venue" >
              Contact Us
            </Link>
    </div>

  </SheetContent>
</Sheet>
        </div>
      </div>
          {/* Right Logo (optional) */}
          {/* <motion.img
            src={IEEE}
            alt="IEEE Logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-22 h-12"
          /> */}
        </div>
      </div>
    </motion.nav>
  );
}
