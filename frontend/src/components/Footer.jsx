import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import logo from '../assets/elms-logo.svg'

const Footer = () => {
  return (
    <footer className="relative flex h-20 w-full items-center justify-between bg-[#FAFAF6] px-5 sm:px-12">
      <div className="flex items-center">
        <img
          className="h-14 w-[140px] object-contain"
          src={logo}
          alt="ELMS"
        />
        <span className="ml-2 text-sm font-light text-[#263E32] sm:text-base">
          Employee Leave Management System
        </span>
      </div>

      <p className="absolute left-1/2 -translate-x-1/2 text-sm text-[#263E32]">
        ©2026 ELMS. All rights reserved.
      </p>

      <a
        href="#"
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
