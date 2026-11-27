import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import logo from '../assets/elms-logo.svg'

const Footer = () => {
  return (
    <footer className="relative flex min-h-20 w-full flex-col items-center justify-center gap-3 border-t border-[#263E32]/10 bg-[#FAFAF6] px-5 py-4 sm:flex-row sm:justify-between sm:px-12">
      <div className="flex items-center">
        <img
          className="h-12 w-[120px] object-contain sm:h-14 sm:w-[140px]"
          src={logo}
          alt="ELMS"
        />
        <span className="ml-1 hidden text-sm font-light text-[#263E32] md:inline lg:text-base">
          Employee Leave Management System
        </span>
      </div>

      <p className="text-center text-xs text-[#52665B] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:text-sm">
        ©2026 ELMS. All rights reserved.
      </p>

      <a
        href="#top"
        className="flex items-center gap-1 text-sm font-medium text-[#263E32] hover:underline"
        aria-label="Back to top"
      >
        Back to top
        <ArrowUpRight size={18} />
      </a>
    </footer>
  )
}

export default Footer
