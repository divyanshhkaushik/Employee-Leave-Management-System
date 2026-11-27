import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import Heading from '../components/Heading.jsx'
import Footer from '../components/Footer.jsx'

const LeaveForm = () => {
  const navigate = useNavigate()
  const [leaveType, setLeaveType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [partialLeave, setPartialLeave] = useState('no')
  const [partialPeriod, setPartialPeriod] = useState('Morning')
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const totalDays = useMemo(() => {
    if (!startDate || !endDate) return 0

    const start = new Date(`${startDate}T00:00:00`)
    const end = new Date(`${endDate}T00:00:00`)
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) return 0

    const calendarDays = Math.floor((end - start) / 86400000) + 1
    return partialLeave === 'yes' ? Math.max(calendarDays - 0.5, 0.5) : calendarDays
  }, [startDate, endDate, partialLeave])

  const clearForm = () => {
    setLeaveType('')
    setStartDate('')
    setEndDate('')
    setPartialLeave('no')
    setPartialPeriod('Morning')
    setComment('')
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'h-12 w-full rounded-xl border border-[#D9E1DC] bg-[#FBFCFA] px-4 text-sm text-[#263E32] outline-none transition placeholder:text-[#9DA9A2] focus:border-[#284F3E] focus:ring-4 focus:ring-[#284F3E]/10'

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF6]">
      <Heading />

      <main className="flex flex-1 justify-center px-5 py-8 sm:px-8 lg:py-12">
        <div className="w-full max-w-3xl">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#52665B] transition hover:text-[#284F3E]"
          >
            <ArrowLeft size={18} /> Back to dashboard
          </button>

          <form onSubmit={handleSubmit} className="rounded-[24px] border border-[#E4E9E5] bg-white px-6 py-8 shadow-[0_20px_60px_rgba(38,62,50,0.10)] sm:px-10">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#BA714B]">Leave request</p>
              <h1 className="mt-2 text-3xl font-bold text-[#263E32]">Apply for Leave</h1>
            </div>

            {submitted && (
              <p role="status" className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
                Leave request submitted successfully.
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="employeeName">Employee Name</label>
                <input id="employeeName" value="Divyansh Kaushik" readOnly className={`${inputClass} cursor-default bg-[#F2F5F2] text-[#52665B]`} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="employeeId">Employee ID</label>
                <input id="employeeId" value="EMP-1024" readOnly className={`${inputClass} cursor-default bg-[#F2F5F2] text-[#52665B]`} />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="leaveType">Leave Type</label>
                <select id="leaveType" value={leaveType} onChange={(event) => setLeaveType(event.target.value)} required className={inputClass}>
                  <option value="" disabled>Select a leave type</option>
                  <option>Casual Leave</option>
                  <option>Sick Leave</option>
                  <option>Earned Leave</option>
                  <option>Privilege Leave</option>
                  <option>Compensatory Off</option>
                  <option>Maternity/Paternity Leave</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="startDate">Start Date</label>
                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8B80]" size={18} />
                  <input id="startDate" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} required className={`${inputClass} pl-12`} />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="endDate">End Date</label>
                <div className="relative">
                  <CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8B80]" size={18} />
                  <input id="endDate" type="date" min={startDate || undefined} value={endDate} onChange={(event) => setEndDate(event.target.value)} required className={`${inputClass} pl-12`} />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="totalDays">Total Leave Days</label>
                <input id="totalDays" value={totalDays || ''} placeholder="0" readOnly className={`${inputClass} cursor-default bg-[#F2F5F2] font-bold text-[#284F3E]`} />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="partialLeave">Partial Leave</label>
                <select id="partialLeave" value={partialLeave} onChange={(event) => setPartialLeave(event.target.value)} className={inputClass}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {partialLeave === 'yes' && (
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="partialPeriod">Partial Leave Period</label>
                  <select id="partialPeriod" value={partialPeriod} onChange={(event) => setPartialPeriod(event.target.value)} className={inputClass}>
                    <option>Morning</option>
                    <option>Afternoon</option>
                  </select>
                </div>
              )}

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#263E32]" htmlFor="comment">Comment</label>
                <textarea id="comment" rows="4" value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Add a reason or any important details..." className="w-full resize-none rounded-xl border border-[#D9E1DC] bg-[#FBFCFA] px-4 py-3 text-sm text-[#263E32] outline-none transition placeholder:text-[#9DA9A2] focus:border-[#284F3E] focus:ring-4 focus:ring-[#284F3E]/10" />
              </div>
            </div>

            <div className="mt-6 border-t border-[#EDF1EE] pt-5">
              <p className="text-xs font-medium text-[#7A8B80]">Approver</p>
              <p className="mt-1 text-sm font-normal text-[#52665B]">Priya Sharma — Team Lead</p>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={clearForm} className="h-12 rounded-xl border border-[#C9D4CD] px-7 text-sm font-bold text-[#52665B] transition hover:border-[#284F3E] hover:bg-[#F4F7F2]">
                Clear
              </button>
              <button type="submit" className="h-12 rounded-xl bg-[#284F3E] px-8 text-sm font-bold text-white shadow-[0_10px_24px_rgba(40,79,62,0.18)] transition hover:bg-[#1F4032] focus:outline-none focus:ring-4 focus:ring-[#284F3E]/20">
                Submit Leave Request
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default LeaveForm
