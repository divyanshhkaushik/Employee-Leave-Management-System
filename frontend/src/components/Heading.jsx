import React from 'react'
import logo from '../assets/elms-logo.svg'

const Heading = () => {
  return (
    <header className="relative flex h-20 w-full items-center justify-between bg-[#FAFAF6] px-5 sm:px-12">
      <img
        className="block h-16 w-[140px] object-contain sm:w-[180px]"
        src={logo}
        alt="ELMS"
      />

      <h1 className="absolute left-1/2 -translate-x-1/2 text-center text-lg font-bold text-[#263E32] sm:text-2xl">
        Employee Leave Management System
      </h1>

      <button
        className="h-11 min-w-[82px] shrink-0 rounded-lg border border-[#284F3E] bg-[#284F3E] text-base font-semibold text-white cursor-pointer hover:bg-[#1F4032] sm:min-w-24"
        type="button"
      >
        Login
      </button>
    </header>
  )
}

export default Heading
