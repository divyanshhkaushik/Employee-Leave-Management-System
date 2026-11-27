import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserPlus, Users } from 'lucide-react'
import Heading from '../components/Heading.jsx'
import Footer from '../components/Footer.jsx'
import dashboardLogo from '../assets/dashboard-logo.png'

const AdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <div id="top" className="flex min-h-screen flex-col bg-[#FAFAF6]">
      <Heading />

      <main className="flex flex-1 flex-col px-5 pt-6 pb-10 sm:px-12 lg:px-20 lg:pt-8">
        <section className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-3xl bg-[#FAFAF6] px-2 py-4 md:grid-cols-[1fr_1fr] lg:px-8">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#BA714B]">
              Admin Dashboard
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#263E32] sm:text-5xl lg:text-6xl">
              Welcome, Admin
            </h1>

            <p className="mt-5 max-w-md text-lg leading-8 text-[#52665B]">
              Manage your employees and keep leave operations running smoothly.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <img
              src={dashboardLogo}
              alt="Admin managing employees"
              className="h-auto w-full max-w-[620px] object-contain md:max-w-[680px]"
            />
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-5 px-2 pt-8 sm:grid-cols-2 lg:px-8">
          <button
            type="button"
            onClick={() => navigate('/admin/add-employee')}
            className="group flex min-h-36 items-center gap-5 rounded-2xl border border-[#E1E8E3] bg-white p-6 text-left shadow-[0_12px_35px_rgba(38,62,50,0.08)] transition hover:-translate-y-1 hover:border-[#284F3E]/30 hover:shadow-[0_18px_40px_rgba(38,62,50,0.12)]"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#284F3E] text-white">
              <UserPlus size={26} />
            </span>
            <span>
              <span className="block text-xl font-bold text-[#263E32]">Add Employee</span>
              <span className="mt-1 block text-sm text-[#718078]">Create a new employee account</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/admin/manage-employees')}
            className="group flex min-h-36 items-center gap-5 rounded-2xl border border-[#E1E8E3] bg-white p-6 text-left shadow-[0_12px_35px_rgba(38,62,50,0.08)] transition hover:-translate-y-1 hover:border-[#284F3E]/30 hover:shadow-[0_18px_40px_rgba(38,62,50,0.12)]"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#BA714B] text-white">
              <Users size={26} />
            </span>
            <span>
              <span className="block text-xl font-bold text-[#263E32]">Manage Employees</span>
              <span className="mt-1 block text-sm text-[#718078]">View and manage employee records</span>
            </span>
          </button>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AdminDashboard
