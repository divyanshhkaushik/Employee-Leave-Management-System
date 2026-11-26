import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import landingImg from '../assets/landing-page-img.svg'
import elmsLogo from '../assets/elms-logo.svg'
import dashboardLogo from '../assets/dashboard-logo.png'
import Heading from '../components/Heading.jsx'
import Footer from '../components/Footer.jsx'
import EmployeeDashboardsCard from '../components/LeaveSnapshotCards.jsx'
import LeaveRequestCard from '../components/LeaveRequestCard.jsx'
import LeaveCalendar from '../components/LeaveCalender.jsx'
import HolidayCard from '../components/HolidayCard.jsx'

const EmployeeDashboard = () => {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-[#FAFAF6]">
      <Heading />

      <main className="flex flex-1 px-5 pt-6 pb-10 sm:px-12 lg:px-20 lg:pt-8">
        <section className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-3xl bg-[#FAFAF6] px-2 py-4 md:grid-cols-[1fr_1fr] lg:px-8">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#BA714B]">
              Employee Dashboard
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#263E32] sm:text-5xl lg:text-6xl">
              Welcome, Divyansh
            </h1>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#52665B]">
              A little space for your plans.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <img
              src={dashboardLogo}
              alt="Employee planning leaves"
              className="h-auto w-full max-w-[620px] object-contain md:max-w-[680px]"
            />
          </div>
        </section>
      </main>

      <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-12 lg:px-20">
        <button
          type="button"
          className="h-12 rounded-lg bg-[#284F3E] px-6 text-sm font-bold text-white shadow-[0_8px_20px_rgba(40,79,62,0.16)] transition-colors hover:bg-[#1F4032] focus:outline-none focus:ring-4 focus:ring-[#284F3E]/20"
        >
          Apply for Leave
        </button>
      </div>

      <EmployeeDashboardsCard />

      <LeaveRequestCard />

      <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-12 lg:px-20">
        <div className="grid gap-35 lg:grid-cols-2">
            <LeaveCalendar />

            <HolidayCard />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default EmployeeDashboard
